/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('intervalotabelacif', {
    idintervalocif: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'intervalocif',
        key: 'idintervalocif'
      }
    },
    idintervalotabelacif: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    vlrinicial: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrfinal: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idgrupousuario: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'grupousuario',
        key: 'idgrupousuario'
      }
    }
  }, {
    tableName: 'intervalotabelacif'
  });
};
