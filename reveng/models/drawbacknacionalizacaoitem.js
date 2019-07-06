/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('drawbacknacionalizacaoitem', {
    iddrawbacknacionalizacaocapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'drawbacknacionalizacaocapa',
        key: 'iddrawbacknacionalizacaocapa'
      }
    },
    iddrawbacknacionalizacaoitem: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idatoconcessoriocapa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'atoconcessorioitemimpdi',
        key: 'idatoconcessoriocapa'
      }
    },
    idatoconcessorioitemimportado: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    idatoconcessorioitemexportado: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    idatoconcessorioitemimpdi: {
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
    tableName: 'drawbacknacionalizacaoitem'
  });
};
