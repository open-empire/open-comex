/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('controleradarsimplificado', {
    idcontroleradarsimplificado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'processo',
        key: 'idprocesso'
      }
    },
    idcliente: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    dtcontrole: {
      type: DataTypes.DATE,
      allowNull: true
    },
    vlimportado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlexportado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    snregistrado: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'controleradarsimplificado'
  });
};
