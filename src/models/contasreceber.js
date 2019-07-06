/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('contasreceber', {
    idcontasreceber: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dtlancamento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    idunidade: {
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
    idcontafinanceiro: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'contafinanceiro',
        key: 'idcontafinanceiro'
      }
    },
    tpformarecebimento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpclassificacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrdocumento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrchequeoperacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtvencimento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtrecebimento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtcancelamento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    vlrlancamento: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrdesconto: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrjuros: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrreceber: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vrbaixado: {
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
    idusuariocancelamento: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usuario',
        key: 'idusuario'
      }
    },
    tpprocedencia: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idapuracaoiata: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nrboleto: {
      type: DataTypes.STRING,
      allowNull: true
    },
    statusboleto: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snintegrar: {
      type: DataTypes.STRING,
      allowNull: true
    },
    txobservacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlpis: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcofins: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcsll: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlir: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpiscalculado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcofinscalculado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcsllcalculado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlircalculado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nmhistorico: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdauxiliarintegracao: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'contasreceber'
  });
};
