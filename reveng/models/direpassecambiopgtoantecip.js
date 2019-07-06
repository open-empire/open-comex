/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('direpassecambiopgtoantecip', {
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
    iddirepassecambiopgtoantecip: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nrcontrato: {
      type: DataTypes.STRING,
      allowNull: true
    },
    banco: {
      type: DataTypes.STRING,
      allowNull: true
    },
    praca: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlparcela: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    snmoedanacional: {
      type: DataTypes.STRING,
      allowNull: true
    },
    representante: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlpercentualcambio: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'direpassecambiopgtoantecip'
  });
};
