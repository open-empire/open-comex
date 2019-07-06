/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('processoexpitemlpco', {
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
    idprocessoexpitemlpco: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nrlpco: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'processoexpitemlpco'
  });
};
