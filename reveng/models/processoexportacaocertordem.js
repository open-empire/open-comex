/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('processoexportacaocertordem', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'processoexportacaocertorigem',
        key: 'idprocesso'
      }
    },
    idprocessoexportacao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idprocessoexportacaocertorigem: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idprocessoexportacaocertordem: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nrordem: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idnorma: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'normas',
        key: 'idnormas'
      }
    },
    ncmparcial: {
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
    txcabecalhoordem: {
      type: DataTypes.STRING,
      allowNull: true
    },
    txdescricaoordem: {
      type: DataTypes.STRING,
      allowNull: true
    },
    naladiparcial: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idnaladi: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'naladi',
        key: 'idnaladi'
      }
    },
    vlquantidade: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idunidade: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'unidademedida',
        key: 'idunidademedida'
      }
    },
    vlunitarioexw: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalmle: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesoliquidototal: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesobrutototal: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nrregistroresiscomex: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtregistroresiscomex: {
      type: DataTypes.DATE,
      allowNull: true
    },
    idnaladincca: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'naladincca',
        key: 'idnaladincca'
      }
    },
    criterioorigem: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrfatura: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtfatura: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'processoexportacaocertordem'
  });
};
