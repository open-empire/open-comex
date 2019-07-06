/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pessoaclientecomissao', {
    idpessoaclientecomissao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idacessohabilitacao: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'acessohabilitacao',
        key: 'idacessohabilitacao'
      }
    },
    idtabelacomissaovendedor: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tabelacomissaovendedor',
        key: 'idtabelacomissaovendedor'
      }
    }
  }, {
    tableName: 'pessoaclientecomissao'
  });
};
