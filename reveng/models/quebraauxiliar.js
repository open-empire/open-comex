/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('quebraauxiliar', {
    idquebraauxiliar: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cdquebraauxiliar: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmquebraauxiliar: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpacordotarifario: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idfundamentolegalii: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'fundamentolegalregtrib',
        key: 'idfundamentolegalregtrib'
      }
    },
    idmotivoadmissaotemporaria: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'motivoadmissaotemporaria',
        key: 'idmotivoadmissaotemporaria'
      }
    },
    tpregimetributacaoii: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpregimetributacaoipi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idacordoaladi: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'acordoaladi',
        key: 'idacordoaladi'
      }
    },
    snipinaotributavel: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrdoctoreducaoii: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlpercreducaoaliqii: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlaliqicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlaliqreducaoicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tpregimetributacaoicms: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idfundamentolegalicms: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'dispositivolegal',
        key: 'iddispositivolegal'
      }
    },
    nrdestaquencm: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    vlaliqpis: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlaliqcofins: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlaliqreduzidaicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tpreducaoicms: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlaliqfecp: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tpcalculofecp: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpregimetribpiscofins: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idfundamentolegalpiscofins: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'fundamlegalregtribpiscofins',
        key: 'idfundamlegalregtribpiscofins'
      }
    },
    iddispositivolegalpiscofins: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'dispositivolegal',
        key: 'iddispositivolegal'
      }
    },
    nrexatovinculadoncm: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrexatovinculadonbm: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpatovinculadoncm: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpatovinculadonbm: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idorgaoatovinculadoncm: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'orgaoemissaoatolegal',
        key: 'idorgaoemissaoatolegal'
      }
    },
    idorgaoatovinculadonbm: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'orgaoemissaoatolegal',
        key: 'idorgaoemissaoatolegal'
      }
    },
    nratovinculadoncm: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nratovinculadonbm: {
      type: DataTypes.STRING,
      allowNull: true
    },
    anoatovinculadoncm: {
      type: DataTypes.STRING,
      allowNull: true
    },
    anoatovinculadonbm: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrexatovinculadoii: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpatovinculadoii: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idorgaoatovinculadoii: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'orgaoemissaoatolegal',
        key: 'idorgaoemissaoatolegal'
      }
    },
    nratovinculadoii: {
      type: DataTypes.STRING,
      allowNull: true
    },
    anoatovinculadoii: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrexatovinculadoipi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpatovinculadoipi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idorgaoatovinculadoipi: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'orgaoemissaoatolegal',
        key: 'idorgaoemissaoatolegal'
      }
    },
    nratovinculadoipi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    anoatovinculadoipi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrexatovinculadodumping: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlaliqii: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlaliqacordoii: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlaliqreduzidaii: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nrnotacompltipi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlaliqipi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlaliqreduzidaipi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpercreducaoaliqipi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idfundamentolegalreducaobase: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'fundamlegalredpiscofins',
        key: 'idfundamlegalredpiscofins'
      }
    },
    vlpercreducaobasepiscofins: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlaliqreducaoii: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlaliqreducaopis: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlaliqreducaocofins: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idatovinculadoncm: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tipoatolegal',
        key: 'idtipoatolegal'
      }
    },
    idatovinculadonbm: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tipoatolegal',
        key: 'idtipoatolegal'
      }
    },
    idatovinculadoii: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tipoatolegal',
        key: 'idtipoatolegal'
      }
    },
    idatovinculadoipi: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tipoatolegal',
        key: 'idtipoatolegal'
      }
    },
    idatovinculadodumping: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    vlaliqicmspiscofins: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idfundamentoespecificoicms: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'fundamentoespecificoicms',
        key: 'idfundamentoespecificoicms'
      }
    },
    vlpercentualfecp: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    sndiferencabasefecp: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'quebraauxiliar'
  });
};
