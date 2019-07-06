/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pessoacredenciamento', {
    idpessoa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    idcredenciamento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tpcredenciamento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtcredenciamento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    txobservacao: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'pessoacredenciamento'
  });
};
