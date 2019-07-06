/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('processodderemercperigosa', {
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
    idprocessodderemercperigosa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idclassemercadoriaperigosa: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idtipomercadoriaperigosa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tipomercadoriaperigosa',
        key: 'idtipomercadoriaperigosa'
      }
    }
  }, {
    tableName: 'processodderemercperigosa'
  });
};
