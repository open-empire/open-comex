/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('processocusteiodiitem', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'processocusteio',
        key: 'idprocesso'
      }
    },
    idprocessocusteio: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iddicapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iddiitem: {
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
    vlitemdespesa: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'processocusteiodiitem'
  });
};
