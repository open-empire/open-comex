/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('normas', {
    idnormas: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cdnormas: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmnormas: {
      type: DataTypes.STRING,
      allowNull: true
    },
    codigofiesp: {
      type: DataTypes.STRING,
      allowNull: true
    },
    codigofiergs: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'normas'
  });
};
