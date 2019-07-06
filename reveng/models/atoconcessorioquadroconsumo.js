/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('atoconcessorioquadroconsumo', {
    idatoconcessoriocapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'atoconcessoriocapa',
        key: 'idatoconcessoriocapa'
      }
    },
    idatoconcessorioquadroconsumo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cdmercadoriaimportada: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrregistrodi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtregistrodi: {
      type: DataTypes.DATE,
      allowNull: true
    },
    nradicaodi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nritemdi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlquantidadeitemdi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlquantidadeitemdiconsumido: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlquantidadeitemdisaldo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nrregistrore: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtregistrore: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtembarquere: {
      type: DataTypes.DATE,
      allowNull: true
    },
    cdmercadoriaexportada: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlquantidadeitemre: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlquantidadempnecessaria: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlquantidadempsaldo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'atoconcessorioquadroconsumo'
  });
};
