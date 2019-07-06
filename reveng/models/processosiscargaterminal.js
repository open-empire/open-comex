/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('processosiscargaterminal', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'processosiscarga',
        key: 'idprocesso'
      }
    },
    idprocessosiscarga: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idprocessosiscargaterminal: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cdmercanteterminal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmmercanteterminal: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'processosiscargaterminal'
  });
};
