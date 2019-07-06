/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('processoexpitemdrawback', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'processoexportacaoitem',
        key: 'idprocesso'
      }
    },
    idprocessoexportacao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idprocessoexportacaoitem: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idprocessoexpitemdrawback: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idncm: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ncm',
        key: 'idncm'
      }
    },
    idpessoabeneficiario: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
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
    vlquantidade: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmoedacomcoberturacambial: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmoedasemcoberturacambial: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tpatodrawback: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snexportadorbeneficiario: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'processoexpitemdrawback'
  });
};
