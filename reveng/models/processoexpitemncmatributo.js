/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('processoexpitemncmatributo', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'processoexportacaoitem',
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
    idprocessoexpitemncmatributo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idncm: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ncmatributo',
        key: 'idncm'
      }
    },
    idncmatributo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    idncmatributodominio: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    txadicional: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'processoexpitemncmatributo'
  });
};
