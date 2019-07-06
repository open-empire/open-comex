/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('processocomplagenciamento', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'processo',
        key: 'idprocesso'
      }
    },
    idprocessocomplagenciamento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idpessoaestrangeira: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    numerofatura: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrreferenciafatura: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtfatura: {
      type: DataTypes.DATE,
      allowNull: true
    },
    vlrqtdepecas: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    vlrqtdevolumes: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    vlritemdespesa: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    dtcoleta: {
      type: DataTypes.DATE,
      allowNull: true
    },
    nrnotasaida: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlrnotafiscal: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrfatura: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrfaturasemfreteseguro: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'processocomplagenciamento'
  });
};
