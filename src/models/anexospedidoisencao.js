/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('anexospedidoisencao', {
    idcapapedidoisencao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'capapedidoisencao',
        key: 'idcapapedidoisencao'
      }
    },
    idanexospedidoisencao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tipoanexo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idmercadoria: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pesoliquido: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    unidademedida: {
      type: DataTypes.STRING,
      allowNull: true
    },
    quantidade: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    valorunitario: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    valortotalmoeda: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idmoeda: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'moeda',
        key: 'idmoeda'
      }
    },
    valorunitariodolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    valortotaldolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    descmercadoria: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idqdmontdemonstrativoconsumo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cdncm: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'anexospedidoisencao'
  });
};
