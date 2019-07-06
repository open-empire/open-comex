/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lsiitemanvisa', {
    idlsiitemanvisa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idlsicapa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'lsicapa',
        key: 'idprocesso'
      }
    },
    descitem: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'lsiitemanvisa'
  });
};
