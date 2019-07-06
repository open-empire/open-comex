/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('atoconcessorioitemexpnf', {
    idatoconcessoriocapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'atoconcessorioitemexportado',
        key: 'idatoconcessoriocapa'
      }
    },
    idatoconcessorioitemexportado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idatoconcessorioitemexpnf: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nrnotafiscal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtnotafiscal: {
      type: DataTypes.DATE,
      allowNull: true
    },
    idpessoaremetente: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    statusnotafiscal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    qtnotafiscal: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    unidadecomercializada: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlunitario: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotal: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesototal: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlsaldototal: {
      type: DataTypes.DOUBLE,
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
    observacoes: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'atoconcessorioitemexpnf'
  });
};
