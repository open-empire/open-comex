/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lsiorgaoanuente', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'lsicapa',
        key: 'idprocesso'
      }
    },
    idlicapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idlsiorgaoanuente: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idlsicapa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    idorgaoanuente: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'orgaoanuente',
        key: 'idorgaoanuente'
      }
    },
    tpanuencia: {
      type: DataTypes.STRING,
      allowNull: true
    },
    textosituacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    laudolaboratorial: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtvalidadeli: {
      type: DataTypes.DATE,
      allowNull: true
    },
    tpsituacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtsituacao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    nmtratamento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tppaistratamento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tprestricao: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'lsiorgaoanuente'
  });
};
