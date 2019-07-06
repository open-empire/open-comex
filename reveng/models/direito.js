/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('direito', {
    iddireito: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cddireito: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmdireito: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdativo: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'direito'
  });
};
