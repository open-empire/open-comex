/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dadoscomplementarescntr', {
    iddadoscomplementares: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'dadoscomplementares',
        key: 'iddadoscomplementares'
      }
    },
    iddadoscomplementarescntr: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tpcampo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmformatacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ordem: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nrsequencia: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nrtamanhocampo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tpalinhamento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    flremovecamponull: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'dadoscomplementarescntr'
  });
};
