/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('montagemdemonstrativomprima', {
    idmontagemdemonstrativoconsumo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'montagemdemonstrativoconsumo',
        key: 'idmontagemdemonstrativoconsumo'
      }
    },
    idmontagemdemonstrativomprima: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idmateriaprima: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'mercadoria',
        key: 'idmercadoria'
      }
    }
  }, {
    tableName: 'montagemdemonstrativomprima'
  });
};
