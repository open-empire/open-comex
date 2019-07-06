/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pedidoembarquecontainer', {
    idpedidoembarquecapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'pedidoembarquecapa',
        key: 'idpedidoembarquecapa'
      }
    },
    idpedidoembarquecontainer: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idtipocontainer: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tipocontainer',
        key: 'idtipocontainer'
      }
    },
    nrcontainer: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrlacre: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtprevisaodevolucao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtdevolucao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    pesotonelada: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    freetime: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    identificacaocarga: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtvencimentodemurrage: {
      type: DataTypes.DATE,
      allowNull: true
    },
    observacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dias: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'pedidoembarquecontainer'
  });
};
