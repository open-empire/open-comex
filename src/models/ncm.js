/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ncm', {
    idncm: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cdncm: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdextrancm: {
      type: DataTypes.STRING,
      allowNull: true
    },
    apncm: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mmdescricaoncm: {
      type: DataTypes.STRING,
      allowNull: true
    },
    aliquotaredicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    aliquotaicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    mmdescricaoespanholncm: {
      type: DataTypes.STRING,
      allowNull: true
    },
    aliquotacofins: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    snnecessitali: {
      type: DataTypes.STRING,
      allowNull: true
    },
    aliquotapis: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    aliquotaoriginalii: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    dtvalidadeinicialii: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtvalidadefinalii: {
      type: DataTypes.DATE,
      allowNull: true
    },
    idunidademedida: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'unidademedida',
        key: 'idunidademedida'
      }
    },
    dtvalidadefinalipi: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtvalidadeinicialipi: {
      type: DataTypes.DATE,
      allowNull: true
    },
    aliquotaiitemporaria: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    aliquotavigenteipi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    aliquotamercosulii: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    aliquotaoriginalipi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    dtvalidadeinicialmercosul: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtvalidadefinalmercosul: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtvalidadeinicialpis: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtvalidadefinalpis: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtvalidadeinicialcofins: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtvalidadefinalcofins: {
      type: DataTypes.DATE,
      allowNull: true
    },
    aliquotavigentepis: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    aliquotavigentecofins: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    mmdescricaoinglesncm: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snipinaotributavel: {
      type: DataTypes.STRING,
      allowNull: true
    },
    aliquotamajoracaocofins: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nmdescricaointegracao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmdescricaointegracaocompl: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtultimaatualizacaocomexdez: {
      type: DataTypes.DATE,
      allowNull: true
    },
    cdtributoii: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdtributoipi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlmetrocubico: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cdtributocide: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snativo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdatributodue: {
      type: DataTypes.STRING,
      allowNull: true
    },
    aliquotavigenteii: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'ncm'
  });
};
