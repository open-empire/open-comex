/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tabeladeparainterna', {
    idtabeladeparainterna: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tptabela: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdexterno: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idiglobal: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'tabeladeparainterna'
  });
};
