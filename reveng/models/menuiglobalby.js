/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('menuiglobalby', {
    idsistema: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'sistema',
        key: 'idsistema'
      }
    },
    idmenuiglobal: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    descricaomenu: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idsistemamaster: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idmenuiglobalmaster: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idmodulo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'modulo',
        key: 'idmodulo'
      }
    },
    ididioma: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ordem: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'menuiglobalby'
  });
};
