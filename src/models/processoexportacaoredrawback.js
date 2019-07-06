/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('processoexportacaoredrawback', {
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
    idprocessoexportacaoredrawback: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idbeneficiario: {
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
    nratoconcessorio: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nritematoconcessorio: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlmoedarecomcoberturacambial: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmoedaresemcoberturacambial: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    quantidade: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'processoexportacaoredrawback'
  });
};
