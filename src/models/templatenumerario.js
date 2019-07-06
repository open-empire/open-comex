/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('templatenumerario', {
    idtemplatenumerario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cdtemplatenumerario: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmtemplatenumerario: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snativo: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'templatenumerario'
  });
};
