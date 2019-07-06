/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dwatoisencaoitemmatprimaweb', {
    iddwatoisencaocapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'dwatoisencaocapa',
        key: 'iddwatoisencaocapa'
      }
    },
    iddwatoisencaoitemmatprima: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iddwatoisencaoitemmatprimaweb: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    qtde: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmledolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    descricao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlrimportado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    qtdeimportado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrsaldoimportar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    qtdesaldoimportar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    percimportado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    qtdetotalnf: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrtotalnf: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    percvalorimportado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    percqtdeimportada: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nritemdrawbackweb: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dtvinculacaodi: {
      type: DataTypes.DATE,
      allowNull: true
    },
    qtdetotalimportar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    perccomprovado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrprevistoimportar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    qtdeprevistoimportar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrsaldoprevistoimportar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    qtdesaldoprevistoimportar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    percpreistoimportado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    percprevistocomprovado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    aliquotaii: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    aliquotaipi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    aliquotapis: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    aliquotacofins: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    aliquotaicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlii: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlipi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpis: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcofins: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotaliiefetivo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalipiefetivo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalpisefetivo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalcofinsefetivo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalicmsefetivo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlafrmm: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tpprocedencia: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlfreteestimadodolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfreteestimadoreais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlseguroestimadodolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlseguroestimadoreais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vladuaneiroestimadodolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vladuaneiroestimadoreais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmlereais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlaliqreduzidaii: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpercreducaoaliqii: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlaliqreduzidaipi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpercreducaoaliqipi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlaliqreduzidapis: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlaliqreduzidacofins: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlaliqreduzidaicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlaliqreducaoicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltxsiscomex: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    sncalcularafrmm: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vliidevido: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlipidevido: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpisdevido: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcofinsdevido: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'dwatoisencaoitemmatprimaweb'
  });
};
