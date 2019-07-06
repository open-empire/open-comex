/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('propostaitem', {
    idproposta: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'proposta',
        key: 'idproposta'
      }
    },
    idpropostaitem: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idservico: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'servico',
        key: 'idservico'
      }
    },
    idproduto: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'produtoclassificacao',
        key: 'idprodutoclassificacao'
      }
    },
    idunidadeoperacional: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
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
    idincoterm: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'incoterm',
        key: 'idincoterm'
      }
    }
  }, {
    tableName: 'propostaitem'
  });
};
