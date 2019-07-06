/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('processocontainer', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'processo',
        key: 'idprocesso'
      }
    },
    idprocessocontainer: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idtipocontainer: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tipocontainer',
        key: 'idtipocontainer'
      }
    },
    nrcontainer: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrlacre: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtprevisaodevolucao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtefetivadevlucao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    vlpesotonelagem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesoliquidotonelagem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    qtdediasfreetime: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    vltara: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlqtdevolumes: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesoliquidokg: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesobrutokg: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesobaixado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesodisponivel: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesovolumetrico: {
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
    txdescricaomercadoria: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlcustodemurrage: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcustototaldemurrage: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpercdescontocusto: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcustototaldemurragereais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltaxacusto: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlvendademurrage: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlvendadtotalemurrage: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpercdescontovenda: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltaxavenda: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlvendadtotalemurragereais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrecebido: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlsaldoaberto: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcaucao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nrchequecaucao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sndevolucaoprocessada: {
      type: DataTypes.STRING,
      allowNull: true
    },
    txadicional: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrlacreorigem: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrplacacavalo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrplacacarreta: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtprevisaodevolucaocliente: {
      type: DataTypes.DATE,
      allowNull: true
    },
    qtdediasfreetimecliente: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    vlsaldopagamento: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpagamentobaixado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idtabelademurrage: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tabelademurrage',
        key: 'idtabelademurrage'
      }
    },
    snnaoembarcou: {
      type: DataTypes.STRING,
      allowNull: true
    },
    txncmmercante: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idterminaldevolucao: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'terminalcarga',
        key: 'idterminalcarga'
      }
    },
    dtprevisaoentrega: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtefetivaentrega: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtprevisaosaida: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtefetivasaida: {
      type: DataTypes.DATE,
      allowNull: true
    },
    vlcaucaovenda: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'processocontainer'
  });
};
