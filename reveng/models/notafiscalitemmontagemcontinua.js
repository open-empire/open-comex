/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('notafiscalitemmontagemcontinua', {
    idnotafiscal: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'notafiscalitemmontagem',
        key: 'idnotafiscal'
      }
    },
    idnotaficalitem: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idnotafiscalitemcontinua: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    campolivre1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    campolivre2: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'notafiscalitemmontagemcontinua'
  });
};
