/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pedidoembarquecapa', {
    idpedidoembarquecapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ano: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idunidadenegocio: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    nrembarque: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fcllcl: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtembarque: {
      type: DataTypes.DATE,
      allowNull: true
    },
    idlocalembarque: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'terminalcarga',
        key: 'idterminalcarga'
      }
    },
    idlocaldesembarque: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'terminalcarga',
        key: 'idterminalcarga'
      }
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
    idpessoaconsignatario: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    idarmazemremocao: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'armazem',
        key: 'idarmazem'
      }
    },
    idpessoarepresentante: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    idpessoadespachante: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    idpessoaagentecargaorigem: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    idpessoaagentecargadestino: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    snfreteembutido: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snseguroembutido: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpfrete: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idmoedafrete: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'moeda',
        key: 'idmoeda'
      }
    },
    vlfretemoedanegociada: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfretemoedanacional: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfretedolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idmoedaseguro: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'moeda',
        key: 'idmoeda'
      }
    },
    vlseguromoedanegociada: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlseguromoedanacional: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlsegurodolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idincoterm: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'incoterm',
        key: 'idincoterm'
      }
    },
    vlacrescimo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldeducao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldespesasembarque: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idmoedamle: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'moeda',
        key: 'idmoeda'
      }
    },
    vlmlemoedanegociada: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmlemoedanacional: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vladtooutros: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idviatransporte: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'viatransporte',
        key: 'idviatransporte'
      }
    },
    dtmoedacalculocusto: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtcalculocusto: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtmoedacalculoprecusto: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtenviointegracao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtcalculoprecusto: {
      type: DataTypes.DATE,
      allowNull: true
    },
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'processo',
        key: 'idprocesso'
      }
    },
    idpaisprocedencia: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pais',
        key: 'idpais'
      }
    },
    idurfdespacho: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'urf',
        key: 'idurf'
      }
    },
    idurfentrada: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'urf',
        key: 'idurf'
      }
    },
    idrecintoalfandegado: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'recintoalfandegado',
        key: 'idrecintoalfandegado'
      }
    },
    dtdi: {
      type: DataTypes.DATE,
      allowNull: true
    },
    nrdi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrmanifesto: {
      type: DataTypes.STRING,
      allowNull: true
    },
    refdespachante: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tipoimportacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtcalculo: {
      type: DataTypes.DATE,
      allowNull: true
    },
    sncanal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vltotalii: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalipi: {
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
    vltotalicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalbaseicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotaltaxasiscomex: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalpesoliquido: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotaltaxamle: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotaltaxafrete: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotaltaxaseguro: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcustototalembarque: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcustototalembarquereais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcustototalembarquedolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalcifreais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    dtconhecimento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    conhecimentomaster: {
      type: DataTypes.STRING,
      allowNull: true
    },
    conhecimento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrviagemvoo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtprecustofinanceiro: {
      type: DataTypes.DATE,
      allowNull: true
    },
    vlsaldocomissaria: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vladtocomissaria: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfaturacomissaria: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcustorecuperavelembarque: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tpcalculoseguro: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlrporcentagemseguro: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    dtprevisaoembarque: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtprevisaochegada: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtchegada: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtentradaeadi: {
      type: DataTypes.DATE,
      allowNull: true
    },
    nrdta: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtdesembaraco: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtci: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtentradafabrica: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtentregamercadoria: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtpresencacarga: {
      type: DataTypes.DATE,
      allowNull: true
    },
    qtdcargasolta: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    snsiscomexnoicms: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlrantidumping: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    faciltpregimeii: {
      type: DataTypes.STRING,
      allowNull: true
    },
    faciltpregimeipi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    faciltpregimeicms: {
      type: DataTypes.STRING,
      allowNull: true
    },
    faciltpregimepiscofins: {
      type: DataTypes.STRING,
      allowNull: true
    },
    faciltpusofinal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    facilidmoedamle: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'moeda',
        key: 'idmoeda'
      }
    },
    facilvlaliquotaicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    facilvlpercicmssaida: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nrreferenciacliente: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlmlecambiomnac: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmlecambiomneg: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpercsegurocomplementar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlsegurocomplementar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    facilvlaliquotapissaida: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    facilvlaliquotacofinssaida: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tprateiopesoliquido: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tprateiopesobruto: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vltotalpesobruto: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tpfabricexpo: {
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
    idpaisorigem: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pais',
        key: 'idpais'
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
    facilvlaliquotaredicmssaida: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlipisaida: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlicmssaida: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpissaida: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcofinssaida: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlsubsttribsaida: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldespesasnfs: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcustoimportacao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    faciltpcalculoespecial: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlaliqicmspiscofins: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    facilaliqicmspiscofins: {
      type: DataTypes.STRING,
      allowNull: true
    },
    facilvlaliqoutrosimp: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    facilvlaliquotamargemlucro: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlsubsttribentrada: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlbasesubsttribentrada: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    iddepartamentoaplicacao: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'departamento',
        key: 'iddepartamento'
      }
    },
    faciliddeptaplic: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'departamento',
        key: 'iddepartamento'
      }
    },
    vltributosnfsaida: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlnfsaida: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    observacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vltotalirrf: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalcsll: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlauxiliartotal01: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlauxiliartotal02: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlauxiliartotal03: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlauxiliartotal04: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlauxiliartotal05: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlauxiliartotal06: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlauxiliartotal07: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlauxiliartotal08: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlauxiliartotal09: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlauxiliartotal10: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idmoedadespesa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'moeda',
        key: 'idmoeda'
      }
    },
    tpformarateiodespesa: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vltotaldespesamnac: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotaldespesamneg: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idmoedadesconto: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'moeda',
        key: 'idmoeda'
      }
    },
    tpformarateiodesconto: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vltotaldescontomneg: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotaldescontomnac: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idanalistacomissaria: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usuario',
        key: 'idusuario'
      }
    },
    idcontacontabil: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'contacontabil',
        key: 'idcontacontabil'
      }
    },
    idcentrocusto: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'centrocusto',
        key: 'idcentrocusto'
      }
    },
    dtabertura: {
      type: DataTypes.DATE,
      allowNull: true
    },
    vldespesaliberadafat: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalmcvreais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    txresumomercadoria: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snenvio: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtprevisaoatracacao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtatracacao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    tpincentivo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlafrmm: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'pedidoembarquecapa'
  });
};
