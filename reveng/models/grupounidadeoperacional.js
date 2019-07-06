/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('grupounidadeoperacional', {
    idgrupounidadeoperacional: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cdgrupounidadeoperacional: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmgrupounidadeoperacional: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cnpj: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'grupounidadeoperacional'
  });
};
