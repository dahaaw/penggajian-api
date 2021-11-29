const moment = require('moment');
const sequelize = require('sequelize');
const {
    karyawan,
    golongan,
    lembur,
    cuti,
    penggajian
} = require('../../models');
const {resFail, reSuccess} = require('../../helper/response');
const { Op } = require('sequelize');

exports.add = async (req, res) => {
    const perCuti = 100000;
    const perLembur = 30000;

    const {karyawan_id, tanggal} = req.body;
    if(!karyawan_id) return resFail(res, 'karyawan_id is required');
    if(!tanggal) return resFail(res, 'tanggal is required');

    const dKaryawan = await karyawan.findByPk(karyawan_id);
    if(!dKaryawan) return resFail(res, 'invalid karyawan_id');

    const dGolongan = await golongan.findByPk(dKaryawan.golongan_id);
    const jumlah_gaji = dGolongan.gaji_pokok + dGolongan.tunjangan_istri + dGolongan.tunjangan_anak + dGolongan.tunjangan_transport + dGolongan.tunjangan_makan; 

    const startDate = moment(tanggal).startOf('month').format('YYYY-MM-DD');
    const endDate = moment(tanggal).endOf('month').format('YYYY-MM-DD');

    const dLembur = await lembur.findAll({
        attributes: [
            'karyawan_id',
            [sequelize.fn('sum', sequelize.col('jumlah')), 'total_lembur']
        ],
        where: {
            karyawan_id,
            tanggal_lembur: {[Op.between]: [startDate, endDate]}
        },
        group: ['karyawan_id'],
        raw: true
    });

    const dCuti = await cuti.findAll({
        attributes: [
            'karyawan_id',
            [sequelize.fn('sum', sequelize.col('jumlah')), 'total_cuti']
        ],
        where: {
            karyawan_id,
            tanggal_cuti: {[Op.between]: [startDate, endDate]}
        },
        group: ['karyawan_id'],
        raw: true
    });

    const jumlah_lembur = parseInt(dLembur?.[0]?.total_lembur || 0) * perLembur;
    const potongan = parseInt(dCuti?.[0]?.total_cuti || 0) * perCuti;
    const total_gaji_diterima = jumlah_gaji + jumlah_lembur - potongan;

    const dataPenggajian = {
        tanggal,
        karyawan_id,
        jumlah_gaji,
        jumlah_lembur,
        potongan,
        total_gaji_diterima
    }

    const exist = await penggajian.findOne({where: {
        karyawan_id,
        tanggal: {[Op.between]: [startDate, endDate]}
    }});

    let func;
    if(!exist) func = penggajian.create(dataPenggajian);
    if(exist) func = penggajian.update(dataPenggajian, {where: {
        karyawan_id,
        tanggal: {[Op.between]: [startDate, endDate]}
    }});

    func
    .then(d => reSuccess(res, 'success'))
    .catch(e => resFail(res, e))
}

exports.get = async (req, res) => {
    let where = {};
    const {karyawan_id, golongan} = req.query;
    if(karyawan_id) where.karyawan_id = karyawan_id;
    if(golongan) where.golongan = golongan;

    penggajian.findAll({
        where,
        order: [['id', 'desc']]
    })
    .then(d => reSuccess(res, d))
    .catch(e => resFail(res, e));
}