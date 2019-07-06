/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pais', {
    idpais: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cdiatapais: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdsiscomexpais: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmpais: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nacionalidade: {
      type: DataTypes.STRING,
      allowNull: true
    },
    siglapais: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmpaisingles: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmpaisespanhol: {
      type: DataTypes.STRING,
      allowNull: true
    },
    codigofiesp: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idregiaocontinente: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'regiaocontinente',
        key: 'idregiaocontinente'
      }
    },
    cdmercante: {
      type: DataTypes.STRING,
      allowNull: true
    },
    codigofiergs: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'pais'
  });
};
