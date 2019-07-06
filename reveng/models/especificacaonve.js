/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('especificacaonve', {
    idespecificacaonve: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cdespecificacaonve: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmespecificacaonve: {
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
    cdatributonve: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdncm: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'especificacaonve'
  });
};
