/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('moedaiata', {
    idmoedaiata: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idmoeda: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'moeda',
        key: 'idmoeda'
      }
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    data: {
      type: DataTypes.DATE,
      allowNull: true
    },
    vltxcompra: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'moedaiata'
  });
};
