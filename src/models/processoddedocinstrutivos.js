/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('processoddedocinstrutivos', {
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
    idprocessoddedocinstrutivos: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    chaveacesso: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cnpjemitente: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ano: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    serie: {
      type: DataTypes.STRING,
      allowNull: true
    },
    numero: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nrfaixainicial: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrfaixafinal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpnfdocinstrutivos: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'processoddedocinstrutivos'
  });
};
