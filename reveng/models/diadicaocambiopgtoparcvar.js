/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('diadicaocambiopgtoparcvar', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'diadicao',
        key: 'idprocesso'
      }
    },
    iddicapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iddiadicao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iddiadicaocambiopgtoparcvar: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    mes: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ano: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlparcela: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpercentualcambio: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'diadicaocambiopgtoparcvar'
  });
};
