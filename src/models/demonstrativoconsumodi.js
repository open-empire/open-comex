/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('demonstrativoconsumodi', {
    idmontagemdemonstrativoconsumo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'montagemdemonstrativomprima',
        key: 'idmontagemdemonstrativoconsumo'
      }
    },
    idmontagemdemonstrativomprima: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iddemonstrativoconsumodi: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    vlseguroitemdi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcifitemdi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmleitemdi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfreteitemdi: {
      type: DataTypes.DOUBLE,
      allowNull: true
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
    vlpesoliquidokgitemdi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlquantidadeitemdi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    descmercadoriaitemdi: {
      type: DataTypes.STRING,
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
    unidademedidacomerc: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'demonstrativoconsumodi'
  });
};
