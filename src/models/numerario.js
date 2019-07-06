/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('numerario', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'processo',
        key: 'idprocesso'
      }
    },
    idnumerario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idusuariolanc: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usuario',
        key: 'idusuario'
      }
    },
    idusuariocanc: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usuario',
        key: 'idusuario'
      }
    },
    txobservacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtnumerario: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtimpressao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtcancelamento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    vltotalsolicitado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalrecebido: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalcliente: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nrnumerario: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dtprevisaopagamento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    snenviarftp: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snintegracaofinanceira: {
      type: DataTypes.STRING,
      allowNull: true
    },
    statusintegracao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrintegracaochave: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtaprovintegracao: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'numerario'
  });
};
