/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dwatoisencaoitemexplaudo', {
    iddwatoisencaocapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'dwatoisencaocapa',
        key: 'iddwatoisencaocapa'
      }
    },
    iddwatoisencaoitemexp: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iddwatoisencaoitemexplaudo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iddwlaudotecnico: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'dwlaudotecnico',
        key: 'iddwlaudotecnico'
      }
    }
  }, {
    tableName: 'dwatoisencaoitemexplaudo'
  });
};
