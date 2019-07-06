/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('acordoaladi', {
    idacordoaladi: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cdacordoaladi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmacordoaladi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    codigofiesp: {
      type: DataTypes.STRING,
      allowNull: true
    },
    codigofiergs: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'acordoaladi'
  });
};
