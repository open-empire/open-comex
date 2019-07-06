/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('moeda', {
    idmoeda: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cdmoeda: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmmoeda: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idpais: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pais',
        key: 'idpais'
      }
    },
    sigla: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpmoeda: {
      type: DataTypes.STRING,
      allowNull: true
    },
    indtaxas: {
      type: DataTypes.STRING,
      allowNull: true
    },
    qtddecimais: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    codigoexterno: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlprotecaocambial: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    snativo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    moedasingular: {
      type: DataTypes.STRING,
      allowNull: true
    },
    moedaplural: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'moeda'
  });
};
