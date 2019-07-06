/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dsivolumes', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'dsicapa',
        key: 'idprocesso'
      }
    },
    iddsicapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iddsivolumes: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idembalagem: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'especiesvolumes',
        key: 'idespeciesvolumes'
      }
    },
    vlquantidadevolume: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'dsivolumes'
  });
};
