/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dwatosuspensaoitemexpre', {
    iddwatosuspensaocapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'dwatosuspensaoitemexp',
        key: 'iddwatosuspensaocapa'
      }
    },
    iddwatosuspensaoitemexp: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iddwatosuspensaoitemexpre: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nrregistrore: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtregistrore: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtembarque: {
      type: DataTypes.DATE,
      allowNull: true
    },
    situacaore: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdmoeda: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmmoeda: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdncm: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdnaladi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmdescricaomercadoria: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlpesoliquido: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    unidademedidapesoliq: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlqtde: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    unidadecomercializada: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlqtdeestatistica: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    unidademedidancm: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vltotalmcv: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalmle: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalmledolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cdenquadramento1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdenquadramento2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdenquadramento3: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdenquadramento4: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tipovinculo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtcotacaoutilizada: {
      type: DataTypes.DATE,
      allowNull: true
    },
    vltxcotacaoutilizada: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    usou: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vltotalcomissao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalcomissaodolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    siglamoeda: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nritem: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmdescricaomercadoriaitem: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlpesoliquidoitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlqtdeitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlqtdeestatisticaitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalmcvitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalmleitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    snrecuperacaonova: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nritemato: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlqtdeconsumida: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    urfdespacho: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlfatorqtdecomercial: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfatorqtdeestatistica: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfatorconversao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlqtdeestatisticaconversao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    referenciacliente: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vltotalmleitemdolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cdunidadecomercializada: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdunidademedidancm: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snmanipuladaviaplanilha: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'dwatosuspensaoitemexpre'
  });
};
