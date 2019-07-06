/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('atoconcessorioitemimpdi', {
    idatoconcessoriocapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'atoconcessorioitemimportado',
        key: 'idatoconcessoriocapa'
      }
    },
    idatoconcessorioitemexportado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idatoconcessorioitemimportado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idatoconcessorioitemimpdi: {
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
    dtdesembaraco: {
      type: DataTypes.DATE,
      allowNull: true
    },
    tiporateio: {
      type: DataTypes.STRING,
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
    descmercadoriaitemdi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    unidademedidacomerc: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlorigquantidadeitemdi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlorigpesoliquidokgitemdi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlorigfreteitemdi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlorigseguroitemdi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlorigmleitemdi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlorigcifitemdi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlqtitemdimercadonacional: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    sequenciamanualmontagem: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nacionalizado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idhistoricodicapa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'historicodiitem',
        key: 'idhistoricodicapa'
      }
    },
    idhistoricodiadicao: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    idhistoricodiitem: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    dtentradaestoquedi: {
      type: DataTypes.DATE,
      allowNull: true
    },
    vlpesounidadeestatisticadi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cdunidademedidacomerc: {
      type: DataTypes.STRING,
      allowNull: true
    },
    qtdemercadoriadrawback: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmercadoriadrawback: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    qtdemercadoriaajustada: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'atoconcessorioitemimpdi'
  });
};
