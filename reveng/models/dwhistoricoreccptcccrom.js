/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dwhistoricoreccptcccrom', {
    iddwhistoricore: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'dwhistoricore',
        key: 'iddwhistoricore'
      }
    },
    iddwhistoricoreccptcccrom: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    codigo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ncm: {
      type: DataTypes.STRING,
      allowNull: true
    },
    unidademedida: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlqtdeestatistica: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'dwhistoricoreccptcccrom'
  });
};
