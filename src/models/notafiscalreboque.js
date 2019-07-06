/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('notafiscalreboque', {
    idnotafiscal: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'notafiscalmontagem',
        key: 'idnotafiscal'
      }
    },
    idnotafiscalreboque: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    placa: {
      type: DataTypes.STRING,
      allowNull: true
    },
    iduf: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'uf',
        key: 'iduf'
      }
    },
    rntc: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'notafiscalreboque'
  });
};
