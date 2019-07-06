/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('setorimportacao', {
    idsetorimportacao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cdsetorimportacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmsetorimportacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idrecintoalfandegado: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'recintoalfandegado',
        key: 'idrecintoalfandegado'
      }
    },
    cdrecintosiscomex: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snativo: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'setorimportacao'
  });
};
