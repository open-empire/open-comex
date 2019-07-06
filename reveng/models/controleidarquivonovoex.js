/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('controleidarquivonovoex', {
    idacessosiscomex: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'acessosiscomex',
        key: 'idacessosiscomex'
      }
    },
    sequenciaidarquivore: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'controleidarquivonovoex'
  });
};
