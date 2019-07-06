/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('in381', {
    idin: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idfaturamento: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'faturamento',
        key: 'idfaturamento'
      }
    },
    idcliente: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    idgrupocliente: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'grupocliente',
        key: 'idgrupocliente'
      }
    },
    mesano: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlrin: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrpisin: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrcofinsin: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrcsllin: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrbasecalculoin: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idgrupounidadeoperacional: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    snretido: {
      type: DataTypes.STRING,
      allowNull: true
    },
    diamesano: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'in381'
  });
};
