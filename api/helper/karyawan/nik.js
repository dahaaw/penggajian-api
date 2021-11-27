const {karyawan} = require('../../models');
const strpad = require('../strpad');

module.exports = async () => {
    const last = await karyawan.findOne({order: [['id', 'desc']]});
    if(!last) return 'K00001';

    lastNumb = Number(last.nik.replace('K',''));
    
    return `K${strpad(lastNumb+1)}`;
}