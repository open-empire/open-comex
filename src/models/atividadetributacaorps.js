/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('atividadetributacaorps', {
    idatividadetributacaorps: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idunidade: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    idservico: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'servico',
        key: 'idservico'
      }
    },
    cdatividaderps: {
      type: DataTypes.STRING,
      allowNull: true
    },
    codigotributacaorps: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'atividadetributacaorps'
  });
};
