/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lifollowup', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'licapa',
        key: 'idprocesso'
      }
    },
    idlicapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idlifollowup: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idevento: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'eventos',
        key: 'idevento'
      }
    },
    dtrealizacao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    observacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrordem: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'lifollowup'
  });
};
