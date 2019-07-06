/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dsiitem', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'dsicapa',
        key: 'idprocesso'
      }
    },
    iddsicapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iddsiitem: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tpregimetributacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idfundamentolegalregtrib: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'fundamentolegalregtrib',
        key: 'idfundamentolegalregtrib'
      }
    },
    idmotivodsi: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'motivodsi',
        key: 'idmotivodsi'
      }
    },
    nrregistrolsi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idmercadoria: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'mercadoria',
        key: 'idmercadoria'
      }
    },
    tpclassificacao: {
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
    idtsp: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tsp',
        key: 'idtsp'
      }
    },
    nrdestaquencm: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    snmercosul: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idunidadeestatisca: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'unidademedida',
        key: 'idunidademedida'
      }
    },
    vlqtdeestatistica: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesoliquido: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesobruto: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idmoedamle: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'moeda',
        key: 'idmoeda'
      }
    },
    vlunitariomlemneg: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalmle: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idpaisorigem: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pais',
        key: 'idpais'
      }
    },
    txdescricaomercadoria: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlqtdecomercializada: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalmlemnac: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfretemneg: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfretemle: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfretemnac: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfretedolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlseguromneg: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlseguromnac: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlseguromle: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlsegurodolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlbaseii: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlaliquotaii: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldevidoii: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrecolherii: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlbaseipi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlaliquotaipi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrecolheripi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldevidoipi: {
      type: DataTypes.DOUBLE,
      allowNull: true
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
    vlbaseicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrecolhericms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tpregimetribucaopiscofins: {
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
    vldevidopis: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldevidocofins: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrecolherpis: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrecolhercofins: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcapacidadepis: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcapacidadecofins: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idrecepientepis: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'recipiente',
        key: 'idrecipiente'
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
    snmaterialusado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idunidmedidacomercializada: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'unidademedida',
        key: 'idunidademedida'
      }
    },
    vlaliquotapisespecifico: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlaliquotacofinsespecifico: {
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
    idunidadeespecificacofins: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'unidademedida',
        key: 'idunidademedida'
      }
    },
    vlqtdeespecificapis: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlqtdeespecificacofins: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcifmneg: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcifreais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcifdolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlbasepisconfins: {
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
    idpoitem: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    idpocapa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'poitem',
        key: 'idpocapa'
      }
    },
    nrfaturapo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idarea: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'area',
        key: 'idarea'
      }
    },
    invoicerefid: {
      type: DataTypes.STRING,
      allowNull: true
    },
    linerefid: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nritem: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idprocessolsi: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idlsicapa: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idlsiitem: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nrordemcompra: {
      type: DataTypes.STRING,
      allowNull: true
    },
    txcompldescricaomercadoria: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtregistrolsi: {
      type: DataTypes.DATE,
      allowNull: true
    },
    txcompldescricaomercadoria1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    txcompldescricaomercadoria2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idunidademedidaestatistica: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'unidademedida',
        key: 'idunidademedida'
      }
    }
  }, {
    tableName: 'dsiitem'
  });
};
