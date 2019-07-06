/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('assuntoanvisa', {
    idassuntoanvisa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cdassuntoanvisa: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmdescricao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nmtextoanvisa: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snativo: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'assuntoanvisa'
  });
};
