/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('serieconhecimento', {
    idpessoa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    idserieconhecimento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tpinclusao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sncalculoiata: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrconhecimentoinicial: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrconhecimentofinal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrdigitoinicial: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrdigitofinal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    qtdeconhecimento: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    qtdedisponivel: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dtabertura: {
      type: DataTypes.DATE,
      allowNull: true
    },
    idunidadenegocio: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    }
  }, {
    tableName: 'serieconhecimento'
  });
};
