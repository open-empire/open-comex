/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('departamento', {
    iddepartamento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cddepartamento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmdepartamento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snativo: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'departamento'
  });
};
