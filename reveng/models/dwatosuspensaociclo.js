/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dwatosuspensaociclo', {
    iddwatosuspensaocapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'dwatosuspensaocapa',
        key: 'iddwatosuspensaocapa'
      }
    },
    iddwatosuspensaociclo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idviatransporte: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'viatransporte',
        key: 'idviatransporte'
      }
    },
    qtdediasdesembaracoprod: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    qtdediastermprodembarque: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'dwatosuspensaociclo'
  });
};
