/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('modelonotaservico', {
    idmodelonotaservico: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cdmodelonotaservico: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmmodelonotaservico: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrserie: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrultimodocumento: {
      type: DataTypes.STRING,
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
    nrultimonotadespesa: {
      type: DataTypes.STRING,
      allowNull: true
    },
    iddocumentonotadespesa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'documento',
        key: 'iddocumento'
      }
    },
    snativo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snalteranumeronfs: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snalteranumeronfd: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snfinanceirondquandoreceita: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snmodificarnrservico: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'modelonotaservico'
  });
};
