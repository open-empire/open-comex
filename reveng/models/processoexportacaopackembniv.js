/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('processoexportacaopackembniv', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'processoexportacaopacking',
        key: 'idprocesso'
      }
    },
    idprocessoexportacao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idprocessoexportacaopacking: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idprocessoexportacaopackembniv: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idnivelinferior: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idnivelsuperior: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nivelembalagem: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    vlquantidadetotalembbaixadas: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'processoexportacaopackembniv'
  });
};
