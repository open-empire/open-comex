/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fluxocaixa', {
    idfluxocaixa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idfluxocaixaseq: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    dia: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    vlcontaspagar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcontasreceber: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlsaldodia: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlsaldoacumulado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldebitocaixa: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcreditocaixa: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    dtinicial: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtfinal: {
      type: DataTypes.DATE,
      allowNull: true
    },
    vlsaldoinicial: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    mes: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ano: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'fluxocaixa'
  });
};
