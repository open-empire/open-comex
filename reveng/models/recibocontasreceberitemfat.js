/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('recibocontasreceberitemfat', {
    idrecibocontasreceber: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'recibocontasreceber',
        key: 'idrecibocontasreceber'
      }
    },
    idrecibocontasreceberitemfat: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idcontacorrenteembarque: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'contacorrenteembarque',
        key: 'idcontacorrenteembarque'
      }
    }
  }, {
    tableName: 'recibocontasreceberitemfat'
  });
};
