/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('boleto', {
    idboleto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nrcodbarra: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtvencimento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    nrboleto: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtprocessamento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    vlboleto: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idunidade: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    linhadigitavel: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nossonumero: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'boleto'
  });
};
