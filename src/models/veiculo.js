/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('veiculo', {
    idveiculo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cdveiculo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmveiculo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    placa: {
      type: DataTypes.STRING,
      allowNull: true
    },
    renavan: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpclassificacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snativo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'veiculo'
  });
};
