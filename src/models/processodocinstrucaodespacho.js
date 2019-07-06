/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('processodocinstrucaodespacho', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'processo',
        key: 'idprocesso'
      }
    },
    idprocessodocinstrucaodespacho: {
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
    nrdocinstrucaodespacho: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtdocinstrucaodespacho: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'processodocinstrucaodespacho'
  });
};
