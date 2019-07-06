/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('atoconcessorioitemexpre', {
    idatoconcessoriocapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'atoconcessorioitemexportado',
        key: 'idatoconcessoriocapa'
      }
    },
    idatoconcessorioitemexportado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idatoconcessorioitemexpre: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nrregistrore: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtregistrore: {
      type: DataTypes.DATE,
      allowNull: true
    },
    idpessoaexportador: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    situacaore: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtembarque: {
      type: DataTypes.DATE,
      allowNull: true
    },
    cdenquadramento1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdenquadramento2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdenquadramento3: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdenquadramento4: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdenquadramento5: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdenquadramento6: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idncmexportado: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ncm',
        key: 'idncm'
      }
    },
    idmoeda: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'moeda',
        key: 'idmoeda'
      }
    },
    observacaoregistroexportacao: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'atoconcessorioitemexpre'
  });
};
