/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('processonotificacao', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idusuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    snpendente: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpnotificacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtalteracao: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'processonotificacao'
  });
};
