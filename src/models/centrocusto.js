/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('centrocusto', {
    idcentrocusto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cdcentrocusto: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmcentrocusto: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrreduzido: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrgrau: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idfilial: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    idcentrocustopai: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'centrocusto',
        key: 'idcentrocusto'
      }
    },
    snativo: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'centrocusto'
  });
};
