/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('controleemprestimoprocesso', {
    idcontroleemprestimo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'controleemprestimo',
        key: 'idcontroleemprestimo'
      }
    },
    idcontroleemprestimoprocesso: {
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
    vlemprestimoprocesso: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'controleemprestimoprocesso'
  });
};
