/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pessoa', {
    idpessoa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cdpessoa: {
      type: DataTypes.STRING,
      allowNull: true
    },
    indcliente: {
      type: DataTypes.STRING,
      allowNull: true
    },
    indimportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    indexportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    indagente: {
      type: DataTypes.STRING,
      allowNull: true
    },
    indtransportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    indcomissaria: {
      type: DataTypes.STRING,
      allowNull: true
    },
    indfabricante: {
      type: DataTypes.STRING,
      allowNull: true
    },
    indrepresentante: {
      type: DataTypes.STRING,
      allowNull: true
    },
    indbanco: {
      type: DataTypes.STRING,
      allowNull: true
    },
    indfavorecido: {
      type: DataTypes.STRING,
      allowNull: true
    },
    indseguradora: {
      type: DataTypes.STRING,
      allowNull: true
    },
    indcourier: {
      type: DataTypes.STRING,
      allowNull: true
    },
    indagenteinternacional: {
      type: DataTypes.STRING,
      allowNull: true
    },
    indcorretora: {
      type: DataTypes.STRING,
      allowNull: true
    },
    indarmador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    indparceiro: {
      type: DataTypes.STRING,
      allowNull: true
    },
    indunidadeoperacional: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmpessoa: {
      type: DataTypes.STRING,
      allowNull: true
    },
    appessoa: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tppessoa: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cnpj: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cpf: {
      type: DataTypes.STRING,
      allowNull: true
    },
    outrodocumento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    inscricaoestadual: {
      type: DataTypes.STRING,
      allowNull: true
    },
    endereco: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrendereco: {
      type: DataTypes.STRING,
      allowNull: true
    },
    bairro: {
      type: DataTypes.STRING,
      allowNull: true
    },
    complementoendereco: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idcidade: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'cidade',
        key: 'idcidade'
      }
    },
    enderecocobranca: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrenderecocobranca: {
      type: DataTypes.STRING,
      allowNull: true
    },
    bairrocobranca: {
      type: DataTypes.STRING,
      allowNull: true
    },
    complementoenderecocobranca: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idcidadecobranca: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'cidade',
        key: 'idcidade'
      }
    },
    homepagepessoa: {
      type: DataTypes.STRING,
      allowNull: true
    },
    telefone: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fax: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cep: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cepcobranca: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idmodelonf: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'modelonf',
        key: 'idmodelonf'
      }
    },
    idvendedor: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'vendedor',
        key: 'idvendedor'
      }
    },
    iddocumentoconhecimentoaereo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'documento',
        key: 'iddocumento'
      }
    },
    cdativo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mmobservcoes: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idrepresentante: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    idnfservicoimportacao: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'modelonotaservico',
        key: 'idmodelonotaservico'
      }
    },
    idnfservicoexportacao: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'modelonotaservico',
        key: 'idmodelonotaservico'
      }
    },
    idnfservicoagimportacao: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'modelonotaservico',
        key: 'idmodelonotaservico'
      }
    },
    idnfservicoagexportacao: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'modelonotaservico',
        key: 'idmodelonotaservico'
      }
    },
    idnfservicooutros: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'modelonotaservico',
        key: 'idmodelonotaservico'
      }
    },
    idnfservicoli: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'modelonotaservico',
        key: 'idmodelonotaservico'
      }
    },
    inddespachante: {
      type: DataTypes.STRING,
      allowNull: true
    },
    indnaocliente: {
      type: DataTypes.STRING,
      allowNull: true
    },
    indcompanhiaaerea: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlaliquotaiss: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    mascaraprocesso: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vllimitecredito: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    indempresaestrangeira: {
      type: DataTypes.STRING,
      allowNull: true
    },
    inscricaomunicipal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    emailnfeletronica: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snrestricaofinanceira: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vllimiteretencaoin381: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tprateiotaxasiscomex: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlpercentualfecp: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    snliberadiautomaticamente: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snpiscofinsicms: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sndespesapiscofins: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sntaxasiscomexicms: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snpiscofinsvalorintegralicms: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idgrupocliente: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'grupocliente',
        key: 'idgrupocliente'
      }
    },
    tpcontroleradar: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snlimitedistribuicao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlmaximodistribuicao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    dddtelefone: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpreducaoicms: {
      type: DataTypes.STRING,
      allowNull: true
    },
    integraitracking: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dddfax: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlsaldosda: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idcontacontabil: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'contacontabil',
        key: 'idcontacontabil'
      }
    },
    cdcnae: {
      type: DataTypes.STRING,
      allowNull: true
    },
    arquivologotipo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idimagem: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'byimagens',
        key: 'idimagem'
      }
    },
    tpaccount: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snintercompany: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snparaisofiscal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idagenteaccount: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    tpbasecalculoimpaerea: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpbasecalculoimpmaritimo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpbasecalculoexpaerea: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpbasecalculoexpmaritimo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpdivisaoimpaerea: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpdivisaoexpaerea: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpdivisaoimpmaritimo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpdivisaoexpmaritimo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlimpaerea: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlexpaerea: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlimpmaritimo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlexpmaritimo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idmodelodescricaore: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'modelodescricaore',
        key: 'idmodelodescricaore'
      }
    },
    snnaoagruparitensre: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpformulaover: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlcomissaoiata: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tpcalculoiata: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tptarifa: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpconversaoiata: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpirrffatura: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snirrfminimo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snirrfiata: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snirrfover: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snirrfdueagente: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpfaturamentoiata: {
      type: DataTypes.STRING,
      allowNull: true
    },
    codigoscac: {
      type: DataTypes.STRING,
      allowNull: true
    },
    codigoiata: {
      type: DataTypes.STRING,
      allowNull: true
    },
    codigointra: {
      type: DataTypes.STRING,
      allowNull: true
    },
    accountnumber: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sigla: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpformacomplementares: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdmapa: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrregistro: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tprps: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tptransmissaosiscomex: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpcalculoiss: {
      type: DataTypes.STRING,
      allowNull: true
    },
    rg: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sndiferencabasefecp: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idcontacontabilpassivo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'contacontabil',
        key: 'idcontacontabil'
      }
    },
    idmodelodescricaodse: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'modelodescricaore',
        key: 'idmodelodescricaore'
      }
    },
    snnaoagruparitensdse: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snsubstituirunidadeitensdse: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdporte: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idclassificacaoclientes: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'classificacaoclientes',
        key: 'idclassificacaoclientes'
      }
    },
    sndespesaslocomocaocliente: {
      type: DataTypes.STRING,
      allowNull: true
    },
    indadquirente: {
      type: DataTypes.STRING,
      allowNull: true
    },
    pathcertificado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    senhacertificado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrseriecertificado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    indgarantidor: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpprospeccao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tprepetro: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snidentificacaoanvisa: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snin459: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpregimetributavel: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpsituacaoprospeccao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nomecertificadorps: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tplogradouro: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idgrupounidadeoperacional: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'grupounidadeoperacional',
        key: 'idgrupounidadeoperacional'
      }
    },
    tpregimetribsefazicms: {
      type: DataTypes.STRING,
      allowNull: true
    },
    inscricaoinss: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpmetodocontroleretencao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idcontacontabilfornecedor: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'contacontabil',
        key: 'idcontacontabil'
      }
    },
    sninsobretotal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrmatriculasda: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ultimoawb: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dvultimoawb: {
      type: DataTypes.STRING,
      allowNull: true
    },
    codigoiataagenciamento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dac: {
      type: DataTypes.STRING,
      allowNull: true
    },
    accountnumberagenciamento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpcomposicaoseguro: {
      type: DataTypes.STRING,
      allowNull: true
    },
    urlwebservicerps: {
      type: DataTypes.STRING,
      allowNull: true
    },
    emailanvisa: {
      type: DataTypes.STRING,
      allowNull: true
    },
    indagenciamaritima: {
      type: DataTypes.STRING,
      allowNull: true
    },
    produtorrural: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idcontacontabilauxiliar: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'contacontabil',
        key: 'idcontacontabil'
      }
    },
    idprospector: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'vendedor',
        key: 'idvendedor'
      }
    },
    snimpostosfinanceiro: {
      type: DataTypes.STRING,
      allowNull: true
    },
    indfiador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlbaseminimaiss: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idquebraauxiliarre: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'quebraauxiliarre',
        key: 'idquebraauxiliarre'
      }
    },
    snpiscofinsvaloraduaneiro: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idconhecimentoaereopapelcomum: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'documento',
        key: 'iddocumento'
      }
    },
    dtvenccartaapontamento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    nrregistronactransprodov: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snemailconfirmacaobl: {
      type: DataTypes.STRING,
      allowNull: true
    },
    modelonotacte: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snordenaritensdigitacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snmembroiata: {
      type: DataTypes.STRING,
      allowNull: true
    },
    codigoddnfe: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tprateiodespaduaneira: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpformasegurocliente: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpbasesegurocliente: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlseguromnegcliente: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpercseguromlecliente: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idmoedasegurocliente: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'moeda',
        key: 'idmoeda'
      }
    },
    tpenvioimpostorps: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tprateioafrmm: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idimagemcabecalho: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'byimagens',
        key: 'idimagem'
      }
    },
    idpaisbandeira: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pais',
        key: 'idpais'
      }
    },
    idimagemrodape: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'byimagens',
        key: 'idimagem'
      }
    },
    nrinscricaosuframa: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tptipoimportadorsuframa: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtadesaosimplesnacional: {
      type: DataTypes.DATE,
      allowNull: true
    },
    snliberardicontacliente: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snnotificarporemail: {
      type: DataTypes.STRING,
      allowNull: true
    },
    matriculasda: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpsegmento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    indcomprador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sncontribuinteicms: {
      type: DataTypes.STRING,
      allowNull: true
    },
    codigofiesp: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    posicaocertificado: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tpindiedest: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snaprovfinanctodos: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdexterno: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snarredondariata: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpmultalinoicms: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tprateioataaereo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cpfreprsuframa: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdsenhacertificado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpcertificado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpcoeficienteicmssuframa: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdauxiliarintegracao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    issabaixominimo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrseqdocumentopli: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpregimeespecialtributacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snmoedasegrecmoedamle: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snenviado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    scac: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrwinjoborders: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    inddeclarante: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpopcaosimples: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snverificanumerofatura: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idcertificado: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'certificado',
        key: 'idcertificado'
      }
    },
    sncidebaseicms: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlcustomaoobraoperacao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tprateioacrescimodeducao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    iddadoscomplementares: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'dadoscomplementares',
        key: 'iddadoscomplementares'
      }
    },
    sndescrcomplmerctaginfadprod: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlaliquotaperclei12741: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'pessoa'
  });
};
