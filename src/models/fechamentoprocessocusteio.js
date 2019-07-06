/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fechamentoprocessocusteio', {
    idfechamentoprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'fechamentoprocesso',
        key: 'idfechamentoprocesso'
      }
    },
    idfechamentoprocessocusteio: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    vlcusteio: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nmitemdespesa: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'fechamentoprocessocusteio'
  });
};
