/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('processoexpcertordemdesc', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'processoexportacaocertordem',
        key: 'idprocesso'
      }
    },
    idprocessoexportacao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idprocessoexportacaocertorigem: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idprocessoexportacaocertordem: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idprocessoexpcertordemdesc: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    txdescricao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlpeso: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfob: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'processoexpcertordemdesc'
  });
};
