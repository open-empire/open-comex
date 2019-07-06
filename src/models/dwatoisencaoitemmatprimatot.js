/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dwatoisencaoitemmatprimatot', {
    iddwatoisencaocapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'dwatoisencaoitemmatprima',
        key: 'iddwatoisencaocapa'
      }
    },
    iddwatoisencaoitemmatprima: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iddwatoisencaoitemmatprimatot: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cdmoeda: {
      type: DataTypes.STRING,
      allowNull: true
    },
    siglamoeda: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlpesoliquido: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalmle: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalmledolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlqtdeestatistica: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cdunidademedida: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'dwatoisencaoitemmatprimatot'
  });
};
