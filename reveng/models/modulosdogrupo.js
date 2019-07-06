/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('modulosdogrupo', {
    idgrupomodulo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'grupomodulo',
        key: 'idgrupomodulo'
      }
    },
    idmodulosdogrupo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idmodulo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'modulo',
        key: 'idmodulo'
      }
    }
  }, {
    tableName: 'modulosdogrupo'
  });
};
