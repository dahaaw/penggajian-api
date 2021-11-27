const bcrypt = require('bcryptjs');
const {admin} = require('../../models');
const {resFail, reSuccess, resError} = require('../../helper/response');

exports.add = async (req, res) => {
    let {username, password, name} = req.body;
    if(!username) return resFail(res, 'username is required');
    if(!password) return resFail(res, 'password is required');
    if(!name) return resFail(res, 'name is required');

    const user = await admin.findOne({where: {username}});
    if(user) return resFail(res, 'user already exist');

    password = await bcrypt.hash(password, 10);

    admin.create({ username, password, name })
    .then(d => reSuccess(res, 'user crated'))
    .catch(e => resError(res, e));
}