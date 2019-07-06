/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('processoexportacaore', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'processoexportacao',
        key: 'idprocesso'
      }
    },
    idprocessoexportacao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idprocessoexportacaore: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nrregistrosiscomex: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtregistrosiscomex: {
      type: DataTypes.DATE,
      allowNull: true
    },
    idenquadramento1: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'enquadramentooperacao',
        key: 'idenquadramentooperacao'
      }
    },
    idenquadramento2: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'enquadramentooperacao',
        key: 'idenquadramentooperacao'
      }
    },
    idenquadramento3: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'enquadramentooperacao',
        key: 'idenquadramentooperacao'
      }
    },
    idenquadramento4: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'enquadramentooperacao',
        key: 'idenquadramentooperacao'
      }
    },
    idenquadramento5: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'enquadramentooperacao',
        key: 'idenquadramentooperacao'
      }
    },
    idenquadramento6: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'enquadramentooperacao',
        key: 'idenquadramentooperacao'
      }
    },
    nrregistrovenda: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrregistrocompra: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrregedevinculados: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrdirivinculados: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtlimiteoperacao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    vlpercentualmargemnaosacada: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nrprocessore: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlesquemapagamentototal: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idmodalidadetransacao: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'modalidadetransacao',
        key: 'idmodalidadetransacao'
      }
    },
    vlpagamentoantecipado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpagamentoavista: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nrparcelas: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    periodicidadeparcelas: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    indicadorperiodicidade: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlparcela: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmargemnaosacada: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlconsignacao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlsemcoberturacambio: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfinanceirorc: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesoliquidotoacumuladore: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idncm: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ncm',
        key: 'idncm'
      }
    },
    idnaladi: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'naladi',
        key: 'idnaladi'
      }
    },
    txdescricaomercadoria: {
      type: DataTypes.STRING,
      allowNull: true
    },
    categoriatextil: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idufprodutorre: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'uf',
        key: 'iduf'
      }
    },
    txpendencias: {
      type: DataTypes.STRING,
      allowNull: true
    },
    txobservacoessecexdtic: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtvalidadeembarque: {
      type: DataTypes.DATE,
      allowNull: true
    },
    vlpesoliquidomercadoria: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlquantidadecomercializacao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idunidademedidacomercializacao: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'unidademedida',
        key: 'idunidademedida'
      }
    },
    vlquantidadeunidadeestatistica: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmcvmercadoria: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmlemercadoria: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    percentualcomissaoagente: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tpformacomissaoagente: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlcomissaoagente: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tpfinalidademercadoria: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snexportadorfabricante: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snobservacaoexportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    txobservacaoexportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idurfdespacho: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'urf',
        key: 'idurf'
      }
    },
    idurfembarque: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'urf',
        key: 'idurf'
      }
    },
    mmobservacaoexportador: {
      type: "OID",
      allowNull: true
    },
    mmtelastransmissaoresiscomex: {
      type: "OID",
      allowNull: true
    },
    vlpesobrutomercadoria: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    situacaore: {
      type: DataTypes.STRING,
      allowNull: true
    },
    numerodespacho: {
      type: DataTypes.STRING,
      allowNull: true
    },
    quantidadeembarque: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    valorembarque: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    comissaoagenteefetiva: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    dtemissaoconhecimentoemb: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtembarque: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtaverbacao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    cambioprovisre: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    dtcambioprovisre: {
      type: DataTypes.DATE,
      allowNull: true
    },
    cambioaplicre: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    dtaplicacao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    cambioliqre: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    dtembefeitocobcamb: {
      type: DataTypes.DATE,
      allowNull: true
    },
    pesoliquidorerebate: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    qtunidademedidacomerc: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    unidademedidacomerc: {
      type: DataTypes.STRING,
      allowNull: true
    },
    qtunidademedidanbm: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    unidademedidanbm: {
      type: DataTypes.STRING,
      allowNull: true
    },
    precototalmcv: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    precototalmle: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    comissaoagenterebate: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    formapgtocomagrebate: {
      type: DataTypes.STRING,
      allowNull: true
    },
    destaquencm: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlcomcoberturacambio: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    statusweb: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mmtratamentoadministrativoweb: {
      type: "OID",
      allowNull: true
    },
    mmerrovalidacaoweb: {
      type: "OID",
      allowNull: true
    },
    nrdsivinculado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpccptcccrom: {
      type: DataTypes.STRING,
      allowNull: true
    },
    origemre: {
      type: DataTypes.STRING,
      allowNull: true
    },
    txcompldescricaomercadoria: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrlotetransmissaonovoex: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idusuariotransmissao: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idtransmissao: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    snrealterado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    txadicional: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrquebraauxiliar: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idinstrumentonegociacao: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'instrumentonegociacao',
        key: 'idinstrumentonegociacao'
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
    idcategoriacota: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'categoriacota',
        key: 'idcategoriacota'
      }
    }
  }, {
    tableName: 'processoexportacaore'
  });
};
