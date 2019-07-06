/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('substituicaotributaria', {
    idsubstituicaotributaria: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idestadoorigem: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'uf',
        key: 'iduf'
      }
    },
    idestadodestino: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'uf',
        key: 'iduf'
      }
    },
    idncm: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ncm',
        key: 'idncm'
      }
    },
    situacaotrib: {
      type: DataTypes.STRING,
      allowNull: true
    },
    observacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snativo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlraliqsubsttribu: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlraliqicmsnormal: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlraliqmva: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'substituicaotributaria'
  });
};
