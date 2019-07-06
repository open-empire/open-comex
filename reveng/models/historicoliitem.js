/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('historicoliitem', {
    idhistoricolicapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'historicolicapa',
        key: 'idhistoricolicapa'
      }
    },
    idhistoricoliitem: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nrtratimpmicro: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrseqproduto: {
      type: DataTypes.STRING,
      allowNull: true
    },
    qtdemercadoriaunidcomercial: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nmunidademedidacomercial: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlnitariomcv: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    descricaomercadoria: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdmercadoria: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nritemdrawback: {
      type: DataTypes.STRING,
      allowNull: true
    },
    qtdemercadoriadrawback: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmercadoriadrawback: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'historicoliitem'
  });
};
