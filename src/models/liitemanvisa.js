/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('liitemanvisa', {
    idliitemanvisa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idlicapa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'licapa',
        key: 'idprocesso'
      }
    },
    descitem: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'liitemanvisa'
  });
};
