/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('unidademedida', {
    idunidademedida: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cdunidademedida: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdunidadesiscomex: {
      type: DataTypes.STRING,
      allowNull: true
    },
    siglaunidademedida: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmunidademedidaportugues: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmunidademedidaespanhol: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmunidademedidaingles: {
      type: DataTypes.STRING,
      allowNull: true
    },
    qtcasasdecimais: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    codigofiesp: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpconversao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    codigofiergs: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdativo: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'unidademedida'
  });
};
