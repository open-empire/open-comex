/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('byimagens', {
    idimagem: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nmimagem: {
      type: DataTypes.STRING,
      allowNull: true
    },
    imagem: {
      type: "OID",
      allowNull: true
    }
  }, {
    tableName: 'byimagens'
  });
};
