/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('diadicaodocumentovinculado', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'diadicao',
        key: 'idprocesso'
      }
    },
    iddicapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iddiadicao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idadicaodocumentovinculado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tpdocumento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrdocumento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idpoitem: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'diadicaodocumentovinculado'
  });
};
