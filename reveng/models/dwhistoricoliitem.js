/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dwhistoricoliitem', {
    iddwhistoricolicapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'dwhistoricolicapa',
        key: 'iddwhistoricolicapa'
      }
    },
    iddwhistoricoliitem: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nritem: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nratodrawbackitem: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nratodrawback: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlqtdeitemdrawback: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmlemoedaitemdrawback: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nratodrawbackanexo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    vlmledolaritemdrawback: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'dwhistoricoliitem'
  });
};
