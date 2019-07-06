/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('declaracaoprodutonome', {
    iddeclaracaoproduto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'declaracaoproduto',
        key: 'iddeclaracaoproduto'
      }
    },
    iddeclaracaoprodutonome: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nmcomercial: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'declaracaoprodutonome'
  });
};
