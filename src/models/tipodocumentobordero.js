/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tipodocumentobordero', {
    iddocumentacao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idtipodocumentobordero: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nmdescricao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ordemdocumento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    qtdeoriginal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    qtdecopia: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'tipodocumentobordero'
  });
};
