/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dwatosuspensaocapa', {
    iddwatosuspensaocapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ano: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nrreferencia: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtabertura: {
      type: DataTypes.DATE,
      allowNull: true
    },
    nratoconcessorio: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtregistro: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtvalidade: {
      type: DataTypes.DATE,
      allowNull: true
    },
    idcliente: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    vlfreteestimado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlseguroestimado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlsubprodresiduoestimado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tpato: {
      type: DataTypes.STRING,
      allowNull: true
    },
    percimportado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    snmontado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snatorecuperado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlindicenacionalizacaoimp: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlindicenacionalizacaomi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalimportadousd: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalexmportadousd: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalmercinternousd: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlii: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalipi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalpis: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalcofins: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    snatocalculado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrretificao: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sncancelado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpsituacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtconsultaato: {
      type: DataTypes.DATE,
      allowNull: true
    },
    vltotalimpostos: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    descricaoimportacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    descricaoaquisicao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vltotalimportadousdsemcobert: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalexmportadousdsemcobert: {
      type: DataTypes.DOUBLE,
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
    idservico: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'servico',
        key: 'idservico'
      }
    },
    vltotaliiefetivo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalipiefetivo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalpisefetivo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalcofinsefetivo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalicmsefetivo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalimpostosefetivo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfobdolarestimado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    qtdediasdesembaracoprod: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    snutilizarfatorconversao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtprorrogacao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    aliquotaicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfreterealizado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlsegurorealizado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfobdolarrealizado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    passuinacionalizacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snquadroconsumocalculado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sndesabilitaralertavcto: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idusuarioabertura: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usuario',
        key: 'idusuario'
      }
    },
    vltotaliiestimadoreais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalipiestimadoreais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalpisestimadoreais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalcofinsestimadoreais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalicmsestimadoreais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalimpostosestimadoreais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'dwatosuspensaocapa'
  });
};
