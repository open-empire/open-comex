/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('parametros', {
    idparametros: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idsistema: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'sistema',
        key: 'idsistema'
      }
    },
    parametro: {
      type: DataTypes.STRING,
      allowNull: true
    },
    valorparametro: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'parametros'
  });
};
