/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('terminalcarga', {
    idterminalcarga: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ano: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cdterminalcarga: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmterminalcarga: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idcidade: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'cidade',
        key: 'idcidade'
      }
    },
    siglacidade: {
      type: DataTypes.STRING,
      allowNull: true
    },
    siglaiata: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idurfentrada: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'urf',
        key: 'idurf'
      }
    },
    cdmercante: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idgrupoterminalcarga: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'grupoterminalcarga',
        key: 'idgrupoterminalcarga'
      }
    },
    codigofiesp: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cdsigla: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'terminalcarga'
  });
};
