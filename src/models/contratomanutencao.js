/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('contratomanutencao', {
    idcontratomanutencao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nrcontrato: {
      type: DataTypes.STRING,
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
    dtinicio: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtcancelamento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtiniciofaturamento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtultimoreajuste: {
      type: DataTypes.DATE,
      allowNull: true
    },
    idusuarioreajuste: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usuario',
        key: 'idusuario'
      }
    },
    qtmesesreajuste: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    percentualreajuste: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idclientefaturamento: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    contratoassinado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtenvio: {
      type: DataTypes.DATE,
      allowNull: true
    },
    vlrtotalcontrato: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    diavencimentofaturamento: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    observacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    valortotalcontratoextenso: {
      type: DataTypes.STRING,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlrtotalcontratoantesreajuste: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    mesdtinicio: {
      type: DataTypes.STRING,
      allowNull: true
    },
    anodtinicio: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'contratomanutencao'
  });
};
