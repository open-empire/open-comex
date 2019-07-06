/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('taxaselic', {
    idtaxaselic: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    mes: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ano: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    vltaxa: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    iduf: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'uf',
        key: 'iduf'
      }
    },
    dia: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dtrecolhimento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    tipo: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'taxaselic'
  });
};
