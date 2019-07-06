/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('favorecidocontacorrente', {
    idpessoa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    idfavorecidocontacorrente: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cdfavorecidocontacorrente: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmfavorecidocontacorrente: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nragencia: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrcontacorrente: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrdac: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdbancofavorecido: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmbancofavorecido: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cpffavorecido: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cnpjfavorecido: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'favorecidocontacorrente'
  });
};
