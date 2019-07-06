/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usuariohabilitacaomantra', {
    idusuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'usuario',
        key: 'idusuario'
      }
    },
    idusuariohabilitacaomantra: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idpessoaunidadeoper: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    idpessoacliente: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    }
  }, {
    tableName: 'usuariohabilitacaomantra'
  });
};
