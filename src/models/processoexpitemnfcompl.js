/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('processoexpitemnfcompl', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'processoexportacaoitem',
        key: 'idprocesso'
      }
    },
    idprocessoexportacao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idprocessoexportacaoitem: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idprocessoexpitemnfcompl: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nrchaveacessonf: {
      type: DataTypes.STRING,
      allowNull: true
    },
    seqitemnf: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'processoexpitemnfcompl'
  });
};
