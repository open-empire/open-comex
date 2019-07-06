/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('direpassedestaquencm', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'direpasse',
        key: 'idprocesso'
      }
    },
    iddicapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iddirepasse: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iddirepassedestaquencm: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nrdestaque: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'direpassedestaquencm'
  });
};
