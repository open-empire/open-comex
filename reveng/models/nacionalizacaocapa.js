/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('nacionalizacaocapa', {
    idnacionalizacaocapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idqdmontdemonstrativoconsumo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'qdmontdemonstrativoconsumo',
        key: 'idqdmontdemonstrativoconsumo'
      }
    },
    percmultamesiiipipiscofins: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    percmultadiaiiipipiscofins: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    percmultamesicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    percmultadiaicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    percmultamesdespesas: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    percmultadiadespesas: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'nacionalizacaocapa'
  });
};
