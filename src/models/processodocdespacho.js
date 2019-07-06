/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('processodocdespacho', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'processo',
        key: 'idprocesso'
      }
    },
    idprocessodocdespacho: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iddocinstrucaodespacho: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'docinstrucaodespacho',
        key: 'iddocinstrucaodespacho'
      }
    },
    nrdctodespacho: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'processodocdespacho'
  });
};
