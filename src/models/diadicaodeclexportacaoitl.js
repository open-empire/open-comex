/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('diadicaodeclexportacaoitl', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'diadicao',
        key: 'idprocesso'
      }
    },
    iddicapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iddiadicao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iddiadicaodeclexportacaoitl: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nradicdeclaracaoexportacaoitl: {
      type: DataTypes.STRING,
      allowNull: true
    },
    inicioadicdeclexportacaoitl: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fimadicdeclexportacaoitl: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tppaismercosul: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrcertificado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    itemcertificado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlquantidadeunidadeestatistica: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'diadicaodeclexportacaoitl'
  });
};
