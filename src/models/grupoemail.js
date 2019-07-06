/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('grupoemail', {
    idgrupoemail: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cdgrupoemail: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmgrupoemail: {
      type: DataTypes.STRING,
      allowNull: true
    },
    emails: {
      type: DataTypes.STRING,
      allowNull: true
    },
    emailscc: {
      type: DataTypes.STRING,
      allowNull: true
    },
    emailscco: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'grupoemail'
  });
};
