/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('processomantraeventos', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'processo',
        key: 'idprocesso'
      }
    },
    idprocessomantraeventos: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    dtevento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    responsavel: {
      type: DataTypes.STRING,
      allowNull: true
    },
    descricaoevento: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'processomantraeventos'
  });
};
