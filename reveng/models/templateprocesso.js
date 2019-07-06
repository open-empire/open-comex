/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('templateprocesso', {
    idtemplateprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cdtemplateprocesso: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmtemplateprocesso: {
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
    idrecintoalfandegado: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'recintoalfandegado',
        key: 'idrecintoalfandegado'
      }
    },
    idcidadeembarque: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'cidade',
        key: 'idcidade'
      }
    },
    idincoterm: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'incoterm',
        key: 'idincoterm'
      }
    },
    tpdrawback: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrregistrodrawback: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nratodrawback: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpregime: {
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
    idagenciasecex: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'agenciasecex',
        key: 'idagenciasecex'
      }
    },
    tpacordo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idacordoaladi: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'acordoaladi',
        key: 'idacordoaladi'
      }
    },
    tpcambio: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idmodalidadepagto: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'modalidadepagamento',
        key: 'idmodalidadepagamento'
      }
    },
    vlqtdediascobertura: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idmotivosemcobertura: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'motivosemcobertura',
        key: 'idmotivosemcobertura'
      }
    },
    idinstituicaofinanceira: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'instituicaofinanceiraitl',
        key: 'idinstituicaofinanceiraitl'
      }
    },
    idpaisprocedencia: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pais',
        key: 'idpais'
      }
    },
    mmobservcoes: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'templateprocesso'
  });
};
