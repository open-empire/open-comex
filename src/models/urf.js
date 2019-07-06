/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('urf', {
    idurf: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cdurf: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmurf: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrdigito: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idviatransporte: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'viatransporte',
        key: 'idviatransporte'
      }
    },
    snativo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    apurf: {
      type: DataTypes.STRING,
      allowNull: true
    },
    iduf: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'uf',
        key: 'iduf'
      }
    }
  }, {
    tableName: 'urf'
  });
};
