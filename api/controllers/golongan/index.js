const { reSuccess, resFail, resError } = require('../../helper/response');
const {golongan} = require('../../models');

exports.add = async (req, res) => {
    golongan.create(req.body)
    .then(d => reSuccess(res, 'data inserted'))
    .catch(e => resError(res, e));
}

exports.get = async (req, res) => {
    golongan.findAll()
    .then(d => reSuccess(res, d))
    .catch(e => resError(res, e));
}