/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('processodderevinc', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'processodde',
        key: 'idprocesso'
      }
    },
    idprocessodde: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idprocessodderevinc: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nrregistroexportacao: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'processodderevinc'
  });
};
