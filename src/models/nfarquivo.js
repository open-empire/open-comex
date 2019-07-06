/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('nfarquivo', {
    idnfarquivo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idnf: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'nf',
        key: 'idnf'
      }
    },
    xmlnf: {
      type: "OID",
      allowNull: true
    },
    xmlretornoconsulta: {
      type: "OID",
      allowNull: true
    }
  }, {
    tableName: 'nfarquivo'
  });
};
