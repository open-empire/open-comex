/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('processocarga', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'processo',
        key: 'idprocesso'
      }
    },
    idprocessocarga: {
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
    vlquantidade: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlaltura: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vllargura: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcomprimento: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesovolumetrico: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesobrutokg: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesobrutoton: {
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
    idcontainer: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tipocontainer',
        key: 'idtipocontainer'
      }
    },
    vlvendacontainer: {
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
    idespeciesvolumes: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'especiesvolumes',
        key: 'idespeciesvolumes'
      }
    },
    txncmmercante: {
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
    vlpesobrutounitariokg: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tpunidadevolume: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlalturainches: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vllargurainches: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcomprimentoinches: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nrcontainer: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrlacre: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vltara: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'processocarga'
  });
};
