/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('atoconcessoriomercintagrupnf', {
    idatoconcessoriocapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'atoconcessoriomercintagrup',
        key: 'idatoconcessoriocapa'
      }
    },
    idatoconcessoriomercintagrup: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idatoconcessoriomercintagrupnf: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nrnotafiscal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtnotafiscal: {
      type: DataTypes.DATE,
      allowNull: true
    },
    idemissornotafiscal: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    qtdenotafiscal: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlnotafiscal: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    seqitemsiscomex: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snvincacitmercinternnf: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idatoconcessorioitemexportado: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idatoconcessorioitmercinterno: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idatoconcessorioitmercinternnf: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    snenviadodrawbackweb: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'atoconcessoriomercintagrupnf'
  });
};
