/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('impressaoconhecimentoaereo', {
    idimpressaoconhecimentoaereo: {
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
      allowNull: true
    },
    nrconhecimento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrconhecimentoaux: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpconhecimento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmshipper: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmissued: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmconsigneer: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmissuingcarrier: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmaccountinginformation: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmiatacodeagent: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmaccount: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmtypeservice: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmrota: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmrefencenumber: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmoptionalshipping: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmfrom: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmto1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmcarrier1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmto2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmcarrier2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmto3: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmcarrier3: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmcurrency: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmchargs: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmconfirmfretepp: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmconfirmfretecc: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmotherpp: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmothercc: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmdvcarriage: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmdvcustoms: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmairportofdeparture: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmairportdestination: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmflightdate1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmflightdate2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmamountinsurance: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmhandlinginformation: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlqtdevolumes: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlgrossweight: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlchargeableweight: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tpclassrate: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmnaturegoods: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlratecharge: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalfrete: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfreteprepaid: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfretecollect: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlvaluationprepaid: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlvaluationcollect: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltaxcollect: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltaxprepaid: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlchargesagentprepaid: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlchargesagentcollect: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlchargescarrierprepaid: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlchargescarriercollect: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalcollect: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalprepaid: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalprepaidreais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nmobservacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmothercharges: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmagentsfor: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmauthorizedagent: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtemissao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    nmplace: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmusuarioimpressao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrsufixoconhecimento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    outrodocumento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vltotalprepaidreaismaster: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nmplacecountry: {
      type: DataTypes.STRING,
      allowNull: true
    },
    commodity: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'impressaoconhecimentoaereo'
  });
};
