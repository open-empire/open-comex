/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mercadoriaacessorio', {
    idmercadoria: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'mercadoria',
        key: 'idmercadoria'
      }
    },
    idmercadoriaacessorio: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    qtmercadoria: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idacessorio: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'mercadoria',
        key: 'idmercadoria'
      }
    },
    nrserieacessorio: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'mercadoriaacessorio'
  });
};
