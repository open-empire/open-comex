/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dsirepasse', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iddsicapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iddsirepasse: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iteminicial: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    itemfinal: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tpregimetributacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idmotivodsi: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'motivodsi',
        key: 'idmotivodsi'
      }
    },
    idfundamentolegalregtrib: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'fundamentolegalregtrib',
        key: 'idfundamentolegalregtrib'
      }
    },
    tpregimetribucaoicms: {
      type: DataTypes.STRING,
      allowNull: true
    },
    iddispositivolegalicms: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'dispositivolegal',
        key: 'iddispositivolegal'
      }
    },
    vlaliquotaicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlaliquotareduzidaicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tpregimetribucaopiscofins: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlaliquotapis: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlaliquotacofins: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlaliquotareducaopiscofins: {
      type: DataTypes.DOUBLE,
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
    vlaliquotapisespecifico: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcapacidadepis: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlqtdeespecificapis: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idunidadeespecificapis: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'unidademedida',
        key: 'idunidademedida'
      }
    },
    idrecepientepis: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'recipiente',
        key: 'idrecipiente'
      }
    },
    vlaliquotacofinsespecifico: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlqtdeespecificacofins: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idunidadeespecificacofins: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'unidademedida',
        key: 'idunidademedida'
      }
    },
    idrecepientecofins: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'recipiente',
        key: 'idrecipiente'
      }
    },
    vlcapacidadecofins: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    snrepassaregimetributacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snrepassafundamentolegal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snrepassamotivo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snrepassaregimetributacaoicms: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snrepassaaliquotaicms: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snrepassadispositivolegal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snrepassareducaoicms: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snrepassaregimetribpiscofins: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snrepassafundlegalpiscofins: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snrepassaaliqpis: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snrepassaaliqredpis: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snrepassaaliqcofins: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snrepassaaliqredcofins: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snrepassaaliqpisespec: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snrepassaaliqcofinsespec: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snrepassacapacpisespec: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snrepassacapaccofinsespec: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snrepassaqtdepisespec: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snrepassaqtdecofinsespec: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snrepassaunidadepisespec: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snrepassaunidadecofinsespec: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snrepassareceppisespec: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snrepassarecepcofinsespec: {
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
    snrepassadisplegalpiscofins: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'dsirepasse'
  });
};
