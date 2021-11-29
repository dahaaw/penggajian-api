const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lembur', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    karyawan_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'karyawan',
        key: 'id'
      }
    },
    tanggal_lembur: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    jumlah: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'lembur',
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
