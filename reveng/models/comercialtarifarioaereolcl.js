/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('comercialtarifarioaereolcl', {
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
    idcomercialtarifarioaereolcl: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tpsimbolo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlpeso: {
      type: DataTypes.DOUBLE,
      allowNull: true
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
    tableName: 'comercialtarifarioaereolcl'
  });
};
