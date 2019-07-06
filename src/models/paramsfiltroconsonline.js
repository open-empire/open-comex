/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('paramsfiltroconsonline', {
    idfiltrofixoconsonline: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idconsonline: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'consonline',
        key: 'idconsonline'
      }
    },
    paramindex: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fieldvalor: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fieldtype: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'paramsfiltroconsonline'
  });
};
