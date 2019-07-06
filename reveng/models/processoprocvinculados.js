/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('processoprocvinculados', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'processo',
        key: 'idprocesso'
      }
    },
    idprocessoprocvinculados: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tpprocessovinculado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrprocessovinculado: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'processoprocvinculados'
  });
};
