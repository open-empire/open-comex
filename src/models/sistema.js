/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sistema', {
    idsistema: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    descricao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nomeclasseformdesktop: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'sistema'
  });
};
