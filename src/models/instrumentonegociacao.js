/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('instrumentonegociacao', {
    idinstrumentonegociacao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cdinstrumentonegociacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nminstrumentonegociacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idacordoaladi: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'acordoaladi',
        key: 'idacordoaladi'
      }
    }
  }, {
    tableName: 'instrumentonegociacao'
  });
};
