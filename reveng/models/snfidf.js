/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('snfidf', {
    idsnf: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'snf',
        key: 'idsnf'
      }
    },
    idsnfidf: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cod_referencia: {
      type: DataTypes.STRING,
      allowNull: false
    },
    idf_num: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ord_impressao: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    subclasse_idf: {
      type: DataTypes.STRING,
      allowNull: true
    },
    merc_codigo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    emitente_pfj_codigo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    aliq_cofins: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    aliq_icms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    aliq_ii: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    aliq_ipi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    aliq_pis: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    am_codigo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dt_di: {
      type: DataTypes.DATE,
      allowNull: true
    },
    entsai_uni_codigo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fin_codigo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ind_vl_icms_no_preco: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ind_vl_trib_ret_no_preco: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nbm_codigo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nop_codigo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    num_di: {
      type: DataTypes.STRING,
      allowNull: true
    },
    om_codigo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    preco_total: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    preco_unitario: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    qtd: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sta_codigopis: {
      type: DataTypes.STRING,
      allowNull: true
    },
    stc_codigoicms: {
      type: DataTypes.STRING,
      allowNull: true
    },
    stn_codigocofins: {
      type: DataTypes.STRING,
      allowNull: true
    },
    stp_codigoipi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vl_aliq_cofins: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vl_aliq_pis: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vl_base_cofins: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vl_base_icms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vl_base_ipi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vl_base_pis: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vl_faturado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vl_fiscal: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vl_icms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vl_ii: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vl_imposto_cofins: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vl_imposto_pis: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vl_ipi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vl_rateio_frete: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vl_rateio_oda: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vl_rateio_seguro: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vl_tributavel_icms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vl_tributavel_ipi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    ctrl_instrucao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vl_base_ii: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vl_contabil: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'snfidf'
  });
};
