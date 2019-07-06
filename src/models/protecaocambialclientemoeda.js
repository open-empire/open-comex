/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('protecaocambialclientemoeda', {
    idprotecaocambialclientemoeda: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idmoeda: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'moeda',
        key: 'idmoeda'
      }
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    vlprotecaoaerea: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlprotecaomaritima: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idpessoacliente: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    tpproduto: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'protecaocambialclientemoeda'
  });
};
