/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('diadicaodestaquencm', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'diadicao',
        key: 'idprocesso'
      }
    },
    iddicapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iddiadicao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iddiadicaodestaquencm: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nrdestaque: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'diadicaodestaquencm'
  });
};
