/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cotacaotradeexportacaoparc', {
    idcotacaotradeexportacaocapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'cotacaotradeexportacaocapa',
        key: 'idcotacaotradeexportacaocapa'
      }
    },
    idcotacaotradeexportacaoparc: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    vlparcela: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    dtvencimento: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'cotacaotradeexportacaoparc'
  });
};
