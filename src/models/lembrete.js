/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lembrete', {
    idlembrete: {
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
    lembrete: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtevento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtlancamento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    tipo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    destinatario: {
      type: DataTypes.STRING,
      allowNull: true
    },
    remetente: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'lembrete'
  });
};
