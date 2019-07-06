/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('transmissaotms', {
    idtransmissaotms: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    metodo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    datahora: {
      type: DataTypes.DATE,
      allowNull: true
    },
    erro: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'transmissaotms'
  });
};
