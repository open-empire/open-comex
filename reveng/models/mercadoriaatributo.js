/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mercadoriaatributo', {
    idmercadoria: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'mercadoria',
        key: 'idmercadoria'
      }
    },
    idmercadoriaatributo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idncm: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ncmatributo',
        key: 'idncm'
      }
    },
    idncmatributo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    idncmatributodominio: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    txadicional: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'mercadoriaatributo'
  });
};
