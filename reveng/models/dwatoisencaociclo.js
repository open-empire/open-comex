/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dwatoisencaociclo', {
    iddwatoisencaocapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'dwatoisencaocapa',
        key: 'iddwatoisencaocapa'
      }
    },
    iddwatoisencaociclo: {
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
    tableName: 'dwatoisencaociclo'
  });
};
