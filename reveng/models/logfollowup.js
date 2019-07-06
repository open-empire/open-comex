/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('logfollowup', {
    idlog: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idusuario: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idfollowupprocesso: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nmusuario: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrprocesso: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtalteracao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    registroalterado: {
      type: DataTypes.STRING,
      allowNull: true
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
    tpstatus: {
      type: DataTypes.STRING,
      allowNull: true
    },
    observacao1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    registroalterado1: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'logfollowup'
  });
};
