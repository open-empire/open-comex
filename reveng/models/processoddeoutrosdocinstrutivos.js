/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('processoddeoutrosdocinstrutivos', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'processodde',
        key: 'idprocesso'
      }
    },
    idprocessodde: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idprocessoddeoutrosdocinstrutivos: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idoutrosdocumentosinstrutivos: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'outrosdocumentosinstrutivos',
        key: 'idoutrosdocumentosinstrutivos'
      }
    },
    nridentificador: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'processoddeoutrosdocinstrutivos'
  });
};
