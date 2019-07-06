/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('componentreport', {
    idcomponentreport: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iddocumento: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'documento',
        key: 'iddocumento'
      }
    },
    ordem: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    namefield: {
      type: DataTypes.STRING,
      allowNull: true
    },
    campofiltro: {
      type: DataTypes.STRING,
      allowNull: true
    },
    descricao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    valorinicial: {
      type: DataTypes.STRING,
      allowNull: true
    },
    valorfinal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idconsonline: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    grupocondicao: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    snobrigatorio: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idopcoesreport: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'opcoesreport',
        key: 'idopcoesreport'
      }
    }
  }, {
    tableName: 'componentreport'
  });
};
