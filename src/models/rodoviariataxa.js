/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rodoviariataxa', {
    idrodoviariataxa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idrodoviaria: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'rodoviaria',
        key: 'idrodoviaria'
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
    }
  }, {
    tableName: 'rodoviariataxa'
  });
};
