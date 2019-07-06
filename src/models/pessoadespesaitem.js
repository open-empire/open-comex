/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pessoadespesaitem', {
    idpessoadespesa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'pessoadespesa',
        key: 'idpessoadespesa'
      }
    },
    idpessoadespesaitem: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iditemdespesa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'itemdespesa',
        key: 'iditemdespesa'
      }
    },
    tpmetodorateio: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpresponsabilidade: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tprecuperavel: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlitemdespesa: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'pessoadespesaitem'
  });
};
