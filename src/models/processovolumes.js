/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('processovolumes', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'processo',
        key: 'idprocesso'
      }
    },
    idprocessovolumes: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idespeciesvolumes: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'especiesvolumes',
        key: 'idespeciesvolumes'
      }
    },
    qtdevolume: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    vlqtdevolumes: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'processovolumes'
  });
};
