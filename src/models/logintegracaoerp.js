/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('logintegracaoerp', {
    idlogintegracaoerp: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    chave1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    chave2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtlancamento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    tplancamento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    statusretorno: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmlocalarquivo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    txtretorno: {
      type: DataTypes.STRING,
      allowNull: true
    },
    txobservacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    txobservacao2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sntratado: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'logintegracaoerp'
  });
};
