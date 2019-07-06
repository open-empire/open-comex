/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('acessosiscomex', {
    idacessosiscomex: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cdacessosiscomex: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmusuario: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cpfusuario: {
      type: DataTypes.STRING,
      allowNull: true
    },
    senhadrawback: {
      type: DataTypes.STRING,
      allowNull: true
    },
    paginasiscomex: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpusuario: {
      type: DataTypes.STRING,
      allowNull: true
    },
    seqinicialidarquivosiscomexweb: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nmloginanvisa: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snativo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snvisualizarsenha: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'acessosiscomex'
  });
};
