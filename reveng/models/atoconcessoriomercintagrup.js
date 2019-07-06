/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('atoconcessoriomercintagrup', {
    idatoconcessoriocapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'atoconcessoriocapa',
        key: 'idatoconcessoriocapa'
      }
    },
    idatoconcessoriomercintagrup: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idlaudotecnico: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idlaudotecnicocomposicao: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idmercadoriamercadointerno: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'mercadoria',
        key: 'idmercadoria'
      }
    },
    descricaoitemmercadointerno: {
      type: DataTypes.STRING,
      allowNull: true
    },
    qtitemmercadointerno: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlunitarioitemmercadointerno: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalitemmercadointerno: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idncmmercadointerno: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ncm',
        key: 'idncm'
      }
    },
    vlpesoliquidoitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    seqitemsiscomex: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlcoeficienteutilizacao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idunidademedidamercadointerno: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'unidademedida',
        key: 'idunidademedida'
      }
    },
    percentualperda: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    snitemreimportadoweb: {
      type: DataTypes.STRING,
      allowNull: true
    },
    totalnfvinculada: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    qtdetotalnfvinculadas: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalnfvinculadas: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    qtdetotalsaldomercadointerno: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalsaldomercadointerno: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    qtitemmercadointernoestat: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    qtdetotalnfvinculadascomerc: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    qtdetotalsaldomercadointcomerc: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    snenviarpararetificacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snincluirnaretificacao: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'atoconcessoriomercintagrup'
  });
};
