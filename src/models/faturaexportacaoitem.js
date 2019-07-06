/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('faturaexportacaoitem', {
    idfaturaexportacaocapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'faturaexportacaocapa',
        key: 'idfaturaexportacaocapa'
      }
    },
    idfaturaexportacaoitem: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idmercadoria: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'mercadoria',
        key: 'idmercadoria'
      }
    },
    idncm: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ncm',
        key: 'idncm'
      }
    },
    idnaladi: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'naladi',
        key: 'idnaladi'
      }
    },
    vlvolume: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlsqftunitario: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlsqmtunitario: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlquantidadeitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idunidademedida: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'unidademedida',
        key: 'idunidademedida'
      }
    },
    vlunitario: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesoliquidounitario: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlexwitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlsqmtitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmleitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesoliquidoitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmcvitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesobrutoitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfreteitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlseguroitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlacrescimoitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldescontoitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    txdescricaomercadoria: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nritem: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    vlquantidadebaixadaitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlquantidadedisponivelitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nratoconcessorio: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idproformaexportacaocapa: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idproformaexportacaoitem: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    vlunitarioreais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    destaquencm: {
      type: DataTypes.STRING,
      allowNull: true
    },
    percentualcomissaoagente: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tpformapagamentocomissaoagente: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlcomissaoagenteitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idufprodutor: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'uf',
        key: 'iduf'
      }
    },
    tpfinalidademercadoria: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sngeradocambio: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrlote: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtfabricacao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtvalidade: {
      type: DataTypes.DATE,
      allowNull: true
    },
    observacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrpedido: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrordemcompra: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtordemcompra: {
      type: DataTypes.DATE,
      allowNull: true
    },
    snrepassaordemcompraitens: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpfabricanteexportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idpessoafabricanteitem: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    idpaisorigem: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pais',
        key: 'idpais'
      }
    },
    txcompldescricaomercadoria: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idembalagem: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'embalagem',
        key: 'idembalagem'
      }
    },
    vlcubagem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nrregistrosiscomex: {
      type: DataTypes.STRING,
      allowNull: true
    },
    qtdeembalagem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    qtdeembalagens: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalpallet: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesopallet: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nrnotaporitem: {
      type: DataTypes.STRING,
      allowNull: true
    },
    serienotaporitem: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtnotafiscal: {
      type: DataTypes.DATE,
      allowNull: true
    },
    nrseqitemnf: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrchaveacessonf: {
      type: DataTypes.STRING,
      allowNull: true
    },
    txdescricaocomplementar: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlqtdunidadeestatistica: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nrchaveacessonfreferenciada: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrseqitemnfreferenciada: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlqtdunidadeestreferenciada: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'faturaexportacaoitem'
  });
};
