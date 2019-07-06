/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cidade', {
    idcidade: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    maxforcode: {
      type: DataTypes.INTEGER,
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
    idpais: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pais',
        key: 'idpais'
      }
    },
    cdcidade: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmcidade: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmcidadeingles: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmcidadeespanhol: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdibge: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdsiafi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdcidadedaemg: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdsigla: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'cidade'
  });
};
