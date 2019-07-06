/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tipoacrescimo', {
    idtipoacrescimo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cdtipoacrescimo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmtipoacrescimo: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'tipoacrescimo'
  });
};
