/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('formularionf', {
    idformularionf: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idcontinuacaoformularionf: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tpnota: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrchavenfe: {
      type: DataTypes.STRING,
      allowNull: true
    },
    modelonota: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idnotafiscal: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'notafiscalmontagem',
        key: 'idnotafiscal'
      }
    },
    cncc1001: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1002: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1003: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1004: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1005: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1006: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1007: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1008: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1009: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1010: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1011: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1012: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1013: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1014: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1015: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1016: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1017: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1018: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1019: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1020: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1021: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1022: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1023: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1024: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1025: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1026: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1027: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1028: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1029: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1030: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1031: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1032: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1033: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1034: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1035: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1036: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1037: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1038: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1039: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1040: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1041: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1042: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1043: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1044: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1045: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1046: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1047: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1048: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1049: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1050: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1051: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1052: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1053: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1054: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1055: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1056: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1057: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1058: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1059: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1060: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1061: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1062: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1063: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1064: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1065: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1066: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1067: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1068: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1069: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1070: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1071: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1072: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1073: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1074: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1075: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1076: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1077: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1078: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1079: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1080: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1081: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1082: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1083: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1084: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1085: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1086: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1087: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1088: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1089: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1090: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1091: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1092: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1093: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1094: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1095: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1096: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1097: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1098: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1099: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1100: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1101: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1102: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1103: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1104: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1105: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1106: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1107: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1108: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1109: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1110: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1111: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1112: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1113: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1114: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1115: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1116: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1117: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1118: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1119: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1120: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1121: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1122: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1123: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1124: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1125: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1126: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1127: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncd2001: {
      type: DataTypes.DATE,
      allowNull: true
    },
    cncd2002: {
      type: DataTypes.DATE,
      allowNull: true
    },
    cncd2003: {
      type: DataTypes.DATE,
      allowNull: true
    },
    cncd2004: {
      type: DataTypes.DATE,
      allowNull: true
    },
    cncd2005: {
      type: DataTypes.DATE,
      allowNull: true
    },
    cncd2006: {
      type: DataTypes.DATE,
      allowNull: true
    },
    cncd2007: {
      type: DataTypes.DATE,
      allowNull: true
    },
    cncd2008: {
      type: DataTypes.DATE,
      allowNull: true
    },
    cncd2009: {
      type: DataTypes.DATE,
      allowNull: true
    },
    cncd2010: {
      type: DataTypes.DATE,
      allowNull: true
    },
    cncd2011: {
      type: DataTypes.DATE,
      allowNull: true
    },
    cncd2012: {
      type: DataTypes.DATE,
      allowNull: true
    },
    cncd2013: {
      type: DataTypes.DATE,
      allowNull: true
    },
    cncd2014: {
      type: DataTypes.DATE,
      allowNull: true
    },
    cncd2015: {
      type: DataTypes.DATE,
      allowNull: true
    },
    cncm3001: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncm3002: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncm3003: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncm3004: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncm3005: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncm3006: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncm3007: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncm3008: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncm3009: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncm3010: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncn0001: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cncn0002: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cncn0003: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cncn0004: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cncn0005: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cncn0006: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cncn0007: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cncn0008: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cncn0009: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cncn0010: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cncn0011: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cncn0012: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cncn0013: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cncn0014: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cncn0015: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cncn0016: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cncn0017: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cncn0018: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cncn0019: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cncn0020: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cncn0021: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cncn0022: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cncn0023: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cncn0024: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cncn0025: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cncn0026: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cncn0027: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cncn0028: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cncn0029: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cncn0030: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cncn0031: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cncn0032: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cncn0033: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cncn0034: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cncn0035: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cncn0036: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cncn0037: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cncn0038: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cncn0039: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cncn0040: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cncn0041: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cncn0042: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cncn0043: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cncn0044: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cncn0045: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cncn0046: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cncn0047: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cncn0048: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cncn0049: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cncn0050: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cncn0051: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cncn0052: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cncn0053: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cncn0054: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cncn0055: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cncn0056: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cncn0057: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cncn0058: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cncn0059: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cncn0060: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cncn0061: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cncn0062: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cncn0063: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cncn0064: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cncn0065: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cncn0066: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cncn0067: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cncn0068: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cncn0069: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cncn0070: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cncn0071: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cncn0072: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cncn0073: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cncn0074: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cncn0075: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cncn0076: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cncn0077: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cncn0078: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cncn0079: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cncn0080: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cncn0081: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cncn0082: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cncn0083: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cncn0084: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cncn0085: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cncn0086: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cncn0087: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cncn0088: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cncn0089: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cncn0090: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cncn0091: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cncn0092: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cncn0093: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cncn0094: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cncn0095: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cncn0096: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cncn0097: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cncn0098: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cncn0099: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cncn0100: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cncn0101: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cncn0102: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    ddcol01: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ddcol02: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ddcol03: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ddcol04: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ddcol05: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ddcol06: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ddcol07: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ddcol08: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ddcol09: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ddcol10: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ddcol11: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ddcol12: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ddcol13: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ddcol14: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ddcol15: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ddcol16: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncn0103: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    ddcol17: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ddcol18: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ddcol19: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ddcol20: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ddcol21: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ddcol22: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ddcol23: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ddcol24: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ddcol25: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1128: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1129: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1130: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1131: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncn0104: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cncc1132: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1133: {
      type: DataTypes.STRING,
      allowNull: true
    },
    motivocancelamentoinutilizacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1134: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1135: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1136: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncn0105: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cncn0106: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cncn0107: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idnf: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'nf',
        key: 'idnf'
      }
    },
    cncc1137: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1138: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1139: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1140: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1141: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1142: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1143: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1144: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cncc1145: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'formularionf'
  });
};
