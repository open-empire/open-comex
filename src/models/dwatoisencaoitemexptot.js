/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dwatoisencaoitemexptot', {
    iddwatoisencaocapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'dwatoisencaoitemexp',
        key: 'iddwatoisencaocapa'
      }
    },
    iddwatoisencaoitemexp: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iddwatoisencaoitemexptot: {
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
    vltotalcomissao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalcomissaodolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'dwatoisencaoitemexptot'
  });
};
