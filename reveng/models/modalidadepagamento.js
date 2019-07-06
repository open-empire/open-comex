/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('modalidadepagamento', {
    idmodalidadepagamento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cdmodalidadepagamento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmmodalidadepagamento: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'modalidadepagamento'
  });
};
