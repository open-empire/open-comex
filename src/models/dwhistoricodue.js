/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dwhistoricodue', {
    iddwhistoricodue: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nrregistrodue: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtregistrodue: {
      type: DataTypes.DATE,
      allowNull: true
    },
    nrruc: {
      type: DataTypes.STRING,
      allowNull: true
    },
    controleaduaneiro: {
      type: DataTypes.STRING,
      allowNull: true
    },
    controleadministrativo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    controlecarga: {
      type: DataTypes.STRING,
      allowNull: true
    },
    beneficiosespecificosoea: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cnpjcpfdeclarante: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmdeclarante: {
      type: DataTypes.STRING,
      allowNull: true
    },
    formaexportacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    situacaoespecial: {
      type: DataTypes.STRING,
      allowNull: true
    },
    exportacaoconsorciada: {
      type: DataTypes.STRING,
      allowNull: true
    },
    paisimportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlpesoliquidototal: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tratamentoprioritario: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vltotalmercadoriareais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cdmoedanegociacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmmoedanegociacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vltotalmle: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    contatofinsdepuracaoestat: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdurfdespacho: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmurfdespacho: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdrecintoaduaneirodespacho: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmrecintoaduaneirodespacho: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdurfembarque: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmurfembarque: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdrecintoaduaneiroembarque: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmrecintoaduaneiroembarque: {
      type: DataTypes.STRING,
      allowNull: true
    },
    viaespecialtransporte: {
      type: DataTypes.STRING,
      allowNull: true
    },
    usoobrigatoriodoctransito: {
      type: DataTypes.STRING,
      allowNull: true
    },
    txinformacoescomplementares: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nritem: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cnpjcpfexportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmexportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpnotafiscal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    finalidadenotafiscal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    serienotafiscal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    numeronotafiscal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nritemnotafiscal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdproduto: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrcfop: {
      type: DataTypes.STRING,
      allowNull: true
    },
    motivodispensanotafiscal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdncm: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmncm: {
      type: DataTypes.STRING,
      allowNull: true
    },
    atributos: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmdescricaomercadoria: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tratamentoprioritarioitem: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmdescricaocomplmercadoria: {
      type: DataTypes.STRING,
      allowNull: true
    },
    unidadeestatistica: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlqtdeestatistica: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesoliquidototalitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    unidadecomercializada: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlqtdecomercializada: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalitemreais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    percentualcomissao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cdcondicaovenda: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdmoedanegociacaoitem: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmmoedanegociacaoitem: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vltotalmcvitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalmleitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nmimportadoritem: {
      type: DataTypes.STRING,
      allowNull: true
    },
    enderecoimportadoritem: {
      type: DataTypes.STRING,
      allowNull: true
    },
    paisimportadoritem: {
      type: DataTypes.STRING,
      allowNull: true
    },
    txjustificativadepuracaoestat: {
      type: DataTypes.STRING,
      allowNull: true
    },
    txjustificativavalores: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdenquadramentooperacao1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdenquadramentooperacao2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdenquadramentooperacao3: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdenquadramentooperacao4: {
      type: DataTypes.STRING,
      allowNull: true
    },
    paisdestino: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlqtdeestatisticadestino: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    txnotasreferenciadas: {
      type: DataTypes.STRING,
      allowNull: true
    },
    txcertificadosmercosul: {
      type: DataTypes.STRING,
      allowNull: true
    },
    txtratamentoadministrativo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtrecuperacao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    snvinculada: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpdocumentofiscal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrchaveacessonf: {
      type: DataTypes.STRING,
      allowNull: true
    },
    origemregistro: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtembarquedue: {
      type: DataTypes.DATE,
      allowNull: true
    },
    nratoconcessorio: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nritemato: {
      type: DataTypes.STRING,
      allowNull: true
    },
    qtdato: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcobato: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlsemcobato: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    chaveacesso: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sntratadmimpedimentoembarque: {
      type: DataTypes.STRING,
      allowNull: true
    },
    situacaodacarga: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snbloqueadaparaembarque: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snoperadoreconomicoautorizado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sntratamentoprioritario: {
      type: DataTypes.STRING,
      allowNull: true
    },
    latituderecintodespacho: {
      type: DataTypes.STRING,
      allowNull: true
    },
    longituderecintodespacho: {
      type: DataTypes.STRING,
      allowNull: true
    },
    latituderecintoembarque: {
      type: DataTypes.STRING,
      allowNull: true
    },
    longituderecintoembarque: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snusoobrigatoriodoctransito: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdpaisexportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmpaisexportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    siglapaisexportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tipodocumentoexportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snestrangeiro: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snnotafiscaleletronica: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vltotalmleitemreais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    dtconversao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    cdpaisimportadoritem: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snbloqueio: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snembarquerecintoalfandegado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sndespachorecintoalfandegado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snimpedidoembarque: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdpaisimportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    situacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sndespachorecintodomiciliar: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtcriacao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtdocce: {
      type: DataTypes.DATE,
      allowNull: true
    },
    sndat: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snoea: {
      type: DataTypes.STRING,
      allowNull: true
    },
    iddue: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    iditemdue: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    responsavelpeloacd: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdpaisdestinoitem: {
      type: DataTypes.STRING,
      allowNull: true
    },
    modelonotafiscal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ufemissornotafiscal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    numeroemitentenotafiscal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sncnpjemitentenotafiscal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sncpfemitentenotafiscal: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'dwhistoricodue'
  });
};
