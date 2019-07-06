/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('processoexportacaodsecapa', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'processoexportacao',
        key: 'idprocesso'
      }
    },
    idprocessoexportacao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idprocessoexportacaodsecapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nrdeclaracaosimplificada: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtdeclaracaosimplificada: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtinclusao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    situacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idpessoadespachante: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    idnaturezaoperacao: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'naturezaoperacao',
        key: 'idnaturezaoperacao'
      }
    },
    idurfdespacho: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'urf',
        key: 'idurf'
      }
    },
    idurfembarque: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'urf',
        key: 'idurf'
      }
    },
    idpaisdestino: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pais',
        key: 'idpais'
      }
    },
    tppostalcourier: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idpessoacourier: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    veiculotransportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    recinto: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlpesobrutototal: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    valortotal: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    quantidadetotal: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    setor: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrdieletronica: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrdsieletronica: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dias: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nrdinaoeletronica: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idulemissaodinaoeletronica: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'urf',
        key: 'idurf'
      }
    },
    dtemissaodinaoeletronica: {
      type: DataTypes.DATE,
      allowNull: true
    },
    nrdsinaoeletronica: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idulemissaodsinaoeletronica: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'urf',
        key: 'idurf'
      }
    },
    dtemissaodsinaoeletronica: {
      type: DataTypes.DATE,
      allowNull: true
    },
    sncargasujeitaarmazenamento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snoutrosdocinformadosrecepcao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sninformacaopresencacarga: {
      type: DataTypes.STRING,
      allowNull: true
    },
    txdocumentosinstrutivos: {
      type: DataTypes.STRING,
      allowNull: true
    },
    txinformacoescomplementares: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mmtelastransmissaodsesiscomex: {
      type: "OID",
      allowNull: true
    },
    tpcliente: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlpesoliquidototal: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cdnaturezaoperacaodse: {
      type: DataTypes.STRING,
      allowNull: true
    },
    prazoexportacaotemporaria: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nrfilhote: {
      type: DataTypes.STRING,
      allowNull: true
    },
    qtdetotalvolumesconhecimento: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    qtdetotalvolumes: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    vlfretepgtobrasil: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfretepgtoexterior: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tpunitizacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    qtdeunidadecarga: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    justificativadivergencia1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    justificativadivergencia2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mmtelastransmissaoembsiscomex: {
      type: "OID",
      allowNull: true
    },
    passaportecarteira: {
      type: DataTypes.STRING,
      allowNull: true
    },
    naturezavisto: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nacionalidade: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idpessoarepresentante: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    valortotalmnac: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltaxacambio: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    valortotalmercadoria: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    valortotalmercadoriamnac: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'processoexportacaodsecapa'
  });
};
