/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tabelasda', {
    idtabelasda: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cdtabelasda: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmtabelasda: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlminimo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmaximo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlaliquotasda: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlaliquotaassistsocial: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    sncalcularsobrefob: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snativo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlfixo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    sncalcinvertido: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'tabelasda'
  });
};
