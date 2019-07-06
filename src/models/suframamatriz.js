/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('suframamatriz', {
    idsuframamatriz: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idpessoacliente: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    idprodutosuframa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'produtosuframa',
        key: 'idproduto'
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
    tpdestinacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tputilizacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    iddireitofiscal: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'direitofiscal',
        key: 'iddireitofiscal'
      }
    },
    nrdecretoconcessivo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpdocumentoconcessivo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrdocumentoconcessivo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtinicialvigencia: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtfinalvigencia: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtgeracao: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'suframamatriz'
  });
};
