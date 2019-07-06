/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('grupotipo', {
    idgrupotipo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nmgrupotipo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdtipo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ididioma: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'idioma',
        key: 'ididioma'
      }
    },
    idopcoesreport: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'grupotipo'
  });
};
