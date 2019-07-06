/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('historicodiadicao', {
    idhistoricodicapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'historicodicapa',
        key: 'idhistoricodicapa'
      }
    },
    idhistoricodiadicao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idlicapa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'historicolicapa',
        key: 'idhistoricolicapa'
      }
    },
    nradicao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrregistroli: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdncmadicao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmncmadicao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlpesoliquidoadicao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlqtdemedest: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    condicaomercadoria: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdincoterm: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmincoterm: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdmoedaadicao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmmoedaadicao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vltotalcondvendareais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalcondvendadolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotallocalembarquereais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotallocalembarquedolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfretetotalreais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfretetotaldolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlsegurototalreais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlsegurototaldolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldespesastotalreais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldespesastotaldolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlacrescimostotalreais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlacrescimostotaldolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldeducoestotalreais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldeducoestotaldolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalmoedanegociada: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cdregimetributacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdfundamentolegal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmregimetributacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmfundamentolegal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    aliquotaii: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    aliquotareducaoii: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    aliquotaacordoii: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlbasecalculoiiadicao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vliidevidoadicao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vliiacordoadicao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vliirecolheradicao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    aliquotaipi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    aliquotareducaoipi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    aliquotaacordoipi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlbasecalculoipiadicao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlipidevidoadicao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlipiacordoadicao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlipirecolheradicao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlbasecalculopis: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    aliquotapis: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpisrecolhido: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlbasecalculocofins: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    aliquotacofins: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcofinsrecolhido: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    aliquotaicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlicmsrecolheradicao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    taxasiscomex: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idincoterm: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'incoterm',
        key: 'idincoterm'
      }
    },
    nmexportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    enderecoexportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    numeroendexportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    complementoendexportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmcidadeexportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmufexportador: {
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
    idncm: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ncm',
        key: 'idncm'
      }
    },
    vlpisrecolher: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcofinsrecolher: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cdaplicacaomercadoria: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmaplicacaomercadoria: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'historicodiadicao'
  });
};
