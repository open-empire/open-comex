/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('controleestoque', {
    idcontroleestoque: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    periodoinicial: {
      type: DataTypes.DATE,
      allowNull: true
    },
    periodofinal: {
      type: DataTypes.DATE,
      allowNull: true
    },
    tpapuracao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idmercadoria: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'mercadoria',
        key: 'idmercadoria'
      }
    },
    idncm: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ncm',
        key: 'idncm'
      }
    },
    idunidademedidacompra: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'unidademedida',
        key: 'idunidademedida'
      }
    },
    idpessoaexportador: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    vlsaldoanterior: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlquantidadenfe: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlquantidadenfs: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlsaldoitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlsaldocadastromercadoria: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalquantidadenfe: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalquantidadenfs: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlqtdajustado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'controleestoque'
  });
};
