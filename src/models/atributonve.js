/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('atributonve', {
    idatributonve: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cdatributonve: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmatributonve: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idncm: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cdnivelncm: {
      type: DataTypes.STRING,
      allowNull: true
    },
    inmultiplaespecificacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdncm: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'atributonve'
  });
};
