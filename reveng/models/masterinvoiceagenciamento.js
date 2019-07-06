/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('masterinvoiceagenciamento', {
    idmaster: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'master',
        key: 'idmaster'
      }
    },
    idmasterinvoiceagenciamento: {
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
    idagente: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    idmoedafatura: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'moeda',
        key: 'idmoeda'
      }
    },
    dtvencimento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'processo',
        key: 'idprocesso'
      }
    }
  }, {
    tableName: 'masterinvoiceagenciamento'
  });
};
