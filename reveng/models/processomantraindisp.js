/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('processomantraindisp', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'processo',
        key: 'idprocesso'
      }
    },
    idprocessomantraindisp: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idindisponibilidade: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'indisponibilidade',
        key: 'idindisponibilidade'
      }
    },
    dtindisponibilidade: {
      type: DataTypes.DATE,
      allowNull: true
    },
    responsavel: {
      type: DataTypes.STRING,
      allowNull: true
    },
    txobservacao: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'processomantraindisp'
  });
};
