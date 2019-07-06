/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('modelonotaservicoserv', {
    idmodelonotaservico: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'modelonotaservico',
        key: 'idmodelonotaservico'
      }
    },
    idmodelonotaservicoserv: {
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
    tableName: 'modelonotaservicoserv'
  });
};
