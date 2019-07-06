/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mercadoriaajuste', {
    idmercadoriaajuste: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idmercadoria: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'mercadoria',
        key: 'idmercadoria'
      }
    },
    vlqtdajustado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    dtajuste: {
      type: DataTypes.DATE,
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
    txobservacao: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'mercadoriaajuste'
  });
};
