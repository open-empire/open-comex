/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('liitemdestaquencm', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'liitem',
        key: 'idprocesso'
      }
    },
    idlicapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idliitem: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idliitemdestaquencm: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nrdestaquencm: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'liitemdestaquencm'
  });
};
