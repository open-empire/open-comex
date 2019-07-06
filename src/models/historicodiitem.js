/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('historicodiitem', {
    idhistoricodicapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'historicodiadicao',
        key: 'idhistoricodicapa'
      }
    },
    idhistoricodiadicao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idhistoricodiitem: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nradicao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrdiitem: {
      type: DataTypes.STRING,
      allowNull: true
    },
    qtitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlunitarioitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalcondvendaitemreais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalcondvendaitemdolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotallocalembarqueitemreais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotallocalembarqueitemdolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfretetotalitemreais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfretetotalitemdolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlsegurototalitemreais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlsegurototalitemdolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldespesastotalitemreais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldespesastotalitemdolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlacrescimostotalitemreais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlacrescimostotalitemdolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldeducoestotalitemreais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldeducoestotalitemdolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    descricaomercadoria: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlpesoliquidoitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    unidademedidacomerc: {
      type: DataTypes.STRING,
      allowNull: true
    },
    reservadoem: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    qtitemdisp: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesoliquidoitemdisp: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfretetotalitemdolardisp: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlsegurototalitemdolardisp: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotlocaembarqueitemdolardisp: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalcondvendaitemdolardisp: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vliidevidoitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlipidevidoitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpisdevidoitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcofinsdevidoitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idlicapa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'historicoliitem',
        key: 'idhistoricolicapa'
      }
    },
    idliitem: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    qtdemercadoriadrawback: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmercadoriadrawback: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    qtdemercadoriadrawbackdisp: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmercadoriadrawbackdisp: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'historicodiitem'
  });
};
