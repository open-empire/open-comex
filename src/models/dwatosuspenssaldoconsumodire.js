/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dwatosuspenssaldoconsumodire', {
    iddwatosuspensaocapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'dwatosuspensaocapa',
        key: 'iddwatosuspensaocapa'
      }
    },
    iddwatosuspenssaldoconsumodire: {
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
    tableName: 'dwatosuspenssaldoconsumodire'
  });
};
