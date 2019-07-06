/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('comercialtransprodtaxaext', {
    idcomercial: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'comercialrota',
        key: 'idcomercial'
      }
    },
    idcomercialservico: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idcomercialrota: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idcomercialtransprodtaxaext: {
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
    vlintervaloinicial: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlintervalofinal: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idmoedataxa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'moeda',
        key: 'idmoeda'
      }
    },
    vlbasecompra: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcompraminimo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlbasevenda: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlvendaminimo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'comercialtransprodtaxaext'
  });
};
