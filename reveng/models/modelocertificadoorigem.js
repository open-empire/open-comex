/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('modelocertificadoorigem', {
    idmodelocertificadoorigem: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cdmodelocertificadoorigem: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmmodelocertificadoorigem: {
      type: DataTypes.STRING,
      allowNull: true
    },
    qtdelinhasordem: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    qtdelinhasnorma: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    qtdelinhasre: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    iddocumento: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'documento',
        key: 'iddocumento'
      }
    },
    tpquebraformulario: {
      type: DataTypes.STRING,
      allowNull: true
    },
    qtcaraccoldescmercadoria: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    snitensprocessoexportacao: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'modelocertificadoorigem'
  });
};
