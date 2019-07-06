/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('formularioetiqueta', {
    idformularioetiqueta: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idusuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    etiqueta01: {
      type: DataTypes.STRING,
      allowNull: true
    },
    etiqueta02: {
      type: DataTypes.STRING,
      allowNull: true
    },
    etiqueta03: {
      type: DataTypes.STRING,
      allowNull: true
    },
    etiqueta04: {
      type: DataTypes.STRING,
      allowNull: true
    },
    etiqueta05: {
      type: DataTypes.STRING,
      allowNull: true
    },
    etiqueta06: {
      type: DataTypes.STRING,
      allowNull: true
    },
    etiqueta07: {
      type: DataTypes.STRING,
      allowNull: true
    },
    etiqueta08: {
      type: DataTypes.STRING,
      allowNull: true
    },
    etiqueta09: {
      type: DataTypes.STRING,
      allowNull: true
    },
    etiqueta10: {
      type: DataTypes.STRING,
      allowNull: true
    },
    etiqueta11: {
      type: DataTypes.STRING,
      allowNull: true
    },
    etiqueta12: {
      type: DataTypes.STRING,
      allowNull: true
    },
    etiqueta13: {
      type: DataTypes.STRING,
      allowNull: true
    },
    etiqueta14: {
      type: DataTypes.STRING,
      allowNull: true
    },
    etiqueta15: {
      type: DataTypes.STRING,
      allowNull: true
    },
    etiqueta16: {
      type: DataTypes.STRING,
      allowNull: true
    },
    etiqueta17: {
      type: DataTypes.STRING,
      allowNull: true
    },
    etiqueta18: {
      type: DataTypes.STRING,
      allowNull: true
    },
    etiqueta19: {
      type: DataTypes.STRING,
      allowNull: true
    },
    etiqueta20: {
      type: DataTypes.STRING,
      allowNull: true
    },
    codigobarra01: {
      type: DataTypes.STRING,
      allowNull: true
    },
    codigobarra02: {
      type: DataTypes.STRING,
      allowNull: true
    },
    codigobarra03: {
      type: DataTypes.STRING,
      allowNull: true
    },
    codigobarra04: {
      type: DataTypes.STRING,
      allowNull: true
    },
    codigobarra05: {
      type: DataTypes.STRING,
      allowNull: true
    },
    codigobarra06: {
      type: DataTypes.STRING,
      allowNull: true
    },
    codigobarra07: {
      type: DataTypes.STRING,
      allowNull: true
    },
    codigobarra08: {
      type: DataTypes.STRING,
      allowNull: true
    },
    codigobarra09: {
      type: DataTypes.STRING,
      allowNull: true
    },
    codigobarra10: {
      type: DataTypes.STRING,
      allowNull: true
    },
    codigobarra11: {
      type: DataTypes.STRING,
      allowNull: true
    },
    codigobarra12: {
      type: DataTypes.STRING,
      allowNull: true
    },
    codigobarra13: {
      type: DataTypes.STRING,
      allowNull: true
    },
    codigobarra14: {
      type: DataTypes.STRING,
      allowNull: true
    },
    codigobarra15: {
      type: DataTypes.STRING,
      allowNull: true
    },
    codigobarra16: {
      type: DataTypes.STRING,
      allowNull: true
    },
    codigobarra17: {
      type: DataTypes.STRING,
      allowNull: true
    },
    codigobarra18: {
      type: DataTypes.STRING,
      allowNull: true
    },
    codigobarra19: {
      type: DataTypes.STRING,
      allowNull: true
    },
    codigobarra20: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'formularioetiqueta'
  });
};
