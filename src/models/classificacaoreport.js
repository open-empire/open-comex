/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('classificacaoreport', {
    idclassificacaoreport: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iddocumento: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'documento',
        key: 'iddocumento'
      }
    },
    nmclassereport: {
      type: DataTypes.STRING,
      allowNull: true
    },
    descricaoclassificacaoreport: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fieldsclassificacaoreport: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snordemdecrescente: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'classificacaoreport'
  });
};
