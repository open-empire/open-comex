/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('processorodnacionalnf', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'processorodnacional',
        key: 'idprocesso'
      }
    },
    idprocessorodnacional: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idprocessorodnacionalnf: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tpdocumento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrnotafiscal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    serie: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtemissaonotafiscal: {
      type: DataTypes.DATE,
      allowNull: true
    },
    idnaturezaoperacao: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'naturezaoperacao',
        key: 'idnaturezaoperacao'
      }
    },
    nrchavenfe: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idunidademedida: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'unidademedida',
        key: 'idunidademedida'
      }
    },
    quantidade: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesobruto: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalnota: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'processorodnacionalnf'
  });
};
