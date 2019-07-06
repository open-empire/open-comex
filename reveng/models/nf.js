/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('nf', {
    idnf: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idformularionf: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'formularionf',
        key: 'idformularionf'
      }
    },
    idcontinuacaoformularionf: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idnotafiscal: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'notafiscalmontagem',
        key: 'idnotafiscal'
      }
    },
    dtautorizacaonf: {
      type: DataTypes.DATE,
      allowNull: true
    },
    situacaonf: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpsituacaonf: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tpambiente: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrec: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nprot: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tmed: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtrecbto: {
      type: DataTypes.DATE,
      allowNull: true
    },
    idlote: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    xmlretornoconsulta: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idpessoaemitente: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    versaomanual: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'nf'
  });
};
