/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('processodocumentacao', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'processo',
        key: 'idprocesso'
      }
    },
    idprocessodocumentacao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iddocumentacao: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'documentacao',
        key: 'iddocumentacao'
      }
    },
    idtextopadrao: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'textopadrao',
        key: 'idtextopadrao'
      }
    },
    nrdocumento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrserienfdocumento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtemissaodocumento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    vlrprocessodocumento: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    mmtextopadrao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idmoeda: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'moeda',
        key: 'idmoeda'
      }
    }
  }, {
    tableName: 'processodocumentacao'
  });
};
