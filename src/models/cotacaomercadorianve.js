/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cotacaomercadorianve', {
    idcotacao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'cotacaomercadoria',
        key: 'idcotacao'
      }
    },
    idcotacaomercadoria: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idcotacaomercadorianve: {
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
    tableName: 'cotacaomercadorianve'
  });
};
