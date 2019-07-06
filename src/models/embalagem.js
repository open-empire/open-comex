/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('embalagem', {
    idembalagem: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cdembalagem: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmembalagem: {
      type: DataTypes.STRING,
      allowNull: true
    },
    qtdeporembalagem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    comprimento: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    largura: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    altura: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cubagem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesoembalagem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    codigofiesp: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nmembalagemingles: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmembalagemespanhol: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'embalagem'
  });
};
