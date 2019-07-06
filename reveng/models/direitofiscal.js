/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('direitofiscal', {
    iddireitofiscal: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cddireitofiscal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmdireitofiscal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdcategoria: {
      type: DataTypes.STRING,
      allowNull: true
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    snativo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpregimetributacaoicms: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpreducaoicms: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlaliqreducaoicms: {
      type: DataTypes.DOUBLE,
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
    snipinaotributavel: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpregimetributacaoipi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrnotacompltipi: {
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
    tpregimetribpiscofins: {
      type: DataTypes.STRING,
      allowNull: true
    },
    iddispositivolegalpiscofins: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'dispositivolegal',
        key: 'iddispositivolegal'
      }
    },
    idfundamentolegalpiscofins: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'fundamlegalregtribpiscofins',
        key: 'idfundamlegalregtribpiscofins'
      }
    },
    idfundamentolegalreducaobase: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'fundamlegalredpiscofins',
        key: 'idfundamlegalredpiscofins'
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
    csticms: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cstipi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cstpiscofins: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpmodulo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpdestinacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlpercentualmva: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlaliqicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlsuframacoefnormal: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlsuframacoefoptante: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    sncalcicmssemincentivo: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'direitofiscal'
  });
};
