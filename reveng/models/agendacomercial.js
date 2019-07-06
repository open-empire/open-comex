/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('agendacomercial', {
    idagendacomercial: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cdagendacomercial: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtlancamento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtrealizacao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    horasrealizacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    horasduracao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtlembreteatividade: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtlembreteretorno: {
      type: DataTypes.DATE,
      allowNull: true
    },
    tpclassificacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmassunto: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmretorno: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snlembreteatividade: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snlembreteretorno: {
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
    idvendedor: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'vendedor',
        key: 'idvendedor'
      }
    },
    idpessoa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    idcontato: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    nmassuntoresumido: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpmeiocontato: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtrealizacaoproximo: {
      type: DataTypes.DATE,
      allowNull: true
    },
    horasrealizacaoproximo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    horasduracaoproximo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idagendacomercialpai: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'agendacomercial'
  });
};
