/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('processomercadoria', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'processo',
        key: 'idprocesso'
      }
    },
    idprocessomercadoria: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idmercadoria: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'mercadoria',
        key: 'idmercadoria'
      }
    },
    idncm: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ncm',
        key: 'idncm'
      }
    },
    idunidademedida: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'unidademedida',
        key: 'idunidademedida'
      }
    },
    vlquantidade: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesobrutokg: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesoliquidokg: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesoliquidoton: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    txdescricaomercadoria: {
      type: DataTypes.STRING,
      allowNull: true
    },
    txcompldescricaomercadoria: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlunitario: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotal: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    txinfovolumes: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nridentificacaovolume: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    txdescricaomercadoriaingles: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'processomercadoria'
  });
};
