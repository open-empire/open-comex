/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('atoconcessorioitemlidi', {
    idatoconcessoriocapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'atoconcessorioitemimportado',
        key: 'idatoconcessoriocapa'
      }
    },
    idatoconcessorioitemexportado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idatoconcessorioitemimportado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idatoconcessorioitemseqlidi: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tpregistrosiscomex: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrregistrosiscomex: {
      type: DataTypes.STRING,
      allowNull: true
    },
    qtregistrosiscomex: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlregistrosiscomex: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    statusregistrosiscomex: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtregistrosiscomex: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'atoconcessorioitemlidi'
  });
};
