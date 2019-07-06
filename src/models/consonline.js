/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('consonline', {
    idconsonline: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    descricao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    classeprincipal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    classejoin: {
      type: DataTypes.STRING,
      allowNull: true
    },
    namerelation: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fieldcodigo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fieldnome: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fieldsfks: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fieldspks: {
      type: DataTypes.STRING,
      allowNull: true
    },
    filtrofixosql: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmformcadastro: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'consonline'
  });
};
