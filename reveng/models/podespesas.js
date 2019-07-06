/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('podespesas', {
    idpocapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'pocapa',
        key: 'idpocapa'
      }
    },
    idpodespesas: {
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
    vldespesa: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    sncalculardespesa: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'podespesas'
  });
};
