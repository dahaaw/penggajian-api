const admin = require('./admin');
const auth = require('./auth');
const golongan = require('./gologan');
const karyawan = require('./karywan');
const cuti = require('./cuti');
const lembur = require('./lembur');
const penggajian = require('./panggajian');

module.exports = (app) => {
    app.use('/admin', admin);
    app.use('/auth', auth);
    app.use('/golongan', golongan);
    app.use('/karyawan', karyawan);
    app.use('/cuti', cuti);
    app.use('/lembur', lembur);
    app.use('/penggajian', penggajian);
}