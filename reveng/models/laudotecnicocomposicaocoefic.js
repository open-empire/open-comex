/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('laudotecnicocomposicaocoefic', {
    idlaudotecnico: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'laudotecnicocomposicao',
        key: 'idlaudotecnico'
      }
    },
    idlaudotecnicocomposicao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idlaudotecnicocomposicaocoefic: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tpmesutilizacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlcoeficienteutilizacao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'laudotecnicocomposicaocoefic'
  });
};
