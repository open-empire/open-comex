/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('direitomodulo', {
    idmodulo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'modulo',
        key: 'idmodulo'
      }
    },
    iddireito: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'direito',
        key: 'iddireito'
      }
    }
  }, {
    tableName: 'direitomodulo'
  });
};
