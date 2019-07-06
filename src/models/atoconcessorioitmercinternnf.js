/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('atoconcessorioitmercinternnf', {
    idatoconcessoriocapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'atoconcessorioitmercinterno',
        key: 'idatoconcessoriocapa'
      }
    },
    idatoconcessorioitemexportado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idatoconcessorioitmercinterno: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idatoconcessorioitmercinternnf: {
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
    }
  }, {
    tableName: 'atoconcessorioitmercinternnf'
  });
};
