const { admin } = require('../../models');
const { resFail, reSuccess } = require('../../helper/response');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
    let {username, password} = req.body;
    if(!username) return resFail(res, 'username is required');
    if(!password) return resFail(res, 'password is required');

    const user = await admin.findOne({where: {username}});
    if(!(user && await bcrypt.compare(password, user.password))) return resFail(res, 'invalid username or password');

    // generate jwt toen
    const token = jwt.sign({
        id: user.id,
        role: 'admin'
    },
    process.env.KEY,
    { 
        expiresIn: '2m'
    });

    res.cookie('token', token);
    reSuccess(res, {token});
}