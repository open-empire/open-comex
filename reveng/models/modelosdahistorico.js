/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('modelosdahistorico', {
    idmodelosda: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'modelosda',
        key: 'idmodelosda'
      }
    },
    idmodelosdahistorico: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tpcampo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ordem: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    snapenasdescr: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'modelosdahistorico'
  });
};
