/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('processosda', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'processo',
        key: 'idprocesso'
      }
    },
    idprocessosda: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idpessoacliente: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    idpessoadespachante: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    idsequencial: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dtimpressaosda: {
      type: DataTypes.DATE,
      allowNull: true
    },
    mesimpressasda: {
      type: DataTypes.STRING,
      allowNull: true
    },
    anoimpressaosda: {
      type: DataTypes.STRING,
      allowNull: true
    },
    valorsda: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    dtbasesda: {
      type: DataTypes.DATE,
      allowNull: true
    },
    tpstatussda: {
      type: DataTypes.STRING,
      allowNull: true
    },
    observacaosda: {
      type: DataTypes.STRING,
      allowNull: true
    },
    valorcalcsobrealiqsda: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    valorinsssda: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlassistenciasocial: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'processosda'
  });
};
