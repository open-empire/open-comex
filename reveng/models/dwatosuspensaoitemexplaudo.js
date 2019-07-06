/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dwatosuspensaoitemexplaudo', {
    iddwatosuspensaocapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'dwatosuspensaocapa',
        key: 'iddwatosuspensaocapa'
      }
    },
    iddwatosuspensaoitemexp: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iddwatosuspensaoitemexplaudo: {
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
    tableName: 'dwatosuspensaoitemexplaudo'
  });
};
