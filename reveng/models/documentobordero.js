/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('documentobordero', {
    idcambioexportacao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'cambioexportacao',
        key: 'idcambioexportacao'
      }
    },
    iddocumentobordero: {
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
    nmdescricao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ordemdocumento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    qtdeoriginal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    qtdecopia: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'documentobordero'
  });
};
