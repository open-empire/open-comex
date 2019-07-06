/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tabelademurrageperiodo', {
    idtabelademurrage: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'tabelademurrage',
        key: 'idtabelademurrage'
      }
    },
    idtabelademurrageperiodo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nrperiodo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    qtdedias: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tpperiodo: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'tabelademurrageperiodo'
  });
};
