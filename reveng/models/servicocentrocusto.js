/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('servicocentrocusto', {
    idservico: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'servico',
        key: 'idservico'
      }
    },
    idservicocentrocusto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idcentrocusto: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'centrocusto',
        key: 'idcentrocusto'
      }
    },
    iddepartamento: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'departamento',
        key: 'iddepartamento'
      }
    }
  }, {
    tableName: 'servicocentrocusto'
  });
};
