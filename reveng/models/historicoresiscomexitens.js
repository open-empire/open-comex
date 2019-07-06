/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('historicoresiscomexitens', {
    idhistoricoresiscomex: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'historicoresiscomex',
        key: 'idhistoricoresiscomex'
      }
    },
    idhistoricoresiscomexitens: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nmdescricaomercadoria: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vltotalmcv: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalmle: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    qtdeunidadecomercial: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlquantidadeunidadeestatistica: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesoliquido: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'historicoresiscomexitens'
  });
};
