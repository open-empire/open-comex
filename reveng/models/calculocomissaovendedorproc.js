/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('calculocomissaovendedorproc', {
    idcalculocomissao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'calculocomissaovendedor',
        key: 'idcalculocomissao'
      }
    },
    idcalculocomissaovendedor: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idcalculocomissaovendedorproc: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'processo',
        key: 'idprocesso'
      }
    },
    idtabelacomissaovendedor: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    vlcomissao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tpformacalculo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlcomissaomneg: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    dtbaseconversao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    vlconversao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    percentualcomissao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    percentualdescontosda: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    percentualdescsobreserv: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrdescontofixo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrdescontofixocustoop: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalservfat: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlsda: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlli: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotal: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldesconto: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldescontonf: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalliquido: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcustomaoobraoperacao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'calculocomissaovendedorproc'
  });
};
