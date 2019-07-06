/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('incoterm', {
    idincoterm: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cdincoterm: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmincoterm: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snativo: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'incoterm'
  });
};
