/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tabelademurragecontainer', {
    idtabelademurrage: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'tabelademurrageperiodo',
        key: 'idtabelademurrage'
      }
    },
    idtabelademurrageperiodo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idtabelademurragecontainer: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idcontainer: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tipocontainer',
        key: 'idtipocontainer'
      }
    },
    vlcusto: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlvenda: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'tabelademurragecontainer'
  });
};
