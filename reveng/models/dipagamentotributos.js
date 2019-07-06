/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dipagamentotributos', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'dicapa',
        key: 'idprocesso'
      }
    },
    iddicapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iddipagamentotributos: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cdreceita: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdbancopagtotributo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nragenciapagamentotributo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vltributo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    dtpagamento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    vlmultatributo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vljurostributo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'dipagamentotributos'
  });
};
