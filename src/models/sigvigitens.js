/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sigvigitens', {
    idsigvigcapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'sigvigcapa',
        key: 'idsigvigcapa'
      }
    },
    idsigvigitem: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idlicapa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    idliitem: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'liitem',
        key: 'idprocesso'
      }
    },
    vlqtdvolume: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idvolume: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'especiesvolumes',
        key: 'idespeciesvolumes'
      }
    },
    nmdescricaoprodsigvig: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vldolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'sigvigitens'
  });
};
