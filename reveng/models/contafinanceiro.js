/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('contafinanceiro', {
    idcontafinanceiro: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cdcontafinanceiro: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmcontafinanceiro: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpclassificacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpconta: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrultimocheque: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nragencia: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrcontacorrente: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrdac: {
      type: DataTypes.STRING,
      allowNull: true
    },
    apcontafinanceiro: {
      type: DataTypes.STRING,
      allowNull: true
    },
    inativo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idpessoaunidade: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    iddocumentocheque: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'documento',
        key: 'iddocumento'
      }
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nrbanco: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpcategoria: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmcontato: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpintegracaopagto: {
      type: DataTypes.STRING,
      allowNull: true
    },
    iddocumentochequeverso: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'documento',
        key: 'iddocumento'
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
    idpessoafavorecidocheque: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    codigoempresa: {
      type: DataTypes.STRING,
      allowNull: true
    },
    bloquearnrcheque: {
      type: DataTypes.STRING,
      allowNull: true
    },
    convenio: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idgrupoclientecontafinanc: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'grupocliente',
        key: 'idgrupocliente'
      }
    },
    idclientecontafinanc: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    dv: {
      type: DataTypes.STRING,
      allowNull: true
    },
    codigocomunicacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrseqarquivopagamento: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cdauxiliarintegracao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrseqremessa: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'contafinanceiro'
  });
};
