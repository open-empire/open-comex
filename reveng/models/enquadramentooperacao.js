/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('enquadramentooperacao', {
    idenquadramentooperacao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cdenquadramentooperacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmenquadramentooperacao: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'enquadramentooperacao'
  });
};
