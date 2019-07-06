/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ncmatributodominio', {
    idncm: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'ncmatributo',
        key: 'idncm'
      }
    },
    idncmatributo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idncmatributodominio: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cddominio: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmdominio: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'ncmatributodominio'
  });
};
