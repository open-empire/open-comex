/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('processoexpitemnf', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'processoexportacaoitem',
        key: 'idprocesso'
      }
    },
    idprocessoexportacao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idprocessoexportacaoitem: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idprocessoexpitemnf: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nrchaveacessonf: {
      type: DataTypes.STRING,
      allowNull: true
    },
    seqitemnf: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlquantidadeitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    snnotaformulario: {
      type: DataTypes.STRING,
      allowNull: true
    },
    iduf: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'uf',
        key: 'iduf'
      }
    },
    anomes: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idemitente: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    modelo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    serie: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrdocumento: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'processoexpitemnf'
  });
};
