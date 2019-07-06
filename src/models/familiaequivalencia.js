/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('familiaequivalencia', {
    idfamiliaequivalencia: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cdfamiliaequivalencia: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmfamiliaequivalencia: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpfamiliaequivalencia: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idncm: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ncm',
        key: 'idncm'
      }
    },
    dtvalidade: {
      type: DataTypes.DATE,
      allowNull: true
    },
    statusvigencia: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'familiaequivalencia'
  });
};
