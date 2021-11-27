const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('golongan', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nama_golongan: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    gaji_pokok: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    tunjangan_istri: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    tunjangan_anak: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    tunjangan_transport: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    tunjangan_makan: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'golongan',
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
    ]
  });
};
