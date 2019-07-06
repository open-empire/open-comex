/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('parametrotranstms', {
    idparametrotranstms: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idtransmissaotms: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'transmissaotms',
        key: 'idtransmissaotms'
      }
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: true
    },
    valor: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'parametrotranstms'
  });
};
