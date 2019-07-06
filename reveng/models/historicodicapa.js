/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('historicodicapa', {
    idhistoricodicapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idpessoaimportador: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    nrregistrodi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtregistrodi: {
      type: DataTypes.DATE,
      allowNull: true
    },
    nrreferenciadi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cnpjcpfimportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmimportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tipodi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtdesembaraco: {
      type: DataTypes.DATE,
      allowNull: true
    },
    situacaodi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdmoedadi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmmoedadi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdpaisprocedencia: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmpaisprocedencia: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtchegada: {
      type: DataTypes.DATE,
      allowNull: true
    },
    cdurfdespacho: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmurfdespacho: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdurfembarque: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmurfembarque: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlpesobruto: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesoliquido: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cdmoedafreteprepaid: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlfreteprepaidmoeda: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfreteprepaiddolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfreteprepaidreais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cdmoedafretecollect: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlfretecollectmoeda: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfretecollecdolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfretecollectreais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cdmoedafreteterrnac: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlfreteterrnacmoeda: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfreteterrnacdolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfreteterrnacreais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cdmoedafretetotal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlfretetotalmoeda: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfretetotaldolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfretetotalreais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cdmoedasegurototal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlsegurototalmoeda: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlsegurototaldolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlsegurototalreais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmletotaldolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmletotalreais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmldtotaldolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmldtotalreais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    ditratada: {
      type: DataTypes.STRING,
      allowNull: true
    },
    qtretificacoes: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    dtultimaretificacao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    cdviatransporte: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idviatransporte: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'viatransporte',
        key: 'idviatransporte'
      }
    }
  }, {
    tableName: 'historicodicapa'
  });
};
