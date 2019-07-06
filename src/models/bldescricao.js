/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bldescricao', {
    idbldescricao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nmbldescricao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idimpressaoconhecmaritimo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'impressaoconhecimentomaritimo',
        key: 'impressaoconhecimentomaritimo'
      }
    }
  }, {
    tableName: 'bldescricao'
  });
};
