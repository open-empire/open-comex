/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('metodovaloracaoaduaneira', {
    idmetodovaloracaoaduaneira: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cdmetodovaloracaoaduaneira: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmmetodovaloracaoaduaneira: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'metodovaloracaoaduaneira'
  });
};
