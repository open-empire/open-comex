/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('demonstrativofinancbancgvw', {
    iddemonstrativofinancgvw: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'demonstrativofinancgvw',
        key: 'iddemonstrativofinancgvw'
      }
    },
    idemonstrativofinancbancgvw: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    codigobanco: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nomebanco: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlrsaldoatual: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'demonstrativofinancbancgvw'
  });
};
