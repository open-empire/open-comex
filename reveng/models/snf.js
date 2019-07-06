/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('snf', {
    idsnf: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cod_referencia: {
      type: DataTypes.STRING,
      allowNull: false
    },
    serie_subserie: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ind_entrada_saida: {
      type: DataTypes.STRING,
      allowNull: true
    },
    edof_codigo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sis_codigo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ctrl_conteudo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ctrl_situacao_dof: {
      type: DataTypes.STRING,
      allowNull: true
    },
    num_itens_snf: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    num_vol_carga_snf: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    num_impexp_snf: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    destinatario_pfj_codigo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    emitente_pfj_codigo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    remetente_pfj_codigo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    transportador_pfj_codigo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ind_resp_frete: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ind_usa_if_calc_imp: {
      type: DataTypes.STRING,
      allowNull: true
    },
    modo_emissao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nop_codigo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    peso_bruto_kg: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    peso_liquido_kg: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    preco_total_m: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tipo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tipo_pgto: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vl_fiscal_m: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vl_frete: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vl_outras_despesas: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vl_seguro: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vl_total_base_cofins: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vl_total_base_icms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vl_total_base_ipi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vl_total_base_pis_pasep: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vl_total_cofins: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vl_total_contabil: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vl_total_faturado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vl_total_icms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vl_total_ii: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vl_total_ipi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vl_total_pis_pasep: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vt_codigo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    obs_fiscal_operacional: {
      type: DataTypes.STRING,
      allowNull: true
    },
    obs_fiscal_icms: {
      type: DataTypes.STRING,
      allowNull: true
    },
    obs_fiscal_ipi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ctrl_instrucao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    destinatario_loc_codigo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    emitente_loc_codigo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    remetente_loc_codigo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    transportador_loc_codigo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    num_impexp_adic_snf: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'snf'
  });
};
