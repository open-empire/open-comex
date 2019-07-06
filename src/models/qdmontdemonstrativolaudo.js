/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('qdmontdemonstrativolaudo', {
    idqdmontdemonstrativoconsumo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'qdmontdemonstrativoconsumo',
        key: 'idqdmontdemonstrativoconsumo'
      }
    },
    idqdmontdemonstrativolaudo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idlaudotecnico: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'laudotecnico',
        key: 'idlaudotecnico'
      }
    },
    idmercadoriaexportada: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'mercadoria',
        key: 'idmercadoria'
      }
    },
    qtdediascicloproducao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'qdmontdemonstrativolaudo'
  });
};
