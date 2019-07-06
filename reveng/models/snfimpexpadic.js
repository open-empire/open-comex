/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('snfimpexpadic', {
    idsnf: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'snf',
        key: 'idsnf'
      }
    },
    idsnfimpexpadic: {
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
    num_reg_export: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    num_decl_impexp: {
      type: DataTypes.STRING,
      allowNull: true
    },
    num_adicao: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    num_seq_adicao: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fabricante_pfj_codigo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fabricante_pfj_origem: {
      type: DataTypes.STRING,
      allowNull: true
    },
    desconto_adicao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    ctrl_instrucao: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'snfimpexpadic'
  });
};
