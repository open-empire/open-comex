/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('agendaconsultasmantra', {
    idagendaconsultasmantra: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    diasemana: {
      type: DataTypes.STRING,
      allowNull: true
    },
    horarioinicio: {
      type: DataTypes.DATE,
      allowNull: true
    },
    horariotermino: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'agendaconsultasmantra'
  });
};
