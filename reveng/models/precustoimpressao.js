/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('precustoimpressao', {
    idpedidoembarquecapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'pedidoembarquecapa',
        key: 'idpedidoembarquecapa'
      }
    },
    idprecustoimpressao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idusuariolanc: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usuario',
        key: 'idusuario'
      }
    },
    dtimpressao: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'precustoimpressao'
  });
};
