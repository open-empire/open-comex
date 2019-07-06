/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pessoaobservacao', {
    idpessoa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    idobservacao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idusuario: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usuario',
        key: 'idusuario'
      }
    },
    dtobservacao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    observacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tituloobservacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpobservacao: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'pessoaobservacao'
  });
};
