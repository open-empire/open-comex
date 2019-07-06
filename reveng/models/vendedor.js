/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vendedor', {
    idvendedor: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cdvendedor: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmvendedor: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtadmissao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtdemissao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    tpclassificacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cnpj: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cpf: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlmeta: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    possuimeta: {
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
    },
    snativo: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'vendedor'
  });
};
