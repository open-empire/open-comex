/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('historicoresiscomexfabradic', {
    idhistoricoresiscomex: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'historicoresiscomex',
        key: 'idhistoricoresiscomex'
      }
    },
    idhistoricoresiscomexfabradic: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cnpj: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cduf: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nratoconcessorio: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdncm: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlqtdeitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nritemdrawback: {
      type: DataTypes.STRING,
      allowNull: true
    },
    pesoliquido: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    observacao: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'historicoresiscomexfabradic'
  });
};
