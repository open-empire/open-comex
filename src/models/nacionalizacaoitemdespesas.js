/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('nacionalizacaoitemdespesas', {
    idnacionalizacaocapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'nacionalizacaoitem',
        key: 'idnacionalizacaocapa'
      }
    },
    idnacionalizacaoitem: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idnacionalizacaoitemdespesas: {
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
    }
  }, {
    tableName: 'nacionalizacaoitemdespesas'
  });
};
