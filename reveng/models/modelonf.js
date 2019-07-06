/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('modelonf', {
    idmodelonf: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cdmodelonf: {
      type: DataTypes.STRING,
      allowNull: true
    },
    descricaomodelonf: {
      type: DataTypes.STRING,
      allowNull: true
    },
    qtdelinhaspornota: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ajustadescricao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrnotafiscal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tamanhocdmercadoria: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    imprpesoliqsonaprimeiranf: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrserienfaermar: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrserienfrodfer: {
      type: DataTypes.STRING,
      allowNull: true
    },
    remetentefabricante: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpnfc: {
      type: DataTypes.STRING,
      allowNull: true
    },
    imprimeiinosintesnfc: {
      type: DataTypes.STRING,
      allowNull: true
    },
    destacacifmaisii: {
      type: DataTypes.STRING,
      allowNull: true
    },
    imprimevlicmsdeferido: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ordemimpressaonfnfc: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpcalculonfe: {
      type: DataTypes.STRING,
      allowNull: true
    },
    destacabipibipivlricms: {
      type: DataTypes.STRING,
      allowNull: true
    },
    alterarpesobrutonffilhote: {
      type: DataTypes.STRING,
      allowNull: true
    },
    quebraporcdonu: {
      type: DataTypes.STRING,
      allowNull: true
    },
    remetentefabricantenfc: {
      type: DataTypes.STRING,
      allowNull: true
    },
    adicionafretesegiidespimp: {
      type: DataTypes.STRING,
      allowNull: true
    },
    imprimeiijuntoaoitem: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpimpressaonrnota: {
      type: DataTypes.STRING,
      allowNull: true
    },
    totalizasonaultimanf: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrserieparaintegracao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    txtpadraodadosadicionais: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdonunadescmercadoria: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpdescricaonfeadicao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpdescricaomercadoria: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdreportnfe: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'documento',
        key: 'iddocumento'
      }
    },
    cdreportnfef: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'documento',
        key: 'iddocumento'
      }
    },
    cdreportnfc: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'documento',
        key: 'iddocumento'
      }
    },
    cdreportnfcf: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'documento',
        key: 'iddocumento'
      }
    },
    cdreportnfs: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'documento',
        key: 'iddocumento'
      }
    },
    cdreportnfcs: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'documento',
        key: 'iddocumento'
      }
    },
    cdreportnfsf: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cdreportnfr: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'documento',
        key: 'iddocumento'
      }
    },
    cdreportnfemail: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'documento',
        key: 'iddocumento'
      }
    },
    rateionfctipoumcifmaisii: {
      type: DataTypes.STRING,
      allowNull: true
    },
    observacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tprefdadosadicionais: {
      type: DataTypes.STRING,
      allowNull: true
    },
    despesasnocorponf: {
      type: DataTypes.STRING,
      allowNull: true
    },
    txsiscomexcomoitemnf: {
      type: DataTypes.STRING,
      allowNull: true
    },
    naoquebrarporaliquotaicms: {
      type: DataTypes.STRING,
      allowNull: true
    },
    somentedespesanfc: {
      type: DataTypes.STRING,
      allowNull: true
    },
    quebraporordemdecompra: {
      type: DataTypes.STRING,
      allowNull: true
    },
    qtdedeitenspornota: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    refdadosadicionais: {
      type: DataTypes.STRING,
      allowNull: true
    },
    qtcaraccoldescmercadoria: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cdcoluna01: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    cdcoluna02: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    cdcoluna03: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    cdcoluna04: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    cdcoluna05: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    cdcoluna06: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    cdcoluna07: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    cdcoluna08: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    cdcoluna09: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    cdcoluna10: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    cdcoluna11: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    cdcoluna12: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    cdcoluna13: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    cdcoluna14: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    cdcoluna15: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    cdcoluna16: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    idmodelonfcampo01: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'modelonfcampo',
        key: 'idmodelonf'
      }
    },
    idmodelonfcampo02: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'modelonfcampo',
        key: 'idmodelonf'
      }
    },
    idmodelonfcampo03: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'modelonfcampo',
        key: 'idmodelonf'
      }
    },
    idmodelonfcampo04: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'modelonfcampo',
        key: 'idmodelonf'
      }
    },
    idmodelonfcampo05: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'modelonfcampo',
        key: 'idmodelonf'
      }
    },
    idmodelonfcampo06: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'modelonfcampo',
        key: 'idmodelonf'
      }
    },
    idmodelonfcampo07: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'modelonfcampo',
        key: 'idmodelonf'
      }
    },
    idmodelonfcampo08: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'modelonfcampo',
        key: 'idmodelonf'
      }
    },
    idmodelonfcampo09: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'modelonfcampo',
        key: 'idmodelonf'
      }
    },
    idmodelonfcampo10: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'modelonfcampo',
        key: 'idmodelonf'
      }
    },
    idmodelonfcampo11: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'modelonfcampo',
        key: 'idmodelonf'
      }
    },
    idmodelonfcampo12: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'modelonfcampo',
        key: 'idmodelonf'
      }
    },
    idmodelonfcampo13: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'modelonfcampo',
        key: 'idmodelonf'
      }
    },
    idmodelonfcampo14: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'modelonfcampo',
        key: 'idmodelonf'
      }
    },
    idmodelonfcampo15: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'modelonfcampo',
        key: 'idmodelonf'
      }
    },
    idmodelonfcampo16: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'modelonfcampo',
        key: 'idmodelonf'
      }
    },
    nmcoluna01: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmcoluna02: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmcoluna03: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmcoluna04: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmcoluna05: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmcoluna06: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmcoluna07: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmcoluna08: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmcoluna09: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmcoluna10: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmcoluna11: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmcoluna12: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmcoluna13: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmcoluna14: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmcoluna15: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmcoluna16: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tamcoluna01: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tamcoluna02: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tamcoluna03: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tamcoluna04: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tamcoluna05: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tamcoluna06: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tamcoluna07: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tamcoluna08: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tamcoluna09: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tamcoluna10: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tamcoluna11: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tamcoluna12: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tamcoluna13: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tamcoluna14: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tamcoluna15: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tamcoluna16: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    snativo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpformatoimpressao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpdescricaoimpressao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    obrigmercadoriacadmontagemnota: {
      type: DataTypes.STRING,
      allowNull: true
    },
    quebraarea: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdreportnfd: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'documento',
        key: 'iddocumento'
      }
    },
    rateionfcpornfe: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdcoluna17: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    cdcoluna18: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    cdcoluna19: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    cdcoluna20: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    cdcoluna21: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    cdcoluna22: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    cdcoluna23: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    cdcoluna24: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    cdcoluna25: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    idmodelonfcampo17: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'modelonfcampo',
        key: 'idmodelonf'
      }
    },
    idmodelonfcampo18: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'modelonfcampo',
        key: 'idmodelonf'
      }
    },
    idmodelonfcampo19: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'modelonfcampo',
        key: 'idmodelonf'
      }
    },
    idmodelonfcampo20: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'modelonfcampo',
        key: 'idmodelonf'
      }
    },
    idmodelonfcampo21: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'modelonfcampo',
        key: 'idmodelonf'
      }
    },
    idmodelonfcampo22: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'modelonfcampo',
        key: 'idmodelonf'
      }
    },
    idmodelonfcampo23: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'modelonfcampo',
        key: 'idmodelonf'
      }
    },
    idmodelonfcampo24: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'modelonfcampo',
        key: 'idmodelonf'
      }
    },
    idmodelonfcampo25: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'modelonfcampo',
        key: 'idmodelonf'
      }
    },
    nmcoluna17: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmcoluna18: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmcoluna19: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmcoluna20: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmcoluna21: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmcoluna22: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmcoluna23: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmcoluna24: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmcoluna25: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tamcoluna17: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tamcoluna18: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tamcoluna19: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tamcoluna20: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tamcoluna21: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tamcoluna22: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tamcoluna23: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tamcoluna24: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tamcoluna25: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    consolidardespesa: {
      type: DataTypes.STRING,
      allowNull: true
    },
    iditemdespesa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'itemdespesa',
        key: 'iditemdespesa'
      }
    },
    quebracfop: {
      type: DataTypes.STRING,
      allowNull: true
    },
    quebrarporregimetributacaoicms: {
      type: DataTypes.STRING,
      allowNull: true
    },
    quebraporaliqpis: {
      type: DataTypes.STRING,
      allowNull: true
    },
    quebraporaliqcofins: {
      type: DataTypes.STRING,
      allowNull: true
    },
    quebraporaliqii: {
      type: DataTypes.STRING,
      allowNull: true
    },
    quebraporaliqipi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    quebraporfatura: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snsomardespnumerarionfe: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vincularafrmm: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'modelonf'
  });
};
