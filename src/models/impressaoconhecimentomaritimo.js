/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('impressaoconhecimentomaritimo', {
    impressaoconhecimentomaritimo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idmaster: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'processo',
        key: 'idprocesso'
      }
    },
    nrconhecimento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrbooking: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmshipper: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmconsigned: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmnotify: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmdelivery: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmconsignor: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmnumberbls: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmtpfrete: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmportoorigem: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmorigemmercadoria: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmportodestino: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmdestinomercadoria: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmmarksnumber: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmkindpackage: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmdescriptiongoods: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlgrossweight: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlnetweight: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmeasurement: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nmfretecharges: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmfreightamount: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmplace: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtissue: {
      type: DataTypes.DATE,
      allowNull: true
    },
    nmassinatura: {
      type: DataTypes.STRING,
      allowNull: true
    },
    voynum: {
      type: DataTypes.STRING,
      allowNull: true
    },
    placeofdelivery: {
      type: DataTypes.STRING,
      allowNull: true
    },
    currency: {
      type: DataTypes.STRING,
      allowNull: true
    },
    freight: {
      type: DataTypes.STRING,
      allowNull: true
    },
    placeofreceipt: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmvessel: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmtipoimpressao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cpfusuarioimpressao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    outrodocumento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmasagentfor: {
      type: DataTypes.STRING,
      allowNull: true
    },
    emailsparaconfirmarcao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    emailconfirmarcao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtconfirmarcao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtenvioconfirmarcao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    idusuarioenviocofirm: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usuario',
        key: 'idusuario'
      }
    },
    commodity: {
      type: DataTypes.STRING,
      allowNull: true
    },
    totalblbrutocubcontainer: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'impressaoconhecimentomaritimo'
  });
};
