/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dwhistoricoduehistorico', {
    iddwhistoricodue: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'dwhistoricodue',
        key: 'iddwhistoricodue'
      }
    },
    iddwhistoricoduehistorico: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nrregistrodue: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ideventohistorico: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    evento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    responsavel: {
      type: DataTypes.STRING,
      allowNull: true
    },
    informacoesadicionais: {
      type: DataTypes.STRING,
      allowNull: true
    },
    motivo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    detalhes: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtevento: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'dwhistoricoduehistorico'
  });
};
