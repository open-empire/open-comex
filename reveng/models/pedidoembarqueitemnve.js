/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pedidoembarqueitemnve', {
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
    idpedidoembarqueitemnve: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idnivelnve: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'nivelnve',
        key: 'idnivelnve'
      }
    },
    idatributonve: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'atributonve',
        key: 'idatributonve'
      }
    },
    idespecificacaonve: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'especificacaonve',
        key: 'idespecificacaonve'
      }
    }
  }, {
    tableName: 'pedidoembarqueitemnve'
  });
};
