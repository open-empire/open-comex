/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('interveniente', {
    idinterveniente: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    codigofiesp: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nminterveniente: {
      type: DataTypes.STRING,
      allowNull: true
    },
    endereco: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idcidade: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'cidade',
        key: 'idcidade'
      }
    },
    cdativo: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'interveniente'
  });
};
