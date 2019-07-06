/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rodoviariafrete', {
    idrodoviariafrete: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idrodoviaria: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'rodoviaria',
        key: 'idrodoviaria'
      }
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
    tableName: 'rodoviariafrete'
  });
};
