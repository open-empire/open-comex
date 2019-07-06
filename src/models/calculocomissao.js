/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('calculocomissao', {
    idcalculocomissao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cdcalculocomissao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idpessoaunidade: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    nmcalculocomissao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    mesano: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtcalculo: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtfechamento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtcancelamento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    tpsistema: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'calculocomissao'
  });
};
