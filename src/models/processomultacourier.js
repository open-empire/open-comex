/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('processomultacourier', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'processo',
        key: 'idprocesso'
      }
    },
    idprocessomultacourier: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    vlmulta: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nrautenticacaobancaria: {
      type: DataTypes.STRING,
      allowNull: true
    },
    codmulta: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtpagamento: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'processomultacourier'
  });
};
