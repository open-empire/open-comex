/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('transferenciabancariaprocesso', {
    idtransferenciabancaria: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'transferenciabancaria',
        key: 'idtransferenciabancaria'
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
    vlsaldo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'transferenciabancariaprocesso'
  });
};
