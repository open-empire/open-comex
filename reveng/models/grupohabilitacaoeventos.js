/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('grupohabilitacaoeventos', {
    idgrupousuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'grupousuario',
        key: 'idgrupousuario'
      }
    },
    idgrupohabilitacaoeventos: {
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
    snselecionado: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'grupohabilitacaoeventos'
  });
};
