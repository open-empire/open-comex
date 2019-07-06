/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pessoacontato', {
    idpessoa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    idcontato: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cdpessoacontato: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmcontato: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cargo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    departamento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    telefone: {
      type: DataTypes.STRING,
      allowNull: true
    },
    telefonepart: {
      type: DataTypes.STRING,
      allowNull: true
    },
    celular: {
      type: DataTypes.STRING,
      allowNull: true
    },
    celularpart: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fax: {
      type: DataTypes.STRING,
      allowNull: true
    },
    faxpart: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ptt: {
      type: DataTypes.STRING,
      allowNull: true
    },
    pttpart: {
      type: DataTypes.STRING,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true
    },
    emailpart: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snemailmantra: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snemailavaria: {
      type: DataTypes.STRING,
      allowNull: true
    },
    txcomplementarmanual: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idimagem: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'byimagens',
        key: 'idimagem'
      }
    },
    snativoportalagente: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdpassword: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpunidadedimensoes: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpunidadepeso: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpvolume: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snemailconfirmacaobl: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdativo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snenviarsiscomex: {
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
    cep: {
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
    }
  }, {
    tableName: 'pessoacontato'
  });
};
