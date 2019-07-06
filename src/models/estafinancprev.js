/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('estafinancprev', {
    idestafinancprev: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idunidadeoperacional: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
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
    vlrservico: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlperclucro: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'estafinancprev'
  });
};
