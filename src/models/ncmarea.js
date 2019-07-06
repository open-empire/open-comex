/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ncmarea', {
    idncmarea: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idncm: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ncm',
        key: 'idncm'
      }
    },
    idarea: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'area',
        key: 'idarea'
      }
    },
    aliquotapis: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    aliquotacofins: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'ncmarea'
  });
};
