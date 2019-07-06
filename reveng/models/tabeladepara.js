/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tabeladepara', {
    idtabeladepara: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tptabeladepara: {
      type: DataTypes.STRING,
      allowNull: true
    },
    codigointerno: {
      type: DataTypes.STRING,
      allowNull: true
    },
    codigoexterno: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idpessoaimportador: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    snativo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idinterno: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nomeinterno: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'tabeladepara'
  });
};
