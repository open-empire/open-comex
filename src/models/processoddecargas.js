/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('processoddecargas', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'processodde',
        key: 'idprocesso'
      }
    },
    idprocessodde: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idprocessoddecargas: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    vlpesobrutototalgranel: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlquantidadesolta: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesobrutototalsolta: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    marca: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpcarga: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idespeciesvolumes: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'especiesvolumes',
        key: 'idespeciesvolumes'
      }
    }
  }, {
    tableName: 'processoddecargas'
  });
};
