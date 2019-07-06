/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('motivodsi', {
    idmotivodsi: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cdmotivodsi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmmotivodsi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idfundamentolegalregtrib: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'fundamentolegalregtrib',
        key: 'idfundamentolegalregtrib'
      }
    }
  }, {
    tableName: 'motivodsi'
  });
};
