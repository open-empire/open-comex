/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('agentedadosbancarios', {
    idpessoa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    idagentedadosbancarios: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idbanco: {
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
    nrconta: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrroutinginformation: {
      type: DataTypes.STRING,
      allowNull: true
    },
    observacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    swift: {
      type: DataTypes.STRING,
      allowNull: true
    },
    aba: {
      type: DataTypes.STRING,
      allowNull: true
    },
    iban: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'agentedadosbancarios'
  });
};
