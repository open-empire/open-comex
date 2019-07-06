/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('processorodnacional', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'processo',
        key: 'idprocesso'
      }
    },
    idprocessorodnacional: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nrcte: {
      type: DataTypes.STRING,
      allowNull: true
    },
    seriecte: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtemissaocte: {
      type: DataTypes.DATE,
      allowNull: true
    },
    tpservicocte: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpformapagto: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tptomador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idpessoaremetente: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    idpessoadestinatario: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    idpessoaexpedidor: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    idpessoarecebedor: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    idpessoatomadorservico: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    idveiculo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'veiculo',
        key: 'idveiculo'
      }
    },
    idprimreboque: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'veiculo',
        key: 'idveiculo'
      }
    },
    idsegreboque: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'veiculo',
        key: 'idveiculo'
      }
    },
    idmotorista: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'motorista',
        key: 'idmotorista'
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
    nmcorretor: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrapolice: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nraverbacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    produtopredominante: {
      type: DataTypes.STRING,
      allowNull: true
    },
    outrascaracteristicacarga: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tptribicms: {
      type: DataTypes.STRING,
      allowNull: true
    },
    valortotalbaseicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlaliqicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    valortotalpesobrutokg: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    quantidadetotal: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    valortotalnota: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tpdespacho: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtdidde: {
      type: DataTypes.DATE,
      allowNull: true
    },
    nrdidde: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtdta: {
      type: DataTypes.DATE,
      allowNull: true
    },
    nrdta: {
      type: DataTypes.STRING,
      allowNull: true
    },
    observacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    chaveacessocte: {
      type: DataTypes.STRING,
      allowNull: true
    },
    numeroaleatoriochaveacesso: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dtpreventregarecebedor: {
      type: DataTypes.DATE,
      allowNull: true
    },
    idnaturezaoperacao: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'naturezaoperacao',
        key: 'idnaturezaoperacao'
      }
    },
    dtenviorecebto: {
      type: DataTypes.DATE,
      allowNull: true
    },
    idusuarioenviorecebto: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usuario',
        key: 'idusuario'
      }
    }
  }, {
    tableName: 'processorodnacional'
  });
};
