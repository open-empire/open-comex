/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('resumofinanceiro', {
    idresumofinanceiro: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idresumofinanceiroseq: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cdcontafinanceiro: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmcontafinanceiro: {
      type: DataTypes.STRING,
      allowNull: true
    },
    periodoinicial: {
      type: DataTypes.DATE,
      allowNull: true
    },
    periodofinal: {
      type: DataTypes.DATE,
      allowNull: true
    },
    idusuariolanc: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    vlrcradmrecebido: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrcradmareceber: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrrcadmtotal: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrcradiantrecebido: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrcradiantareceber: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrcradianttotal: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrcrdepnaoidentificadorec: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrcrdepnaoidentificadototal: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrcrfaturarecebido: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrcrfaturaareceber: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrcrfaturatotal: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrcrtotalrecebido: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrcrtotalareceber: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrcrtotal: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrlfsaldoantconciliado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrlfsaldoantnaoconciliado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrlfsaldoanteriortotal: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrlfcreditoconciliado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrlfcreditonaoconciliado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrlfcreditototal: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrlfdebitoconciliado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrlfdebitonaoconciliado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrlfdebitototal: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrlfsaldoccconciliado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrlfsaldonaoccconciliado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrlfsaldocctotal: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrcpadmpago: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrcpadmapagar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrcpadmtotal: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrcpoperpago: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrcpoperapagar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrcpopertotal: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrcptotalpago: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrcptotalapagar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrcptotal: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrftreceita: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrftadiantamento: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrftdespesa: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cdcliente: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmcliente: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'resumofinanceiro'
  });
};
