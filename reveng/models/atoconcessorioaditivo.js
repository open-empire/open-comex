/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('atoconcessorioaditivo', {
    idatoconcessorioaditivo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idatoconcessorio: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'atoconcessoriocapa',
        key: 'idatoconcessoriocapa'
      }
    },
    idunidadeoperacional: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    alteraprazo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    alteramercadoriaitem07: {
      type: DataTypes.STRING,
      allowNull: true
    },
    alteramercadoriaitem19: {
      type: DataTypes.STRING,
      allowNull: true
    },
    alteravaloresitem11e12: {
      type: DataTypes.STRING,
      allowNull: true
    },
    alteravaloresitem23e24: {
      type: DataTypes.STRING,
      allowNull: true
    },
    alteralocaldesembarque: {
      type: DataTypes.STRING,
      allowNull: true
    },
    alteraoutrainformacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    descricaooutraalteracao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    delinha01: {
      type: DataTypes.STRING,
      allowNull: true
    },
    delinha02: {
      type: DataTypes.STRING,
      allowNull: true
    },
    delinha03: {
      type: DataTypes.STRING,
      allowNull: true
    },
    delinha04: {
      type: DataTypes.STRING,
      allowNull: true
    },
    delinha05: {
      type: DataTypes.STRING,
      allowNull: true
    },
    delinha06: {
      type: DataTypes.STRING,
      allowNull: true
    },
    paralinha01: {
      type: DataTypes.STRING,
      allowNull: true
    },
    paralinha02: {
      type: DataTypes.STRING,
      allowNull: true
    },
    paralinha03: {
      type: DataTypes.STRING,
      allowNull: true
    },
    paralinha04: {
      type: DataTypes.STRING,
      allowNull: true
    },
    paralinha05: {
      type: DataTypes.STRING,
      allowNull: true
    },
    paralinha06: {
      type: DataTypes.STRING,
      allowNull: true
    },
    localreceitafederal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmreceitafederal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    local: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtemissao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    assinatura1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    assinatura2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    seqatoconcessorioaditivo: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'atoconcessorioaditivo'
  });
};
