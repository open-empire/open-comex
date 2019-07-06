/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dwpedidoimportacao', {
    iddwatoisencaocapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'dwatoisencaoitemmatprima',
        key: 'iddwatoisencaocapa'
      }
    },
    iddwatoisencaoitemmatprima: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idpedidoimportacao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nrpedido: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtpedido: {
      type: DataTypes.DATE,
      allowNull: true
    },
    referenciacliente: {
      type: DataTypes.STRING,
      allowNull: true
    },
    qtdeestatistica: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlunitariodolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalfobdolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfrete: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlseguro: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalcif: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    numeroli: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtregistroli: {
      type: DataTypes.DATE,
      allowNull: true
    },
    situacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    numerodi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtregistrodi: {
      type: DataTypes.DATE,
      allowNull: true
    },
    vlpesoliquido: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrimportado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    qtdeimportado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrsaldopedido: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    qtdesaldopedido: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    situacaoli: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'dwpedidoimportacao'
  });
};
