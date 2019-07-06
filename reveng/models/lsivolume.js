/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lsivolume', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'lsicapa',
        key: 'idprocesso'
      }
    },
    idlicapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idlivolume: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idlsicapa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    idlsivolume: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idespeciesvolumes: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'especiesvolumes',
        key: 'idespeciesvolumes'
      }
    },
    vlquantidadeitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesoliquidoitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesobrutoitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'lsivolume'
  });
};
