/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('direpassedocumentovinculado', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'direpasse',
        key: 'idprocesso'
      }
    },
    iddicapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iddirepasse: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iddirepassedocumentovinculado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tpdocumento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrdocumento: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'direpassedocumentovinculado'
  });
};
