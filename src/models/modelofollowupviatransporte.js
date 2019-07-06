/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('modelofollowupviatransporte', {
    idviatransporte: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'viatransporte',
        key: 'idviatransporte'
      }
    },
    idmodelofollowupviatransporte: {
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
    nrordem: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    snobrigaeventoanterior: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrprazo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tpcontrole: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpdestinatarioemailatraso: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sndiasuteis: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'modelofollowupviatransporte'
  });
};
