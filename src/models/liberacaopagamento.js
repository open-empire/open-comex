/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('liberacaopagamento', {
    idliberacaopagamento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    dtbloqueio: {
      type: DataTypes.DATE,
      allowNull: true
    },
    vlbloqueado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalpagamento: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idusuariomontagem: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dtliberado: {
      type: DataTypes.DATE,
      allowNull: true
    },
    idusuarioliberacao: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usuario',
        key: 'idusuario'
      }
    },
    idfornecedor: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    vrliberado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idembarque: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tpstatus: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtvencimento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    nrfatura: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtfatura: {
      type: DataTypes.DATE,
      allowNull: true
    },
    idcontafinanceiro: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idunidadepagamento: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nmhistorico: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'liberacaopagamento'
  });
};
