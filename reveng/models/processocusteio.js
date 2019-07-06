/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('processocusteio', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'processo',
        key: 'idprocesso'
      }
    },
    idprocessocusteio: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iditemdespesa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'itemdespesa',
        key: 'iditemdespesa'
      }
    },
    nrdocumento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtlancamento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    vlitemdespesa: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tpmetodorateio: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpresponsabilidade: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tprecuperavel: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idfornecedor: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    vlitemdespesavalidado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tpvalida: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idcontacorrenteembarque: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    vlprovisionado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    snintegrado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    codigointegracao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmemailfornecedor: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snprovisionar: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idtabelacustointegracao: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    statusintegracaofinanceiro: {
      type: DataTypes.STRING,
      allowNull: true
    },
    statusintegracaofornecedor: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idusuarioaprovacao: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usuario',
        key: 'idusuario'
      }
    },
    dtaprovacao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    snforcarrateioimposto: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idusuarioalteracao: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usuario',
        key: 'idusuario'
      }
    },
    tprejeicao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    txobservacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    txlogintegracao: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'processocusteio'
  });
};
