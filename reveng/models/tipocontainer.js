/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tipocontainer', {
    idtipocontainer: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ano: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cdtipocontainer: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmtipocontainer: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tppesocontainer: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snativo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdmercante: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrwinjoborders: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'tipocontainer'
  });
};
