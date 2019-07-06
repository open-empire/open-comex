/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('diitemnve', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'diitem',
        key: 'idprocesso'
      }
    },
    iddicapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iddiitem: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iddiitemnve: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idnivelnve: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'nivelnve',
        key: 'idnivelnve'
      }
    },
    idatributonve: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'atributonve',
        key: 'idatributonve'
      }
    },
    idespecificacaonve: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'especificacaonve',
        key: 'idespecificacaonve'
      }
    }
  }, {
    tableName: 'diitemnve'
  });
};
