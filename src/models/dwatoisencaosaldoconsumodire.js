/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dwatoisencaosaldoconsumodire', {
    iddwatoisencaocapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'dwatoisencaocapa',
        key: 'iddwatoisencaocapa'
      }
    },
    iddwatoisencaosaldoconsumodire: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nrregistrore: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nritemre: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdmateriaprima: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlqtdeconsumida: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlqtdeconsumidacomerc: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'dwatoisencaosaldoconsumodire'
  });
};
