/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pedidoembarqueitemacessorio', {
    idpedidoembarquecapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'pedidoembarqueitem',
        key: 'idpedidoembarquecapa'
      }
    },
    idpedidoembarqueitem: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idpedidoembarqueitemacessorio: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idmercadoriaacessorio: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'mercadoria',
        key: 'idmercadoria'
      }
    },
    vlquantidadeunitaria: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesounitario: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlunitario: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nmdescricaoitem: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlquantidadetotal: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesototal: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotal: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nrserieacessorio: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'pedidoembarqueitemacessorio'
  });
};
