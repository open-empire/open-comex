/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dwatoisencaoitemmatprimanf', {
    iddwatoisencaocapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'dwatoisencaoitemmatprima',
        key: 'iddwatoisencaocapa'
      }
    },
    iddwatoisencaoitemmatprima: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iddwatoisencaoitemmatprimanf: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idfornecedor: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    nrnotafiscal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtnotafiscal: {
      type: DataTypes.DATE,
      allowNull: true
    },
    vlqtde: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlnotafiscal: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    origem: {
      type: DataTypes.STRING,
      allowNull: true
    },
    pesoliquido: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlnotafiscaldolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlqtdecomercial: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesoliquidorud: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlnotafiscaldolarrud: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlnotafiscalrud: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlqtderud: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlqtdecomercialrud: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'dwatoisencaoitemmatprimanf'
  });
};
