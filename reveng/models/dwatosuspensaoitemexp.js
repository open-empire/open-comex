/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dwatosuspensaoitemexp', {
    iddwatosuspensaocapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'dwatosuspensaocapa',
        key: 'iddwatosuspensaocapa'
      }
    },
    iddwatosuspensaoitemexp: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idmercadoriaexp: {
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
    vlmledolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldolarsemcobertura: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    qtde: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    descricao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlperccomisagente: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    iddwlaudotecnico: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'dwlaudotecnico',
        key: 'iddwlaudotecnico'
      }
    },
    nritemdrawbackweb: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    qtdeexportar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    sntransmitir: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sntransmitido: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlunitariodolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    dttransmissao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    nrretificao: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sncancelado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlexportado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpercqtdeexportado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpercvalorexportado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    qtdeexportartada: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    qtdsaldoaexportar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrsaldoaexportar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    qtdediascicloproducao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    qtdefatoraplicado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    qtdecomercializada: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    qtdeexportartadacomerc: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    qtdsaldoaexportarcomerc: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpercqtdeexportadocomerc: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'dwatosuspensaoitemexp'
  });
};
