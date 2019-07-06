/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dwatoisencaocapa', {
    iddwatoisencaocapa: {
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
    dtcalculo: {
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
    dtperiodoinicial: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtperiodofinal: {
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
    cpfass1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cpfass2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtemissaoatoconcessorio: {
      type: DataTypes.DATE,
      allowNull: true
    },
    delegaciareceitafederal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    delegaciareceitafederalmatriz: {
      type: DataTypes.STRING,
      allowNull: true
    },
    localemissaoatoconcessorio: {
      type: DataTypes.STRING,
      allowNull: true
    },
    assinatura1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    assinatura2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    totalderes: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    totaldedis: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    percimportado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    snatocalculado: {
      type: DataTypes.STRING,
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
    snutilizarfatorconversao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    qtdediasdesembaracoprod: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dtprorrogacao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    vlfreteestimado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlseguroestimado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    aliquotaicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalii: {
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
    vltotalimpostos: {
      type: DataTypes.DOUBLE,
      allowNull: true
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
    snsavinginicialviaintegracao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vltotaliirealizado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalipirealizado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalpisrealizado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalcofinsrealizado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalicmsrealizado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlafrmmrealizado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlafrmmefetivo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlafrmm: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tpato: {
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
    vlfreterealizado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlsegurorealizado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    qtdetotalautorizada: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotaldolarautorizado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'dwatoisencaocapa'
  });
};
