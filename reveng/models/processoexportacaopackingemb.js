/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('processoexportacaopackingemb', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'processoexportacaopacking',
        key: 'idprocesso'
      }
    },
    idprocessoexportacao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idprocessoexportacaopacking: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idprocessoexportacaopackingemb: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idembalagem: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'embalagem',
        key: 'idembalagem'
      }
    },
    quantidadeembalagem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    saldoembalagem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nivelembalagem: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    vlquantidadebaixada: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlquantidadetotalitensbaixados: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    campolivre1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    campolivre2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    campolivre3: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'processoexportacaopackingemb'
  });
};
