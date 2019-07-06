/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('direpassecambiopgtovariavel', {
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
    iddirepassecambiopgtovariavel: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    mes: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ano: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlparcela: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpercentualcambio: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'direpassecambiopgtovariavel'
  });
};
