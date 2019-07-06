/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('capapedidoisencao', {
    idcapapedidoisencao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idqdmontdemonstrativoconsumo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'qdmontdemonstrativoconsumo',
        key: 'idqdmontdemonstrativoconsumo'
      }
    },
    cdncmmp1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    pesoliquidomp1: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    quantidademp1: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    unidademp1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    descricaomp1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    valormoedamp1: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    valordolarmp1: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cdncmmp2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    pesoliquidomp2: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    quantidademp2: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    unidademp2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    descricaomp2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    valormoedamp2: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    valordolarmp2: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cdncmmp3: {
      type: DataTypes.STRING,
      allowNull: true
    },
    pesoliquidomp3: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    quantidademp3: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    unidademp3: {
      type: DataTypes.STRING,
      allowNull: true
    },
    descricaomp3: {
      type: DataTypes.STRING,
      allowNull: true
    },
    valormoedamp3: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    valordolarmp3: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cdncmmp4: {
      type: DataTypes.STRING,
      allowNull: true
    },
    pesoliquidomp4: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    quantidademp4: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    unidademp4: {
      type: DataTypes.STRING,
      allowNull: true
    },
    descricaomp4: {
      type: DataTypes.STRING,
      allowNull: true
    },
    valormoedamp4: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    valordolarmp4: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    pesototalmp: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    qtdetotalmp: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    valortotalmoedamp: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    valortotaldolarmp: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cdncmexportacao1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    pesoliquidoexportacao1: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    quantidadeexportacao1: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    unidadeexportacao1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    descricaoexportacao1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    valormoedaexportacao1: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    valordolarexportacao1: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cdncmexportacao2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    pesoliquidoexportacao2: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    quantidadeexportacao2: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    unidadeexportacao2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    descricaoexportacao2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    valormoedaexportacao2: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    valordolarexportacao2: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cdncmexportacao3: {
      type: DataTypes.STRING,
      allowNull: true
    },
    pesoliquidoexportacao3: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    quantidadeexportacao3: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    unidadeexportacao3: {
      type: DataTypes.STRING,
      allowNull: true
    },
    descricaoexportacao3: {
      type: DataTypes.STRING,
      allowNull: true
    },
    valormoedaexportacao3: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    valordolarexportacao3: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cdncmexportacao4: {
      type: DataTypes.STRING,
      allowNull: true
    },
    pesoliquidoexportacao4: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    quantidadeexportacao4: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    unidadeexportacao4: {
      type: DataTypes.STRING,
      allowNull: true
    },
    descricaoexportacao4: {
      type: DataTypes.STRING,
      allowNull: true
    },
    valormoedaexportacao4: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    valordolarexportacao4: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    pesototalexportacao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    qtdetotalexportacao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    valortotalmoedaexportacao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    valortotaldolarexportacao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'capapedidoisencao'
  });
};
