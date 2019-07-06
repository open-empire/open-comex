/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('diitemcontainer', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'processocontainer',
        key: 'idprocesso'
      }
    },
    iddicapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iddiitem: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iddiitemcontainer: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idprocessocontainer: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    vlpesovinculado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlquantidadebaixada: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'diitemcontainer'
  });
};
