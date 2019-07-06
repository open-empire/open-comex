/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cotacaotradeexportacaocapa', {
    idcotacaotradeexportacaocapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nrcotacaotradeexportacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrgrupocotacaotradeexportacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtabertura: {
      type: DataTypes.DATE,
      allowNull: true
    },
    idpessoaunidadeoperacional: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    idpessoafornecedor: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    dtprevisaoentrega: {
      type: DataTypes.DATE,
      allowNull: true
    },
    statuscotacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vltotalmercadoria: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotaldespesas: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalcotacao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    observacao: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'cotacaotradeexportacaocapa'
  });
};
