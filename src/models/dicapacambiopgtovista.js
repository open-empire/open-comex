/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dicapacambiopgtovista', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'dicapa',
        key: 'idprocesso'
      }
    },
    iddicapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iddicapacambiopgtovista: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nrcontrato: {
      type: DataTypes.STRING,
      allowNull: true
    },
    banco: {
      type: DataTypes.STRING,
      allowNull: true
    },
    praca: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlparcela: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    snmoedanacional: {
      type: DataTypes.STRING,
      allowNull: true
    },
    representante: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'dicapacambiopgtovista'
  });
};
