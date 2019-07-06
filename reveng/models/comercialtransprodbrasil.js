/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('comercialtransprodbrasil', {
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
    idcomercialtransprodbrasil: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idmoeda: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'moeda',
        key: 'idmoeda'
      }
    },
    tpformacalculo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlcompra: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlvenda: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesoinicial: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesofinal: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'comercialtransprodbrasil'
  });
};
