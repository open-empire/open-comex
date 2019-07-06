/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('funcionario', {
    idfuncionario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cdfuncionario: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmfuncionario: {
      type: DataTypes.STRING,
      allowNull: true
    },
    rg: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cpf: {
      type: DataTypes.STRING,
      allowNull: true
    },
    telefone: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrregistrooficial: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'funcionario'
  });
};
