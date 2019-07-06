/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mercadoriaaviso', {
    idmercadoria: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'mercadoria',
        key: 'idmercadoria'
      }
    },
    idmercadoriaaviso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    codigo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    descricao: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'mercadoriaaviso'
  });
};
