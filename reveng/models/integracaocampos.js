/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('integracaocampos', {
    idintegracaocampos: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nmcampotitulo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmcampo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    chaveedi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpcampo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tamanho: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tamanhodecimal: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ordem: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nmtabelamodulo: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'integracaocampos'
  });
};
