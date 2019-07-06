/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('snfvolumecarga', {
    idsnf: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'snf',
        key: 'idsnf'
      }
    },
    idsnfvolumecarga: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cod_referencia: {
      type: DataTypes.STRING,
      allowNull: false
    },
    especie_volumes: {
      type: DataTypes.STRING,
      allowNull: true
    },
    qtd_volumes: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    emitente_pfj_codigo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ctrl_instrucao: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'snfvolumecarga'
  });
};
