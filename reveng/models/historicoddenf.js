/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('historicoddenf', {
    idhistoricodde: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'historicodde',
        key: 'idhistoricodde'
      }
    },
    idhistoricoddenf: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nrinicial: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrfinal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    serie: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'historicoddenf'
  });
};
