/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('atoconcessorioitemlidirec', {
    idatoconcessoriocapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'atoconcessorioimportadorec',
        key: 'idatoconcessoriocapa'
      }
    },
    idatoconcessorioimportadorec: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idatoconcessorioitemlidirec: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tpregistrosiscomex: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrregistrosiscomex: {
      type: DataTypes.STRING,
      allowNull: true
    },
    qtregistrosiscomex: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlregistrosiscomex: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    statusregistrosiscomex: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtregistrosiscomex: {
      type: DataTypes.DATE,
      allowNull: true
    },
    nrlicencaimportacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nradicao: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'atoconcessorioitemlidirec'
  });
};
