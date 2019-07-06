/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('grupomodulo', {
    idgrupomodulo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cdgrupomodulo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmgrupomodulo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdativo: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'grupomodulo'
  });
};
