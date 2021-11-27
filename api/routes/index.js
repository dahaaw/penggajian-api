const admin = require('./admin');
const auth = require('./auth');
const golongan = require('./gologan');
const karyawan = require('./karywan');

module.exports = (app) => {
    app.use('/admin', admin);
    app.use('/auth', auth);
    app.use('/golongan', golongan);
    app.use('/karyawan', karyawan);
}