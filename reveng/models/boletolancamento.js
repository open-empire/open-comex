/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('boletolancamento', {
    idboleto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'boleto',
        key: 'idboleto'
      }
    },
    idboletolancamento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idcontasreceber: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'contasreceber',
        key: 'idcontasreceber'
      }
    }
  }, {
    tableName: 'boletolancamento'
  });
};
