/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ocorrencia', {
    idocorrencia: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cdocorrencia: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmocorrencia: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdativo: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'ocorrencia'
  });
};
