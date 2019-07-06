/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pedidoisencaoitensimportacao', {
    idpedidoisencao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idpedidoisencaoitensimportacao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idqdmontdemonstrativoconsumo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'qdmontdemonstrativomprima',
        key: 'idqdmontdemonstrativoconsumo'
      }
    },
    idqdmontdemonstrativomprima: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    }
  }, {
    tableName: 'pedidoisencaoitensimportacao'
  });
};
