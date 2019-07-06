/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lsiprocessosanuentes', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'lsicapa',
        key: 'idprocesso'
      }
    },
    idlsicapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idlsiprocessosanuentes: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nrprocessoanuente: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idorgaoanuente: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'orgaoanuente',
        key: 'idorgaoanuente'
      }
    },
    nrprotocolo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtprotocolo: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtdeferimento: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'lsiprocessosanuentes'
  });
};
