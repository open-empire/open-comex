/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('contacontabil', {
    idcontacontabil: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cdcontacontabil: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrgrau: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nmcontacontabil: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrreduzido: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdhistorico: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpindicador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idcontacontabilpai: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'contacontabil',
        key: 'idcontacontabil'
      }
    },
    snativo: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'contacontabil'
  });
};
