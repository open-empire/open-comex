/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('processotransbordo', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'processo',
        key: 'idprocesso'
      }
    },
    idprocessotransbordo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idcidadeporto: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'cidade',
        key: 'idcidade'
      }
    },
    idembarcacao: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'embarcacao',
        key: 'idembarcacao'
      }
    },
    dtchegada: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtsaida: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'processotransbordo'
  });
};
