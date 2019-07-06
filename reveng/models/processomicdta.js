/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('processomicdta', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'processo',
        key: 'idprocesso'
      }
    },
    idprocessomicdta: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nmmic: {
      type: DataTypes.STRING,
      allowNull: true
    },
    placa: {
      type: DataTypes.STRING,
      allowNull: true
    },
    data: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'processomicdta'
  });
};
