/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mercadorianormas', {
    idmercadoria: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'mercadoria',
        key: 'idmercadoria'
      }
    },
    idmercadorianormas: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idnorma: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'normas',
        key: 'idnormas'
      }
    },
    idpaisnorma: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pais',
        key: 'idpais'
      }
    }
  }, {
    tableName: 'mercadorianormas'
  });
};
