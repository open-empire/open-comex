/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('arquivamentoprocesso', {
    idarquivamento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cdidentificacaovolume: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtarquivamento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    nmarquivamento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    txobservacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtcancelamento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    cdcaixamestre: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtenviocaixamestre: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtdescartevolume: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'arquivamentoprocesso'
  });
};
