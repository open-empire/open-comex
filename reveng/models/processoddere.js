/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('processoddere', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'processodde',
        key: 'idprocesso'
      }
    },
    idprocessodde: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idprocessoddere: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nrregistroexportacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrinicial: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrfinal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlmcvre: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesoliquidore: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesobrutore: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    origemre: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idprocessocapare: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idprocessoexportacao: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idprocessoexportacaore: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    txfinalidade1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    txfinalidade2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    txfinalidade3: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idprocessore: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'processo',
        key: 'idprocesso'
      }
    },
    tpreexportacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrdi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrdiadicao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrconcessao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlqtdadmissao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    opdocadmissao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    opqtdadicaode: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'processoddere'
  });
};
