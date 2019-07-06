/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('objetotreeview', {
    iddocumento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'documento',
        key: 'iddocumento'
      }
    },
    objetotreeview: {
      type: "OID",
      allowNull: true
    },
    classereport: {
      type: "OID",
      allowNull: true
    }
  }, {
    tableName: 'objetotreeview'
  });
};
