/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('contratomanutencaovalorhoras', {
    idcontratomanutencaovalorhoras: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    valorinicial: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    valorfinal: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    horasatendimento: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'contratomanutencaovalorhoras'
  });
};
