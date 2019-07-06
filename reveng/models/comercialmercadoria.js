/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('comercialmercadoria', {
    idcomercial: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'comercial',
        key: 'idcomercial'
      }
    },
    idcomercialmercadoria: {
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
    idcontainer: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tipocontainer',
        key: 'idtipocontainer'
      }
    },
    vlqtdemercadoria: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcomprimento: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vllargura: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlaltura: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesokg: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesoton: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcubagem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlvendacontainer: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcompracontainer: {
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
    vltotalmetrocubico: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'comercialmercadoria'
  });
};
