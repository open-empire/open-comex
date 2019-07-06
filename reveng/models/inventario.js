/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('inventario', {
    idinventario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tpstatus: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtinventario: {
      type: DataTypes.DATE,
      allowNull: true
    },
    idagente: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idcontato: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    nrinvoice: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrpedido: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'processocarga',
        key: 'idprocesso'
      }
    },
    idprocessocarga: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    idprocessocontainer: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    idpessoaestrangeira: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    txpessoaestrangeira: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idpessoacliente: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    idembalagem: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'embalagem',
        key: 'idembalagem'
      }
    },
    nrpartnumber: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrserialnumber: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlqtdevolumes: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcomprimentoag: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcomprimento: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vllarguraag: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vllargura: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlalturaag: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlaltura: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tpunidadedimensoes: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlpesobrutoag: {
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
    vlpesoliquidoag: {
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
    tpunidadepeso: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlpesovolumetricoag: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesovolumetrico: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tpunidadevolume: {
      type: DataTypes.STRING,
      allowNull: true
    },
    txdescricaomercadoria: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idpessoaetranspitl: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    qtdediasfreetimearmazemag: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'inventario'
  });
};
