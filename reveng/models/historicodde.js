/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('historicodde', {
    idhistoricodde: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nrdeclaracaodespacho: {
      type: DataTypes.STRING,
      allowNull: true
    },
    situacaodespacho: {
      type: DataTypes.STRING,
      allowNull: true
    },
    unidadedespacho: {
      type: DataTypes.STRING,
      allowNull: true
    },
    recinto: {
      type: DataTypes.STRING,
      allowNull: true
    },
    embalagem: {
      type: DataTypes.STRING,
      allowNull: true
    },
    unidadeembalagem: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cnpjcpf: {
      type: DataTypes.STRING,
      allowNull: true
    },
    razaosocial: {
      type: DataTypes.STRING,
      allowNull: true
    },
    usuarioresponsavel: {
      type: DataTypes.STRING,
      allowNull: true
    },
    representantelegal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    viatransporte: {
      type: DataTypes.STRING,
      allowNull: true
    },
    identificacaoveiculo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nacionalidadeembarcacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    codigoembarcacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    regimeaduaneiro: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snoutrosdoctoinformadosrecepcao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    condicaovenda: {
      type: DataTypes.STRING,
      allowNull: true
    },
    qtdere: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    qtdenf: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    qtdevolumes: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    valortotalmoedadolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    qtdesubtotais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    valortotalmoedanegociada: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    moedanegociada: {
      type: DataTypes.STRING,
      allowNull: true
    },
    pesoliquidokg: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    pesobrutokg: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    qtdetotalvolumes: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cnpjdepositario: {
      type: DataTypes.STRING,
      allowNull: true
    },
    razaosocialdepositario: {
      type: DataTypes.STRING,
      allowNull: true
    },
    localizacaocarga: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tipoinutilizacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sncargacomavaria: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sntratamentoadministrativo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    datavalidadeembarque: {
      type: DataTypes.DATE,
      allowNull: true
    },
    snoutrosdoctoinformadosrec: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snoutrosdocinfrecepcao: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'historicodde'
  });
};
