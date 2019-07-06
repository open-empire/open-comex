/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('processoddenfvinc', {
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
    idprocessoddenfvinc: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nrnf: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'processoddenfvinc'
  });
};
