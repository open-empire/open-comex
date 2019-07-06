/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tabelaindice', {
    idtabelaindice: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cdtabelaindice: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmtabelaindice: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snativo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idpessoacliente: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    vlindicejuroscontaordem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlindicejurosencomenda: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlindicejurospropria: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'tabelaindice'
  });
};
