/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fechamentofinanceiro', {
    idfechamentofinanceiro: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    dtlancamento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    idusuario: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usuario',
        key: 'idusuario'
      }
    },
    tpprocedencia: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mesano: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'fechamentofinanceiro'
  });
};
