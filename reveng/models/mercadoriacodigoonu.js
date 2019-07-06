/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mercadoriacodigoonu', {
    idmercadoriacodigoonu: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cdmercadoriacodigoonu: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmmercadoriacodigoonu: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mmmercadoriacodigoonu: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'mercadoriacodigoonu'
  });
};
