/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('processoexportacaorenfdrawb', {
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
    idprocessoexportacaorenfdrawb: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nrnotafiscal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    datanotafiscal: {
      type: DataTypes.DATE,
      allowNull: true
    },
    valornotafiscal: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlqtdeexportada: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'processoexportacaorenfdrawb'
  });
};
