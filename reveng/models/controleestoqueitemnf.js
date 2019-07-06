/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('controleestoqueitemnf', {
    idcontroleestoque: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'controleestoque',
        key: 'idcontroleestoque'
      }
    },
    idcontroleestoqueitemnf: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idpessoaunidadenegocio: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    cdreferenciaprocesso: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idnaturezaoperacao: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'naturezaoperacao',
        key: 'idnaturezaoperacao'
      }
    },
    idpessoaremetentedestinatario: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    vlqtdmercadoria: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlunitariomcvmoeda: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlunitariomlemoeda: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlunitarioreais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalreais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cdexportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmexportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cnpjexportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cpfexportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ieexportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    endexportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    complendexportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrexportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    bairroexportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cepexportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cidadeexportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    foneexportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ufexportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ufsiglaexportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdpaisexportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmpaisexportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idpessoafabricante: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    vlbasecalculopiscofins: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    aliquotareducaopiscofins: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    aliquotapis: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpisrecolhido: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    aliquotacofins: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcofinsrecolhido: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    aliquotaicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    aliquotareducaoicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlbasenormalicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlbasereduzidaicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlicmsrecolhido: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmultaicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlacrescimosreais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldeducoesreais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldespesasacessorias: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldespesasaduaneiras: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltaxasiscomex: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmulta: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcifreais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlaliquotalucrosaida: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    aliquotamva: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlaliquotaicmsbasesaida: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    aliquotasubstributaria: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlbasesubstributaria: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlsubstributaria: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlbasecalculoipi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    aliquotanormalipi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    aliquotareducaoipi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    aliquotaacordoipi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlipidevido: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlipiacordo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlipirecolher: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlantidumping: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesoliquido: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesobruto: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nrnotafiscal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtemissaonota: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'controleestoqueitemnf'
  });
};
