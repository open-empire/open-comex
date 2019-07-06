/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('logintegracao', {
    idlogintegracao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idpessoa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    dtocorrencia: {
      type: DataTypes.DATE,
      allowNull: true
    },
    reffatura: {
      type: DataTypes.STRING,
      allowNull: true
    },
    destinoaviso: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idtipoocorrencia: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    mensagem: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdproduto: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlbysoft: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlfatura: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idusuario: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usuario',
        key: 'idusuario'
      }
    }
  }, {
    tableName: 'logintegracao'
  });
};
