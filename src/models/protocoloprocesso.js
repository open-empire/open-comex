/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('protocoloprocesso', {
    idprotocolo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'protocolo',
        key: 'idprotocolo'
      }
    },
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'processo',
        key: 'idprocesso'
      }
    },
    dtrejeicao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    txmotivorejeicao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idprotocoloanterior: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'protocolo',
        key: 'idprotocolo'
      }
    },
    idprotocolosolucao: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'protocolo',
        key: 'idprotocolo'
      }
    }
  }, {
    tableName: 'protocoloprocesso'
  });
};
