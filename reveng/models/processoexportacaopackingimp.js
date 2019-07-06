/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('processoexportacaopackingimp', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'processoexportacaopackingemb',
        key: 'idprocesso'
      }
    },
    idprocessoexportacao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idprocessoexportacaopacking: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idprocessoexportacaopackingimp: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idprocessoexportacaopackingit: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    idprocessoexportacaopackembit: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    idprocexportpackingembnivel0: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    idprocexportpackingembnivel1: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    idprocexportpackingembnivel2: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    idprocexportpackingembnivel3: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    idprocexportpackingembnivel4: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    }
  }, {
    tableName: 'processoexportacaopackingimp'
  });
};
