/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('acordonormas', {
    idacordonormas: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idacordo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'acordoaladi',
        key: 'idacordoaladi'
      }
    },
    idnormas: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'normas',
        key: 'idnormas'
      }
    }
  }, {
    tableName: 'acordonormas'
  });
};
