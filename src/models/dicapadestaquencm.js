/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dicapadestaquencm', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'dicapa',
        key: 'idprocesso'
      }
    },
    iddicapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iddicapadestaquencm: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nrdestaque: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'dicapadestaquencm'
  });
};
