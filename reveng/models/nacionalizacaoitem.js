/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('nacionalizacaoitem', {
    idnacionalizacaocapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'nacionalizacaocapa',
        key: 'idnacionalizacaocapa'
      }
    },
    idnacionalizacaoitem: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idqdmontdemonstrativoconsumo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'qdmontdemonstrativoconsumodi',
        key: 'idqdmontdemonstrativoconsumo'
      }
    },
    idqdmontdemonstrativomprima: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    idqdmontdemonstrativodi: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    vlcalculadoii: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcalculadoipi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcalculadopis: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcalculadocofins: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcalculadoicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltaxadolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'nacionalizacaoitem'
  });
};
