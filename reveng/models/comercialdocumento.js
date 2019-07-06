/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('comercialdocumento', {
    idcomercial: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'comercial',
        key: 'idcomercial'
      }
    },
    idcomercialdocumento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nmdocumento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mmcomercial: {
      type: "OID",
      allowNull: true
    },
    dtinclusao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    observacao: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'comercialdocumento'
  });
};
