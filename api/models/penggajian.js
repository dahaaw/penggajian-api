const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('penggajian', {
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
    tanggal: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    keterangan: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    karyawan_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    jumlah_gaji: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    jumlah_lembur: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    potongan: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    total_gaji_diterima: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'penggajian',
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
