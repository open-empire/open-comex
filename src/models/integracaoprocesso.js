/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('integracaoprocesso', {
    idintegracaoprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'processo',
        key: 'idprocesso'
      }
    },
    nmtipointegracao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    keya: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idreferenciatabela: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dtintegracao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtenvio: {
      type: DataTypes.DATE,
      allowNull: true
    },
    nmobservacoes: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nridentificacaoregistro: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nomearquivo: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'integracaoprocesso'
  });
};
