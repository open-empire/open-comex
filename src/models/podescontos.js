/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('podescontos', {
    idpocapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'pocapa',
        key: 'idpocapa'
      }
    },
    idpodescontos: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iditemdespesa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'itemdespesa',
        key: 'iditemdespesa'
      }
    },
    vldesconto: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    sncalculardesconto: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'podescontos'
  });
};
