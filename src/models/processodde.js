/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('processodde', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'processo',
        key: 'idprocesso'
      }
    },
    idprocessodde: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nrdeclaracaodespacho: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtdeclaracaodespacho: {
      type: DataTypes.DATE,
      allowNull: true
    },
    vlpesoliquido: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesobruto: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmcv: {
      type: DataTypes.DOUBLE,
      allowNull: true
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
    qtdeestabelecimentos: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nrsolicitacaonaoalfandegado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrveiculotransportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sncargafracionada: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sndespachoposterior: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sncertificadocumprimento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    qtdetotalvolumes: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nrsufixocnpj: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mmtelastransmissaoresiscomex: {
      type: "OID",
      allowNull: true
    },
    snprocessoregistradosiscomex: {
      type: DataTypes.STRING,
      allowNull: true
    },
    qttotalresdespacho: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    qtdetotalvolumesconhecimento: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nrfilhote: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlfretepgtobrasil: {
      type: DataTypes.DOUBLE,
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
    tpunitizacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sndadosembarqueregistrados: {
      type: DataTypes.STRING,
      allowNull: true
    },
    situacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlmcvdolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    dtenviadointegracao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    mmtelastransmissaodesiscomex: {
      type: "OID",
      allowNull: true
    },
    nrdeclaracaodespachotemp: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlfretepgtoexterior: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    snresnfsvinculadas: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpdetalhamentoopexp: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpsubdetalhamentoopexp: {
      type: DataTypes.STRING,
      allowNull: true
    },
    periodoproposto: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    snrealizadotransito: {
      type: DataTypes.STRING,
      allowNull: true
    },
    opdispensadaobrigatoria: {
      type: DataTypes.STRING,
      allowNull: true
    },
    opeletronicaformulario: {
      type: DataTypes.STRING,
      allowNull: true
    },
    baselegal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    informacoescomplementares: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlpesobrutototaldespacho: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    seqxml: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    vlcubagemtotal: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idfundamentoadmissaotemporaria: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'fundamentoadmissaotemporaria',
        key: 'idfundamentoadmissaotemporaria'
      }
    },
    nrjustifexptemporaria: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlprazoexptemporaria: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nrprocessoexptemporaria: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'processodde'
  });
};
