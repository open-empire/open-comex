/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dadosgrid90483', {
    iddadosgrid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    keypequisa: {
      type: DataTypes.STRING,
      allowNull: true
    },
    data: {
      type: DataTypes.DATE,
      allowNull: true
    },
    datastr: {
      type: DataTypes.STRING,
      allowNull: true
    },
    documento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fornecedor: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cliente: {
      type: DataTypes.STRING,
      allowNull: true
    },
    entradas: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    saidas: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    saldo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'dadosgrid90483'
  });
};
