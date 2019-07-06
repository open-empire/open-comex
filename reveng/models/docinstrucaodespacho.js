/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('docinstrucaodespacho', {
    iddocinstrucaodespacho: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cddocinstrucaodespacho: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmdocinstrucaodespacho: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'docinstrucaodespacho'
  });
};
