/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('processoexportaitemmercperig', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'processoexportacaoitem',
        key: 'idprocesso'
      }
    },
    idprocessoexportacao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idprocessoexportacaoitem: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idprocessoexportaitemmercperig: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idclassemercadoriaperigosa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'classemercadoriaperigosa',
        key: 'idclassemercadoriaperigosa'
      }
    },
    idtipomercadoriaperigosa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tipomercadoriaperigosa',
        key: 'idtipomercadoriaperigosa'
      }
    },
    idprocessoexportacaore: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'processoexportaitemmercperig'
  });
};
