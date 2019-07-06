/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('demonstrativofinancgvw', {
    iddemonstrativofinancgvw: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cdcontafinanceiro: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmcontafinanceiro: {
      type: DataTypes.STRING,
      allowNull: true
    },
    datageracao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    honorarioprocesso: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    sdaprocesso: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrtotalsaldobancos: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrcreditoagenciamento: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlradiantamentocliente: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrtotalgvw: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrprovisaofrete: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrsaldoareceber: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrsaldoadevolver: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrhonorarioprovisao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrprovisaosda: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrsaldo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    qtdeprocessoabertos: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    vlcreditonaoidentificado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vrpagadm: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vrhonorprovanterior: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vrvariacaohonsdaprov: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vrprovisaosdaanterior: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vrsaldoprev: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    dtvariacao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtpagamentoini: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtpagamentofim: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtcrednidentini: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtcrednidentfim: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'demonstrativofinancgvw'
  });
};
