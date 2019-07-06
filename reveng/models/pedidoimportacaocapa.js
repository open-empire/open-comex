/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pedidoimportacaocapa', {
    idpedidoimportacaocapa: {
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
    tipoimportacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrpedidoimportacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtpedidoimportacao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    idpessoaimportador: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
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
    snrepassaexportadoritens: {
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
    snrepassafabricanteitens: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idpessoaconsignatario: {
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
    idpaisprocedencia: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pais',
        key: 'idpais'
      }
    },
    idlocalentradapais: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'terminalcarga',
        key: 'idterminalcarga'
      }
    },
    iddepartamentosolicitante: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'departamento',
        key: 'iddepartamento'
      }
    },
    iddepartamentoaplicacao: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'departamento',
        key: 'iddepartamento'
      }
    },
    idviatransporte: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'viatransporte',
        key: 'idviatransporte'
      }
    },
    idincoterm: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'incoterm',
        key: 'idincoterm'
      }
    },
    idtermopagamento: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'termopagamento',
        key: 'idtermopagamento'
      }
    },
    tpcoberturacambial: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpdesconto: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vldesconto: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    dtnecessidade: {
      type: DataTypes.DATE,
      allowNull: true
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
    idpessoaagentecarga: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    observacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtconversaomoeda: {
      type: DataTypes.DATE,
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
    vlacrescimo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldeducao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltaxasiscomex: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcustototalreais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcustototaldolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcustototalmle: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idusuariostatus: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usuario',
        key: 'idusuario'
      }
    },
    idcotacao: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idpessoacliente: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    referenciacliente: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlpesoliquidototalitens: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalcifreais: {
      type: DataTypes.DOUBLE,
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
    vltotaldespesas: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalimportacao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    dtmoedacalculocusto: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtcalculocusto: {
      type: DataTypes.DATE,
      allowNull: true
    },
    idusuarioaprovacao: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usuario',
        key: 'idusuario'
      }
    },
    idusuariocancelamento: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usuario',
        key: 'idusuario'
      }
    },
    tpcalculoseguro: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlrporcentagemseguro: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    snfreteembutido: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snseguroembutido: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlrantidumping: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    snsiscomexnoicms: {
      type: DataTypes.STRING,
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
    mmintegracao: {
      type: "OID",
      allowNull: true
    },
    idpessoaagenteinternacional: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    tpfabricexpo: {
      type: DataTypes.STRING,
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
    faciliddeptaplic: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'departamento',
        key: 'iddepartamento'
      }
    },
    vltotalmcvreais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalbaseicms: {
      type: DataTypes.DOUBLE,
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
    observacaoinstrucao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    observacaomarcacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idcidadeorigem: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'cidade',
        key: 'idcidade'
      }
    },
    idcidadedestino: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'cidade',
        key: 'idcidade'
      }
    },
    tipoincentivo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlcotacaofrete: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcotacaoseguro: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    dtprontidao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    idlocaldespacho: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'terminalcarga',
        key: 'idterminalcarga'
      }
    }
  }, {
    tableName: 'pedidoimportacaocapa'
  });
};
