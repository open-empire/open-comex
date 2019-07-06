/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('controleemprestimo', {
    idcontroleemprestimo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nrcontrato: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtlancamento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtliquidacao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    idcontafinanceiro: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'contafinanceiro',
        key: 'idcontafinanceiro'
      }
    },
    vlemprestimo: {
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
    dtpgtoemprestimo: {
      type: DataTypes.DATE,
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
    idempresa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    dtcancelado: {
      type: DataTypes.DATE,
      allowNull: true
    },
    idusuariocanc: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usuario',
        key: 'idusuario'
      }
    },
    txhistorico: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vljuros: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlsaldoprocesso: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpagtoemprestimo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vliof: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'controleemprestimo'
  });
};
