/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('processosiscargapendencia', {
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
    idprocessosiscargapendencia: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tpoperacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtoperacao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    nmresponsavel: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmjustificativa: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmrecebedor: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'processosiscargapendencia'
  });
};
