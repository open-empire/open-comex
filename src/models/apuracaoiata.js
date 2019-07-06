/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('apuracaoiata', {
    idapuracaoiata: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idunidadeoperacional: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    idcompanhiaaerea: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    dtbuscaconhecimento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    vlirrfiata: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlirrfover: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfretepp: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfretecc: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcomissaoiata: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcomissaoover: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotal: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idusuariolanc: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usuario',
        key: 'idusuario'
      }
    },
    idusuariofechamento: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usuario',
        key: 'idusuario'
      }
    },
    dtabertura: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtfechamento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtcancelamento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    nrfaturaiata: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtvencimento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    idcontafinanceira: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'contafinanceiro',
        key: 'idcontafinanceiro'
      }
    },
    vlissiata: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'apuracaoiata'
  });
};
