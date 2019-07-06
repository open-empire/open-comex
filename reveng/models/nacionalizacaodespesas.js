/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('nacionalizacaodespesas', {
    idnacionalizacaocapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'nacionalizacaocapa',
        key: 'idnacionalizacaocapa'
      }
    },
    idnacionalizacaodespesas: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iditemdespesa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'itemdespesa',
        key: 'iditemdespesa'
      }
    },
    vldespesa: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tprateiodespesa: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'nacionalizacaodespesas'
  });
};
