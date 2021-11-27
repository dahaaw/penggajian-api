const { reSuccess, resFail, resError } = require('../../helper/response');
const {karyawan} = require('../../models');
const nip = require('../../helper/karyawan/nip');
const nik = require('../../helper/karyawan/nik');

const jenKel = ['pria', 'wanita'];
const nikah = ['belum nikah', 'nikah'];

exports.add = async (req, res) => {
    const {nama, jenis_kelamin, tempat_lahir, tangal_lahir, telpon, agama, status_nikah, alamat, golongan_id, foto} = req.body;
    
    if(!jenKel.includes(jenis_kelamin)) return resFail(res, 'invalid jenis_kelamin');
    if(!nikah.includes(status_nikah)) return resFail(res, 'invalid status_nikah');

    req.body.nip = await nip();
    req.body.nik = await nik();
    req.body.foto = 'oto';

    karyawan.create(req.body)
    .then(d => reSuccess(res, 'data inserted'))
    .catch(e => resError(res, e));
}

exports.get = (req, res) => {
    karyawan.findAll()
    .then(d => reSuccess(res, d))
    .catch(e => resError(res, e));
}

exports.getOne = (req, res) => {
    karyawan.findByPk(req.params.id)
    .then(d => {
        if(!d?.id) return resFail(res, 'no data found');
        reSuccess(res, d)
    })
    .catch(e => resError(res, e));
}

exports.update = (req, res) => {
    const {id} = req.params;

    const {jenis_kelamin, status_nikah} = req.body;

    if(jenis_kelamin && !jenKel.includes(jenis_kelamin)) return resFail(res, 'invalid jenis_kelamin');
    if(status_nikah && !nikah.includes(status_nikah)) return resFail(res, 'invalid status_nikah');
    
    const exist = karyawan.findByPk(id);
    if(!exist) return resFail(res, 'invalid id');
    
    karyawan.update(req.body, {where: {id}})
    .then(d => reSuccess(res, 'data updated'))
    .catch(e => resError(res, e));
}

