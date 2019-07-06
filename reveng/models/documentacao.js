/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('documentacao', {
    iddocumentacao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cddocumentacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmdocumentacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snativo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    integraitracking: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snnometipodocumentodescricao: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'documentacao'
  });
};
