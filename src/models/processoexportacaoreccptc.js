/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('processoexportacaoreccptc', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'processoexportacaore',
        key: 'idprocesso'
      }
    },
    idprocessoexportacao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idprocessoexportacaore: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idprocessoexportacaoreccptc: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    codigoccptc: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idncm: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ncm',
        key: 'idncm'
      }
    },
    idunidademedida: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'unidademedida',
        key: 'idunidademedida'
      }
    },
    vlqtdeunidestatistica: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'processoexportacaoreccptc'
  });
};
