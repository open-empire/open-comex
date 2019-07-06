/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('grupocliente', {
    idgrupocliente: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cdgrupocliente: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmgrupocliente: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cnpj: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vllimiteretencaoin459: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cpf: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tppessoa: {
      type: DataTypes.STRING,
      allowNull: true
    },
    outrodocumento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idgrupoclientepai: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'grupocliente',
        key: 'idgrupocliente'
      }
    },
    sngrupopai: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'grupocliente'
  });
};
