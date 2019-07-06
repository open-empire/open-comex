/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('modulo', {
    idmodulo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cdmodulo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmmodulo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmclassmodulo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    imagebutton: {
      type: DataTypes.STRING,
      allowNull: true
    },
    grupomodulo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cdativo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ididioma: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    keya: {
      type: DataTypes.STRING,
      allowNull: true
    },
    keyb: {
      type: DataTypes.STRING,
      allowNull: true
    },
    apmodulo: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'modulo'
  });
};
