/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('uf', {
    iduf: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idpais: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pais',
        key: 'idpais'
      }
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cduf: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmuf: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdibge: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlaliqicmsremessaexpressa: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'uf'
  });
};
