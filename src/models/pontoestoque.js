/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pontoestoque', {
    idpontoestoque: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cdpontoestoque: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmdescricao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'pontoestoque'
  });
};
