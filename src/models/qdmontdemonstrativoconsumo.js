/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('qdmontdemonstrativoconsumo', {
    idqdmontdemonstrativoconsumo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    processodemonstrativoconsumo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtaberturademonstrativo: {
      type: DataTypes.DATE,
      allowNull: true
    },
    idcliente: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    idunidadeoperacional: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ano: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idatoconcessorio: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'atoconcessoriocapa',
        key: 'idatoconcessoriocapa'
      }
    },
    dtperiodoinicial: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtperiodofinal: {
      type: DataTypes.DATE,
      allowNull: true
    },
    obsqdmontdemonstrativoconsumo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpdemonstrativo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    statusprocesso: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpmontagemquadro: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpdistribuicaodi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    itensdinacionalizado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snquadromontadoalterado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtemissaoatoconcessorio: {
      type: DataTypes.DATE,
      allowNull: true
    },
    delegaciareceitafederal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    localemissaoatoconcessorio: {
      type: DataTypes.STRING,
      allowNull: true
    },
    assinatura1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    assinatura2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpprodutoimportado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrregistrodrawback: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtregistrodrawback: {
      type: DataTypes.DATE,
      allowNull: true
    },
    vlfreteestimado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlseguroestimado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltaxadolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    dttaxadolar: {
      type: DataTypes.DATE,
      allowNull: true
    },
    tpcoberturacambial: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cpfass1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cpfass2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpdatabasecicloproducao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idusuarioresponsavel: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usuario',
        key: 'idusuario'
      }
    },
    nrreferencia: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtlimiteprorrogacao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtprorrogacao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    statussiscomex: {
      type: DataTypes.STRING,
      allowNull: true
    },
    statusbaixasiscomex: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtvalidadesiscomex: {
      type: DataTypes.DATE,
      allowNull: true
    },
    modalidadedrawback: {
      type: DataTypes.STRING,
      allowNull: true
    },
    observacaobaixa: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'qdmontdemonstrativoconsumo'
  });
};
