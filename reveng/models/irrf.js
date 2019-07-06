/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('irrf', {
    idirrf: {
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
    data: {
      type: DataTypes.DATE,
      allowNull: true
    },
    vlir: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlbasecalculo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'irrf'
  });
};
