/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('comercialtarifariofcl', {
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
    idcomercialtarifariofcl: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idcontainer: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tipocontainer',
        key: 'idtipocontainer'
      }
    },
    vlcompra: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlvendaminima: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlvenda: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'comercialtarifariofcl'
  });
};
