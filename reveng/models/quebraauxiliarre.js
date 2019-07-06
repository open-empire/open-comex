/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('quebraauxiliarre', {
    idquebraauxiliarre: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cdquebraauxiliarre: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmquebraauxiliarre: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sntermopagamento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snfatura: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'quebraauxiliarre'
  });
};
