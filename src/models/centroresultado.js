/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('centroresultado', {
    idcentroresultado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cdcentroresultado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmcentroresultado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idpessoaunidade: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    nmfatoragrupamento: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'centroresultado'
  });
};
