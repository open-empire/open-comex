/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('nftransmissao', {
    idnftransmissao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idlote: {
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
    tpambiente: {
      type: DataTypes.STRING,
      allowNull: true
    },
    veraplic: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cstat: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    xmotivo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cuf: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dhrecbto: {
      type: DataTypes.DATE,
      allowNull: true
    },
    nrec: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tmed: {
      type: DataTypes.STRING,
      allowNull: true
    },
    reccstatar05: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    recxmotivoar06: {
      type: DataTypes.STRING,
      allowNull: true
    },
    reccufar06a: {
      type: DataTypes.STRING,
      allowNull: true
    },
    recdhrecbtoar06b: {
      type: DataTypes.DATE,
      allowNull: true
    },
    reccmsgar07: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    recxmsgar08: {
      type: DataTypes.STRING,
      allowNull: true
    },
    protnfechaveacessopr07: {
      type: DataTypes.STRING,
      allowNull: true
    },
    protnprotocolopr09: {
      type: DataTypes.STRING,
      allowNull: true
    },
    protdigvalpr10: {
      type: DataTypes.STRING,
      allowNull: true
    },
    protcstatpr11: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    protxmotivopr12: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'nftransmissao'
  });
};
