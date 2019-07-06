/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('motivoadmissaotemporaria', {
    idmotivoadmissaotemporaria: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cdmotivoadmissaotemporaria: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmmotivoadmissaotemporaria: {
      type: DataTypes.STRING,
      allowNull: true
    },
    txmmotivoadmissaotemporaria: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'motivoadmissaotemporaria'
  });
};
