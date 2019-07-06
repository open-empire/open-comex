/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('demonstrativofinanceiro', {
    iddemonstrativofinanceiro: {
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
    idusuariolanc: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    vlrdesembaracodiario: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrdesembaracoacumulado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrtransportectrcdiario: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrtransportectrcacumulado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlragenciamentodiario: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlragenciamentoacumulado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlroutrodiario: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlroutroacumulado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrtotaldiario: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrtotalacumulado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrreceitadiario: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrreceitacumulado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrdespesadiario: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrdespesaacumulado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrresultadodiario: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrresultadoacumulado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrbancoliquidez: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlraplicacoesliquidez: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrclienteliquidez: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrsdapendenteperiodo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrtotliquidezimediata: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrcobrancaclienteliquidez: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrtotliquidezimediatafinal: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrsaldoclianterior: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrsaldoclientrada: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrsaldoclisaida: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrsaldocliprocfat: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrsaldocliatual: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrcobrclisaldoanterior: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrcobrclisaldodevprocfat: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrcobrclirecebidonadata: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrcobrclijurmuldescnadata: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrcobrancacliatual: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrtotalbancosaldoanterior: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrtotalbancoentradas: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrtotalbancosaidas: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrtotalbancosaldoatual: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrtotliquidezmediata: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'demonstrativofinanceiro'
  });
};
