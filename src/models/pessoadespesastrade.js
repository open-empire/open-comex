/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pessoadespesastrade', {
    idpessoadespesastrade: {
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
    iditemdespesa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'itemdespesa',
        key: 'iditemdespesa'
      }
    },
    idcontadespesas: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'contafinanceiro',
        key: 'idcontafinanceiro'
      }
    },
    vlrfixo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    recuperavel: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sndespesabasenfs: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'pessoadespesastrade'
  });
};
