/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fundamlegalregtribpiscofins', {
    idfundamlegalregtribpiscofins: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cdfundamlegalregtribpiscofinsb: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmfundamlegalregtribpiscofins: {
      type: DataTypes.STRING,
      allowNull: true
    },
    regtrib1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    regtrib2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    regtrib3: {
      type: DataTypes.STRING,
      allowNull: true
    },
    regtrib4: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'fundamlegalregtribpiscofins'
  });
};
