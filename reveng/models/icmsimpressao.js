/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('icmsimpressao', {
    idimpressao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idimpressaosequencia: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nrdeclaracaoimportacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtregistrodi: {
      type: DataTypes.DATE,
      allowNull: true
    },
    nmpessoa: {
      type: DataTypes.STRING,
      allowNull: true
    },
    endereco: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrendereco: {
      type: DataTypes.STRING,
      allowNull: true
    },
    bairro: {
      type: DataTypes.STRING,
      allowNull: true
    },
    complementoendereco: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cep: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmcidade: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cduf: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vltotalicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalii: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalipi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalpis: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalcofins: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldespesasaduaneiras: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    dtreferenciainicial: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtreferenciafinal: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtvencimento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    cdreceita: {
      type: DataTypes.STRING,
      allowNull: true
    },
    texto: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vltotalbaseicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlaliqicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlaliqreducaoicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tpregimetributacaoicms: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlbasecalculoii: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltaxasiscomex: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'icmsimpressao'
  });
};
