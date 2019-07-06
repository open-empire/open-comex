/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pocapa', {
    idpocapa: {
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
    nrpedido: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtpedido: {
      type: DataTypes.DATE,
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
    nrrefdespachante: {
      type: DataTypes.STRING,
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
    idincoterm: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'incoterm',
        key: 'idincoterm'
      }
    },
    sninvoiceitem: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrinvoice: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtinvoice: {
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
    idurfentrada: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'urf',
        key: 'idurf'
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
    idrecintoalfandegado: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'recintoalfandegado',
        key: 'idrecintoalfandegado'
      }
    },
    tpfabricanteexportadorcapa: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idpessoaexportadorcapa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    idpaisaquisicaocapa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pais',
        key: 'idpais'
      }
    },
    idpessoafabricantecapa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    idpaisorigemcapa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pais',
        key: 'idpais'
      }
    },
    idpessoarepresentantecapa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    idpessoaunidadeoperacional: {
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
    tpcambio: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idmoedamercadoriacapa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'moeda',
        key: 'idmoeda'
      }
    },
    vlmercadoriacapa: {
      type: DataTypes.DOUBLE,
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
    tpfretecapa: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idmoedafretecapa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'moeda',
        key: 'idmoeda'
      }
    },
    vlfreteprepaidcapa: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfretecollectcapa: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfretenacionalcapa: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlsegurocapa: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldespesascapa: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idmoedasegurocapa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'moeda',
        key: 'idmoeda'
      }
    },
    idpointegracao: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idpaisprocedenciacapa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pais',
        key: 'idpais'
      }
    },
    snrepassaexportadoritem: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snrepassafabricanteitem: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlpercomissaorepresentantecapa: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idtextopadrao: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'textopadrao',
        key: 'idtextopadrao'
      }
    },
    tprateiopesoliquidocapa: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vldescontocapa: {
      type: DataTypes.DOUBLE,
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
    sncalculado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlquantidadetotalitens: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    snbaixadototal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idpessoaunidoperacrealizadora: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    vlcomissaorepresentantecapa: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    snemprocessobaixa: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idsetorarmazem: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'setorimportacao',
        key: 'idsetorimportacao'
      }
    },
    txinformacaocomplementar: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idconsolidadorpo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'consolidadorpo',
        key: 'idconsolidadorpo'
      }
    },
    idarea: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'area',
        key: 'idarea'
      }
    },
    idcidadeembarque: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'cidade',
        key: 'idcidade'
      }
    },
    tpdocumentocarga: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrconhecimento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrconhecmaster: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idlocalincoterm: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'cidade',
        key: 'idcidade'
      }
    },
    chaveedi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idanalistacliente: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    sngerarpliquidodopesobruto: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlpercpesobrutopesoliquido: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idpessoaadquirente: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    dtentrega: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtconfirmacao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    idcidadelocaldesembaraco: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'cidade',
        key: 'idcidade'
      }
    },
    tpimportacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpformaseguro: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpcalculopercentual: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlpercseguromle: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tpbaseseguro: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmobsseguro: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idmodalidadepagto: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'modalidadepagamento',
        key: 'idmodalidadepagamento'
      }
    },
    idinstituicaofinanceira: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'instituicaofinanceiraitl',
        key: 'idinstituicaofinanceiraitl'
      }
    },
    idmotivosemcobertura: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'motivosemcobertura',
        key: 'idmotivosemcobertura'
      }
    },
    vlqtdediascobertura: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idservico: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'servico',
        key: 'idservico'
      }
    },
    idpocapaorigem: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nrrefcliente: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpoperacaodta: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpoperacaodesembaraco: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlseguromnac: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltaxasiscomex: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcifmnac: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcifdolar: {
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
    vlfretedolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlsegurodolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmledolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltaxamle: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltaxafrete: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltaxaseguro: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltaxadolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlafrmm: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlbaseicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    snfreteembutidoitens: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snseguroembutidoitens: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlmlemnac: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfreteprepaidmnac: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfretecollectmnac: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfretenacionalmnac: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfretetotalmnaccalc: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfretetotalmnegcalc: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldespesaaduaneira: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'pocapa'
  });
};
