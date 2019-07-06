/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tabelacomissaovendedorfaixa', {
    idtabelacomissaovendedor: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'tabelacomissaovendedortaxa',
        key: 'idtabelacomissaovendedor'
      }
    },
    idtabelacomissaovendedortaxa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idtabelacomissaovendedorfaixa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    vllucratividadeinicial: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vllucratividadefinal: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlperccomissao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'tabelacomissaovendedorfaixa'
  });
};
