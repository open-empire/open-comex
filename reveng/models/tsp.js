/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tsp', {
    idtsp: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cdtsp: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmtsp: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlaliquotasimplificada: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    dtiniciosimplificada: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtfimsimplificada: {
      type: DataTypes.DATE,
      allowNull: true
    },
    vlaliquotabagagem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    dtiniciobagagem: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtfimbagagem: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'tsp'
  });
};
