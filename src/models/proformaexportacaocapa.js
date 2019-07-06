/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('proformaexportacaocapa', {
    idproformaexportacaocapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nrproformaexportacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtproformaexportacao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    idpessoaunidadeoperacional: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    idpessoacliente: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    tpformacomercializacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    statusproforma: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idpessoaestrangeira: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
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
    idlocalorigem: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'terminalcarga',
        key: 'idterminalcarga'
      }
    },
    idlocaldestino: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'terminalcarga',
        key: 'idterminalcarga'
      }
    },
    idpaisdestinofinal: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pais',
        key: 'idpais'
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
    tpformapagamento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpfrete: {
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
    idmoeda: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'moeda',
        key: 'idmoeda'
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
    idinstrumentonegociacao: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'instrumentonegociacao',
        key: 'idinstrumentonegociacao'
      }
    },
    txtermopagamento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrcartacredito: {
      type: DataTypes.STRING,
      allowNull: true
    },
    percentualcomissaoagente: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltxcambio: {
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
    vlpesoliquidocapa: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesobrutocapa: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlacrescimoscapa: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldescontocapa: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmlecapa: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfretecapa: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlsegurocapa: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmcvcapa: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcomissaoagente: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlexwcapa: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    iddespachante: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    tpconsignatario: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpnotificado1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpnotificado2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idconsignatario: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    idnotificado1: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    idnotificado2: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    txdeclaracaoexportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    txmarcacaovolumes: {
      type: DataTypes.STRING,
      allowNull: true
    },
    txinformacaoembalagem: {
      type: DataTypes.STRING,
      allowNull: true
    },
    txdeclaracaoadicional: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sncalculado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtmoedacalculo: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtcalculo: {
      type: DataTypes.DATE,
      allowNull: true
    },
    observacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    quantidadeprodutos: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    snbaixadototal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snrepassacomissaoagenteitens: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tprateioseguro: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrordemcompra: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtordemcompra: {
      type: DataTypes.DATE,
      allowNull: true
    },
    snrepassaordemcompraitens: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmunidopercartacredito: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cnpjunidopercartacredito: {
      type: DataTypes.STRING,
      allowNull: true
    },
    enderecounidopercartacredito: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrenderecounidopercartacredito: {
      type: DataTypes.STRING,
      allowNull: true
    },
    bairrounidopercartacredito: {
      type: DataTypes.STRING,
      allowNull: true
    },
    complenderecounidcartacredito: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cepunidopercartacredito: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmcidadeunidopercartacredito: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmpaisunidopercartacredito: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmufunidopercartacredito: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dadosexportadorcartacredito: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dadosimportadorcartacredito: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dadosconsignatariocartacredito: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dadosnotificadorcartacredito: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmportoorigemcartacredito: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmportodestinocartacredito: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmcidadeorigemcartacredito: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mmintegracao: {
      type: "OID",
      allowNull: true
    },
    vlmetragemcubica: {
      type: DataTypes.DOUBLE,
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
    }
  }, {
    tableName: 'proformaexportacaocapa'
  });
};
