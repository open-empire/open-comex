/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dispositivolegal', {
    iddispositivolegal: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cddispositivolegal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmdispositivolegal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    descricaocompleta: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdregimetributacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    snativo: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'dispositivolegal'
  });
};
