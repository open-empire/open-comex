/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cotacaofornecedor', {
    idcotacao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idcotacaofornecedor: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idfornecedor: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    nmcontatofornecedor: {
      type: DataTypes.STRING,
      allowNull: true
    },
    emailcontatofornecedor: {
      type: DataTypes.STRING,
      allowNull: true
    },
    telefonecontatoforncedor: {
      type: DataTypes.STRING,
      allowNull: true
    },
    faxcontatoforncedor: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpservicocotacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mmobservacaofornecedor: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'cotacaofornecedor'
  });
};
