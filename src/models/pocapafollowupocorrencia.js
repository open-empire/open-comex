/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pocapafollowupocorrencia', {
    idpocapafollowupocorrencia: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idpocapafollowup: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pocapafollowup',
        key: 'idpocapafollowup'
      }
    },
    idpocapa: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idocorrencia: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ocorrencia',
        key: 'idocorrencia'
      }
    }
  }, {
    tableName: 'pocapafollowupocorrencia'
  });
};
