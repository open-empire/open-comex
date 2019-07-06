/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('grupoitemdespesa', {
    idgrupoitemdespesa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cdgrupoitemdespesa: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmgrupoitemdespesa: {
      type: DataTypes.STRING,
      allowNull: true
    },
    atividaderps: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'grupoitemdespesa'
  });
};
