/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mercadoria', {
    idmercadoria: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cdmercadoria: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdmercadoriasecundario: {
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
    apmercadoria: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idpessoaexportador: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    idpessoaimportador: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    idpaisaquisicao: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pais',
        key: 'idpais'
      }
    },
    idpaisorigem: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pais',
        key: 'idpais'
      }
    },
    idufprodutor: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'uf',
        key: 'iduf'
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
    idmercadoriafamilia: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'mercadoriafamilia',
        key: 'idmercadoriafamilia'
      }
    },
    idunidademedidacompra: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'unidademedida',
        key: 'idunidademedida'
      }
    },
    idmercadoriacodigoonu: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'mercadoriacodigoonu',
        key: 'idmercadoriacodigoonu'
      }
    },
    idunidademedidapeso: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'unidademedida',
        key: 'idunidademedida'
      }
    },
    mmdescricaoingles: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mmdescricaoespanhol: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mmdescricaoportugues: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mmdescricaonotafiscal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snrecolhimentointegral: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlunitario: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    categoriatextil: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snnecessitali: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cddestaquencm: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlpesobrutounitario: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesoliquidounitario: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idnaladi: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'naladi',
        key: 'idnaladi'
      }
    },
    tpmercadoria: {
      type: DataTypes.STRING,
      allowNull: true
    },
    qtdediascicloproducao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    qtdeestoque: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcustoimportacao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    mmobservacoes: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpfabricanteexportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mmdescricaocertificado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idgrupocliente: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'grupocliente',
        key: 'idgrupocliente'
      }
    },
    snativo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idnaladincca: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'naladincca',
        key: 'idnaladincca'
      }
    },
    mmintegracao: {
      type: "OID",
      allowNull: true
    },
    qtdeestoqueinicial: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    dtentradaestoque: {
      type: DataTypes.DATE,
      allowNull: true
    },
    codigogtin: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtvencregistro: {
      type: DataTypes.DATE,
      allowNull: true
    },
    regitrominsaude: {
      type: DataTypes.STRING,
      allowNull: true
    },
    quebraauxiliar: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cddestaquencmexp: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpfinalidademercadoria: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idexportadorexportacao: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    idimportadorexportacao: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    idpessoafabricanteexportacao: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    vlcubagem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    sncertificadoorigem: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idmoeda: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'moeda',
        key: 'idmoeda'
      }
    },
    vlunitariodolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    concentracao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    densidade: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    numeroregistroanvisa: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtregistroanvisa: {
      type: DataTypes.DATE,
      allowNull: true
    },
    idarea: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'area',
        key: 'idarea'
      }
    },
    mmcompldescricaoportugues: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mmcompldescricaoportugues1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mmcompldescricaoportugues2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    estagiofabricacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    temperatura: {
      type: DataTypes.STRING,
      allowNull: true
    },
    umidade: {
      type: DataTypes.STRING,
      allowNull: true
    },
    luminosidade: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idembalagemprimaria: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'especiesvolumes',
        key: 'idespeciesvolumes'
      }
    },
    idembalagemsecundaria: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'especiesvolumes',
        key: 'idespeciesvolumes'
      }
    },
    formafisica: {
      type: DataTypes.STRING,
      allowNull: true
    },
    codigogtinunid: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpaplicacaomercadoria: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idunidmedidaipi: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'unidademedida',
        key: 'idunidademedida'
      }
    },
    idrecipiente: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'recipiente',
        key: 'idrecipiente'
      }
    },
    vlunidmedidaipi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlqtdeunidmedidaipi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcapacidaderecipiente: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idembalagem: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'embalagem',
        key: 'idembalagem'
      }
    },
    qtdeembalagem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    gramatura: {
      type: DataTypes.STRING,
      allowNull: true
    },
    formatotamanho: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idpessoacomprador: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    tporigemmercadoria: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cstipi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fatorqtdeestatistica: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    fatorqtdecomercializada: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    mmdescricaodrawback: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlaliqicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlaliqreducaoicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idprodutosuframa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'produtosuframa',
        key: 'idproduto'
      }
    },
    iddestaquesuframa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'produtosuframa',
        key: 'idproduto'
      }
    },
    txdescricaodestaquesuframa: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idsuframacodtributacao: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'direitofiscal',
        key: 'iddireitofiscal'
      }
    },
    cdsuframamatprimabasica: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdsuframareffab: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrcest: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cdauxiliarintegracao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdcest: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mmdescricaodue: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mmdescricaoexportacao: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'mercadoria'
  });
};
