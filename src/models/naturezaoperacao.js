/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('naturezaoperacao', {
    idnaturezaoperacao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cdnaturezaoperacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmnaturezaoperacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snativo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpnaturezaoperacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tporigemmercadoria: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'naturezaoperacao'
  });
};
