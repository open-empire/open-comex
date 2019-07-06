/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('transferenciabancaria', {
    idtransferenciabancaria: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idunidade: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    idcontafinanceirosaida: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'contafinanceiro',
        key: 'idcontafinanceiro'
      }
    },
    idcontafinanceiroentrada: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'contafinanceiro',
        key: 'idcontafinanceiro'
      }
    },
    vlrtransferencia: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idusuario: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usuario',
        key: 'idusuario'
      }
    },
    dtcancelado: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtlancamento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    txobs: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtcaixa: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtaprovacao: {
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
    documento: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'transferenciabancaria'
  });
};
