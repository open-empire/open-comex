/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dwatoisencaoitemexprenf', {
    iddwatoisencaocapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'dwatoisencaocapa',
        key: 'iddwatoisencaocapa'
      }
    },
    iddwatoisencaoitemexprenf: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nrregistrore: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtregistrore: {
      type: DataTypes.DATE,
      allowNull: true
    },
    nrnotafiscal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtemissao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    valor: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    qtuantidade: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cdncm: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'dwatoisencaoitemexprenf'
  });
};
