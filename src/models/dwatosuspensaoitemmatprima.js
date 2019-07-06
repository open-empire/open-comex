/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dwatosuspensaoitemmatprima', {
    iddwatosuspensaocapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'dwatosuspensaocapa',
        key: 'iddwatosuspensaocapa'
      }
    },
    iddwatosuspensaoitemmatprima: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idmercadoria: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'mercadoria',
        key: 'idmercadoria'
      }
    },
    idncm: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ncm',
        key: 'idncm'
      }
    },
    vlmledolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    qtde: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    descricao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpcoberturacambial: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tppossuisubprodresiduo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlrtotalimportardolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    qtdetotalimportar: {
      type: DataTypes.DOUBLE,
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
    qtdetotalnf: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrtotalnf: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nritemdrawbackweb: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tpprocedencia: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sntransmitir: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sntransmitido: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dttransmissao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    vlunitariodolar: {
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
    nrretificao: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sncancelado: {
      type: DataTypes.STRING,
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
    vlpesoliquido: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlqtdeconsumida: {
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
    dtvinculacaodi: {
      type: DataTypes.DATE,
      allowNull: true
    },
    qtdecomercializada: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    qtdeimportadocom: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrsaldoprevistoimportarcom: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    percqtdeimportadacom: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlafrmm: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    snpossuiretificacaodevalor: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nritemdrawbackweborigemretif: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idfamiliaequivalencia: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'familiaequivalencia',
        key: 'idfamiliaequivalencia'
      }
    },
    vldolarsubprodutoresiduo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    percsubprodutoresiduo: {
      type: DataTypes.DOUBLE,
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
    tableName: 'dwatosuspensaoitemmatprima'
  });
};
