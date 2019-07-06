/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('processoexpitemdrawbacknf', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'processoexpitemdrawback',
        key: 'idprocesso'
      }
    },
    idprocessoexportacao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idprocessoexportacaoitem: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idprocessoexpitemdrawback: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idprocessoexpitemdrawbacknf: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nrnotafiscalouchaveacesso: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlquantidadenf: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlnotafiscal: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    dtemissao: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'processoexpitemdrawbacknf'
  });
};
