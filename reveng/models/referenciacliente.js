/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('referenciacliente', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'processo',
        key: 'idprocesso'
      }
    },
    idreferenciacliente: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nrreferenciacliente: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'referenciacliente'
  });
};
