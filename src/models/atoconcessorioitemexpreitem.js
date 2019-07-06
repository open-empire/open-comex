/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('atoconcessorioitemexpreitem', {
    idatoconcessoriocapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'atoconcessorioitemexpre',
        key: 'idatoconcessoriocapa'
      }
    },
    idatoconcessorioitemexportado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idatoconcessorioitemexpre: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idatoconcessorioitemexpreitem: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nmdescricaomercadoria: {
      type: DataTypes.STRING,
      allowNull: true
    },
    qtdeunidadecomercial: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalmle: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesoliquido: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    percentualcomissao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalcomissao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcoeficienteutilizacao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'atoconcessorioitemexpreitem'
  });
};
