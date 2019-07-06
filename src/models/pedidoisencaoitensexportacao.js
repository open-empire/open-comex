/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pedidoisencaoitensexportacao', {
    idpedidoisencao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idpedidoisencaoitensexportacao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idqdmontdemonstrativoconsumo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'qdmontdemonstrativoconsumore',
        key: 'idqdmontdemonstrativoconsumo'
      }
    },
    idqdmontdemonstrativoconsumore: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    }
  }, {
    tableName: 'pedidoisencaoitensexportacao'
  });
};
