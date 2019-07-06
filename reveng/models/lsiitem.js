/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lsiitem', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'lsicapa',
        key: 'idprocesso'
      }
    },
    idlsicapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idlsiitem: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tpregimetributacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idfundamentolegalregtrib: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'fundamentolegalregtrib',
        key: 'idfundamentolegalregtrib'
      }
    },
    idmotivolsi: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'motivodsi',
        key: 'idmotivodsi'
      }
    },
    idmoedamle: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'moeda',
        key: 'idmoeda'
      }
    },
    idmercadoria: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'mercadoria',
        key: 'idmercadoria'
      }
    },
    idpedidoimportacaocapa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pedidoimportacaoitem',
        key: 'idpedidoimportacaocapa'
      }
    },
    idpedidoimportacaoitem: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    vlquantidadeitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idunidademedidaitem: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'unidademedida',
        key: 'idunidademedida'
      }
    },
    nrdestaquencm: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    vlunitarioitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesoliquidoitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    snmaterialusado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpclassificacao: {
      type: DataTypes.STRING,
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
    vlqtdemedidaestatisticaitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    txmercadoria: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlmercadoriaitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlunitariomcvitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idpocapa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'poitem',
        key: 'idpocapa'
      }
    },
    idpoitem: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    nritemlsi: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nrrefdespachanteitem: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrinvoiceitem: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtinvoiceitem: {
      type: DataTypes.DATE,
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
    idincotermitem: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'incoterm',
        key: 'idincoterm'
      }
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
    lote: {
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
    idtsp: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tsp',
        key: 'idtsp'
      }
    },
    idgrupoli: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    vlcountitens: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idembalagemsecundaria: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'especiesvolumes',
        key: 'idespeciesvolumes'
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
    numeroregistroanvisa: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtvencregistro: {
      type: DataTypes.DATE,
      allowNull: true
    },
    loteanvisa: {
      type: DataTypes.STRING,
      allowNull: true
    },
    serie: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrordem: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    formafisica: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrseqinvoiceitem: {
      type: DataTypes.STRING,
      allowNull: true
    },
    txcomplmercadoria: {
      type: DataTypes.STRING,
      allowNull: true
    },
    txcomplmercadoria1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    txcomplmercadoria2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idunidademedidaestatistica: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'unidademedida',
        key: 'idunidademedida'
      }
    }
  }, {
    tableName: 'lsiitem'
  });
};
