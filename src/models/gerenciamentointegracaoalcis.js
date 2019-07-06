/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gerenciamentointegracaoalcis', {
    idgerenciamentointegracaoalcis: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idnotafiscal: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    snregistrointegrado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snprocessadowms: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'gerenciamentointegracaoalcis'
  });
};
