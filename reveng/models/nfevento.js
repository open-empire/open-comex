/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('nfevento', {
    idnfevento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idloteevento: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    idnf: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'nf',
        key: 'idnf'
      }
    },
    versao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tagid: {
      type: DataTypes.STRING,
      allowNull: true
    },
    corgao: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dhevento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    tpevento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrseqevento: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    verevento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    descevento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    xjust: {
      type: DataTypes.STRING,
      allowNull: true
    },
    xcorrecao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    xconduso: {
      type: DataTypes.STRING,
      allowNull: true
    },
    retenvloteversaohr02: {
      type: DataTypes.STRING,
      allowNull: true
    },
    retenvlotehr03: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    retenvlotetpambhr04: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    retenvloteveraplichr05: {
      type: DataTypes.STRING,
      allowNull: true
    },
    retenvloteorgaohr06: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    retenvlotecstathr07: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    retenvlotexmotivohr08: {
      type: DataTypes.STRING,
      allowNull: true
    },
    retenvloteversao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    retenvidhr12: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    retenvtpambhr13: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    retenvveraplichr14: {
      type: DataTypes.STRING,
      allowNull: true
    },
    retenvcorgaohr15: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    retenvcstathr16: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    retenvxmotivohr17: {
      type: DataTypes.STRING,
      allowNull: true
    },
    retenvchnfehr18: {
      type: DataTypes.STRING,
      allowNull: true
    },
    retenvtpeventohr19: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    retenvxeventohr20: {
      type: DataTypes.STRING,
      allowNull: true
    },
    retenvnseqeventohr21: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    retenvcnpjdesthr22: {
      type: DataTypes.STRING,
      allowNull: true
    },
    retenvcpfdesthr23: {
      type: DataTypes.STRING,
      allowNull: true
    },
    retenvemaildesthr24: {
      type: DataTypes.STRING,
      allowNull: true
    },
    retenvdhregeventohr25: {
      type: DataTypes.DATE,
      allowNull: true
    },
    retenvnrprotocolohr26: {
      type: DataTypes.STRING,
      allowNull: true
    },
    xmleventoenvio: {
      type: "OID",
      allowNull: true
    },
    xmleventoretorno: {
      type: "OID",
      allowNull: true
    }
  }, {
    tableName: 'nfevento'
  });
};
