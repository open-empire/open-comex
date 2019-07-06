/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('controlenotificacoesgrupo', {
    idcontrolenotificacoes: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'controlenotificacoes',
        key: 'idcontrolenotificacoes'
      }
    },
    idcontrolenotificacoesgrupo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idgrupousuario: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'grupousuario',
        key: 'idgrupousuario'
      }
    }
  }, {
    tableName: 'controlenotificacoesgrupo'
  });
};
