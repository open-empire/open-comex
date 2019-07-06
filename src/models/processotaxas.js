/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('processotaxas', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'pagamentoitemembarque',
        key: 'idprocesso'
      }
    },
    idprocessotaxas: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iditemdespesa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'itemdespesa',
        key: 'iditemdespesa'
      }
    },
    idfavorecido: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    sndeclarado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snprofit: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tptaxa: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpcobranca: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tporigemtaxa: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpprocedencia: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpestufagem: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpbasecalculo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlintervaloinicial: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlintervalofinal: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idmoedacompra: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'moeda',
        key: 'idmoeda'
      }
    },
    idpagamentoitemembarque: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    vlbasecompra: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcompraminimo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcompra: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idmoedavenda: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'moeda',
        key: 'idmoeda'
      }
    },
    vlbasevenda: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlvendaminimo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlvenda: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tpresppagamento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idmastertaxas: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tpdue: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlvendaconvertido: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcompraconvertido: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    snbaseicms: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vltaxa: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    txtobservacaotaxas: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'processotaxas'
  });
};
