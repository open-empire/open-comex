/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('direitousuario', {
    idgrupousuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'grupousuario',
        key: 'idgrupousuario'
      }
    },
    idmodulo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'direitomodulo',
        key: 'idmodulo'
      }
    },
    iddireito: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'direito',
        key: 'iddireito'
      }
    }
  }, {
    tableName: 'direitousuario'
  });
};
