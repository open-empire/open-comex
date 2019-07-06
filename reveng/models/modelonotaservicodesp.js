/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('modelonotaservicodesp', {
    idmodelonotaservico: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'modelonotaservico',
        key: 'idmodelonotaservico'
      }
    },
    idmodelonotaservicodesp: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nrserie: {
      type: DataTypes.STRING,
      allowNull: true
    },
    iddocumento: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'documento',
        key: 'iddocumento'
      }
    },
    permitirmodelofat: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'modelonotaservicodesp'
  });
};
