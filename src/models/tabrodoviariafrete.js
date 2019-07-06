/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tabrodoviariafrete', {
    idtabrodoviariacapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'tabrodoviariacapa',
        key: 'idtabrodoviariacapa'
      }
    },
    idtabrodoviariafrete: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    vlpesoinicial: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesofinal: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcustofrete: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'tabrodoviariafrete'
  });
};
