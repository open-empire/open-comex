/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('followupocorrencia', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'followupprocesso',
        key: 'idprocesso'
      }
    },
    idfollowupprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idfollowupocorrencia: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
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
    tableName: 'followupocorrencia'
  });
};
