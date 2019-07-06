/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('snfimpexp', {
    idsnf: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'snf',
        key: 'idsnf'
      }
    },
    idsnfimpexp: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cod_referencia: {
      type: DataTypes.STRING,
      allowNull: false
    },
    emitente_pfj_codigo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    num_decl_impexp: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dt_emi_re_di: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dt_declaracao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dt_reg_exportacao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dt_conhecimento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dt_cp_exportacao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    tipo_transp: {
      type: DataTypes.STRING,
      allowNull: true
    },
    desembaraco_loc: {
      type: DataTypes.STRING,
      allowNull: true
    },
    desembaraco_uf: {
      type: DataTypes.STRING,
      allowNull: true
    },
    desembaraco_data: {
      type: DataTypes.DATE,
      allowNull: true
    },
    exportador_pfj_codigo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ctrl_instrucao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    num_reg_export: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'snfimpexp'
  });
};
