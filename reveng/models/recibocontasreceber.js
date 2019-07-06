/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('recibocontasreceber', {
    idrecibocontasreceber: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nrrecibo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtemissao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    valorextenso: {
      type: DataTypes.STRING,
      allowNull: true
    },
    valor: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    refenciaprocessos: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idcaixa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'caixa',
        key: 'idcaixa'
      }
    }
  }, {
    tableName: 'recibocontasreceber'
  });
};
