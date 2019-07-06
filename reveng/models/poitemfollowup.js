/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('poitemfollowup', {
    idpoitemfollowup: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idpocapa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'poitem',
        key: 'idpocapa'
      }
    },
    idpoitem: {
      type: DataTypes.INTEGER,
      allowNull: true,
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
    qtdeenvio: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dtrealizacao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    observacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snenviado: {
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
    }
  }, {
    tableName: 'poitemfollowup'
  });
};
