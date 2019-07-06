/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('consolidadorprocesso', {
    idconsolidadorprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    dtcriacao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    qtdefaturas: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nrreferenciaprocesso: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrreferenciaauxiliar: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cnpjcliente: {
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
    nmobservacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idpessoaunidade: {
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
    idservico: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'servico',
        key: 'idservico'
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
    dtchegada: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtembarque: {
      type: DataTypes.DATE,
      allowNull: true
    },
    idpaisdestino: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pais',
        key: 'idpais'
      }
    },
    idlocalembarque: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'terminalcarga',
        key: 'idterminalcarga'
      }
    },
    idcidadelocaldesembaraco: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'cidade',
        key: 'idcidade'
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
    dtcoleta: {
      type: DataTypes.DATE,
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
    dtentrega: {
      type: DataTypes.DATE,
      allowNull: true
    },
    nrvooviagem: {
      type: DataTypes.STRING,
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
    qtdetotalvolumes: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    valorpesobruto: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcubagem: {
      type: DataTypes.DOUBLE,
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
    vlhouse: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    numerosdomesticos: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sngeradoprocesso: {
      type: DataTypes.STRING,
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
    nmintegracao: {
      type: DataTypes.STRING,
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
    idpaisprocedencia: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pais',
        key: 'idpais'
      }
    },
    idpessoaagenteitl: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    tpfrete: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrconhecimentocontrole: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'consolidadorprocesso'
  });
};
