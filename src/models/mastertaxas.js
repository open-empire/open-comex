/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mastertaxas', {
    idmaster: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'master',
        key: 'idmaster'
      }
    },
    idmastertaxas: {
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
    tpresppagamento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tporigemtaxa: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpbasecalculo: {
      type: DataTypes.STRING,
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
    vlbasecompra: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcompra: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idmoedavenda: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    vlbasevenda: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlvenda: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcompraconvertido: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tpprocedencia: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpstatuspagamento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpdue: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlcompraminimo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idfavorecido: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    }
  }, {
    tableName: 'mastertaxas'
  });
};
