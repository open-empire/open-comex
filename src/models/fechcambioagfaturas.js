/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fechcambioagfaturas', {
    idfechcambioagenciamento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'fechcambioagenciamento',
        key: 'idfechcambioagenciamento'
      }
    },
    idfechcambioagfaturas: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'processoinvoiceagenciamento',
        key: 'idprocesso'
      }
    },
    idprocessoinvoiceagenciamento: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    vlfaturabaixado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'fechcambioagfaturas'
  });
};
