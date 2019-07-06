/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pedidoembarquefollowup', {
    idpedidoembarquecapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'pedidoembarquecapa',
        key: 'idpedidoembarquecapa'
      }
    },
    idpedidoembarquefollowup: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idevento: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'eventos',
        key: 'idevento'
      }
    },
    dtrealizacao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtprevisao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    observacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snobrigaeventoanterior: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpcontrole: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idusuario: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nrordem: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nrprazo: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'pedidoembarquefollowup'
  });
};
