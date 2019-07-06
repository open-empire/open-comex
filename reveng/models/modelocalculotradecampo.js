/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('modelocalculotradecampo', {
    idmodelocalculotrade: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'modelocalculotrade',
        key: 'idmodelocalculotrade'
      }
    },
    idmodelocalculotradecampo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    descricaocampo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdcampo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmcampofisico: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tipodados: {
      type: DataTypes.STRING,
      allowNull: true
    },
    formulaembarque: {
      type: DataTypes.STRING,
      allowNull: true
    },
    formulapedido: {
      type: DataTypes.STRING,
      allowNull: true
    },
    formulacustoimportacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tipocampo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    campotabelaembarque: {
      type: DataTypes.STRING,
      allowNull: true
    },
    campotabelapedido: {
      type: DataTypes.STRING,
      allowNull: true
    },
    campotabelacustoimportacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tamanhodecimal: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tamanhointeiro: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'modelocalculotradecampo'
  });
};
