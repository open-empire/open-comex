/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fechamentocambiotrade', {
    idfechamentocambiotrade: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ano: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idexportador: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    idimportador: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idbanco: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'contafinanceiro',
        key: 'idcontafinanceiro'
      }
    },
    idcorretora: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    idmoeda: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'moeda',
        key: 'idmoeda'
      }
    },
    idbancoexterior: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    idmoedafechamento: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idmoedacorretagem: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'moeda',
        key: 'idmoeda'
      }
    },
    dtfechamento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtliquidacao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtlancamento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtdebito: {
      type: DataTypes.DATE,
      allowNull: true
    },
    vlcontrato: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltaxafechamento: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcorretagem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalfechamento: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltaxacorretagem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalreais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcorretagemreais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tpresppagto: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrcontrato: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrremessa: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrpraca: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtcancelado: {
      type: DataTypes.DATE,
      allowNull: true
    },
    idusuariocanc: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usuario',
        key: 'idusuario'
      }
    },
    idpedidoimportacao: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pedidoimportacaocapa',
        key: 'idpedidoimportacaocapa'
      }
    },
    idpessoaunidade: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    vltaxabanco: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tpproduto: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mmobservcoes: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snenvio: {
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
    },
    snstatusantecipado: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'fechamentocambiotrade'
  });
};
