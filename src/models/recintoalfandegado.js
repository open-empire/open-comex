/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('recintoalfandegado', {
    idrecintoalfandegado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cdrecintoalfandegado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmrecintoalfandegado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idurf: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'urf',
        key: 'idurf'
      }
    },
    snativo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpzona: {
      type: DataTypes.STRING,
      allowNull: true
    },
    aprecintoalfandegado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idpessoafornecedor: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    }
  }, {
    tableName: 'recintoalfandegado'
  });
};
