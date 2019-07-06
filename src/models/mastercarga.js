/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mastercarga', {
    idmaster: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'master',
        key: 'idmaster'
      }
    },
    idmastercarga: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idcontainer: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tipocontainer',
        key: 'idtipocontainer'
      }
    },
    vlcompracontainer: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcompratotal: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlquantidade: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesocubado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesobrutoton: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesobrutokg: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nrcontainer: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'mastercarga'
  });
};
