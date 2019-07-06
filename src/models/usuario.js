/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usuario', {
    idusuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cdusuario: {
      type: DataTypes.STRING,
      allowNull: true
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nmidioma: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idgrupousuario: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'grupousuario',
        key: 'idgrupousuario'
      }
    },
    nmusuario: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmusername: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdpassword: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdativo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    entradanumeroformatado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    desktopdrawbackvisivel: {
      type: DataTypes.STRING,
      allowNull: true
    },
    viewprocallunidoperacionais: {
      type: DataTypes.STRING,
      allowNull: true
    },
    viewprocallclientes: {
      type: DataTypes.STRING,
      allowNull: true
    },
    viewlancadmmodfinanc: {
      type: DataTypes.STRING,
      allowNull: true
    },
    viewlancopermodfinanc: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idunidadeoperacional: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    idusuariosuperior: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usuario',
        key: 'idusuario'
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true
    },
    quadrodesktop1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    quadrodesktop2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    quadrodesktop3: {
      type: DataTypes.STRING,
      allowNull: true
    },
    quadrodesktop4: {
      type: DataTypes.STRING,
      allowNull: true
    },
    quadrodesktop5: {
      type: DataTypes.STRING,
      allowNull: true
    },
    quadrodesktop6: {
      type: DataTypes.STRING,
      allowNull: true
    },
    quadrodesktop7: {
      type: DataTypes.STRING,
      allowNull: true
    },
    quadrodesktop8: {
      type: DataTypes.STRING,
      allowNull: true
    },
    quadrodesktop9: {
      type: DataTypes.STRING,
      allowNull: true
    },
    servidorsmtp: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snautenticacaosmtp: {
      type: DataTypes.STRING,
      allowNull: true
    },
    usuarioemail: {
      type: DataTypes.STRING,
      allowNull: true
    },
    senhaemail: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cpfusuario: {
      type: DataTypes.STRING,
      allowNull: true
    },
    historicosenha: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtultimaalteracaosenha: {
      type: DataTypes.DATE,
      allowNull: true
    },
    tentativasacesso: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    portasmtp: {
      type: DataTypes.STRING,
      allowNull: true
    },
    portatls: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snvizualizaclientescomercial: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ativarproxynavegador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ipproxynavegador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    portaproxynavegador: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    viewquadrosusuariossub: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmassinatura: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrchavedeim: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrsenhadeim: {
      type: DataTypes.STRING,
      allowNull: true
    },
    usuariocomexdataqa: {
      type: DataTypes.STRING,
      allowNull: true
    },
    senhacomexdataqa: {
      type: DataTypes.STRING,
      allowNull: true
    },
    usuarioportal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snautenticacaotls: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snautenticacaossl: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ativaroffice365: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'usuario'
  });
};
