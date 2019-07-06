/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('servico', {
    idservico: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cdservico: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmservico: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpleadtime: {
      type: DataTypes.STRING,
      allowNull: true
    },
    przleadtime: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    servicoativo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idprodutoclassificacao: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'produtoclassificacao',
        key: 'idprodutoclassificacao'
      }
    },
    idviatransporte: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'viatransporte',
        key: 'idviatransporte'
      }
    },
    ideventoconclusor: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'eventos',
        key: 'idevento'
      }
    },
    tpproduto: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mascaraprocesso: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdatividaderps: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmservicoingles: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmservicoespanhol: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snalterarimportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    codigotributacaorps: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snalterarexportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ideventoconclusorfinanceiro: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'eventos',
        key: 'idevento'
      }
    },
    cdatividaderpsfatag: {
      type: DataTypes.STRING,
      allowNull: true
    },
    aliquotaestadual: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    aliquotafederal: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    aliquotamunicipal: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    fontealiquotas: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlaliquotaissservico: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'servico'
  });
};
