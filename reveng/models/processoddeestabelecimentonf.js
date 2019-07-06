/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('processoddeestabelecimentonf', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'processoddeestabelecimento',
        key: 'idprocesso'
      }
    },
    idprocessodde: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idprocessoddeestabelecimento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idprocessoddeestabelecimentonf: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nrnfinicial: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrnffinal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrserie: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtemissaonf: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'processoddeestabelecimentonf'
  });
};
