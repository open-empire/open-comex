/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('log', {
    idlog: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idusuario: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usuario',
        key: 'idusuario'
      }
    },
    nmtabela: {
      type: DataTypes.STRING,
      allowNull: true
    },
    identificacaoregistro: {
      type: DataTypes.STRING,
      allowNull: true
    },
    campos: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtalteracao: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'log'
  });
};
