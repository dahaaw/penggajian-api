const { reSuccess, resFail, resError } = require('../../helper/response');
const {
    karyawan,
    lembur
} = require('../../models');

exports.add = async (req, res) => {
    const {karyawan_id, tanggal_lembur, jumlah} = req.body;
    
    const exist = await karyawan.findByPk(karyawan_id);
    if(!exist) return resFail(res, 'invalid karyawan id');

    lembur.create(req.body)
    .then(d => reSuccess(res, 'data inserted'))
    .catch(e => resError(res, e));
}

exports.get = (req, res) => {
    let where = {};
    let {karyawan_id} = req.query;
    if(karyawan_id) where.karyawan_id = karyawan_id;

    lembur.findAll({where, order: [['id', 'desc']]})
    .then(d => reSuccess(res, d))
    .catch(e => resError(res, e));
}

exports.getOne = (req, res) => {
    lembur.findByPk(req.params.id)
    .then(d => {
        if(!d?.id) return resFail(res, 'no data found');
        reSuccess(res, d)
    })
    .catch(e => resError(res, e));
}

exports.update = async (req, res) => {
    const {id} = req.params;
    
    const {tanggal_lembur, jumlah} = req.body;

    const exist = await lembur.findByPk(id);
    if(!exist) return resFail(res, 'invalid id');   

    lembur.update(req.body, {where: {id}})
    .then(d => reSuccess(res, 'data updated'))
    .catch(e => resError(res, e));
}

exports.deletee = async (req, res) => {
    const {id} = req.params;

    const exist = await lembur.findByPk(id);
    if(!exist) return resFail(res, 'data not found');

    lembur.destroy({where: {id}})
    .then(d => reSuccess(res, 'data deleted'))
    .catch(e => resError(res, e))
}
