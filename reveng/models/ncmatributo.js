/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ncmatributo', {
    idncm: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'ncm',
        key: 'idncm'
      }
    },
    idncmatributo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cdatributo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpapresentacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpatributo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tppreenchimento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpformapreenchimento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpmodalidade: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snobrigatorio: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtiniciovigencia: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtfimvigencia: {
      type: DataTypes.DATE,
      allowNull: true
    },
    tpambiente: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sninativo: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'ncmatributo'
  });
};
