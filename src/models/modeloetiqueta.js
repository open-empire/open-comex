/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('modeloetiqueta', {
    idmodeloetiqueta: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cdmodeloetiqueta: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmmodeloetiqueta: {
      type: DataTypes.STRING,
      allowNull: true
    },
    qtdeetiquetaporpagina: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    qtdecaracteresporetiqueta: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tpservico: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idreportetiqueta: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'documento',
        key: 'iddocumento'
      }
    }
  }, {
    tableName: 'modeloetiqueta'
  });
};
