/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('declaracaoprodutoinsumos', {
    iddeclaracaoproduto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'declaracaoproduto',
        key: 'iddeclaracaoproduto'
      }
    },
    iddeclaracaoprodutoinsumos: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tporigeminsumo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idmercadoriainsumo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'mercadoria',
        key: 'idmercadoria'
      }
    },
    vlcifdolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    percentualparticipacao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tpfornecedor: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idpessoafornecedor: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    }
  }, {
    tableName: 'declaracaoprodutoinsumos'
  });
};
