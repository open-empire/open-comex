/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('atividadeeconomica', {
    idatividadeeconomica: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cdatividadeeconomica: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmatividadeeconomica: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'atividadeeconomica'
  });
};
