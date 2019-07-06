/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dicapacambiopgtoparcvar', {
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
    iddicapacambiopgtoparcvar: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    mes: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ano: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlparcela: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'dicapacambiopgtoparcvar'
  });
};
