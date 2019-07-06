/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mercadoriaestoque', {
    idmercadoriaestoque: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idmercadoria: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'mercadoria',
        key: 'idmercadoria'
      }
    },
    vlipiunitario: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vliiunitario: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlicmsunitario: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlbaseicmsunitario: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldespesaaduaneirasunitario: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalunitario: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    qtdeentrada: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    qtdesaida: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltxsiscomexunitario: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpisunitario: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcofinsunitario: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    dtlancamento: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'mercadoriaestoque'
  });
};
