/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('processosiscarga', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'processo',
        key: 'idprocesso'
      }
    },
    idprocessosiscarga: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tpconhecimento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdpaissiscarga: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmpaissiscarga: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdtransportadorsiscarga: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmtransportadorsiscarga: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdembarcacaosiscarga: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmembarcacaosiscarga: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdbandeirasiscarga: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmbandeirasiscarga: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrviagemsiscarga: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtprevisaochegsiscarga: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtchegadasiscarga: {
      type: DataTypes.DATE,
      allowNull: true
    },
    vlpesobrutosiscarga: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesocubadosiscarga: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tpfretesiscarga: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlfretesiscarga: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cdmoedafretesiscarga: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmmoedafretesiscarga: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlcapatazia: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cdmoedamlesiscarga: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmmoedamlesiscarga: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlmlesiscarga: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    txdescricaomercsiscarga: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrmanifesto: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtemissaomanifesto: {
      type: DataTypes.DATE,
      allowNull: true
    },
    cdportocarregamento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmportocarregamento: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'processosiscarga'
  });
};
