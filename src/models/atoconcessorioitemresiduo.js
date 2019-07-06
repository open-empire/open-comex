/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('atoconcessorioitemresiduo', {
    idatoconcessoriocapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'atoconcessoriocapa',
        key: 'idatoconcessoriocapa'
      }
    },
    idatoconcessorioitemresiduo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idmercadoriaresiduo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'mercadoria',
        key: 'idmercadoria'
      }
    },
    idncm: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ncm',
        key: 'idncm'
      }
    },
    vlvenda: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    semvlcomercial: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    destinoapropriacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlprecovendasicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'atoconcessorioitemresiduo'
  });
};
