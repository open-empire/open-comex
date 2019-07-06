/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('processomicdtafracionado', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'processo',
        key: 'idprocesso'
      }
    },
    idprocessomicdtafracionado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    dtapresentacao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtchegada: {
      type: DataTypes.DATE,
      allowNull: true
    },
    qtvolumestotal: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    vlpesoliqtotal: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'processomicdtafracionado'
  });
};
