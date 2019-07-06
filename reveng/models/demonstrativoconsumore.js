/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('demonstrativoconsumore', {
    idmontagemdemonstrativoconsumo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'demonstrativoconsumodi',
        key: 'idmontagemdemonstrativoconsumo'
      }
    },
    idmontagemdemonstrativomprima: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iddemonstrativoconsumodi: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iddemonstrativoconsumore: {
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
    dtembarquere: {
      type: DataTypes.DATE,
      allowNull: true
    },
    cdncmre: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlpesoliquidobaixadore: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlquantidadebaixadare: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfretebaixadore: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlsegurobaixadore: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmlebaixadore: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmcvbaixadore: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    descmercadoriare: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlcoeficienteitemcomposicao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesoliquidobaixado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    unidadecomercializada: {
      type: DataTypes.STRING,
      allowNull: true
    },
    unidademedidancm: {
      type: DataTypes.STRING,
      allowNull: true
    },
    percentualcomissao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalcomissao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'demonstrativoconsumore'
  });
};
