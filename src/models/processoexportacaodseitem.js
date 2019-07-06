/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('processoexportacaodseitem', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'processoexportacaodsecapa',
        key: 'idprocesso'
      }
    },
    idprocessoexportacao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idprocessoexportacaodsecapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idprocessoexportacaodseitem: {
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
    nritem: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idncm: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ncm',
        key: 'idncm'
      }
    },
    destaquencm: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlquantidadecomercializada: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idunidademedidacomercializada: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'unidademedida',
        key: 'idunidademedida'
      }
    },
    vlquantidadeestatistica: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesoliquido: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    valortotalitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    txdescricaomercadoria: {
      type: DataTypes.STRING,
      allowNull: true
    },
    valortotalitemmnac: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    valormercadoria: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    valormercadoriamnac: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'processoexportacaodseitem'
  });
};
