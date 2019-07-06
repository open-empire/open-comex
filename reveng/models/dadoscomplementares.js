/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dadoscomplementares', {
    iddadoscomplementares: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cddadoscomplementares: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmdadoscomplementares: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dadoscomplementaresativo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    maximocaracteres: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'dadoscomplementares'
  });
};
