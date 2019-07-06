/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('unidademedidadescricao', {
    idunidademedida: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'unidademedida',
        key: 'idunidademedida'
      }
    },
    idunidademedidadescricao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    descricaoauxiliar: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'unidademedidadescricao'
  });
};
