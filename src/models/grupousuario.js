/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('grupousuario', {
    idgrupousuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cdgrupousuario: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmgrupousuario: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdativo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idgrupopai: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'grupousuario',
        key: 'idgrupousuario'
      }
    },
    sncontrolarrepeticaosenha: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sncaracterespecialsenha: {
      type: DataTypes.STRING,
      allowNull: true
    },
    qtdetentativasacesso: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    qtdediasvencimentosenha: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    qtdeminimacaracteressenha: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'grupousuario'
  });
};
