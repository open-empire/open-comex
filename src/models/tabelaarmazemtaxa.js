/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tabelaarmazemtaxa', {
    idtabelaarmazem: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'tabelaarmazem',
        key: 'idtabelaarmazem'
      }
    },
    idtabelaarmazemtaxa: {
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
    tpbasecalculo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlrbasetaxa: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrminimo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'tabelaarmazemtaxa'
  });
};
