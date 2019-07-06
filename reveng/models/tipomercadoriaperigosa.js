/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tipomercadoriaperigosa', {
    idtipomercadoriaperigosa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idclassemercadoriaperigosa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'classemercadoriaperigosa',
        key: 'idclassemercadoriaperigosa'
      }
    },
    cdtipomercadoriaperigosa: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmtipomercadoriaperigosa: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'tipomercadoriaperigosa'
  });
};
