/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('inventarioanexos', {
    idinventario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'inventario',
        key: 'idinventario'
      }
    },
    idinventarioanexos: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'processo',
        key: 'idprocesso'
      }
    },
    nmdocumento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrdocumento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sntracking: {
      type: DataTypes.STRING,
      allowNull: true
    },
    arquivo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    arquivooriginal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    arquivosalvo: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'inventarioanexos'
  });
};
