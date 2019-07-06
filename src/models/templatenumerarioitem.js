/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('templatenumerarioitem', {
    idtemplatenumerario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'templatenumerario',
        key: 'idtemplatenumerario'
      }
    },
    idtemplatenumerarioitem: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iditemnumerario: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'itemdespesa',
        key: 'iditemdespesa'
      }
    },
    nrsolicitacao: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tpcalculonumerario: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idcontadespesas: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'contafinanceiro',
        key: 'idcontafinanceiro'
      }
    }
  }, {
    tableName: 'templatenumerarioitem'
  });
};
