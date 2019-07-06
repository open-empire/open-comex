/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('atoconcessorioqdconsumodi', {
    idatoconcessoriocapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'atoconcessorioimportadoagrup',
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
    nrregistrodi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtregistrodi: {
      type: DataTypes.DATE,
      allowNull: true
    },
    nradicaodi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nritemdi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrncmadicao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    descmercadoriaitemdi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlquantidadeitemdi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesoliquidokgitemdi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfreteitemdi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlseguroitemdi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmleitemdi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcifitemdi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    totalpesocoeficiente: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    totalmledolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    totalqtdecoeficiente: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    unidademedidacomerc: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtdesembaraco: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtentradaestoquedi: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'atoconcessorioqdconsumodi'
  });
};
