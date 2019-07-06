/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('proposta', {
    idproposta: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nrproposta: {
      type: DataTypes.STRING,
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
    },
    diasvalidade: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dtvalidade: {
      type: DataTypes.DATE,
      allowNull: true
    },
    idresponsavel: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usuario',
        key: 'idusuario'
      }
    },
    idcliente: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    mmobservacao: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'proposta'
  });
};
