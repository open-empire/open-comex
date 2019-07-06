/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dwhistoricolicapa', {
    iddwhistoricolicapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nratodrawback: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrregistroli: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtregistroli: {
      type: DataTypes.DATE,
      allowNull: true
    },
    tpregime: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdmoeda: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmmoeda: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mmhtmlli: {
      type: "OID",
      allowNull: true
    },
    situacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrregistrodi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nradicao: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'dwhistoricolicapa'
  });
};
