/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pessoadanfe', {
    idpessoa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    idpessoadanfe: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iddocumento: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'documento',
        key: 'iddocumento'
      }
    }
  }, {
    tableName: 'pessoadanfe'
  });
};
