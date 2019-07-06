/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mercadoriafamilia', {
    idmercadoriafamilia: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cdmercadoriafamilia: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmmercadoriafamilia: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idpessoa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    }
  }, {
    tableName: 'mercadoriafamilia'
  });
};
