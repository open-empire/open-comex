/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lsiitemlote', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'lsiitem',
        key: 'idprocesso'
      }
    },
    idlsicapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idlsiitem: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idlsiitemlote: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    lote: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'lsiitemlote'
  });
};
