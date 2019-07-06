/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('comissao', {
    idcomissao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cdcomissao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmcomissao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    comissaoativa: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'comissao'
  });
};
