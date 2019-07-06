/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('calculocomissaovendedor', {
    idcalculocomissao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'calculocomissao',
        key: 'idcalculocomissao'
      }
    },
    idcalculocomissaovendedor: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idvendedor: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'vendedor',
        key: 'idvendedor'
      }
    }
  }, {
    tableName: 'calculocomissaovendedor'
  });
};
