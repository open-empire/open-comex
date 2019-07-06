/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('processosiscargancm', {
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
    idprocessosiscargancm: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cdncmsiscarga: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmncmsiscarga: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'processosiscargancm'
  });
};
