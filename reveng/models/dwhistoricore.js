/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dwhistoricore', {
    iddwhistoricore: {
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
    cnpjcpf: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmexportador: {
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
    nmncm: {
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
    nratoconcessorio: {
      type: DataTypes.STRING,
      allowNull: true
    },
    numeroprocesso: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sistema: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtrecuperacao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    observacaoexportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    percentualcomissao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalcomissao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nritemato: {
      type: DataTypes.STRING,
      allowNull: true
    },
    qtdato: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcobato: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlsemcobato: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nmimportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    enderecoimportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    paisimportador: {
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
    nrdespacho: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlatotreminalfabricante: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    snvinculada: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdincoterm: {
      type: DataTypes.STRING,
      allowNull: true
    },
    urfdespacho: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtdespacho: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtaverbacao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    cnpjac: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ncmac: {
      type: DataTypes.STRING,
      allowNull: true
    },
    modalidaeac: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tipoac: {
      type: DataTypes.STRING,
      allowNull: true
    },
    urfembarque: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snreduplicado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    origemduplicacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtlimite: {
      type: DataTypes.DATE,
      allowNull: true
    },
    margemnaosacada: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    paisdestinofinal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    instrumentonegociacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlcomcoberturacambial: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlsemcoberturacambial: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    dtvalidadere: {
      type: DataTypes.DATE,
      allowNull: true
    },
    prazopagamentodias: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    categoriacota: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'dwhistoricore'
  });
};
