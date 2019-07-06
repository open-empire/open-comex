/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('termopagamentoparcelas', {
    idtermopagamento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'termopagamento',
        key: 'idtermopagamento'
      }
    },
    idtermopagamentoparcelas: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    vlpercentualparcela: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nrparcela: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'termopagamentoparcelas'
  });
};
