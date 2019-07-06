/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('itemcusteio', {
    idnotafiscal: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'notafiscalmontagem',
        key: 'idnotafiscal'
      }
    },
    iditemcusteio: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    vlcusteio: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    dtcusteio: {
      type: DataTypes.DATE,
      allowNull: true
    },
    metodorateio: {
      type: DataTypes.STRING,
      allowNull: true
    },
    iditemdespesa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'itemdespesa',
        key: 'iditemdespesa'
      }
    },
    cditemdespesa: {
      type: DataTypes.STRING,
      allowNull: true
    },
    basenotafiscalsaida: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'itemcusteio'
  });
};
