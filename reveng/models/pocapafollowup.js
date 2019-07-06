/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pocapafollowup', {
    idpocapafollowup: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idpocapa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pocapa',
        key: 'idpocapa'
      }
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
    idusuario: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usuario',
        key: 'idusuario'
      }
    },
    dtalteracao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtprevisao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    nrordem: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nrprazo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    snenviaritracking: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpformacontrole: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpcontrole: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sndiasuteis: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtprevisaoinicial: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'pocapafollowup'
  });
};
