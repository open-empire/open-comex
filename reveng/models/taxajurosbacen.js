/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('taxajurosbacen', {
    idtaxajurosbacen: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cdtaxajurosbacen: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmtaxajurosbacen: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idmoeda: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'moeda',
        key: 'idmoeda'
      }
    }
  }, {
    tableName: 'taxajurosbacen'
  });
};
