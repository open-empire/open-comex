/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('processoddevolumes', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'processodde',
        key: 'idprocesso'
      }
    },
    idprocessodde: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idprocessoddevolumes: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idespeciesvolumes: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'especiesvolumes',
        key: 'idespeciesvolumes'
      }
    },
    qtdevolumes: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nmmarcacao: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'processoddevolumes'
  });
};
