/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('liitemnve', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'liitem',
        key: 'idprocesso'
      }
    },
    idlicapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idliitem: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idliitemnve: {
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
    tableName: 'liitemnve'
  });
};
