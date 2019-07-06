/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pedidoimportacaodrawsuspensa', {
    idatoconcessoriocapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'atoconcessorioimportadoagrup',
        key: 'idatoconcessoriocapa'
      }
    },
    idatoconcessorioimportadoagrup: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idpedidoimportacaodrawsuspensa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    dtinstrucao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    quantidade: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    valormleddolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    referenciacliente: {
      type: DataTypes.STRING,
      allowNull: true
    },
    numeroli: {
      type: DataTypes.STRING,
      allowNull: true
    },
    saldo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING,
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
    dtutilizacao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    txobservacao: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'pedidoimportacaodrawsuspensa'
  });
};
