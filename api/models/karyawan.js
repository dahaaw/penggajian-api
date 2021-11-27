const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('karyawan', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nip: {
      type: DataTypes.STRING(12),
      allowNull: false
    },
    nik: {
      type: DataTypes.STRING(12),
      allowNull: false
    },
    nama: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    jenis_kelamin: {
      type: DataTypes.ENUM('pria','wanita'),
      allowNull: false
    },
    tempat_lahir: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    tanggal_lahir: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    telpon: {
      type: DataTypes.STRING(12),
      allowNull: false
    },
    agama: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    status_nikah: {
      type: DataTypes.ENUM('belum nikah','nikah'),
      allowNull: false
    },
    alamat: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    golongan_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'golongan',
        key: 'id'
      }
    },
    foto: {
      type: DataTypes.STRING(150),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'karyawan',
    timestamps: true,
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
        name: "golongan_id",
        using: "BTREE",
        fields: [
          { name: "golongan_id" },
        ]
      },
    ]
  });
};
