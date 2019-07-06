/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tabelaarmazem', {
    idtabelaarmazem: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cdtabelaarmazem: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmtabelaarmazem: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snativo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idarmazem: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'armazem',
        key: 'idarmazem'
      }
    },
    idpessoacliente: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    tplancamento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpclassificacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vltaxadta: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlminimo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlminimocargasolta: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpercpriperiodocargasolta: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpercsegperiodocargasolta: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpercterperiodocargasolta: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpercquaperiodocargasolta: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpercquiperiodocargasolta: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldiaspriperiodocargasolta: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldiassegperiodocargasolta: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldiasterperiodocargasolta: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldiasquaperiodocargasolta: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldiasquiperiodocargasolta: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlminimocontainer20: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlminimocontainer40: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpercpriperiodocontainer: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpercsegperiodocontainer: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpercterperiodocontainer: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpercquaperiodocontainer: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpercquiperiodocontainer: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldiaspriperiodocontainer: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldiassegperiodocontainer: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldiasterperiodocontainer: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldiasquaperiodocontainer: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldiasquiperiodocontainer: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmovcargasoltadireita: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmovcargasoltaesquerda: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmovcontainer20direita: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmovcontainer20esquerda: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmovcontainer40direita: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmovcontainer40esquerda: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'tabelaarmazem'
  });
};
