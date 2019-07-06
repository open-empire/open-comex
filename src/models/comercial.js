/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('comercial', {
    idcomercial: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nrcomercial: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpclassificacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snutilizado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtabertura: {
      type: DataTypes.DATE,
      allowNull: true
    },
    idunidadecomercial: {
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
    idcliente: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoacontato',
        key: 'idpessoa'
      }
    },
    tpstatus: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtstatus: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtvalidade: {
      type: DataTypes.DATE,
      allowNull: true
    },
    idanalistaresponsavel: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usuario',
        key: 'idusuario'
      }
    },
    idcontatocliente: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    txobservacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    txobservacaooperacional: {
      type: DataTypes.STRING,
      allowNull: true
    },
    txmotivorejeicao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlpesokgcotacao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesotoncotacao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcubagemcotacao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesocubadocotacao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesotaxadocotacao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tpestufagemcotacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlbasecompracotacao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcompracotacao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlbasevendacotacao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlvendacotacao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    snminimocotacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpdestinatariocomercial: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idpessoaagente: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    idvendedor: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'vendedor',
        key: 'idvendedor'
      }
    },
    vlcompracotacaoreais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlvendacotacaoreais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    dtcalculotaxas: {
      type: DataTypes.DATE,
      allowNull: true
    },
    snminimocotacaocompra: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtcalculo: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtenvio: {
      type: DataTypes.DATE,
      allowNull: true
    },
    tpcomercial: {
      type: DataTypes.STRING,
      allowNull: true
    },
    txmotivocancelamento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idcomercialvinculado: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'comercial'
  });
};
