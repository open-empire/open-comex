/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('processoddeestabelecimento', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'processodde',
        key: 'idprocesso'
      }
    },
    idprocessodde: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idprocessoddeestabelecimento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nrestabelecimento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sufixocnpj: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'processoddeestabelecimento'
  });
};
