/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('historicolicapa', {
    idhistoricolicapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idpessoaimportador: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    nrtratimpmicro: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nridentificacaousuario: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nroperacaaotratamentoprot: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdautorizacaotransmissao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrregistroli: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrlisubstituido: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdorigemli: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrdivinculada: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nradicaodivinculada: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrseqretificacaovinculada: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tppessoaimportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cnpjcpfimportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdpaisimportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmimportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrtelefoneimportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    enderecoimportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    edereconrimportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    enderecocomplemento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    enderecobairroimportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    enderecocidadeimportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    enderecoufimportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    enderecocepimportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdatividadeeconimportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cpfrepresentantelegal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdurfentradamercadoria: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmexportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    enderecoexportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    endereconrexportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    enderecocomplementoexportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    enderecocidadeexportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    enderecoufexportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdpaisaquisicaomercadoria: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdncmmercadoria: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdpaisprocedencaimercadoria: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdausenciafabricante: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmfabricante: {
      type: DataTypes.STRING,
      allowNull: true
    },
    enderecofabricante: {
      type: DataTypes.STRING,
      allowNull: true
    },
    endereconrfabricante: {
      type: DataTypes.STRING,
      allowNull: true
    },
    enderecocomplementofabricante: {
      type: DataTypes.STRING,
      allowNull: true
    },
    enderecocidadefabricante: {
      type: DataTypes.STRING,
      allowNull: true
    },
    enderecouffabricante: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdpaisorigemmercadoria: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdnaladincc: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdnaladish: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlpesoliquidomercadoria: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    qtunidadeestatistica: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cdmoedanegociada: {
      type: DataTypes.STRING,
      allowNull: true
    },
    qtddiaslimitepgto: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cdincotermsvenda: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vltotalmlemoeda: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalmledolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cdtpacordotarifario: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdacordoaladi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdregimetributario: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdfundlegalregime: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdcoberturacambial: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdmodalidadepgto: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdorgaofinaceirointernac: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdmotivosemcobertura: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdagenciasecex: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdurfdespacho: {
      type: DataTypes.STRING,
      allowNull: true
    },
    inrestdataembli: {
      type: DataTypes.STRING,
      allowNull: true
    },
    inmaterialusado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    inbemencomenda: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nratodrawback: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrcomunicadocompra: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtregistroli: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtatualizaprcessomicro: {
      type: DataTypes.STRING,
      allowNull: true
    },
    insalvodiagnostico: {
      type: DataTypes.STRING,
      allowNull: true
    },
    inselecaodiagnostico: {
      type: DataTypes.STRING,
      allowNull: true
    },
    obsinformacoescomplementares: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdsituacaoli: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtsituacaoli: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtvalidadeli: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdancelamentoli: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtcancelamentoli: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cpfcancelamentoli: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrlisubstitutivo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtrestembarque: {
      type: DataTypes.STRING,
      allowNull: true
    },
    inregdrawback: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrregistrodrawback: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'historicolicapa'
  });
};
