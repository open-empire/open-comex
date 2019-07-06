/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('diitemddnfemedicamento', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'diitem',
        key: 'idprocesso'
      }
    },
    iddicapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iddiitem: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iddiitemddnfemedicamento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    campo1: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    campo2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    campo3: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    campo4: {
      type: DataTypes.DATE,
      allowNull: true
    },
    campo5: {
      type: DataTypes.DATE,
      allowNull: true
    },
    campo6: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    campo7: {
      type: DataTypes.STRING,
      allowNull: true
    },
    campo8: {
      type: DataTypes.STRING,
      allowNull: true
    },
    campo9: {
      type: DataTypes.STRING,
      allowNull: true
    },
    campo10: {
      type: DataTypes.STRING,
      allowNull: true
    },
    campo11: {
      type: DataTypes.STRING,
      allowNull: true
    },
    campo12: {
      type: DataTypes.STRING,
      allowNull: true
    },
    campo13: {
      type: DataTypes.STRING,
      allowNull: true
    },
    campo14: {
      type: DataTypes.STRING,
      allowNull: true
    },
    campo15: {
      type: DataTypes.STRING,
      allowNull: true
    },
    campo16: {
      type: DataTypes.STRING,
      allowNull: true
    },
    campo17: {
      type: DataTypes.STRING,
      allowNull: true
    },
    campo18: {
      type: DataTypes.STRING,
      allowNull: true
    },
    campo19: {
      type: DataTypes.STRING,
      allowNull: true
    },
    campo20: {
      type: DataTypes.STRING,
      allowNull: true
    },
    campo21: {
      type: DataTypes.STRING,
      allowNull: true
    },
    campo22: {
      type: DataTypes.STRING,
      allowNull: true
    },
    campo23: {
      type: DataTypes.STRING,
      allowNull: true
    },
    campo24: {
      type: DataTypes.STRING,
      allowNull: true
    },
    campo25: {
      type: DataTypes.STRING,
      allowNull: true
    },
    campo26: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'diitemddnfemedicamento'
  });
};
