/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ncmpessoacliente', {
    idncmpessoacliente: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idncm: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ncm',
        key: 'idncm'
      }
    },
    idpessoacliente: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    mmdescricaoportugues: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mmdescricaoingles: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mmdescricaoespanhol: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'ncmpessoacliente'
  });
};
