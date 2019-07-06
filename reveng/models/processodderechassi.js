/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('processodderechassi', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'processoddere',
        key: 'idprocesso'
      }
    },
    idprocessodde: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idprocessoddere: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idprocessodderechassi: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nrchassi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    marca: {
      type: DataTypes.STRING,
      allowNull: true
    },
    contramarca: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlpesobrutochassi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idprocessoexportacaore: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'processodderechassi'
  });
};
