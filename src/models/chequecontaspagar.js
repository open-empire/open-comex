/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('chequecontaspagar', {
    idchequecontaspagar: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nrcheque: {
      type: DataTypes.STRING,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true
    },
    favorecido: {
      type: DataTypes.STRING,
      allowNull: true
    },
    valorextensolinha1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    valorextensolinha2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    valor: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    valorformatado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtemissao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    diaemissao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mesextensoemissao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mesemissao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    anoemissao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    txversocheque: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrbanco: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'chequecontaspagar'
  });
};
