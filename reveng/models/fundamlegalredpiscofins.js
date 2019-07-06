/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fundamlegalredpiscofins', {
    idfundamlegalredpiscofins: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cdfundamlegalredpiscofins: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmfundamlegalredpiscofins: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idncm: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    vlpercentualreducao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    dtiniciovigreducao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtfimvigreducao: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'fundamlegalredpiscofins'
  });
};
