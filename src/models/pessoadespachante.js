/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pessoadespachante', {
    idpessoadespachante: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idacessohabilitacao: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'acessohabilitacao',
        key: 'idacessohabilitacao'
      }
    },
    iddespachante: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    qualificacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    numerodocumento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    localregistro: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtvencimento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    sndespachanteconsultacanaldi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sndespachanteconsultacidi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sndespacconsultanuenciali: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snretencaosda: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sndespachanteconsultadue: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'pessoadespachante'
  });
};
