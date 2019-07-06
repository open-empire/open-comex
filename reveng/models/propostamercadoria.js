/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('propostamercadoria', {
    idproposta: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'proposta',
        key: 'idproposta'
      }
    },
    idpropostamercadoria: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idembalagem: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'especiesvolumes',
        key: 'idespeciesvolumes'
      }
    },
    qtdvolumes: {
      type: DataTypes.DOUBLE,
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
    qtdemercadoria: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesokg: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idunidademedidacomercial: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'unidademedida',
        key: 'idunidademedida'
      }
    },
    vlmleunitario: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmle: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    snnecessitali: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nratoconcessorio: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idmercadoria: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'mercadoria',
        key: 'idmercadoria'
      }
    },
    descricaomercadoria: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'propostamercadoria'
  });
};
