/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('demonstrativofinancbanc', {
    iddemonstrativofinanceiro: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'demonstrativofinanceiro',
        key: 'iddemonstrativofinanceiro'
      }
    },
    iddemonstrativofinancbanc: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    banco: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlrsaldoanterior: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrentradas: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrsaidas: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrsaldoatual: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'demonstrativofinancbanc'
  });
};
