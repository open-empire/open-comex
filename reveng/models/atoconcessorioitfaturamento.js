/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('atoconcessorioitfaturamento', {
    idatoconcessoriocapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'atoconcessoriocapa',
        key: 'idatoconcessoriocapa'
      }
    },
    idatoconcessorioitfaturamento: {
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
    tpformacalculo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    valorcalculo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nrnotafiscal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtemissaonotafiscal: {
      type: DataTypes.DATE,
      allowNull: true
    },
    snfaturado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idfaturamento: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    valorfrete: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'atoconcessorioitfaturamento'
  });
};
