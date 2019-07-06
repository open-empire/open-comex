/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tabrodoviariataxas', {
    idtabrodoviariacapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'tabrodoviariacapa',
        key: 'idtabrodoviariacapa'
      }
    },
    idtabrodoviariataxas: {
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
    vlinicial: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfinal: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcustotaxa: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlminimo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    snbaseicms: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'tabrodoviariataxas'
  });
};
