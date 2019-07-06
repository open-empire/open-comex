/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('integrafaturamento', {
    idintegrafaturamento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    servico: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cliente: {
      type: DataTypes.STRING,
      allowNull: true
    },
    clientefaturamento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    valor: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    datavencimento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dataemissao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    gr: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    os: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    serie: {
      type: DataTypes.STRING,
      allowNull: true
    },
    numerofatura: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    docdesembaraco: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dataregistro: {
      type: DataTypes.DATE,
      allowNull: true
    },
    operador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    referencia: {
      type: DataTypes.STRING,
      allowNull: true
    },
    terminal: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    valordesconto: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    numerobroker: {
      type: DataTypes.STRING,
      allowNull: true
    },
    exportado: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'integrafaturamento'
  });
};
