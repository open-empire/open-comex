/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('itemdespesarateiocentrocusto', {
    iditemdespesa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'itemdespesa',
        key: 'iditemdespesa'
      }
    },
    iditemdespesarateiocentrocusto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idcentrocusto: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'centrocusto',
        key: 'idcentrocusto'
      }
    },
    percentualrateio: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'itemdespesarateiocentrocusto'
  });
};
