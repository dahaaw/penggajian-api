const moment = require('moment');
const { Op } = require('sequelize');
const {karyawan} = require('../../models');
const strpad = require('../strpad');

module.exports = async () => {
    const code = `MAL${moment().format('YYMM')}`;
    const last = await karyawan.findOne({
        where: {
            nip: {
                [Op.like]: `${code}%`
            }
        },
        order: [['id','desc']]
    });

    if(!last) return `${code}00001`;
    
    const lastNumb = Number(last.nip.replace(code, ''));
    return code + strpad(lastNumb+1);
}