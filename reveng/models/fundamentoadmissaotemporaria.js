/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fundamentoadmissaotemporaria', {
    idfundamentoadmissaotemporaria: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cdfundamentoadmissaotemporaria: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmfundamentoadmissaotemporaria: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'fundamentoadmissaotemporaria'
  });
};
