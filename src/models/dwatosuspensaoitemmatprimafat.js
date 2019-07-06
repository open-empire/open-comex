/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dwatosuspensaoitemmatprimafat', {
    iddwatosuspensaocapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'dwatosuspensaoitemmatprima',
        key: 'iddwatosuspensaocapa'
      }
    },
    iddwatosuspensaoitemmatprima: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iddwatosuspensaoitemmatprimafat: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iddwatosuspensaoitemmatprimadi: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    iditemdespesa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'itemdespesa',
        key: 'iditemdespesa'
      }
    },
    tpbasecalculo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlbasecalculo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlminimo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmaximo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    atocompleto: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vltotalafrmm: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'dwatosuspensaoitemmatprimafat'
  });
};
