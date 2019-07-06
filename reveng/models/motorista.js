/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('motorista', {
    idmotorista: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nmmotorista: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdmotorista: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cpf: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ddd: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fone: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cnh: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtvencimentocnh: {
      type: DataTypes.DATE,
      allowNull: true
    },
    snativo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'motorista'
  });
};
