/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('recuperacaolotere', {
    idrecuperacaolotere: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idprocessoexportacao: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idprocessoexportacaore: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nrlotere: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmemailsnotificao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdusuariosiscomex: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpambiente: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'recuperacaolotere'
  });
};
