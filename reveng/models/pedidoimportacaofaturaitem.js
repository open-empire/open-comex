/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pedidoimportacaofaturaitem', {
    idpedidoimportacaofaturacapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'pedidoimportacaofaturacapa',
        key: 'idpedidoimportacaofaturacapa'
      }
    },
    idpedidoimportacaofaturaitem: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    vlquantidadeitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesototalitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idpedidoimportacaocapa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pedidoimportacaoitem',
        key: 'idpedidoimportacaocapa'
      }
    },
    idpedidoimportacaoitem: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    idorgaoanuente: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'orgaoanuente',
        key: 'idorgaoanuente'
      }
    },
    nrregistroli: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snnecessitali: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtdeferimento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtvalidade: {
      type: DataTypes.DATE,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'pedidoimportacaofaturaitem'
  });
};
