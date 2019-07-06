/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cambioexportacao', {
    idcambioexportacao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idunidadenegocio: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    idpessoaexportador: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    idpessoaimportador: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    idtermopagamento: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'termopagamento',
        key: 'idtermopagamento'
      }
    },
    nrdocumento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtabertura: {
      type: DataTypes.DATE,
      allowNull: true
    },
    vlmcvcambio: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idmoedacambio: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'moeda',
        key: 'idmoeda'
      }
    },
    idproformaexportacaocapa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'proformaexportacaocapa',
        key: 'idproformaexportacaocapa'
      }
    },
    idfaturaexportacaocapa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'faturaexportacaocapa',
        key: 'idfaturaexportacaocapa'
      }
    },
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'processoexportacao',
        key: 'idprocesso'
      }
    },
    idprocessoexportacao: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    idcontafinanceiro: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'contafinanceiro',
        key: 'idcontafinanceiro'
      }
    },
    idempresaestrangeira: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    idfaturamento: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    vltotalcomissao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'cambioexportacao'
  });
};
