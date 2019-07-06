/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('viatransporte', {
    idviatransporte: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cdviatransporte: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmviatransporte: {
      type: DataTypes.STRING,
      allowNull: true
    },
    przconclusor: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ideventoconclusor: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'eventos',
        key: 'idevento'
      }
    },
    nmsigla: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ididioma: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'idioma',
        key: 'ididioma'
      }
    }
  }, {
    tableName: 'viatransporte'
  });
};
