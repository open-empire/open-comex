/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('consolidadorpo', {
    idconsolidadorpo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    dtcriacao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    qtdefaturas: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nrreferenciaprocesso: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrreferenciaauxiliar: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cnpjcliente: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrconhecimento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mmcomplementarmanual: {
      type: "OID",
      allowNull: true
    },
    idpessoaunidade: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    idpessoacliente: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    idservico: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'servico',
        key: 'idservico'
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
    dtchegada: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtembarque: {
      type: DataTypes.DATE,
      allowNull: true
    },
    area: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'consolidadorpo'
  });
};
