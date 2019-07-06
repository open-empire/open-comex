/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('protocolo', {
    idprotocolo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cdprotocolo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtinclusao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtenvio: {
      type: DataTypes.DATE,
      allowNull: true
    },
    tpsituacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmprotocolo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idremetente: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    idremetenteanalista: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usuario',
        key: 'idusuario'
      }
    },
    iddestinatario: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    iddestinatarioanalista: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usuario',
        key: 'idusuario'
      }
    },
    dtrecebimento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    idusuariorecebimento: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usuario',
        key: 'idusuario'
      }
    },
    dtimpressao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    idpessoafornecedor: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    txobservacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrconhecimento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpformaenvio: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sndocprocesso: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sndocfaturamento: {
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
    tpprotocolo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idanalistacliente: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    cep: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'protocolo'
  });
};
