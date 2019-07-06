/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rankingfaturamento', {
    idrankingfaturamento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idrankingfaturamentoseq: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cdcliente: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmcliente: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdunidadeoperacional: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmunidadeoperacional: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdtipoproduto: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmtipoproduto: {
      type: DataTypes.STRING,
      allowNull: true
    },
    periodoinicial: {
      type: DataTypes.DATE,
      allowNull: true
    },
    periodofinal: {
      type: DataTypes.DATE,
      allowNull: true
    },
    idusuariolanc: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    vltotalfaturamento: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    strtotalfaturamento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrrankingfaturamento: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cdgrupocliente: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmgrupocliente: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlreceita01: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlreceita02: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlreceita03: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlreceita04: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlreceita05: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlreceita06: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlreceita07: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlreceita08: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlreceita09: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlreceita10: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nrprocesso: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vltotalporcentagem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    qtdeprocesso: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    vltotaliss: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalirrf: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalpis: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalcofins: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalcsll: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalin: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nmitemreceita01: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmitemreceita02: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmitemreceita03: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmitemreceita04: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmitemreceita05: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmitemreceita06: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmitemreceita07: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmitemreceita08: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmitemreceita09: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmitemreceita10: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tiposervico: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'rankingfaturamento'
  });
};
