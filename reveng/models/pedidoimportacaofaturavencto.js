/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pedidoimportacaofaturavencto', {
    idpedidoimportacaofaturacapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'pedidoimportacaofaturacapa',
        key: 'idpedidoimportacaofaturacapa'
      }
    },
    idvencto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    vlvencto: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlvenctoreais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    dtvencto: {
      type: DataTypes.DATE,
      allowNull: true
    },
    idfechamentocambiotrade: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'fechamentocambiotrade',
        key: 'idfechamentocambiotrade'
      }
    }
  }, {
    tableName: 'pedidoimportacaofaturavencto'
  });
};
