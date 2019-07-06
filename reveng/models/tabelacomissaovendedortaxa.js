/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tabelacomissaovendedortaxa', {
    idtabelacomissaovendedor: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'tabelacomissaovendedor',
        key: 'idtabelacomissaovendedor'
      }
    },
    idtabelacomissaovendedortaxa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iditemdespesa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'itemdespesa',
        key: 'iditemdespesa'
      }
    },
    snimportacaoaerea: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snimportacaomaritima: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snexportacaoaerea: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snexportacaomaritima: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'tabelacomissaovendedortaxa'
  });
};
