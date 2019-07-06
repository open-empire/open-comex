/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('termopagamento', {
    idtermopagamento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ano: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cdtermopagamento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmtermopagamento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    periodicidade: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tpforma: {
      type: DataTypes.STRING,
      allowNull: true
    },
    quantidadeparcelas: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tpbasepagamento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    descricaoingles: {
      type: DataTypes.STRING,
      allowNull: true
    },
    descricaoespanhol: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idenquadramentooperacao: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'enquadramentooperacao',
        key: 'idenquadramentooperacao'
      }
    },
    idmodalidadetransacao: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'modalidadetransacao',
        key: 'idmodalidadetransacao'
      }
    },
    snativo: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'termopagamento'
  });
};
