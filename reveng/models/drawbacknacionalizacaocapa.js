/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('drawbacknacionalizacaocapa', {
    iddrawbacknacionalizacaocapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idatoconcessoriocapa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'atoconcessoriocapa',
        key: 'idatoconcessoriocapa'
      }
    },
    vltotalii: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalipi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalpis: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalcofins: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalafrmm: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    sncalculado: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'drawbacknacionalizacaocapa'
  });
};
