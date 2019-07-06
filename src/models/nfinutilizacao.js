/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('nfinutilizacao', {
    idnfinutilizacao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idemitente: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    cnpjemitente: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cpfemitente: {
      type: DataTypes.STRING,
      allowNull: true
    },
    versao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tagid: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpambiente: {
      type: DataTypes.STRING,
      allowNull: true
    },
    xserv: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cuf: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ano: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mod: {
      type: DataTypes.STRING,
      allowNull: true
    },
    serie: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nfini: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nffim: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    xjust: {
      type: DataTypes.STRING,
      allowNull: true
    },
    retversaodr02: {
      type: DataTypes.STRING,
      allowNull: true
    },
    retiddr04: {
      type: DataTypes.STRING,
      allowNull: true
    },
    rettpambdr05: {
      type: DataTypes.STRING,
      allowNull: true
    },
    retveraplidr06: {
      type: DataTypes.STRING,
      allowNull: true
    },
    retcstatdr07: {
      type: DataTypes.STRING,
      allowNull: true
    },
    retxmotivodr08: {
      type: DataTypes.STRING,
      allowNull: true
    },
    retcufdr09: {
      type: DataTypes.STRING,
      allowNull: true
    },
    retdhrecbtodr16: {
      type: DataTypes.DATE,
      allowNull: true
    },
    retnprot: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'nfinutilizacao'
  });
};
