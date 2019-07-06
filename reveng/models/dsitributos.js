/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dsitributos', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'dsicapa',
        key: 'idprocesso'
      }
    },
    iddsicapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iddsitributos: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cdcodigoreceita: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vltributo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'dsitributos'
  });
};
