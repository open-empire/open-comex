/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('processoinvoiceagenciamento', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'processo',
        key: 'idprocesso'
      }
    },
    idprocessoinvoiceagenciamento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tpemissor: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpinvoice: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrinvoice: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlinvoice: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    dtinvoice: {
      type: DataTypes.DATE,
      allowNull: true
    },
    tpstatusinvoice: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idmoedafatura: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'moeda',
        key: 'idmoeda'
      }
    },
    vlbaixadoinvoice: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idmaster: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idmasterinvoiceagenciamento: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idagente: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    vlsaldoinvoice: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    dtemissao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    observacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sninvoicecomplementar: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtvencimento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    snintegrar: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'processoinvoiceagenciamento'
  });
};
