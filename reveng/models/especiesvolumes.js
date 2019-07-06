/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('especiesvolumes', {
    idespeciesvolumes: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cdespeciesvolumes: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmespeciesvolumes: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdsiscomexespeciesvolumes: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snativo: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'especiesvolumes'
  });
};
