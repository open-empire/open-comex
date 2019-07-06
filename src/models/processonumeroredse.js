/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('processonumeroredse', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'processo',
        key: 'idprocesso'
      }
    },
    idprocessonumeroredse: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nrredse: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtregistro: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtaverbacao: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'processonumeroredse'
  });
};
