/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('processoddetipoprocesso', {
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
    idprocessoddetipoprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tptipo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrtipoprocesso: {
      type: DataTypes.STRING,
      allowNull: true
    },
    descricaotipoprocesso: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'processoddetipoprocesso'
  });
};
