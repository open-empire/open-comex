/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('icms', {
    idicms: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    operacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    finalidade: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sncontribuinteicms: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpincentivo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    anexo7: {
      type: DataTypes.STRING,
      allowNull: true
    },
    convenio52: {
      type: DataTypes.STRING,
      allowNull: true
    },
    extarifario: {
      type: DataTypes.STRING,
      allowNull: true
    },
    iduforigem: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'uf',
        key: 'iduf'
      }
    },
    idufdestino: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'uf',
        key: 'iduf'
      }
    },
    aliquotaicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    aliquotareducaoicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    aliquotaefetiva: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'icms'
  });
};
