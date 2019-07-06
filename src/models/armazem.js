/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('armazem', {
    idarmazem: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cdarmazem: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmarmazem: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idurfdespacho: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'urf',
        key: 'idurf'
      }
    },
    idurfentrada: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'urf',
        key: 'idurf'
      }
    },
    aparmazem: {
      type: DataTypes.STRING,
      allowNull: true
    },
    endereco: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrendereco: {
      type: DataTypes.STRING,
      allowNull: true
    },
    bairro: {
      type: DataTypes.STRING,
      allowNull: true
    },
    complementoendereco: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idcidade: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'cidade',
        key: 'idcidade'
      }
    },
    homepagepessoa: {
      type: DataTypes.STRING,
      allowNull: true
    },
    telefone: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fax: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpmargem: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mmobservcoes: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dddtelefone: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dddfax: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmenderecoftp: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmusuarioftp: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmsenhaftp: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmpathdownload: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmpathupload: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmemailnotificacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpintegracaoalcis: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdintegracao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdmercante: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idrecintoalfandegado: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'recintoalfandegado',
        key: 'idrecintoalfandegado'
      }
    },
    idsetorarmazem: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'setorimportacao',
        key: 'idsetorimportacao'
      }
    }
  }, {
    tableName: 'armazem'
  });
};
