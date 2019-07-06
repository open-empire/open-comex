/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('processoexportacaorefabradic', {
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
    idprocessoexportacaorefabradic: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idpessoafabricante: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
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
    idufprodutor: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'uf',
        key: 'iduf'
      }
    },
    nrregistrodrawback: {
      type: DataTypes.STRING,
      allowNull: true
    },
    quantidade: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    valor: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    pesoliquido: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    observacao: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'processoexportacaorefabradic'
  });
};
