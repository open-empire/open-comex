/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dwatoisencaoanexos', {
    iddwatoisencaocapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'dwatoisencaocapa',
        key: 'iddwatoisencaocapa'
      }
    },
    iddwatoisencaoanexos: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iddocumentacao: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'documentacao',
        key: 'iddocumentacao'
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
    tpclassificacao: {
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
    nomearquivooriginal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nomearquivosalvo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtinclusao: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'dwatoisencaoanexos'
  });
};
