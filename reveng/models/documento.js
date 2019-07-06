/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('documento', {
    iddocumento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    descricaodocumento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tipo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    classeprincipal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cddocumento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sninota: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snidrawback: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snitradeexportacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snitradeimportacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    utilizarandentreosgrupos: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idmodulo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'modulo',
        key: 'idmodulo'
      }
    },
    versao: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'documento'
  });
};
