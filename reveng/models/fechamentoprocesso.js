/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fechamentoprocesso', {
    idfechamentoprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dtfechamentoprocesso: {
      type: DataTypes.DATE,
      allowNull: true
    },
    nmcliente: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmexportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmproduto: {
      type: DataTypes.STRING,
      allowNull: true
    },
    localentrada: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrenvelope: {
      type: DataTypes.STRING,
      allowNull: true
    },
    referenciacliente: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vltaxacambial: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcomprasfobdolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlthcdolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfretedolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalcifdolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcomprasfobreais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlthcreais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfretereais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalcifreais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlimpostoimportacao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlipientrada: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpisentrada: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcofinsentrada: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlipisaida: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlicmssaida: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalimpostossaida: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlnotafiscalsaida: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlnotadebito: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalnotafiscalsaida: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldescontofinanceiro: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalimportacao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'fechamentoprocesso'
  });
};
