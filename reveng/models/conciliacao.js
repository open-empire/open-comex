/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('conciliacao', {
    idconciliacao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idcontafinanceiro: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'contafinanceiro',
        key: 'idcontafinanceiro'
      }
    },
    dtconciliacao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    vlsaldoanterior: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcredito: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldebito: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlsaldo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idusuario: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usuario',
        key: 'idusuario'
      }
    },
    tpstatus: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'conciliacao'
  });
};
