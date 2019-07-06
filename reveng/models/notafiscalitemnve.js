/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('notafiscalitemnve', {
    idnotafiscal: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'notafiscalitemmontagem',
        key: 'idnotafiscal'
      }
    },
    idnotaficalitem: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idnotafiscalitemnve: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    campo1: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    campo2: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'notafiscalitemnve'
  });
};
