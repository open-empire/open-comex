/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('montagemdemonstrativoconsumo', {
    idmontagemdemonstrativoconsumo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    processodemonstrativoconsumo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idcliente: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    dtaberturademonstrativo: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ano: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idatoconcessorio: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'atoconcessoriocapa',
        key: 'idatoconcessoriocapa'
      }
    },
    cicloproducao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tpdemonstrativo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idunidadeoperacional: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    }
  }, {
    tableName: 'montagemdemonstrativoconsumo'
  });
};
