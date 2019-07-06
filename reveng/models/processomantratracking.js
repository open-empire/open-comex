/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('processomantratracking', {
    idprocessomantratracking: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    maxforcode: {
      type: DataTypes.INTEGER,
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
    idpessoaunidadeoperacional: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    nrhouse: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmimportadorendereco: {
      type: DataTypes.STRING,
      allowNull: true
    },
    finalizado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    xmlenviomantra: {
      type: "OID",
      allowNull: true
    },
    xmlretornomantra: {
      type: "OID",
      allowNull: true
    },
    nrmaster: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtprimconsultamantra: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'processomantratracking'
  });
};
