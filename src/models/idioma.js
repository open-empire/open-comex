/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('idioma', {
    ididioma: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    classname: {
      type: DataTypes.STRING,
      allowNull: true
    },
    atributoname: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mmdescricaodicionariodados: {
      type: DataTypes.STRING,
      allowNull: true
    },
    classetabela: {
      type: DataTypes.STRING,
      allowNull: true
    },
    textoidentificador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tamanhomaximo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tamanhocampodatabase: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    portugues: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ingles: {
      type: DataTypes.STRING,
      allowNull: true
    },
    espanhol: {
      type: DataTypes.STRING,
      allowNull: true
    },
    frances: {
      type: DataTypes.STRING,
      allowNull: true
    },
    italiano: {
      type: DataTypes.STRING,
      allowNull: true
    },
    alemao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    japones: {
      type: DataTypes.STRING,
      allowNull: true
    },
    chines: {
      type: DataTypes.STRING,
      allowNull: true
    },
    coreano: {
      type: DataTypes.STRING,
      allowNull: true
    },
    bulgaro: {
      type: DataTypes.STRING,
      allowNull: true
    },
    croata: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dinamarques: {
      type: DataTypes.STRING,
      allowNull: true
    },
    eslovaco: {
      type: DataTypes.STRING,
      allowNull: true
    },
    esloveno: {
      type: DataTypes.STRING,
      allowNull: true
    },
    estoniano: {
      type: DataTypes.STRING,
      allowNull: true
    },
    finlandes: {
      type: DataTypes.STRING,
      allowNull: true
    },
    grego: {
      type: DataTypes.STRING,
      allowNull: true
    },
    hebraico: {
      type: DataTypes.STRING,
      allowNull: true
    },
    holandes: {
      type: DataTypes.STRING,
      allowNull: true
    },
    hungaro: {
      type: DataTypes.STRING,
      allowNull: true
    },
    indonesio: {
      type: DataTypes.STRING,
      allowNull: true
    },
    islandes: {
      type: DataTypes.STRING,
      allowNull: true
    },
    letao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    lituano: {
      type: DataTypes.STRING,
      allowNull: true
    },
    noruegues: {
      type: DataTypes.STRING,
      allowNull: true
    },
    polones: {
      type: DataTypes.STRING,
      allowNull: true
    },
    romeno: {
      type: DataTypes.STRING,
      allowNull: true
    },
    russo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sueco: {
      type: DataTypes.STRING,
      allowNull: true
    },
    servio: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tcheco: {
      type: DataTypes.STRING,
      allowNull: true
    },
    turco: {
      type: DataTypes.STRING,
      allowNull: true
    },
    arabe: {
      type: DataTypes.STRING,
      allowNull: true
    },
    catalao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    outro: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'idioma'
  });
};
