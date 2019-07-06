/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('modelosda', {
    idmodelosda: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cdmodelosda: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmmodelosda: {
      type: DataTypes.STRING,
      allowNull: true
    },
    iddocumento: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'documento',
        key: 'iddocumento'
      }
    },
    tpmodeloonline: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'modelosda'
  });
};
