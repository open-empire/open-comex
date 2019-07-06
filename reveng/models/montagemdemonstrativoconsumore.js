/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('montagemdemonstrativoconsumore', {
    idmontagemdemonstrativoconsumo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'montagemdemonstrativoconsumo',
        key: 'idmontagemdemonstrativoconsumo'
      }
    },
    idmontagemdemonstrativore: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    vlcoeficienteitemcomposicao: {
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
    cdncmre: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlpesoliquidore: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    descmercadoriare: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tiporegistro: {
      type: DataTypes.STRING,
      allowNull: true
    },
    razaodoitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idlaudo: {
      type: DataTypes.INTEGER,
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
    tableName: 'montagemdemonstrativoconsumore'
  });
};
