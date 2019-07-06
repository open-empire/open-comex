/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('atoconcessoriocapa', {
    idatoconcessoriocapa: {
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
    nrpedidoatoconcessorio: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtaberturapedidoatoconcessorio: {
      type: DataTypes.DATE,
      allowNull: true
    },
    nrregistrodrawback: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtregistrodrawback: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dttaxadolar: {
      type: DataTypes.DATE,
      allowNull: true
    },
    idpessoabenefeciario: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    idunidadeoperacional: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    nrreferenciacliente: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snbemcapital: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpregistrodrawback: {
      type: DataTypes.STRING,
      allowNull: true
    },
    modalidadedrawback: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpfrete: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlfreteestimado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltaxadolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlseguroestimado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfatortoleranciatotal: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nmresumidomercadoriaexportada: {
      type: DataTypes.STRING,
      allowNull: true
    },
    percentualcomissaoagente: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcomissaoagente: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    qtdediascicloproducao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    qttotalitemexportado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesoliqtotalitemexportado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmlerealtotalitemexportado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmledolartotalitemexportado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcifdolartotalitemexportado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalcomissaoexportado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    qttotalitemimportado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesoliqtotalitemimportado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmlerealtotalitemimportado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmledolartotalitemimportado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcifdolartotalitemimportado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tpprodutoimportado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtemissaoatoconcessorio: {
      type: DataTypes.DATE,
      allowNull: true
    },
    delegaciareceitafederal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    localemissaoatoconcessorio: {
      type: DataTypes.STRING,
      allowNull: true
    },
    assinatura1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    assinatura2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    diagnosticosiscomex: {
      type: DataTypes.STRING,
      allowNull: true
    },
    statussiscomex: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtvalidadesiscomex: {
      type: DataTypes.DATE,
      allowNull: true
    },
    diasrestantes: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dtconsultasiscomex: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtlimiteprorrogacao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtprorrogacao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    observacaodecex: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtvalidadeinicial: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtvalidadefinal: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtregistrooriginal: {
      type: DataTypes.DATE,
      allowNull: true
    },
    vltotalimportacao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalexportacao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    dtdiagnosticosiscomex: {
      type: DataTypes.DATE,
      allowNull: true
    },
    origemregistro: {
      type: DataTypes.STRING,
      allowNull: true
    },
    statusbaixasiscomex: {
      type: DataTypes.STRING,
      allowNull: true
    },
    observacaobaixa: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtconsultabaixasiscomex: {
      type: DataTypes.DATE,
      allowNull: true
    },
    processoagrupado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    processoagrupadoimp: {
      type: DataTypes.STRING,
      allowNull: true
    },
    origemquadro: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sncalculado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snquadromontado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtultimaretificacao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    observacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    itensdinacionalizados: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlfreterealizado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlsegurorealizado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmlerealtotitexportadorealiza: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmledolartotitexportadorealiz: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesoliqtotitexportadorealiza: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcifdolartotitexportadorealiz: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmlerealtotitimportadorealiza: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmledolartotitimportadorealiz: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcifdolartotitimportadorealiz: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesoliqtotitimportadorealiza: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotreaismercinternoestimado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotreaismercinternorealizado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotdolarmercinternoestimado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotdolarmercinternorealizado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlsubprodutoresiduoestimado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlsubprodutoresiduorealizado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlindiceimportexportestimado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlindiceimportexportrealizado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlindicemercintexportestimado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlindicemercintexportrealizado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlindicetotalexportestimado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlindicetotalexportrealizado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    statusweb: {
      type: DataTypes.STRING,
      allowNull: true
    },
    txprediagnosticoweb: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snenviarpararetificacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idusuarioresponsavel: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usuario',
        key: 'idusuario'
      }
    },
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'processo',
        key: 'idprocesso'
      }
    }
  }, {
    tableName: 'atoconcessoriocapa'
  });
};
