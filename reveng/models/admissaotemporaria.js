/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('admissaotemporaria', {
    idadmissaotemporaria: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'processo',
        key: 'idprocesso'
      }
    },
    idcontafinanceiro: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'contafinanceiro',
        key: 'idcontafinanceiro'
      }
    },
    idseguradora: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    idfiadora: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    iddespachante01: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    iddespachante02: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    depositodinheiro: {
      type: DataTypes.STRING,
      allowNull: true
    },
    agencia: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtdeposito: {
      type: DataTypes.DATE,
      allowNull: true
    },
    causaotitulo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    observacaocausao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    seguroaduaneiro: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrapolice: {
      type: DataTypes.STRING,
      allowNull: true
    },
    finalidade: {
      type: DataTypes.STRING,
      allowNull: true
    },
    processorcr: {
      type: DataTypes.STRING,
      allowNull: true
    },
    art4inciso: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmart4inciso: {
      type: DataTypes.STRING,
      allowNull: true
    },
    art6caput: {
      type: DataTypes.STRING,
      allowNull: true
    },
    art6alinea: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmart6alinea: {
      type: DataTypes.STRING,
      allowNull: true
    },
    insrf4090: {
      type: DataTypes.STRING,
      allowNull: true
    },
    contratoarrematamento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    contratoprestacaoservico: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fiancaidonea: {
      type: DataTypes.STRING,
      allowNull: true
    },
    obsinstrucaopedido: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'admissaotemporaria'
  });
};
