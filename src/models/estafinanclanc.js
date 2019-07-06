/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('estafinanclanc', {
    idestafinanclanc: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idunidadeoperacional: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    iditemdespesa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'itemdespesa',
        key: 'iditemdespesa'
      }
    },
    vlrmensal: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idgrupocliente: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'grupocliente',
        key: 'idgrupocliente'
      }
    }
  }, {
    tableName: 'estafinanclanc'
  });
};
