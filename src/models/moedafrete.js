/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('moedafrete', {
    idmoedafrete: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idmoeda: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'moeda',
        key: 'idmoeda'
      }
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    data: {
      type: DataTypes.DATE,
      allowNull: true
    },
    vltxcompra: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltxoficial: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltxutilizada: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idpessoaarmador: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    }
  }, {
    tableName: 'moedafrete'
  });
};
