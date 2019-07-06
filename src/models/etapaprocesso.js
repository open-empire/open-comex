/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('etapaprocesso', {
    idetapaprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cdetapaprocesso: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmetapaprocesso: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ativoetapaprocesso: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'etapaprocesso'
  });
};
