/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('liitemlote', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'liitem',
        key: 'idprocesso'
      }
    },
    idlicapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idliitem: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idliitemlote: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    lote: {
      type: DataTypes.STRING,
      allowNull: true
    },
    validadelote: {
      type: DataTypes.STRING,
      allowNull: true
    },
    quantidadelote: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    dtvalidadelote: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'liitemlote'
  });
};
