/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('familiaequivalenciaproduto', {
    idfamiliaequivalencia: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'familiaequivalencia',
        key: 'idfamiliaequivalencia'
      }
    },
    idfamiliaequivalenciaproduto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idmercadoria: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'mercadoria',
        key: 'idmercadoria'
      }
    }
  }, {
    tableName: 'familiaequivalenciaproduto'
  });
};
