/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('processodocumento', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'processo',
        key: 'idprocesso'
      }
    },
    idprocessodocumento: {
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
    },
    vrdocumento: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tamanhoarquivo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    snfilaexclusao: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'processodocumento'
  });
};
