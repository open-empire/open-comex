/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('servicosprocesso', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'processo',
        key: 'idprocesso'
      }
    },
    idservicosprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iditemdespesaservico: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'itemdespesa',
        key: 'iditemdespesa'
      }
    },
    txtobservacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlrquantidadeitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    snativo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpcalculofaturamento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idcentroresultado: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'centroresultado',
        key: 'idcentroresultado'
      }
    },
    vlbasecalculo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpercentualdesconto: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idmoedaservico: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'moeda',
        key: 'idmoeda'
      }
    },
    vlmaximo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlminimo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vladicionalcalculo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idfaturamento: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idusuarioultimaalteracao: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usuario',
        key: 'idusuario'
      }
    },
    dtultimaalteracao: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'servicosprocesso'
  });
};
