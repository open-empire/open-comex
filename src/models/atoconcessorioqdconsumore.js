/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('atoconcessorioqdconsumore', {
    idatoconcessoriocapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'atoconcessorioqdconsumodi',
        key: 'idatoconcessoriocapa'
      }
    },
    idatoconcessorioimportadoagrup: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idatoconcessorioqdconsumodi: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idatoconcessorioqdconsumore: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idatoconcessorioquadroconsumdi: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    idatoconcessorioquadroconsumre: {
      type: DataTypes.INTEGER,
      allowNull: false
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
    vlquantidadebaixada: {
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
    },
    idncmre: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ncm',
        key: 'idncm'
      }
    },
    idmercadoriaexportada: {
      type: DataTypes.INTEGER,
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
    vltaxaparidade: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmlebaixadoredolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idlaudotecnico: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'atoconcessorioqdconsumore'
  });
};
