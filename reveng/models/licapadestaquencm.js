/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('licapadestaquencm', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'licapa',
        key: 'idprocesso'
      }
    },
    idlicapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idllicapadestaquencm: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nrdestaquencm: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'licapadestaquencm'
  });
};
