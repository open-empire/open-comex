/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('itemrateiocusteio', {
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
    iditemcusteio: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    vlrateado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'itemrateiocusteio'
  });
};
