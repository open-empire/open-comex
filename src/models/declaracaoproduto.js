/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('declaracaoproduto', {
    iddeclaracaoproduto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cddeclaracaoproduto: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtabertura: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtvencimento: {
      type: DataTypes.DATE,
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
    idacordo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'acordoaladi',
        key: 'idacordoaladi'
      }
    },
    idmercadoriaexportacao: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'mercadoria',
        key: 'idmercadoria'
      }
    },
    vlfobdolarminimo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfobdolarmaximo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    snfabricacaopropria: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mmprocessoprodutivo: {
      type: "OID",
      allowNull: true
    },
    idnormaorigem: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'normas',
        key: 'idnormas'
      }
    },
    sntxtgerado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idpessoafabricantedeclaracao: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    tpdeclaracao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    enviadocni: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpacordo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snindustrializado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snautomotivo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cnpjfabricante: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snveiculo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snpeca: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'declaracaoproduto'
  });
};
