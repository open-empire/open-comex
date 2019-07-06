/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('historicoddere', {
    idhistoricodde: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'historicodde',
        key: 'idhistoricodde'
      }
    },
    idhistoricoddere: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nrre: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'historicoddere'
  });
};
