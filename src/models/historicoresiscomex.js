/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('historicoresiscomex', {
    idhistoricoresiscomex: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idpessoaexportador: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    nrregistrore: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtregistrore: {
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
    cdenquadramento5: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdenquadramento6: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrregistrovenda: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrregistrocompra: {
      type: DataTypes.STRING,
      allowNull: true
    },
    gedrevinculado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dirivinculado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sgpvinculado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nratoconcessorio: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtlimiteoperacao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    vlmargemsacada: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    numeroprocesso: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdunidaderfdespacho: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmunidaderfdespacho: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdunidaderfembarque: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmunidaderfembarque: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nomeimportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    enderecoimportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdpaisimportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmpaisimportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdpaisdestinofinal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmpaisdestinofinal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdinstrumentonegociacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nminstrumentonegociacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdincoterm: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmincoterm: {
      type: DataTypes.STRING,
      allowNull: true
    },
    esquemapagamentototal: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cdmodalidadetransacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmmodalidadetransacao: {
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
    vlpagtoantecipado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpagtoavista: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    numerodeparcelas: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    periodicidade: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    indicador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vldaparcela: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmargemnaosacada: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlemconsignacao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlsemcoberturacambio: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfinanciamentorc: {
      type: DataTypes.DOUBLE,
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
    categoriatextil: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdestadoprodutor: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmestadoprodutor: {
      type: DataTypes.STRING,
      allowNull: true
    },
    validadeembarque: {
      type: DataTypes.DATE,
      allowNull: true
    },
    vlpesoliquido: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    qtdeunidadecomercial: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    unidadecomercializada: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlqtdemediancm: {
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
    vlunitariomcv: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlunitariomle: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    percentualcomissao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    formapgtocomissao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vltotalcomissao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    finalidade: {
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
    observacaoexportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mensagensadvertencia: {
      type: DataTypes.STRING,
      allowNull: true
    },
    obsorgaosanuentes: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrsdsiscomex: {
      type: DataTypes.STRING,
      allowNull: true
    },
    qtdeembarque: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalembarque: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    comissaoagentefetivada: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    dtemissaoconhecimento: {
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
    vlcambioprovisaore: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    dtprovisao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    vlcambioapliccredito: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    dtaplicacaocredito: {
      type: DataTypes.DATE,
      allowNull: true
    },
    vlcambioliqdespesa: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    dtembarquecobrcacambio: {
      type: DataTypes.DATE,
      allowNull: true
    },
    vltotallocalvenda: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesoliquidorebate: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    qtdecomercialrebate: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    unidadecomercialrebate: {
      type: DataTypes.STRING,
      allowNull: true
    },
    qtdeunidmedidancmrebate: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    unidademedidancmrebate: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vltotalmcvrebate: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalmlerebate: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcomissaoagenterebate: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    formapgtorebate: {
      type: DataTypes.STRING,
      allowNull: true
    },
    marcatransmissao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    reservadoem: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    idncmexportado: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ncm',
        key: 'idncm'
      }
    },
    idmoeda: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'moeda',
        key: 'idmoeda'
      }
    },
    qtdemercadoriadrawback: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmercadoriadrawback: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    qtdemercadoriadrawbackdisp: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmercadoriadrawbackdisp: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlquantidadeunidadeestatistica: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nrdsivinculado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlcomcoberturacambio: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    snprocessoexportacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtregistrodde: {
      type: DataTypes.DATE,
      allowNull: true
    },
    situacaodde: {
      type: DataTypes.STRING,
      allowNull: true
    },
    destaquencm: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'historicoresiscomex'
  });
};
