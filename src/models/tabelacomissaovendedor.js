/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tabelacomissaovendedor', {
    idtabelacomissaovendedor: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cdtabelacomissaovendedor: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmtabelacomissaovendedor: {
      type: DataTypes.STRING,
      allowNull: true
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idvendedor: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'vendedor',
        key: 'idvendedor'
      }
    },
    tpformacalculo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpbasecalculo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    percentualcomissao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    percentualdescontosda: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    percentualdescsobreserv: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrdescontofixo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrdescontofixocustoop: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'tabelacomissaovendedor'
  });
};
