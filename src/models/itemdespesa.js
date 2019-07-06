/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('itemdespesa', {
    iditemdespesa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nmitemdespesa: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snativo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpitemdespesa: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tprateioitem: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sndesembaraco: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snagenciamento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sndespesadi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sncalculair: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sndesepesaacessoria: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cditemdespesa: {
      type: DataTypes.STRING,
      allowNull: true
    },
    descricaoitemdespesaingles: {
      type: DataTypes.STRING,
      allowNull: true
    },
    apitemdespesa: {
      type: DataTypes.STRING,
      allowNull: true
    },
    classificacaoitemdespesa: {
      type: DataTypes.STRING,
      allowNull: true
    },
    calculairrf: {
      type: DataTypes.STRING,
      allowNull: true
    },
    calculain381: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cobrarcpmf: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sndespesabasenfs: {
      type: DataTypes.STRING,
      allowNull: true
    },
    siglaiata: {
      type: DataTypes.STRING,
      allowNull: true
    },
    recuperavel: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idgrupoitemdespesa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'grupoitemdespesa',
        key: 'idgrupoitemdespesa'
      }
    },
    idcontacontabil: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'contacontabil',
        key: 'idcontacontabil'
      }
    },
    totalrateiocentrocusto: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tptributo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    gitarifa: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    calculaiof: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdnbsbysisco: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdmercante: {
      type: DataTypes.STRING,
      allowNull: true
    },
    perda: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snrodoviario: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snmaritimo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snaereo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snfluvial: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snpostal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sntuboconduto: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snlacustre: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snferroviaria: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snmeiosproprios: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snficta: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snimportacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snexportacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snagenciamentoexp: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snagenciamentoimp: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snoutros: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snlicenciamento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snremessaimp: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snremessaexp: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sndrawback: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snrodoviarionacional: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mmobservacoes: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdauxiliarintegracao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrwinjoborders: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'itemdespesa'
  });
};
