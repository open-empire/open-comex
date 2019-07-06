/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cotacaofollowup', {
    idcotacao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'cotacao',
        key: 'idcotacao'
      }
    },
    idcotacaofollowup: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idevento: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'eventos',
        key: 'idevento'
      }
    },
    nrordem: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nrprazo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tpcontrole: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpdestinatarioemailatraso: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snobrigaeventoanterior: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'cotacaofollowup'
  });
};
