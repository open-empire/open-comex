/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('qdmontdemonstrativomprima', {
    idqdmontdemonstrativoconsumo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'qdmontdemonstrativoconsumo',
        key: 'idqdmontdemonstrativoconsumo'
      }
    },
    idqdmontdemonstrativomprima: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idmateriaprima: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'mercadoria',
        key: 'idmercadoria'
      }
    },
    vlcoeficienteutilizacao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlvolumeaexportar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tpcoberturacambial: {
      type: DataTypes.STRING,
      allowNull: true
    },
    qtmercadoria: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    totaldivinculada: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    totalpesoliquidodivinculada: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    totalfobdivinculada: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    totalnfvinculada: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    totalpesoliquidonfvinculada: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    totalreaisnfvinculada: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    totaldolarnfvinculada: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tpprocedencia: {
      type: DataTypes.STRING,
      allowNull: true
    },
    totaladicaovinculada: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    totalquantidadedivinculada: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    totalquantidadedirealizada: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    totalpesoliquidodirealizada: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    totalfobdirealizada: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    totalcifdirealizada: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    totalfretedirealizada: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    totalsegurodirealizada: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    totalqtdepedidosimportacao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    saldototaldisponivelimportacao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'qdmontdemonstrativomprima'
  });
};
