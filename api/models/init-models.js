var DataTypes = require("sequelize").DataTypes;
var _admin = require("./admin");
var _cuti = require("./cuti");
var _golongan = require("./golongan");
var _karyawan = require("./karyawan");
var _lembur = require("./lembur");
var _penggajian = require("./penggajian");

function initModels(sequelize) {
  var admin = _admin(sequelize, DataTypes);
  var cuti = _cuti(sequelize, DataTypes);
  var golongan = _golongan(sequelize, DataTypes);
  var karyawan = _karyawan(sequelize, DataTypes);
  var lembur = _lembur(sequelize, DataTypes);
  var penggajian = _penggajian(sequelize, DataTypes);

  karyawan.belongsTo(golongan, { as: "golongan", foreignKey: "golongan_id"});
  golongan.hasMany(karyawan, { as: "karyawans", foreignKey: "golongan_id"});
  cuti.belongsTo(karyawan, { as: "id_karyawan", foreignKey: "id"});
  karyawan.hasOne(cuti, { as: "cuti", foreignKey: "id"});
  lembur.belongsTo(karyawan, { as: "id_karyawan", foreignKey: "id"});
  karyawan.hasOne(lembur, { as: "lembur", foreignKey: "id"});
  penggajian.belongsTo(karyawan, { as: "id_karyawan", foreignKey: "id"});
  karyawan.hasOne(penggajian, { as: "penggajian", foreignKey: "id"});

  return {
    admin,
    cuti,
    golongan,
    karyawan,
    lembur,
    penggajian,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
