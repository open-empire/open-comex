/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pessoadespesa', {
    idpessoadespesa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cdpessoadespesa: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idpessoacliente: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    pessoadespesaativo: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'pessoadespesa'
  });
};
