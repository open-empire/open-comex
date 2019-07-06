/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dideclaracaoexportacaoitl', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'dicapa',
        key: 'idprocesso'
      }
    },
    iddicapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iddideclaracaoexportacaoitl: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nrdideclaracaoexportacaoitl: {
      type: DataTypes.STRING,
      allowNull: true
    },
    iniciodeclaracaoexportacaoitl: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fimdeclaracaoexportacaoitl: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'dideclaracaoexportacaoitl'
  });
};
