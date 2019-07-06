/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('historicoemail', {
    idhistoricoemail: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    dtlancamento: {
      type: DataTypes.DATE,
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
    nmassunto: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmdestinatario: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmcopia: {
      type: DataTypes.STRING,
      allowNull: true
    },
    textoemail: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'historicoemail'
  });
};
