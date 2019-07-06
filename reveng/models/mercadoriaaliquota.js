/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mercadoriaaliquota', {
    idmercadoria: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'mercadoria',
        key: 'idmercadoria'
      }
    },
    idmercadoriaaliquota: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
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
    iddispositivolegalicms: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'dispositivolegal',
        key: 'iddispositivolegal'
      }
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
      allowNull: true,
      references: {
        model: 'tipoatolegal',
        key: 'idtipoatolegal'
      }
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
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'mercadoriaaliquota'
  });
};
