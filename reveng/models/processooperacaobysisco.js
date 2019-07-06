/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('processooperacaobysisco', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'processo',
        key: 'idprocesso'
      }
    },
    idprocessooperacaobysisco: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tpoperacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdnbsbysisco: {
      type: DataTypes.STRING,
      allowNull: true
    },
    valor: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idbysisco: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idbysiscooperacao: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    snfaturadopago: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'processooperacaobysisco'
  });
};
