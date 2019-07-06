/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dwatosuspensaoitemnac', {
    iddwatosuspensaocapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'dwatosuspensaocapa',
        key: 'iddwatosuspensaocapa'
      }
    },
    iddwatosuspensaoitenac: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nrregistrodi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtregistrodi: {
      type: DataTypes.DATE,
      allowNull: true
    },
    nradicao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nritem: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtdesembaraco: {
      type: DataTypes.DATE,
      allowNull: true
    },
    cdmoeda: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdncm: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmdescricaomercadoria: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vltaxadolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesoliquidoitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesoliquidoadicao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlqtdestatadicao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlqtdestatitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmleadicaoreais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmlemoedaitemdrawback: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfreteadicaoreais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfreteitemreais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlseguroadicaoreais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlseguroitemreais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    aliquotaii: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vliidevido: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vliirecolher: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    aliquotaipi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlipidevido: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlipirecolher: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    aliquotapis: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpisdevido: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpisrecolher: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    aliquotacofins: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcofinsdevido: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcofinsrecolher: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmultaii: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmultaipi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmultapis: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmultacofins: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmultaicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vljurosii: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vljurosipi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vljurospis: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vljuroscofins: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vljurosicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlicmsrecolher: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tpprocedencia: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'dwatosuspensaoitemnac'
  });
};
