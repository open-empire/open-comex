/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('contratomanutencaoitem', {
    idcontratomanutencao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'contratomanutencao',
        key: 'idcontratomanutencao'
      }
    },
    idcontratomanutencaoitem: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iditemdespesa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'itemdespesa',
        key: 'iditemdespesa'
      }
    },
    vlrcontrato: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    horasatendimento: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    vlrcontratoantesreajuste: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'contratomanutencaoitem'
  });
};
