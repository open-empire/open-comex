/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tabelacustointegracao', {
    idtabelacustointegracao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cdtabelacustointegracao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    iditemdespesa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'itemdespesa',
        key: 'iditemdespesa'
      }
    },
    idservico: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'servico',
        key: 'idservico'
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
    idpessoafornecedor: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    idpessoaunidade: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    idusuarioalteracao: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usuario',
        key: 'idusuario'
      }
    },
    tplancamento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpcalculo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlfixo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmargemtolerancia: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    snprovisionar: {
      type: DataTypes.STRING,
      allowNull: true
    },
    codigointegracao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmemailfornecedor: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snvalidartabela: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ideventoinicialhonorario: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'eventos',
        key: 'idevento'
      }
    },
    ideventofinalhonorario: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'eventos',
        key: 'idevento'
      }
    },
    vlhonorario: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tpcanal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpprazo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    qtdeprazo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    vlarmprimariopriperiodo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlarmprimariosecperiodo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlarmprimarioterperiodo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlarmprimarioquaperiodo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlarmprimarioquiperiodo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlarmprimariocapatazia: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idarmazemorigem: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'armazem',
        key: 'idarmazem'
      }
    },
    idarmazemdestino: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'armazem',
        key: 'idarmazem'
      }
    },
    vltransporte1a100kg: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltransporte101a500kg: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltransporte501a1000kg: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltransporte1001a3000kg: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltransporte3001a6000kg: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltransporte6001a12000kg: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltransporte12001a25000kg: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfixodolar: {
      type: DataTypes.DOUBLE,
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
    tpbasepercentual: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlpercentual: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlminimopercentual: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmaximooercentual: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlarmprimariomincapatazia: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpercarmprimario: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlestadiatransporte: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    ideventoinicialestadiatransp: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'eventos',
        key: 'idevento'
      }
    },
    ideventofinalestadiatransp: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'eventos',
        key: 'idevento'
      }
    },
    vlpercestadiatransporte: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlporcte: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlperccargaperigosa: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpercsobrevlmercadoria: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlprotecaocambial: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    ideventoporrealizacao: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'eventos',
        key: 'idevento'
      }
    }
  }, {
    tableName: 'tabelacustointegracao'
  });
};
