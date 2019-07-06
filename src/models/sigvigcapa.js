/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sigvigcapa', {
    idsigvigcapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idufdespacho: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'uf',
        key: 'iduf'
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
    dtlancamento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    nrdeclaracao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idunidadevigiagro: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'unidadevigiagro',
        key: 'idunidadevigiagro'
      }
    },
    idusopropostovigiagro: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usopropostovigiagro',
        key: 'idusopropostovigiagro'
      }
    },
    tpoperacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tprequerimento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    txoutrasespecificacoes: {
      type: DataTypes.STRING,
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
    nrcertificado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrregistro: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrautorizacao: {
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
    idarmazem: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'armazem',
        key: 'idarmazem'
      }
    },
    nmconsignatario: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtembarquedesembarque: {
      type: DataTypes.DATE,
      allowNull: true
    },
    nmlocalfiscalizacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrsiforigem: {
      type: DataTypes.STRING,
      allowNull: true
    },
    txinformacaocomplementar: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtcancelamento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    idusuariocancelamento: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usuario',
        key: 'idusuario'
      }
    }
  }, {
    tableName: 'sigvigcapa'
  });
};
