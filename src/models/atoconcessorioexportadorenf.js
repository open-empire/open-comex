/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('atoconcessorioexportadorenf', {
    idatoconcessoriocapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'atoconcessorioexportadore',
        key: 'idatoconcessoriocapa'
      }
    },
    idatoconcessorioitemexportado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idatoconcessorioexportadore: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idatoconcessorioexportadorenf: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nrnotafiscal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtnotafiscal: {
      type: DataTypes.DATE,
      allowNull: true
    },
    idpessoaremetente: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    quantidade: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    snenviadodrawbackweb: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'atoconcessorioexportadorenf'
  });
};
