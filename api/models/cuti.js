const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cuti', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'karyawan',
        key: 'id'
      }
    },
    karyawan_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    tanggal_cuti: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    jumlah: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'cuti',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "karyawan_id",
        using: "BTREE",
        fields: [
          { name: "karyawan_id" },
        ]
      },
    ]
  });
};
