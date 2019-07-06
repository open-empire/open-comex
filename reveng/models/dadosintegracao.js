/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dadosintegracao', {
    idintegracao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'processoexportacaoitemmed',
        key: 'idprocesso'
      }
    },
    idprocessoexportacao: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    idprocessoexportacaoitem: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    idprocessoexportacaoitemmed: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    apmercadoria: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdncm: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlquantidadeitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nrlote: {
      type: DataTypes.STRING,
      allowNull: true
    },
    qtdlote: {
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
    },
    idnotafiscal: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'notafiscalitemmontagem',
        key: 'idnotafiscal'
      }
    },
    idnotaficalitem: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    idnotafiscalitemmedicamento: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    idcapa: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    iditem: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nmtabela: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'dadosintegracao'
  });
};
