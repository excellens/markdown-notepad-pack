/*! @excellens/markdown-notepad-pack 1.0.1 https://github.com/excellens/markdown-notepad-pack#readme @license MIT */
var MarkdownNotepadPack = function(exports, Elementary) {
  "use strict";
  function createCommonjsModule(fn, basedir, module) {
    return module = {
      path: basedir,
      exports: {},
      require: function(path, base) {
        return commonjsRequire(path, base === undefined || base === null ? module.path : base);
      }
    }, fn(module, module.exports), module.exports;
  }
  function getAugmentedNamespace(n) {
    if (n.__esModule) return n;
    var a = Object.defineProperty({}, "__esModule", {
      value: true
    });
    Object.keys(n).forEach((function(k) {
      var d = Object.getOwnPropertyDescriptor(n, k);
      Object.defineProperty(a, k, d.get ? d : {
        enumerable: true,
        get: function() {
          return n[k];
        }
      });
    }));
    return a;
  }
  function commonjsRequire() {
    throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
  }
  var Aacute = "\xc1";
  var aacute = "\xe1";
  var Abreve = "\u0102";
  var abreve = "\u0103";
  var ac = "\u223e";
  var acd = "\u223f";
  var acE = "\u223e\u0333";
  var Acirc = "\xc2";
  var acirc = "\xe2";
  var acute = "\xb4";
  var Acy = "\u0410";
  var acy = "\u0430";
  var AElig = "\xc6";
  var aelig = "\xe6";
  var af = "\u2061";
  var Afr = "\ud835\udd04";
  var afr = "\ud835\udd1e";
  var Agrave = "\xc0";
  var agrave = "\xe0";
  var alefsym = "\u2135";
  var aleph = "\u2135";
  var Alpha = "\u0391";
  var alpha = "\u03b1";
  var Amacr = "\u0100";
  var amacr = "\u0101";
  var amalg = "\u2a3f";
  var amp = "&";
  var AMP = "&";
  var andand = "\u2a55";
  var And = "\u2a53";
  var and = "\u2227";
  var andd = "\u2a5c";
  var andslope = "\u2a58";
  var andv = "\u2a5a";
  var ang = "\u2220";
  var ange = "\u29a4";
  var angle = "\u2220";
  var angmsdaa = "\u29a8";
  var angmsdab = "\u29a9";
  var angmsdac = "\u29aa";
  var angmsdad = "\u29ab";
  var angmsdae = "\u29ac";
  var angmsdaf = "\u29ad";
  var angmsdag = "\u29ae";
  var angmsdah = "\u29af";
  var angmsd = "\u2221";
  var angrt = "\u221f";
  var angrtvb = "\u22be";
  var angrtvbd = "\u299d";
  var angsph = "\u2222";
  var angst = "\xc5";
  var angzarr = "\u237c";
  var Aogon = "\u0104";
  var aogon = "\u0105";
  var Aopf = "\ud835\udd38";
  var aopf = "\ud835\udd52";
  var apacir = "\u2a6f";
  var ap = "\u2248";
  var apE = "\u2a70";
  var ape = "\u224a";
  var apid = "\u224b";
  var apos = "'";
  var ApplyFunction = "\u2061";
  var approx = "\u2248";
  var approxeq = "\u224a";
  var Aring = "\xc5";
  var aring = "\xe5";
  var Ascr = "\ud835\udc9c";
  var ascr = "\ud835\udcb6";
  var Assign = "\u2254";
  var ast = "*";
  var asymp = "\u2248";
  var asympeq = "\u224d";
  var Atilde = "\xc3";
  var atilde = "\xe3";
  var Auml = "\xc4";
  var auml = "\xe4";
  var awconint = "\u2233";
  var awint = "\u2a11";
  var backcong = "\u224c";
  var backepsilon = "\u03f6";
  var backprime = "\u2035";
  var backsim = "\u223d";
  var backsimeq = "\u22cd";
  var Backslash = "\u2216";
  var Barv = "\u2ae7";
  var barvee = "\u22bd";
  var barwed = "\u2305";
  var Barwed = "\u2306";
  var barwedge = "\u2305";
  var bbrk = "\u23b5";
  var bbrktbrk = "\u23b6";
  var bcong = "\u224c";
  var Bcy = "\u0411";
  var bcy = "\u0431";
  var bdquo = "\u201e";
  var becaus = "\u2235";
  var because = "\u2235";
  var Because = "\u2235";
  var bemptyv = "\u29b0";
  var bepsi = "\u03f6";
  var bernou = "\u212c";
  var Bernoullis = "\u212c";
  var Beta = "\u0392";
  var beta = "\u03b2";
  var beth = "\u2136";
  var between = "\u226c";
  var Bfr = "\ud835\udd05";
  var bfr = "\ud835\udd1f";
  var bigcap = "\u22c2";
  var bigcirc = "\u25ef";
  var bigcup = "\u22c3";
  var bigodot = "\u2a00";
  var bigoplus = "\u2a01";
  var bigotimes = "\u2a02";
  var bigsqcup = "\u2a06";
  var bigstar = "\u2605";
  var bigtriangledown = "\u25bd";
  var bigtriangleup = "\u25b3";
  var biguplus = "\u2a04";
  var bigvee = "\u22c1";
  var bigwedge = "\u22c0";
  var bkarow = "\u290d";
  var blacklozenge = "\u29eb";
  var blacksquare = "\u25aa";
  var blacktriangle = "\u25b4";
  var blacktriangledown = "\u25be";
  var blacktriangleleft = "\u25c2";
  var blacktriangleright = "\u25b8";
  var blank = "\u2423";
  var blk12 = "\u2592";
  var blk14 = "\u2591";
  var blk34 = "\u2593";
  var block = "\u2588";
  var bne = "=\u20e5";
  var bnequiv = "\u2261\u20e5";
  var bNot = "\u2aed";
  var bnot = "\u2310";
  var Bopf = "\ud835\udd39";
  var bopf = "\ud835\udd53";
  var bot = "\u22a5";
  var bottom = "\u22a5";
  var bowtie = "\u22c8";
  var boxbox = "\u29c9";
  var boxdl = "\u2510";
  var boxdL = "\u2555";
  var boxDl = "\u2556";
  var boxDL = "\u2557";
  var boxdr = "\u250c";
  var boxdR = "\u2552";
  var boxDr = "\u2553";
  var boxDR = "\u2554";
  var boxh = "\u2500";
  var boxH = "\u2550";
  var boxhd = "\u252c";
  var boxHd = "\u2564";
  var boxhD = "\u2565";
  var boxHD = "\u2566";
  var boxhu = "\u2534";
  var boxHu = "\u2567";
  var boxhU = "\u2568";
  var boxHU = "\u2569";
  var boxminus = "\u229f";
  var boxplus = "\u229e";
  var boxtimes = "\u22a0";
  var boxul = "\u2518";
  var boxuL = "\u255b";
  var boxUl = "\u255c";
  var boxUL = "\u255d";
  var boxur = "\u2514";
  var boxuR = "\u2558";
  var boxUr = "\u2559";
  var boxUR = "\u255a";
  var boxv = "\u2502";
  var boxV = "\u2551";
  var boxvh = "\u253c";
  var boxvH = "\u256a";
  var boxVh = "\u256b";
  var boxVH = "\u256c";
  var boxvl = "\u2524";
  var boxvL = "\u2561";
  var boxVl = "\u2562";
  var boxVL = "\u2563";
  var boxvr = "\u251c";
  var boxvR = "\u255e";
  var boxVr = "\u255f";
  var boxVR = "\u2560";
  var bprime = "\u2035";
  var breve = "\u02d8";
  var Breve = "\u02d8";
  var brvbar = "\xa6";
  var bscr = "\ud835\udcb7";
  var Bscr = "\u212c";
  var bsemi = "\u204f";
  var bsim = "\u223d";
  var bsime = "\u22cd";
  var bsolb = "\u29c5";
  var bsol = "\\";
  var bsolhsub = "\u27c8";
  var bull = "\u2022";
  var bullet = "\u2022";
  var bump = "\u224e";
  var bumpE = "\u2aae";
  var bumpe = "\u224f";
  var Bumpeq = "\u224e";
  var bumpeq = "\u224f";
  var Cacute = "\u0106";
  var cacute = "\u0107";
  var capand = "\u2a44";
  var capbrcup = "\u2a49";
  var capcap = "\u2a4b";
  var cap = "\u2229";
  var Cap = "\u22d2";
  var capcup = "\u2a47";
  var capdot = "\u2a40";
  var CapitalDifferentialD = "\u2145";
  var caps = "\u2229\ufe00";
  var caret = "\u2041";
  var caron = "\u02c7";
  var Cayleys = "\u212d";
  var ccaps = "\u2a4d";
  var Ccaron = "\u010c";
  var ccaron = "\u010d";
  var Ccedil = "\xc7";
  var ccedil = "\xe7";
  var Ccirc = "\u0108";
  var ccirc = "\u0109";
  var Cconint = "\u2230";
  var ccups = "\u2a4c";
  var ccupssm = "\u2a50";
  var Cdot = "\u010a";
  var cdot = "\u010b";
  var cedil = "\xb8";
  var Cedilla = "\xb8";
  var cemptyv = "\u29b2";
  var cent = "\xa2";
  var centerdot = "\xb7";
  var CenterDot = "\xb7";
  var cfr = "\ud835\udd20";
  var Cfr = "\u212d";
  var CHcy = "\u0427";
  var chcy = "\u0447";
  var check = "\u2713";
  var checkmark = "\u2713";
  var Chi = "\u03a7";
  var chi = "\u03c7";
  var circ = "\u02c6";
  var circeq = "\u2257";
  var circlearrowleft = "\u21ba";
  var circlearrowright = "\u21bb";
  var circledast = "\u229b";
  var circledcirc = "\u229a";
  var circleddash = "\u229d";
  var CircleDot = "\u2299";
  var circledR = "\xae";
  var circledS = "\u24c8";
  var CircleMinus = "\u2296";
  var CirclePlus = "\u2295";
  var CircleTimes = "\u2297";
  var cir = "\u25cb";
  var cirE = "\u29c3";
  var cire = "\u2257";
  var cirfnint = "\u2a10";
  var cirmid = "\u2aef";
  var cirscir = "\u29c2";
  var ClockwiseContourIntegral = "\u2232";
  var CloseCurlyDoubleQuote = "\u201d";
  var CloseCurlyQuote = "\u2019";
  var clubs = "\u2663";
  var clubsuit = "\u2663";
  var colon = ":";
  var Colon = "\u2237";
  var Colone = "\u2a74";
  var colone = "\u2254";
  var coloneq = "\u2254";
  var comma = ",";
  var commat = "@";
  var comp = "\u2201";
  var compfn = "\u2218";
  var complement = "\u2201";
  var complexes = "\u2102";
  var cong = "\u2245";
  var congdot = "\u2a6d";
  var Congruent = "\u2261";
  var conint = "\u222e";
  var Conint = "\u222f";
  var ContourIntegral = "\u222e";
  var copf = "\ud835\udd54";
  var Copf = "\u2102";
  var coprod = "\u2210";
  var Coproduct = "\u2210";
  var copy = "\xa9";
  var COPY = "\xa9";
  var copysr = "\u2117";
  var CounterClockwiseContourIntegral = "\u2233";
  var crarr = "\u21b5";
  var cross = "\u2717";
  var Cross = "\u2a2f";
  var Cscr = "\ud835\udc9e";
  var cscr = "\ud835\udcb8";
  var csub = "\u2acf";
  var csube = "\u2ad1";
  var csup = "\u2ad0";
  var csupe = "\u2ad2";
  var ctdot = "\u22ef";
  var cudarrl = "\u2938";
  var cudarrr = "\u2935";
  var cuepr = "\u22de";
  var cuesc = "\u22df";
  var cularr = "\u21b6";
  var cularrp = "\u293d";
  var cupbrcap = "\u2a48";
  var cupcap = "\u2a46";
  var CupCap = "\u224d";
  var cup = "\u222a";
  var Cup = "\u22d3";
  var cupcup = "\u2a4a";
  var cupdot = "\u228d";
  var cupor = "\u2a45";
  var cups = "\u222a\ufe00";
  var curarr = "\u21b7";
  var curarrm = "\u293c";
  var curlyeqprec = "\u22de";
  var curlyeqsucc = "\u22df";
  var curlyvee = "\u22ce";
  var curlywedge = "\u22cf";
  var curren = "\xa4";
  var curvearrowleft = "\u21b6";
  var curvearrowright = "\u21b7";
  var cuvee = "\u22ce";
  var cuwed = "\u22cf";
  var cwconint = "\u2232";
  var cwint = "\u2231";
  var cylcty = "\u232d";
  var dagger = "\u2020";
  var Dagger = "\u2021";
  var daleth = "\u2138";
  var darr = "\u2193";
  var Darr = "\u21a1";
  var dArr = "\u21d3";
  var dash = "\u2010";
  var Dashv = "\u2ae4";
  var dashv = "\u22a3";
  var dbkarow = "\u290f";
  var dblac = "\u02dd";
  var Dcaron = "\u010e";
  var dcaron = "\u010f";
  var Dcy = "\u0414";
  var dcy = "\u0434";
  var ddagger = "\u2021";
  var ddarr = "\u21ca";
  var DD = "\u2145";
  var dd = "\u2146";
  var DDotrahd = "\u2911";
  var ddotseq = "\u2a77";
  var deg = "\xb0";
  var Del = "\u2207";
  var Delta = "\u0394";
  var delta = "\u03b4";
  var demptyv = "\u29b1";
  var dfisht = "\u297f";
  var Dfr = "\ud835\udd07";
  var dfr = "\ud835\udd21";
  var dHar = "\u2965";
  var dharl = "\u21c3";
  var dharr = "\u21c2";
  var DiacriticalAcute = "\xb4";
  var DiacriticalDot = "\u02d9";
  var DiacriticalDoubleAcute = "\u02dd";
  var DiacriticalGrave = "`";
  var DiacriticalTilde = "\u02dc";
  var diam = "\u22c4";
  var diamond = "\u22c4";
  var Diamond = "\u22c4";
  var diamondsuit = "\u2666";
  var diams = "\u2666";
  var die = "\xa8";
  var DifferentialD = "\u2146";
  var digamma = "\u03dd";
  var disin = "\u22f2";
  var div = "\xf7";
  var divide = "\xf7";
  var divideontimes = "\u22c7";
  var divonx = "\u22c7";
  var DJcy = "\u0402";
  var djcy = "\u0452";
  var dlcorn = "\u231e";
  var dlcrop = "\u230d";
  var dollar = "$";
  var Dopf = "\ud835\udd3b";
  var dopf = "\ud835\udd55";
  var Dot = "\xa8";
  var dot = "\u02d9";
  var DotDot = "\u20dc";
  var doteq = "\u2250";
  var doteqdot = "\u2251";
  var DotEqual = "\u2250";
  var dotminus = "\u2238";
  var dotplus = "\u2214";
  var dotsquare = "\u22a1";
  var doublebarwedge = "\u2306";
  var DoubleContourIntegral = "\u222f";
  var DoubleDot = "\xa8";
  var DoubleDownArrow = "\u21d3";
  var DoubleLeftArrow = "\u21d0";
  var DoubleLeftRightArrow = "\u21d4";
  var DoubleLeftTee = "\u2ae4";
  var DoubleLongLeftArrow = "\u27f8";
  var DoubleLongLeftRightArrow = "\u27fa";
  var DoubleLongRightArrow = "\u27f9";
  var DoubleRightArrow = "\u21d2";
  var DoubleRightTee = "\u22a8";
  var DoubleUpArrow = "\u21d1";
  var DoubleUpDownArrow = "\u21d5";
  var DoubleVerticalBar = "\u2225";
  var DownArrowBar = "\u2913";
  var downarrow = "\u2193";
  var DownArrow = "\u2193";
  var Downarrow = "\u21d3";
  var DownArrowUpArrow = "\u21f5";
  var DownBreve = "\u0311";
  var downdownarrows = "\u21ca";
  var downharpoonleft = "\u21c3";
  var downharpoonright = "\u21c2";
  var DownLeftRightVector = "\u2950";
  var DownLeftTeeVector = "\u295e";
  var DownLeftVectorBar = "\u2956";
  var DownLeftVector = "\u21bd";
  var DownRightTeeVector = "\u295f";
  var DownRightVectorBar = "\u2957";
  var DownRightVector = "\u21c1";
  var DownTeeArrow = "\u21a7";
  var DownTee = "\u22a4";
  var drbkarow = "\u2910";
  var drcorn = "\u231f";
  var drcrop = "\u230c";
  var Dscr = "\ud835\udc9f";
  var dscr = "\ud835\udcb9";
  var DScy = "\u0405";
  var dscy = "\u0455";
  var dsol = "\u29f6";
  var Dstrok = "\u0110";
  var dstrok = "\u0111";
  var dtdot = "\u22f1";
  var dtri = "\u25bf";
  var dtrif = "\u25be";
  var duarr = "\u21f5";
  var duhar = "\u296f";
  var dwangle = "\u29a6";
  var DZcy = "\u040f";
  var dzcy = "\u045f";
  var dzigrarr = "\u27ff";
  var Eacute = "\xc9";
  var eacute = "\xe9";
  var easter = "\u2a6e";
  var Ecaron = "\u011a";
  var ecaron = "\u011b";
  var Ecirc = "\xca";
  var ecirc = "\xea";
  var ecir = "\u2256";
  var ecolon = "\u2255";
  var Ecy = "\u042d";
  var ecy = "\u044d";
  var eDDot = "\u2a77";
  var Edot = "\u0116";
  var edot = "\u0117";
  var eDot = "\u2251";
  var ee = "\u2147";
  var efDot = "\u2252";
  var Efr = "\ud835\udd08";
  var efr = "\ud835\udd22";
  var eg = "\u2a9a";
  var Egrave = "\xc8";
  var egrave = "\xe8";
  var egs = "\u2a96";
  var egsdot = "\u2a98";
  var el = "\u2a99";
  var Element = "\u2208";
  var elinters = "\u23e7";
  var ell = "\u2113";
  var els = "\u2a95";
  var elsdot = "\u2a97";
  var Emacr = "\u0112";
  var emacr = "\u0113";
  var empty = "\u2205";
  var emptyset = "\u2205";
  var EmptySmallSquare = "\u25fb";
  var emptyv = "\u2205";
  var EmptyVerySmallSquare = "\u25ab";
  var emsp13 = "\u2004";
  var emsp14 = "\u2005";
  var emsp = "\u2003";
  var ENG = "\u014a";
  var eng = "\u014b";
  var ensp = "\u2002";
  var Eogon = "\u0118";
  var eogon = "\u0119";
  var Eopf = "\ud835\udd3c";
  var eopf = "\ud835\udd56";
  var epar = "\u22d5";
  var eparsl = "\u29e3";
  var eplus = "\u2a71";
  var epsi = "\u03b5";
  var Epsilon = "\u0395";
  var epsilon = "\u03b5";
  var epsiv = "\u03f5";
  var eqcirc = "\u2256";
  var eqcolon = "\u2255";
  var eqsim = "\u2242";
  var eqslantgtr = "\u2a96";
  var eqslantless = "\u2a95";
  var Equal = "\u2a75";
  var equals = "=";
  var EqualTilde = "\u2242";
  var equest = "\u225f";
  var Equilibrium = "\u21cc";
  var equiv = "\u2261";
  var equivDD = "\u2a78";
  var eqvparsl = "\u29e5";
  var erarr = "\u2971";
  var erDot = "\u2253";
  var escr = "\u212f";
  var Escr = "\u2130";
  var esdot = "\u2250";
  var Esim = "\u2a73";
  var esim = "\u2242";
  var Eta = "\u0397";
  var eta = "\u03b7";
  var ETH = "\xd0";
  var eth = "\xf0";
  var Euml = "\xcb";
  var euml = "\xeb";
  var euro = "\u20ac";
  var excl = "!";
  var exist = "\u2203";
  var Exists = "\u2203";
  var expectation = "\u2130";
  var exponentiale = "\u2147";
  var ExponentialE = "\u2147";
  var fallingdotseq = "\u2252";
  var Fcy = "\u0424";
  var fcy = "\u0444";
  var female = "\u2640";
  var ffilig = "\ufb03";
  var fflig = "\ufb00";
  var ffllig = "\ufb04";
  var Ffr = "\ud835\udd09";
  var ffr = "\ud835\udd23";
  var filig = "\ufb01";
  var FilledSmallSquare = "\u25fc";
  var FilledVerySmallSquare = "\u25aa";
  var fjlig = "fj";
  var flat = "\u266d";
  var fllig = "\ufb02";
  var fltns = "\u25b1";
  var fnof = "\u0192";
  var Fopf = "\ud835\udd3d";
  var fopf = "\ud835\udd57";
  var forall = "\u2200";
  var ForAll = "\u2200";
  var fork = "\u22d4";
  var forkv = "\u2ad9";
  var Fouriertrf = "\u2131";
  var fpartint = "\u2a0d";
  var frac12 = "\xbd";
  var frac13 = "\u2153";
  var frac14 = "\xbc";
  var frac15 = "\u2155";
  var frac16 = "\u2159";
  var frac18 = "\u215b";
  var frac23 = "\u2154";
  var frac25 = "\u2156";
  var frac34 = "\xbe";
  var frac35 = "\u2157";
  var frac38 = "\u215c";
  var frac45 = "\u2158";
  var frac56 = "\u215a";
  var frac58 = "\u215d";
  var frac78 = "\u215e";
  var frasl = "\u2044";
  var frown = "\u2322";
  var fscr = "\ud835\udcbb";
  var Fscr = "\u2131";
  var gacute = "\u01f5";
  var Gamma = "\u0393";
  var gamma = "\u03b3";
  var Gammad = "\u03dc";
  var gammad = "\u03dd";
  var gap = "\u2a86";
  var Gbreve = "\u011e";
  var gbreve = "\u011f";
  var Gcedil = "\u0122";
  var Gcirc = "\u011c";
  var gcirc = "\u011d";
  var Gcy = "\u0413";
  var gcy = "\u0433";
  var Gdot = "\u0120";
  var gdot = "\u0121";
  var ge = "\u2265";
  var gE = "\u2267";
  var gEl = "\u2a8c";
  var gel = "\u22db";
  var geq = "\u2265";
  var geqq = "\u2267";
  var geqslant = "\u2a7e";
  var gescc = "\u2aa9";
  var ges = "\u2a7e";
  var gesdot = "\u2a80";
  var gesdoto = "\u2a82";
  var gesdotol = "\u2a84";
  var gesl = "\u22db\ufe00";
  var gesles = "\u2a94";
  var Gfr = "\ud835\udd0a";
  var gfr = "\ud835\udd24";
  var gg = "\u226b";
  var Gg = "\u22d9";
  var ggg = "\u22d9";
  var gimel = "\u2137";
  var GJcy = "\u0403";
  var gjcy = "\u0453";
  var gla = "\u2aa5";
  var gl = "\u2277";
  var glE = "\u2a92";
  var glj = "\u2aa4";
  var gnap = "\u2a8a";
  var gnapprox = "\u2a8a";
  var gne = "\u2a88";
  var gnE = "\u2269";
  var gneq = "\u2a88";
  var gneqq = "\u2269";
  var gnsim = "\u22e7";
  var Gopf = "\ud835\udd3e";
  var gopf = "\ud835\udd58";
  var grave = "`";
  var GreaterEqual = "\u2265";
  var GreaterEqualLess = "\u22db";
  var GreaterFullEqual = "\u2267";
  var GreaterGreater = "\u2aa2";
  var GreaterLess = "\u2277";
  var GreaterSlantEqual = "\u2a7e";
  var GreaterTilde = "\u2273";
  var Gscr = "\ud835\udca2";
  var gscr = "\u210a";
  var gsim = "\u2273";
  var gsime = "\u2a8e";
  var gsiml = "\u2a90";
  var gtcc = "\u2aa7";
  var gtcir = "\u2a7a";
  var gt = ">";
  var GT = ">";
  var Gt = "\u226b";
  var gtdot = "\u22d7";
  var gtlPar = "\u2995";
  var gtquest = "\u2a7c";
  var gtrapprox = "\u2a86";
  var gtrarr = "\u2978";
  var gtrdot = "\u22d7";
  var gtreqless = "\u22db";
  var gtreqqless = "\u2a8c";
  var gtrless = "\u2277";
  var gtrsim = "\u2273";
  var gvertneqq = "\u2269\ufe00";
  var gvnE = "\u2269\ufe00";
  var Hacek = "\u02c7";
  var hairsp = "\u200a";
  var half = "\xbd";
  var hamilt = "\u210b";
  var HARDcy = "\u042a";
  var hardcy = "\u044a";
  var harrcir = "\u2948";
  var harr = "\u2194";
  var hArr = "\u21d4";
  var harrw = "\u21ad";
  var Hat = "^";
  var hbar = "\u210f";
  var Hcirc = "\u0124";
  var hcirc = "\u0125";
  var hearts = "\u2665";
  var heartsuit = "\u2665";
  var hellip = "\u2026";
  var hercon = "\u22b9";
  var hfr = "\ud835\udd25";
  var Hfr = "\u210c";
  var HilbertSpace = "\u210b";
  var hksearow = "\u2925";
  var hkswarow = "\u2926";
  var hoarr = "\u21ff";
  var homtht = "\u223b";
  var hookleftarrow = "\u21a9";
  var hookrightarrow = "\u21aa";
  var hopf = "\ud835\udd59";
  var Hopf = "\u210d";
  var horbar = "\u2015";
  var HorizontalLine = "\u2500";
  var hscr = "\ud835\udcbd";
  var Hscr = "\u210b";
  var hslash = "\u210f";
  var Hstrok = "\u0126";
  var hstrok = "\u0127";
  var HumpDownHump = "\u224e";
  var HumpEqual = "\u224f";
  var hybull = "\u2043";
  var hyphen = "\u2010";
  var Iacute = "\xcd";
  var iacute = "\xed";
  var ic = "\u2063";
  var Icirc = "\xce";
  var icirc = "\xee";
  var Icy = "\u0418";
  var icy = "\u0438";
  var Idot = "\u0130";
  var IEcy = "\u0415";
  var iecy = "\u0435";
  var iexcl = "\xa1";
  var iff = "\u21d4";
  var ifr = "\ud835\udd26";
  var Ifr = "\u2111";
  var Igrave = "\xcc";
  var igrave = "\xec";
  var ii = "\u2148";
  var iiiint = "\u2a0c";
  var iiint = "\u222d";
  var iinfin = "\u29dc";
  var iiota = "\u2129";
  var IJlig = "\u0132";
  var ijlig = "\u0133";
  var Imacr = "\u012a";
  var imacr = "\u012b";
  var image = "\u2111";
  var ImaginaryI = "\u2148";
  var imagline = "\u2110";
  var imagpart = "\u2111";
  var imath = "\u0131";
  var Im = "\u2111";
  var imof = "\u22b7";
  var imped = "\u01b5";
  var Implies = "\u21d2";
  var incare = "\u2105";
  var infin = "\u221e";
  var infintie = "\u29dd";
  var inodot = "\u0131";
  var intcal = "\u22ba";
  var int = "\u222b";
  var Int = "\u222c";
  var integers = "\u2124";
  var Integral = "\u222b";
  var intercal = "\u22ba";
  var Intersection = "\u22c2";
  var intlarhk = "\u2a17";
  var intprod = "\u2a3c";
  var InvisibleComma = "\u2063";
  var InvisibleTimes = "\u2062";
  var IOcy = "\u0401";
  var iocy = "\u0451";
  var Iogon = "\u012e";
  var iogon = "\u012f";
  var Iopf = "\ud835\udd40";
  var iopf = "\ud835\udd5a";
  var Iota = "\u0399";
  var iota = "\u03b9";
  var iprod = "\u2a3c";
  var iquest = "\xbf";
  var iscr = "\ud835\udcbe";
  var Iscr = "\u2110";
  var isin = "\u2208";
  var isindot = "\u22f5";
  var isinE = "\u22f9";
  var isins = "\u22f4";
  var isinsv = "\u22f3";
  var isinv = "\u2208";
  var it = "\u2062";
  var Itilde = "\u0128";
  var itilde = "\u0129";
  var Iukcy = "\u0406";
  var iukcy = "\u0456";
  var Iuml = "\xcf";
  var iuml = "\xef";
  var Jcirc = "\u0134";
  var jcirc = "\u0135";
  var Jcy = "\u0419";
  var jcy = "\u0439";
  var Jfr = "\ud835\udd0d";
  var jfr = "\ud835\udd27";
  var jmath = "\u0237";
  var Jopf = "\ud835\udd41";
  var jopf = "\ud835\udd5b";
  var Jscr = "\ud835\udca5";
  var jscr = "\ud835\udcbf";
  var Jsercy = "\u0408";
  var jsercy = "\u0458";
  var Jukcy = "\u0404";
  var jukcy = "\u0454";
  var Kappa = "\u039a";
  var kappa = "\u03ba";
  var kappav = "\u03f0";
  var Kcedil = "\u0136";
  var kcedil = "\u0137";
  var Kcy = "\u041a";
  var kcy = "\u043a";
  var Kfr = "\ud835\udd0e";
  var kfr = "\ud835\udd28";
  var kgreen = "\u0138";
  var KHcy = "\u0425";
  var khcy = "\u0445";
  var KJcy = "\u040c";
  var kjcy = "\u045c";
  var Kopf = "\ud835\udd42";
  var kopf = "\ud835\udd5c";
  var Kscr = "\ud835\udca6";
  var kscr = "\ud835\udcc0";
  var lAarr = "\u21da";
  var Lacute = "\u0139";
  var lacute = "\u013a";
  var laemptyv = "\u29b4";
  var lagran = "\u2112";
  var Lambda = "\u039b";
  var lambda = "\u03bb";
  var lang = "\u27e8";
  var Lang = "\u27ea";
  var langd = "\u2991";
  var langle = "\u27e8";
  var lap = "\u2a85";
  var Laplacetrf = "\u2112";
  var laquo = "\xab";
  var larrb = "\u21e4";
  var larrbfs = "\u291f";
  var larr = "\u2190";
  var Larr = "\u219e";
  var lArr = "\u21d0";
  var larrfs = "\u291d";
  var larrhk = "\u21a9";
  var larrlp = "\u21ab";
  var larrpl = "\u2939";
  var larrsim = "\u2973";
  var larrtl = "\u21a2";
  var latail = "\u2919";
  var lAtail = "\u291b";
  var lat = "\u2aab";
  var late = "\u2aad";
  var lates = "\u2aad\ufe00";
  var lbarr = "\u290c";
  var lBarr = "\u290e";
  var lbbrk = "\u2772";
  var lbrace = "{";
  var lbrack = "[";
  var lbrke = "\u298b";
  var lbrksld = "\u298f";
  var lbrkslu = "\u298d";
  var Lcaron = "\u013d";
  var lcaron = "\u013e";
  var Lcedil = "\u013b";
  var lcedil = "\u013c";
  var lceil = "\u2308";
  var lcub = "{";
  var Lcy = "\u041b";
  var lcy = "\u043b";
  var ldca = "\u2936";
  var ldquo = "\u201c";
  var ldquor = "\u201e";
  var ldrdhar = "\u2967";
  var ldrushar = "\u294b";
  var ldsh = "\u21b2";
  var le = "\u2264";
  var lE = "\u2266";
  var LeftAngleBracket = "\u27e8";
  var LeftArrowBar = "\u21e4";
  var leftarrow = "\u2190";
  var LeftArrow = "\u2190";
  var Leftarrow = "\u21d0";
  var LeftArrowRightArrow = "\u21c6";
  var leftarrowtail = "\u21a2";
  var LeftCeiling = "\u2308";
  var LeftDoubleBracket = "\u27e6";
  var LeftDownTeeVector = "\u2961";
  var LeftDownVectorBar = "\u2959";
  var LeftDownVector = "\u21c3";
  var LeftFloor = "\u230a";
  var leftharpoondown = "\u21bd";
  var leftharpoonup = "\u21bc";
  var leftleftarrows = "\u21c7";
  var leftrightarrow = "\u2194";
  var LeftRightArrow = "\u2194";
  var Leftrightarrow = "\u21d4";
  var leftrightarrows = "\u21c6";
  var leftrightharpoons = "\u21cb";
  var leftrightsquigarrow = "\u21ad";
  var LeftRightVector = "\u294e";
  var LeftTeeArrow = "\u21a4";
  var LeftTee = "\u22a3";
  var LeftTeeVector = "\u295a";
  var leftthreetimes = "\u22cb";
  var LeftTriangleBar = "\u29cf";
  var LeftTriangle = "\u22b2";
  var LeftTriangleEqual = "\u22b4";
  var LeftUpDownVector = "\u2951";
  var LeftUpTeeVector = "\u2960";
  var LeftUpVectorBar = "\u2958";
  var LeftUpVector = "\u21bf";
  var LeftVectorBar = "\u2952";
  var LeftVector = "\u21bc";
  var lEg = "\u2a8b";
  var leg = "\u22da";
  var leq = "\u2264";
  var leqq = "\u2266";
  var leqslant = "\u2a7d";
  var lescc = "\u2aa8";
  var les = "\u2a7d";
  var lesdot = "\u2a7f";
  var lesdoto = "\u2a81";
  var lesdotor = "\u2a83";
  var lesg = "\u22da\ufe00";
  var lesges = "\u2a93";
  var lessapprox = "\u2a85";
  var lessdot = "\u22d6";
  var lesseqgtr = "\u22da";
  var lesseqqgtr = "\u2a8b";
  var LessEqualGreater = "\u22da";
  var LessFullEqual = "\u2266";
  var LessGreater = "\u2276";
  var lessgtr = "\u2276";
  var LessLess = "\u2aa1";
  var lesssim = "\u2272";
  var LessSlantEqual = "\u2a7d";
  var LessTilde = "\u2272";
  var lfisht = "\u297c";
  var lfloor = "\u230a";
  var Lfr = "\ud835\udd0f";
  var lfr = "\ud835\udd29";
  var lg = "\u2276";
  var lgE = "\u2a91";
  var lHar = "\u2962";
  var lhard = "\u21bd";
  var lharu = "\u21bc";
  var lharul = "\u296a";
  var lhblk = "\u2584";
  var LJcy = "\u0409";
  var ljcy = "\u0459";
  var llarr = "\u21c7";
  var ll = "\u226a";
  var Ll = "\u22d8";
  var llcorner = "\u231e";
  var Lleftarrow = "\u21da";
  var llhard = "\u296b";
  var lltri = "\u25fa";
  var Lmidot = "\u013f";
  var lmidot = "\u0140";
  var lmoustache = "\u23b0";
  var lmoust = "\u23b0";
  var lnap = "\u2a89";
  var lnapprox = "\u2a89";
  var lne = "\u2a87";
  var lnE = "\u2268";
  var lneq = "\u2a87";
  var lneqq = "\u2268";
  var lnsim = "\u22e6";
  var loang = "\u27ec";
  var loarr = "\u21fd";
  var lobrk = "\u27e6";
  var longleftarrow = "\u27f5";
  var LongLeftArrow = "\u27f5";
  var Longleftarrow = "\u27f8";
  var longleftrightarrow = "\u27f7";
  var LongLeftRightArrow = "\u27f7";
  var Longleftrightarrow = "\u27fa";
  var longmapsto = "\u27fc";
  var longrightarrow = "\u27f6";
  var LongRightArrow = "\u27f6";
  var Longrightarrow = "\u27f9";
  var looparrowleft = "\u21ab";
  var looparrowright = "\u21ac";
  var lopar = "\u2985";
  var Lopf = "\ud835\udd43";
  var lopf = "\ud835\udd5d";
  var loplus = "\u2a2d";
  var lotimes = "\u2a34";
  var lowast = "\u2217";
  var lowbar = "_";
  var LowerLeftArrow = "\u2199";
  var LowerRightArrow = "\u2198";
  var loz = "\u25ca";
  var lozenge = "\u25ca";
  var lozf = "\u29eb";
  var lpar = "(";
  var lparlt = "\u2993";
  var lrarr = "\u21c6";
  var lrcorner = "\u231f";
  var lrhar = "\u21cb";
  var lrhard = "\u296d";
  var lrm = "\u200e";
  var lrtri = "\u22bf";
  var lsaquo = "\u2039";
  var lscr = "\ud835\udcc1";
  var Lscr = "\u2112";
  var lsh = "\u21b0";
  var Lsh = "\u21b0";
  var lsim = "\u2272";
  var lsime = "\u2a8d";
  var lsimg = "\u2a8f";
  var lsqb = "[";
  var lsquo = "\u2018";
  var lsquor = "\u201a";
  var Lstrok = "\u0141";
  var lstrok = "\u0142";
  var ltcc = "\u2aa6";
  var ltcir = "\u2a79";
  var lt = "<";
  var LT = "<";
  var Lt = "\u226a";
  var ltdot = "\u22d6";
  var lthree = "\u22cb";
  var ltimes = "\u22c9";
  var ltlarr = "\u2976";
  var ltquest = "\u2a7b";
  var ltri = "\u25c3";
  var ltrie = "\u22b4";
  var ltrif = "\u25c2";
  var ltrPar = "\u2996";
  var lurdshar = "\u294a";
  var luruhar = "\u2966";
  var lvertneqq = "\u2268\ufe00";
  var lvnE = "\u2268\ufe00";
  var macr = "\xaf";
  var male = "\u2642";
  var malt = "\u2720";
  var maltese = "\u2720";
  var map = "\u21a6";
  var mapsto = "\u21a6";
  var mapstodown = "\u21a7";
  var mapstoleft = "\u21a4";
  var mapstoup = "\u21a5";
  var marker = "\u25ae";
  var mcomma = "\u2a29";
  var Mcy = "\u041c";
  var mcy = "\u043c";
  var mdash = "\u2014";
  var mDDot = "\u223a";
  var measuredangle = "\u2221";
  var MediumSpace = "\u205f";
  var Mellintrf = "\u2133";
  var Mfr = "\ud835\udd10";
  var mfr = "\ud835\udd2a";
  var mho = "\u2127";
  var micro = "\xb5";
  var midast = "*";
  var midcir = "\u2af0";
  var mid = "\u2223";
  var middot = "\xb7";
  var minusb = "\u229f";
  var minus = "\u2212";
  var minusd = "\u2238";
  var minusdu = "\u2a2a";
  var MinusPlus = "\u2213";
  var mlcp = "\u2adb";
  var mldr = "\u2026";
  var mnplus = "\u2213";
  var models = "\u22a7";
  var Mopf = "\ud835\udd44";
  var mopf = "\ud835\udd5e";
  var mp = "\u2213";
  var mscr = "\ud835\udcc2";
  var Mscr = "\u2133";
  var mstpos = "\u223e";
  var Mu = "\u039c";
  var mu = "\u03bc";
  var multimap = "\u22b8";
  var mumap = "\u22b8";
  var nabla = "\u2207";
  var Nacute = "\u0143";
  var nacute = "\u0144";
  var nang = "\u2220\u20d2";
  var nap = "\u2249";
  var napE = "\u2a70\u0338";
  var napid = "\u224b\u0338";
  var napos = "\u0149";
  var napprox = "\u2249";
  var natural = "\u266e";
  var naturals = "\u2115";
  var natur = "\u266e";
  var nbsp = "\xa0";
  var nbump = "\u224e\u0338";
  var nbumpe = "\u224f\u0338";
  var ncap = "\u2a43";
  var Ncaron = "\u0147";
  var ncaron = "\u0148";
  var Ncedil = "\u0145";
  var ncedil = "\u0146";
  var ncong = "\u2247";
  var ncongdot = "\u2a6d\u0338";
  var ncup = "\u2a42";
  var Ncy = "\u041d";
  var ncy = "\u043d";
  var ndash = "\u2013";
  var nearhk = "\u2924";
  var nearr = "\u2197";
  var neArr = "\u21d7";
  var nearrow = "\u2197";
  var ne = "\u2260";
  var nedot = "\u2250\u0338";
  var NegativeMediumSpace = "\u200b";
  var NegativeThickSpace = "\u200b";
  var NegativeThinSpace = "\u200b";
  var NegativeVeryThinSpace = "\u200b";
  var nequiv = "\u2262";
  var nesear = "\u2928";
  var nesim = "\u2242\u0338";
  var NestedGreaterGreater = "\u226b";
  var NestedLessLess = "\u226a";
  var NewLine = "\n";
  var nexist = "\u2204";
  var nexists = "\u2204";
  var Nfr = "\ud835\udd11";
  var nfr = "\ud835\udd2b";
  var ngE = "\u2267\u0338";
  var nge = "\u2271";
  var ngeq = "\u2271";
  var ngeqq = "\u2267\u0338";
  var ngeqslant = "\u2a7e\u0338";
  var nges = "\u2a7e\u0338";
  var nGg = "\u22d9\u0338";
  var ngsim = "\u2275";
  var nGt = "\u226b\u20d2";
  var ngt = "\u226f";
  var ngtr = "\u226f";
  var nGtv = "\u226b\u0338";
  var nharr = "\u21ae";
  var nhArr = "\u21ce";
  var nhpar = "\u2af2";
  var ni = "\u220b";
  var nis = "\u22fc";
  var nisd = "\u22fa";
  var niv = "\u220b";
  var NJcy = "\u040a";
  var njcy = "\u045a";
  var nlarr = "\u219a";
  var nlArr = "\u21cd";
  var nldr = "\u2025";
  var nlE = "\u2266\u0338";
  var nle = "\u2270";
  var nleftarrow = "\u219a";
  var nLeftarrow = "\u21cd";
  var nleftrightarrow = "\u21ae";
  var nLeftrightarrow = "\u21ce";
  var nleq = "\u2270";
  var nleqq = "\u2266\u0338";
  var nleqslant = "\u2a7d\u0338";
  var nles = "\u2a7d\u0338";
  var nless = "\u226e";
  var nLl = "\u22d8\u0338";
  var nlsim = "\u2274";
  var nLt = "\u226a\u20d2";
  var nlt = "\u226e";
  var nltri = "\u22ea";
  var nltrie = "\u22ec";
  var nLtv = "\u226a\u0338";
  var nmid = "\u2224";
  var NoBreak = "\u2060";
  var NonBreakingSpace = "\xa0";
  var nopf = "\ud835\udd5f";
  var Nopf = "\u2115";
  var Not = "\u2aec";
  var not = "\xac";
  var NotCongruent = "\u2262";
  var NotCupCap = "\u226d";
  var NotDoubleVerticalBar = "\u2226";
  var NotElement = "\u2209";
  var NotEqual = "\u2260";
  var NotEqualTilde = "\u2242\u0338";
  var NotExists = "\u2204";
  var NotGreater = "\u226f";
  var NotGreaterEqual = "\u2271";
  var NotGreaterFullEqual = "\u2267\u0338";
  var NotGreaterGreater = "\u226b\u0338";
  var NotGreaterLess = "\u2279";
  var NotGreaterSlantEqual = "\u2a7e\u0338";
  var NotGreaterTilde = "\u2275";
  var NotHumpDownHump = "\u224e\u0338";
  var NotHumpEqual = "\u224f\u0338";
  var notin = "\u2209";
  var notindot = "\u22f5\u0338";
  var notinE = "\u22f9\u0338";
  var notinva = "\u2209";
  var notinvb = "\u22f7";
  var notinvc = "\u22f6";
  var NotLeftTriangleBar = "\u29cf\u0338";
  var NotLeftTriangle = "\u22ea";
  var NotLeftTriangleEqual = "\u22ec";
  var NotLess = "\u226e";
  var NotLessEqual = "\u2270";
  var NotLessGreater = "\u2278";
  var NotLessLess = "\u226a\u0338";
  var NotLessSlantEqual = "\u2a7d\u0338";
  var NotLessTilde = "\u2274";
  var NotNestedGreaterGreater = "\u2aa2\u0338";
  var NotNestedLessLess = "\u2aa1\u0338";
  var notni = "\u220c";
  var notniva = "\u220c";
  var notnivb = "\u22fe";
  var notnivc = "\u22fd";
  var NotPrecedes = "\u2280";
  var NotPrecedesEqual = "\u2aaf\u0338";
  var NotPrecedesSlantEqual = "\u22e0";
  var NotReverseElement = "\u220c";
  var NotRightTriangleBar = "\u29d0\u0338";
  var NotRightTriangle = "\u22eb";
  var NotRightTriangleEqual = "\u22ed";
  var NotSquareSubset = "\u228f\u0338";
  var NotSquareSubsetEqual = "\u22e2";
  var NotSquareSuperset = "\u2290\u0338";
  var NotSquareSupersetEqual = "\u22e3";
  var NotSubset = "\u2282\u20d2";
  var NotSubsetEqual = "\u2288";
  var NotSucceeds = "\u2281";
  var NotSucceedsEqual = "\u2ab0\u0338";
  var NotSucceedsSlantEqual = "\u22e1";
  var NotSucceedsTilde = "\u227f\u0338";
  var NotSuperset = "\u2283\u20d2";
  var NotSupersetEqual = "\u2289";
  var NotTilde = "\u2241";
  var NotTildeEqual = "\u2244";
  var NotTildeFullEqual = "\u2247";
  var NotTildeTilde = "\u2249";
  var NotVerticalBar = "\u2224";
  var nparallel = "\u2226";
  var npar = "\u2226";
  var nparsl = "\u2afd\u20e5";
  var npart = "\u2202\u0338";
  var npolint = "\u2a14";
  var npr = "\u2280";
  var nprcue = "\u22e0";
  var nprec = "\u2280";
  var npreceq = "\u2aaf\u0338";
  var npre = "\u2aaf\u0338";
  var nrarrc = "\u2933\u0338";
  var nrarr = "\u219b";
  var nrArr = "\u21cf";
  var nrarrw = "\u219d\u0338";
  var nrightarrow = "\u219b";
  var nRightarrow = "\u21cf";
  var nrtri = "\u22eb";
  var nrtrie = "\u22ed";
  var nsc = "\u2281";
  var nsccue = "\u22e1";
  var nsce = "\u2ab0\u0338";
  var Nscr = "\ud835\udca9";
  var nscr = "\ud835\udcc3";
  var nshortmid = "\u2224";
  var nshortparallel = "\u2226";
  var nsim = "\u2241";
  var nsime = "\u2244";
  var nsimeq = "\u2244";
  var nsmid = "\u2224";
  var nspar = "\u2226";
  var nsqsube = "\u22e2";
  var nsqsupe = "\u22e3";
  var nsub = "\u2284";
  var nsubE = "\u2ac5\u0338";
  var nsube = "\u2288";
  var nsubset = "\u2282\u20d2";
  var nsubseteq = "\u2288";
  var nsubseteqq = "\u2ac5\u0338";
  var nsucc = "\u2281";
  var nsucceq = "\u2ab0\u0338";
  var nsup = "\u2285";
  var nsupE = "\u2ac6\u0338";
  var nsupe = "\u2289";
  var nsupset = "\u2283\u20d2";
  var nsupseteq = "\u2289";
  var nsupseteqq = "\u2ac6\u0338";
  var ntgl = "\u2279";
  var Ntilde = "\xd1";
  var ntilde = "\xf1";
  var ntlg = "\u2278";
  var ntriangleleft = "\u22ea";
  var ntrianglelefteq = "\u22ec";
  var ntriangleright = "\u22eb";
  var ntrianglerighteq = "\u22ed";
  var Nu = "\u039d";
  var nu = "\u03bd";
  var num = "#";
  var numero = "\u2116";
  var numsp = "\u2007";
  var nvap = "\u224d\u20d2";
  var nvdash = "\u22ac";
  var nvDash = "\u22ad";
  var nVdash = "\u22ae";
  var nVDash = "\u22af";
  var nvge = "\u2265\u20d2";
  var nvgt = ">\u20d2";
  var nvHarr = "\u2904";
  var nvinfin = "\u29de";
  var nvlArr = "\u2902";
  var nvle = "\u2264\u20d2";
  var nvlt = "<\u20d2";
  var nvltrie = "\u22b4\u20d2";
  var nvrArr = "\u2903";
  var nvrtrie = "\u22b5\u20d2";
  var nvsim = "\u223c\u20d2";
  var nwarhk = "\u2923";
  var nwarr = "\u2196";
  var nwArr = "\u21d6";
  var nwarrow = "\u2196";
  var nwnear = "\u2927";
  var Oacute = "\xd3";
  var oacute = "\xf3";
  var oast = "\u229b";
  var Ocirc = "\xd4";
  var ocirc = "\xf4";
  var ocir = "\u229a";
  var Ocy = "\u041e";
  var ocy = "\u043e";
  var odash = "\u229d";
  var Odblac = "\u0150";
  var odblac = "\u0151";
  var odiv = "\u2a38";
  var odot = "\u2299";
  var odsold = "\u29bc";
  var OElig = "\u0152";
  var oelig = "\u0153";
  var ofcir = "\u29bf";
  var Ofr = "\ud835\udd12";
  var ofr = "\ud835\udd2c";
  var ogon = "\u02db";
  var Ograve = "\xd2";
  var ograve = "\xf2";
  var ogt = "\u29c1";
  var ohbar = "\u29b5";
  var ohm = "\u03a9";
  var oint = "\u222e";
  var olarr = "\u21ba";
  var olcir = "\u29be";
  var olcross = "\u29bb";
  var oline = "\u203e";
  var olt = "\u29c0";
  var Omacr = "\u014c";
  var omacr = "\u014d";
  var Omega = "\u03a9";
  var omega = "\u03c9";
  var Omicron = "\u039f";
  var omicron = "\u03bf";
  var omid = "\u29b6";
  var ominus = "\u2296";
  var Oopf = "\ud835\udd46";
  var oopf = "\ud835\udd60";
  var opar = "\u29b7";
  var OpenCurlyDoubleQuote = "\u201c";
  var OpenCurlyQuote = "\u2018";
  var operp = "\u29b9";
  var oplus = "\u2295";
  var orarr = "\u21bb";
  var Or = "\u2a54";
  var or = "\u2228";
  var ord = "\u2a5d";
  var order = "\u2134";
  var orderof = "\u2134";
  var ordf = "\xaa";
  var ordm = "\xba";
  var origof = "\u22b6";
  var oror = "\u2a56";
  var orslope = "\u2a57";
  var orv = "\u2a5b";
  var oS = "\u24c8";
  var Oscr = "\ud835\udcaa";
  var oscr = "\u2134";
  var Oslash = "\xd8";
  var oslash = "\xf8";
  var osol = "\u2298";
  var Otilde = "\xd5";
  var otilde = "\xf5";
  var otimesas = "\u2a36";
  var Otimes = "\u2a37";
  var otimes = "\u2297";
  var Ouml = "\xd6";
  var ouml = "\xf6";
  var ovbar = "\u233d";
  var OverBar = "\u203e";
  var OverBrace = "\u23de";
  var OverBracket = "\u23b4";
  var OverParenthesis = "\u23dc";
  var para = "\xb6";
  var parallel = "\u2225";
  var par = "\u2225";
  var parsim = "\u2af3";
  var parsl = "\u2afd";
  var part = "\u2202";
  var PartialD = "\u2202";
  var Pcy = "\u041f";
  var pcy = "\u043f";
  var percnt = "%";
  var period = ".";
  var permil = "\u2030";
  var perp = "\u22a5";
  var pertenk = "\u2031";
  var Pfr = "\ud835\udd13";
  var pfr = "\ud835\udd2d";
  var Phi = "\u03a6";
  var phi = "\u03c6";
  var phiv = "\u03d5";
  var phmmat = "\u2133";
  var phone = "\u260e";
  var Pi = "\u03a0";
  var pi = "\u03c0";
  var pitchfork = "\u22d4";
  var piv = "\u03d6";
  var planck = "\u210f";
  var planckh = "\u210e";
  var plankv = "\u210f";
  var plusacir = "\u2a23";
  var plusb = "\u229e";
  var pluscir = "\u2a22";
  var plus = "+";
  var plusdo = "\u2214";
  var plusdu = "\u2a25";
  var pluse = "\u2a72";
  var PlusMinus = "\xb1";
  var plusmn = "\xb1";
  var plussim = "\u2a26";
  var plustwo = "\u2a27";
  var pm = "\xb1";
  var Poincareplane = "\u210c";
  var pointint = "\u2a15";
  var popf = "\ud835\udd61";
  var Popf = "\u2119";
  var pound = "\xa3";
  var prap = "\u2ab7";
  var Pr = "\u2abb";
  var pr = "\u227a";
  var prcue = "\u227c";
  var precapprox = "\u2ab7";
  var prec = "\u227a";
  var preccurlyeq = "\u227c";
  var Precedes = "\u227a";
  var PrecedesEqual = "\u2aaf";
  var PrecedesSlantEqual = "\u227c";
  var PrecedesTilde = "\u227e";
  var preceq = "\u2aaf";
  var precnapprox = "\u2ab9";
  var precneqq = "\u2ab5";
  var precnsim = "\u22e8";
  var pre = "\u2aaf";
  var prE = "\u2ab3";
  var precsim = "\u227e";
  var prime = "\u2032";
  var Prime = "\u2033";
  var primes = "\u2119";
  var prnap = "\u2ab9";
  var prnE = "\u2ab5";
  var prnsim = "\u22e8";
  var prod = "\u220f";
  var Product = "\u220f";
  var profalar = "\u232e";
  var profline = "\u2312";
  var profsurf = "\u2313";
  var prop = "\u221d";
  var Proportional = "\u221d";
  var Proportion = "\u2237";
  var propto = "\u221d";
  var prsim = "\u227e";
  var prurel = "\u22b0";
  var Pscr = "\ud835\udcab";
  var pscr = "\ud835\udcc5";
  var Psi = "\u03a8";
  var psi = "\u03c8";
  var puncsp = "\u2008";
  var Qfr = "\ud835\udd14";
  var qfr = "\ud835\udd2e";
  var qint = "\u2a0c";
  var qopf = "\ud835\udd62";
  var Qopf = "\u211a";
  var qprime = "\u2057";
  var Qscr = "\ud835\udcac";
  var qscr = "\ud835\udcc6";
  var quaternions = "\u210d";
  var quatint = "\u2a16";
  var quest = "?";
  var questeq = "\u225f";
  var quot = '"';
  var QUOT = '"';
  var rAarr = "\u21db";
  var race = "\u223d\u0331";
  var Racute = "\u0154";
  var racute = "\u0155";
  var radic = "\u221a";
  var raemptyv = "\u29b3";
  var rang = "\u27e9";
  var Rang = "\u27eb";
  var rangd = "\u2992";
  var range = "\u29a5";
  var rangle = "\u27e9";
  var raquo = "\xbb";
  var rarrap = "\u2975";
  var rarrb = "\u21e5";
  var rarrbfs = "\u2920";
  var rarrc = "\u2933";
  var rarr = "\u2192";
  var Rarr = "\u21a0";
  var rArr = "\u21d2";
  var rarrfs = "\u291e";
  var rarrhk = "\u21aa";
  var rarrlp = "\u21ac";
  var rarrpl = "\u2945";
  var rarrsim = "\u2974";
  var Rarrtl = "\u2916";
  var rarrtl = "\u21a3";
  var rarrw = "\u219d";
  var ratail = "\u291a";
  var rAtail = "\u291c";
  var ratio = "\u2236";
  var rationals = "\u211a";
  var rbarr = "\u290d";
  var rBarr = "\u290f";
  var RBarr = "\u2910";
  var rbbrk = "\u2773";
  var rbrace = "}";
  var rbrack = "]";
  var rbrke = "\u298c";
  var rbrksld = "\u298e";
  var rbrkslu = "\u2990";
  var Rcaron = "\u0158";
  var rcaron = "\u0159";
  var Rcedil = "\u0156";
  var rcedil = "\u0157";
  var rceil = "\u2309";
  var rcub = "}";
  var Rcy = "\u0420";
  var rcy = "\u0440";
  var rdca = "\u2937";
  var rdldhar = "\u2969";
  var rdquo = "\u201d";
  var rdquor = "\u201d";
  var rdsh = "\u21b3";
  var real = "\u211c";
  var realine = "\u211b";
  var realpart = "\u211c";
  var reals = "\u211d";
  var Re = "\u211c";
  var rect = "\u25ad";
  var reg = "\xae";
  var REG = "\xae";
  var ReverseElement = "\u220b";
  var ReverseEquilibrium = "\u21cb";
  var ReverseUpEquilibrium = "\u296f";
  var rfisht = "\u297d";
  var rfloor = "\u230b";
  var rfr = "\ud835\udd2f";
  var Rfr = "\u211c";
  var rHar = "\u2964";
  var rhard = "\u21c1";
  var rharu = "\u21c0";
  var rharul = "\u296c";
  var Rho = "\u03a1";
  var rho = "\u03c1";
  var rhov = "\u03f1";
  var RightAngleBracket = "\u27e9";
  var RightArrowBar = "\u21e5";
  var rightarrow = "\u2192";
  var RightArrow = "\u2192";
  var Rightarrow = "\u21d2";
  var RightArrowLeftArrow = "\u21c4";
  var rightarrowtail = "\u21a3";
  var RightCeiling = "\u2309";
  var RightDoubleBracket = "\u27e7";
  var RightDownTeeVector = "\u295d";
  var RightDownVectorBar = "\u2955";
  var RightDownVector = "\u21c2";
  var RightFloor = "\u230b";
  var rightharpoondown = "\u21c1";
  var rightharpoonup = "\u21c0";
  var rightleftarrows = "\u21c4";
  var rightleftharpoons = "\u21cc";
  var rightrightarrows = "\u21c9";
  var rightsquigarrow = "\u219d";
  var RightTeeArrow = "\u21a6";
  var RightTee = "\u22a2";
  var RightTeeVector = "\u295b";
  var rightthreetimes = "\u22cc";
  var RightTriangleBar = "\u29d0";
  var RightTriangle = "\u22b3";
  var RightTriangleEqual = "\u22b5";
  var RightUpDownVector = "\u294f";
  var RightUpTeeVector = "\u295c";
  var RightUpVectorBar = "\u2954";
  var RightUpVector = "\u21be";
  var RightVectorBar = "\u2953";
  var RightVector = "\u21c0";
  var ring = "\u02da";
  var risingdotseq = "\u2253";
  var rlarr = "\u21c4";
  var rlhar = "\u21cc";
  var rlm = "\u200f";
  var rmoustache = "\u23b1";
  var rmoust = "\u23b1";
  var rnmid = "\u2aee";
  var roang = "\u27ed";
  var roarr = "\u21fe";
  var robrk = "\u27e7";
  var ropar = "\u2986";
  var ropf = "\ud835\udd63";
  var Ropf = "\u211d";
  var roplus = "\u2a2e";
  var rotimes = "\u2a35";
  var RoundImplies = "\u2970";
  var rpar = ")";
  var rpargt = "\u2994";
  var rppolint = "\u2a12";
  var rrarr = "\u21c9";
  var Rrightarrow = "\u21db";
  var rsaquo = "\u203a";
  var rscr = "\ud835\udcc7";
  var Rscr = "\u211b";
  var rsh = "\u21b1";
  var Rsh = "\u21b1";
  var rsqb = "]";
  var rsquo = "\u2019";
  var rsquor = "\u2019";
  var rthree = "\u22cc";
  var rtimes = "\u22ca";
  var rtri = "\u25b9";
  var rtrie = "\u22b5";
  var rtrif = "\u25b8";
  var rtriltri = "\u29ce";
  var RuleDelayed = "\u29f4";
  var ruluhar = "\u2968";
  var rx = "\u211e";
  var Sacute = "\u015a";
  var sacute = "\u015b";
  var sbquo = "\u201a";
  var scap = "\u2ab8";
  var Scaron = "\u0160";
  var scaron = "\u0161";
  var Sc = "\u2abc";
  var sc = "\u227b";
  var sccue = "\u227d";
  var sce = "\u2ab0";
  var scE = "\u2ab4";
  var Scedil = "\u015e";
  var scedil = "\u015f";
  var Scirc = "\u015c";
  var scirc = "\u015d";
  var scnap = "\u2aba";
  var scnE = "\u2ab6";
  var scnsim = "\u22e9";
  var scpolint = "\u2a13";
  var scsim = "\u227f";
  var Scy = "\u0421";
  var scy = "\u0441";
  var sdotb = "\u22a1";
  var sdot = "\u22c5";
  var sdote = "\u2a66";
  var searhk = "\u2925";
  var searr = "\u2198";
  var seArr = "\u21d8";
  var searrow = "\u2198";
  var sect = "\xa7";
  var semi = ";";
  var seswar = "\u2929";
  var setminus = "\u2216";
  var setmn = "\u2216";
  var sext = "\u2736";
  var Sfr = "\ud835\udd16";
  var sfr = "\ud835\udd30";
  var sfrown = "\u2322";
  var sharp = "\u266f";
  var SHCHcy = "\u0429";
  var shchcy = "\u0449";
  var SHcy = "\u0428";
  var shcy = "\u0448";
  var ShortDownArrow = "\u2193";
  var ShortLeftArrow = "\u2190";
  var shortmid = "\u2223";
  var shortparallel = "\u2225";
  var ShortRightArrow = "\u2192";
  var ShortUpArrow = "\u2191";
  var shy = "\xad";
  var Sigma = "\u03a3";
  var sigma = "\u03c3";
  var sigmaf = "\u03c2";
  var sigmav = "\u03c2";
  var sim = "\u223c";
  var simdot = "\u2a6a";
  var sime = "\u2243";
  var simeq = "\u2243";
  var simg = "\u2a9e";
  var simgE = "\u2aa0";
  var siml = "\u2a9d";
  var simlE = "\u2a9f";
  var simne = "\u2246";
  var simplus = "\u2a24";
  var simrarr = "\u2972";
  var slarr = "\u2190";
  var SmallCircle = "\u2218";
  var smallsetminus = "\u2216";
  var smashp = "\u2a33";
  var smeparsl = "\u29e4";
  var smid = "\u2223";
  var smile = "\u2323";
  var smt = "\u2aaa";
  var smte = "\u2aac";
  var smtes = "\u2aac\ufe00";
  var SOFTcy = "\u042c";
  var softcy = "\u044c";
  var solbar = "\u233f";
  var solb = "\u29c4";
  var sol = "/";
  var Sopf = "\ud835\udd4a";
  var sopf = "\ud835\udd64";
  var spades = "\u2660";
  var spadesuit = "\u2660";
  var spar = "\u2225";
  var sqcap = "\u2293";
  var sqcaps = "\u2293\ufe00";
  var sqcup = "\u2294";
  var sqcups = "\u2294\ufe00";
  var Sqrt = "\u221a";
  var sqsub = "\u228f";
  var sqsube = "\u2291";
  var sqsubset = "\u228f";
  var sqsubseteq = "\u2291";
  var sqsup = "\u2290";
  var sqsupe = "\u2292";
  var sqsupset = "\u2290";
  var sqsupseteq = "\u2292";
  var square = "\u25a1";
  var Square = "\u25a1";
  var SquareIntersection = "\u2293";
  var SquareSubset = "\u228f";
  var SquareSubsetEqual = "\u2291";
  var SquareSuperset = "\u2290";
  var SquareSupersetEqual = "\u2292";
  var SquareUnion = "\u2294";
  var squarf = "\u25aa";
  var squ = "\u25a1";
  var squf = "\u25aa";
  var srarr = "\u2192";
  var Sscr = "\ud835\udcae";
  var sscr = "\ud835\udcc8";
  var ssetmn = "\u2216";
  var ssmile = "\u2323";
  var sstarf = "\u22c6";
  var Star = "\u22c6";
  var star = "\u2606";
  var starf = "\u2605";
  var straightepsilon = "\u03f5";
  var straightphi = "\u03d5";
  var strns = "\xaf";
  var sub = "\u2282";
  var Sub = "\u22d0";
  var subdot = "\u2abd";
  var subE = "\u2ac5";
  var sube = "\u2286";
  var subedot = "\u2ac3";
  var submult = "\u2ac1";
  var subnE = "\u2acb";
  var subne = "\u228a";
  var subplus = "\u2abf";
  var subrarr = "\u2979";
  var subset = "\u2282";
  var Subset = "\u22d0";
  var subseteq = "\u2286";
  var subseteqq = "\u2ac5";
  var SubsetEqual = "\u2286";
  var subsetneq = "\u228a";
  var subsetneqq = "\u2acb";
  var subsim = "\u2ac7";
  var subsub = "\u2ad5";
  var subsup = "\u2ad3";
  var succapprox = "\u2ab8";
  var succ = "\u227b";
  var succcurlyeq = "\u227d";
  var Succeeds = "\u227b";
  var SucceedsEqual = "\u2ab0";
  var SucceedsSlantEqual = "\u227d";
  var SucceedsTilde = "\u227f";
  var succeq = "\u2ab0";
  var succnapprox = "\u2aba";
  var succneqq = "\u2ab6";
  var succnsim = "\u22e9";
  var succsim = "\u227f";
  var SuchThat = "\u220b";
  var sum = "\u2211";
  var Sum = "\u2211";
  var sung = "\u266a";
  var sup1 = "\xb9";
  var sup2 = "\xb2";
  var sup3 = "\xb3";
  var sup = "\u2283";
  var Sup = "\u22d1";
  var supdot = "\u2abe";
  var supdsub = "\u2ad8";
  var supE = "\u2ac6";
  var supe = "\u2287";
  var supedot = "\u2ac4";
  var Superset = "\u2283";
  var SupersetEqual = "\u2287";
  var suphsol = "\u27c9";
  var suphsub = "\u2ad7";
  var suplarr = "\u297b";
  var supmult = "\u2ac2";
  var supnE = "\u2acc";
  var supne = "\u228b";
  var supplus = "\u2ac0";
  var supset = "\u2283";
  var Supset = "\u22d1";
  var supseteq = "\u2287";
  var supseteqq = "\u2ac6";
  var supsetneq = "\u228b";
  var supsetneqq = "\u2acc";
  var supsim = "\u2ac8";
  var supsub = "\u2ad4";
  var supsup = "\u2ad6";
  var swarhk = "\u2926";
  var swarr = "\u2199";
  var swArr = "\u21d9";
  var swarrow = "\u2199";
  var swnwar = "\u292a";
  var szlig = "\xdf";
  var Tab = "\t";
  var target = "\u2316";
  var Tau = "\u03a4";
  var tau = "\u03c4";
  var tbrk = "\u23b4";
  var Tcaron = "\u0164";
  var tcaron = "\u0165";
  var Tcedil = "\u0162";
  var tcedil = "\u0163";
  var Tcy = "\u0422";
  var tcy = "\u0442";
  var tdot = "\u20db";
  var telrec = "\u2315";
  var Tfr = "\ud835\udd17";
  var tfr = "\ud835\udd31";
  var there4 = "\u2234";
  var therefore = "\u2234";
  var Therefore = "\u2234";
  var Theta = "\u0398";
  var theta = "\u03b8";
  var thetasym = "\u03d1";
  var thetav = "\u03d1";
  var thickapprox = "\u2248";
  var thicksim = "\u223c";
  var ThickSpace = "\u205f\u200a";
  var ThinSpace = "\u2009";
  var thinsp = "\u2009";
  var thkap = "\u2248";
  var thksim = "\u223c";
  var THORN = "\xde";
  var thorn = "\xfe";
  var tilde = "\u02dc";
  var Tilde = "\u223c";
  var TildeEqual = "\u2243";
  var TildeFullEqual = "\u2245";
  var TildeTilde = "\u2248";
  var timesbar = "\u2a31";
  var timesb = "\u22a0";
  var times = "\xd7";
  var timesd = "\u2a30";
  var tint = "\u222d";
  var toea = "\u2928";
  var topbot = "\u2336";
  var topcir = "\u2af1";
  var top = "\u22a4";
  var Topf = "\ud835\udd4b";
  var topf = "\ud835\udd65";
  var topfork = "\u2ada";
  var tosa = "\u2929";
  var tprime = "\u2034";
  var trade = "\u2122";
  var TRADE = "\u2122";
  var triangle = "\u25b5";
  var triangledown = "\u25bf";
  var triangleleft = "\u25c3";
  var trianglelefteq = "\u22b4";
  var triangleq = "\u225c";
  var triangleright = "\u25b9";
  var trianglerighteq = "\u22b5";
  var tridot = "\u25ec";
  var trie = "\u225c";
  var triminus = "\u2a3a";
  var TripleDot = "\u20db";
  var triplus = "\u2a39";
  var trisb = "\u29cd";
  var tritime = "\u2a3b";
  var trpezium = "\u23e2";
  var Tscr = "\ud835\udcaf";
  var tscr = "\ud835\udcc9";
  var TScy = "\u0426";
  var tscy = "\u0446";
  var TSHcy = "\u040b";
  var tshcy = "\u045b";
  var Tstrok = "\u0166";
  var tstrok = "\u0167";
  var twixt = "\u226c";
  var twoheadleftarrow = "\u219e";
  var twoheadrightarrow = "\u21a0";
  var Uacute = "\xda";
  var uacute = "\xfa";
  var uarr = "\u2191";
  var Uarr = "\u219f";
  var uArr = "\u21d1";
  var Uarrocir = "\u2949";
  var Ubrcy = "\u040e";
  var ubrcy = "\u045e";
  var Ubreve = "\u016c";
  var ubreve = "\u016d";
  var Ucirc = "\xdb";
  var ucirc = "\xfb";
  var Ucy = "\u0423";
  var ucy = "\u0443";
  var udarr = "\u21c5";
  var Udblac = "\u0170";
  var udblac = "\u0171";
  var udhar = "\u296e";
  var ufisht = "\u297e";
  var Ufr = "\ud835\udd18";
  var ufr = "\ud835\udd32";
  var Ugrave = "\xd9";
  var ugrave = "\xf9";
  var uHar = "\u2963";
  var uharl = "\u21bf";
  var uharr = "\u21be";
  var uhblk = "\u2580";
  var ulcorn = "\u231c";
  var ulcorner = "\u231c";
  var ulcrop = "\u230f";
  var ultri = "\u25f8";
  var Umacr = "\u016a";
  var umacr = "\u016b";
  var uml = "\xa8";
  var UnderBar = "_";
  var UnderBrace = "\u23df";
  var UnderBracket = "\u23b5";
  var UnderParenthesis = "\u23dd";
  var Union = "\u22c3";
  var UnionPlus = "\u228e";
  var Uogon = "\u0172";
  var uogon = "\u0173";
  var Uopf = "\ud835\udd4c";
  var uopf = "\ud835\udd66";
  var UpArrowBar = "\u2912";
  var uparrow = "\u2191";
  var UpArrow = "\u2191";
  var Uparrow = "\u21d1";
  var UpArrowDownArrow = "\u21c5";
  var updownarrow = "\u2195";
  var UpDownArrow = "\u2195";
  var Updownarrow = "\u21d5";
  var UpEquilibrium = "\u296e";
  var upharpoonleft = "\u21bf";
  var upharpoonright = "\u21be";
  var uplus = "\u228e";
  var UpperLeftArrow = "\u2196";
  var UpperRightArrow = "\u2197";
  var upsi = "\u03c5";
  var Upsi = "\u03d2";
  var upsih = "\u03d2";
  var Upsilon = "\u03a5";
  var upsilon = "\u03c5";
  var UpTeeArrow = "\u21a5";
  var UpTee = "\u22a5";
  var upuparrows = "\u21c8";
  var urcorn = "\u231d";
  var urcorner = "\u231d";
  var urcrop = "\u230e";
  var Uring = "\u016e";
  var uring = "\u016f";
  var urtri = "\u25f9";
  var Uscr = "\ud835\udcb0";
  var uscr = "\ud835\udcca";
  var utdot = "\u22f0";
  var Utilde = "\u0168";
  var utilde = "\u0169";
  var utri = "\u25b5";
  var utrif = "\u25b4";
  var uuarr = "\u21c8";
  var Uuml = "\xdc";
  var uuml = "\xfc";
  var uwangle = "\u29a7";
  var vangrt = "\u299c";
  var varepsilon = "\u03f5";
  var varkappa = "\u03f0";
  var varnothing = "\u2205";
  var varphi = "\u03d5";
  var varpi = "\u03d6";
  var varpropto = "\u221d";
  var varr = "\u2195";
  var vArr = "\u21d5";
  var varrho = "\u03f1";
  var varsigma = "\u03c2";
  var varsubsetneq = "\u228a\ufe00";
  var varsubsetneqq = "\u2acb\ufe00";
  var varsupsetneq = "\u228b\ufe00";
  var varsupsetneqq = "\u2acc\ufe00";
  var vartheta = "\u03d1";
  var vartriangleleft = "\u22b2";
  var vartriangleright = "\u22b3";
  var vBar = "\u2ae8";
  var Vbar = "\u2aeb";
  var vBarv = "\u2ae9";
  var Vcy = "\u0412";
  var vcy = "\u0432";
  var vdash = "\u22a2";
  var vDash = "\u22a8";
  var Vdash = "\u22a9";
  var VDash = "\u22ab";
  var Vdashl = "\u2ae6";
  var veebar = "\u22bb";
  var vee = "\u2228";
  var Vee = "\u22c1";
  var veeeq = "\u225a";
  var vellip = "\u22ee";
  var verbar = "|";
  var Verbar = "\u2016";
  var vert = "|";
  var Vert = "\u2016";
  var VerticalBar = "\u2223";
  var VerticalLine = "|";
  var VerticalSeparator = "\u2758";
  var VerticalTilde = "\u2240";
  var VeryThinSpace = "\u200a";
  var Vfr = "\ud835\udd19";
  var vfr = "\ud835\udd33";
  var vltri = "\u22b2";
  var vnsub = "\u2282\u20d2";
  var vnsup = "\u2283\u20d2";
  var Vopf = "\ud835\udd4d";
  var vopf = "\ud835\udd67";
  var vprop = "\u221d";
  var vrtri = "\u22b3";
  var Vscr = "\ud835\udcb1";
  var vscr = "\ud835\udccb";
  var vsubnE = "\u2acb\ufe00";
  var vsubne = "\u228a\ufe00";
  var vsupnE = "\u2acc\ufe00";
  var vsupne = "\u228b\ufe00";
  var Vvdash = "\u22aa";
  var vzigzag = "\u299a";
  var Wcirc = "\u0174";
  var wcirc = "\u0175";
  var wedbar = "\u2a5f";
  var wedge = "\u2227";
  var Wedge = "\u22c0";
  var wedgeq = "\u2259";
  var weierp = "\u2118";
  var Wfr = "\ud835\udd1a";
  var wfr = "\ud835\udd34";
  var Wopf = "\ud835\udd4e";
  var wopf = "\ud835\udd68";
  var wp = "\u2118";
  var wr = "\u2240";
  var wreath = "\u2240";
  var Wscr = "\ud835\udcb2";
  var wscr = "\ud835\udccc";
  var xcap = "\u22c2";
  var xcirc = "\u25ef";
  var xcup = "\u22c3";
  var xdtri = "\u25bd";
  var Xfr = "\ud835\udd1b";
  var xfr = "\ud835\udd35";
  var xharr = "\u27f7";
  var xhArr = "\u27fa";
  var Xi = "\u039e";
  var xi = "\u03be";
  var xlarr = "\u27f5";
  var xlArr = "\u27f8";
  var xmap = "\u27fc";
  var xnis = "\u22fb";
  var xodot = "\u2a00";
  var Xopf = "\ud835\udd4f";
  var xopf = "\ud835\udd69";
  var xoplus = "\u2a01";
  var xotime = "\u2a02";
  var xrarr = "\u27f6";
  var xrArr = "\u27f9";
  var Xscr = "\ud835\udcb3";
  var xscr = "\ud835\udccd";
  var xsqcup = "\u2a06";
  var xuplus = "\u2a04";
  var xutri = "\u25b3";
  var xvee = "\u22c1";
  var xwedge = "\u22c0";
  var Yacute = "\xdd";
  var yacute = "\xfd";
  var YAcy = "\u042f";
  var yacy = "\u044f";
  var Ycirc = "\u0176";
  var ycirc = "\u0177";
  var Ycy = "\u042b";
  var ycy = "\u044b";
  var yen = "\xa5";
  var Yfr = "\ud835\udd1c";
  var yfr = "\ud835\udd36";
  var YIcy = "\u0407";
  var yicy = "\u0457";
  var Yopf = "\ud835\udd50";
  var yopf = "\ud835\udd6a";
  var Yscr = "\ud835\udcb4";
  var yscr = "\ud835\udcce";
  var YUcy = "\u042e";
  var yucy = "\u044e";
  var yuml = "\xff";
  var Yuml = "\u0178";
  var Zacute = "\u0179";
  var zacute = "\u017a";
  var Zcaron = "\u017d";
  var zcaron = "\u017e";
  var Zcy = "\u0417";
  var zcy = "\u0437";
  var Zdot = "\u017b";
  var zdot = "\u017c";
  var zeetrf = "\u2128";
  var ZeroWidthSpace = "\u200b";
  var Zeta = "\u0396";
  var zeta = "\u03b6";
  var zfr = "\ud835\udd37";
  var Zfr = "\u2128";
  var ZHcy = "\u0416";
  var zhcy = "\u0436";
  var zigrarr = "\u21dd";
  var zopf = "\ud835\udd6b";
  var Zopf = "\u2124";
  var Zscr = "\ud835\udcb5";
  var zscr = "\ud835\udccf";
  var zwj = "\u200d";
  var zwnj = "\u200c";
  var require$$0 = {
    Aacute: Aacute,
    aacute: aacute,
    Abreve: Abreve,
    abreve: abreve,
    ac: ac,
    acd: acd,
    acE: acE,
    Acirc: Acirc,
    acirc: acirc,
    acute: acute,
    Acy: Acy,
    acy: acy,
    AElig: AElig,
    aelig: aelig,
    af: af,
    Afr: Afr,
    afr: afr,
    Agrave: Agrave,
    agrave: agrave,
    alefsym: alefsym,
    aleph: aleph,
    Alpha: Alpha,
    alpha: alpha,
    Amacr: Amacr,
    amacr: amacr,
    amalg: amalg,
    amp: amp,
    AMP: AMP,
    andand: andand,
    And: And,
    and: and,
    andd: andd,
    andslope: andslope,
    andv: andv,
    ang: ang,
    ange: ange,
    angle: angle,
    angmsdaa: angmsdaa,
    angmsdab: angmsdab,
    angmsdac: angmsdac,
    angmsdad: angmsdad,
    angmsdae: angmsdae,
    angmsdaf: angmsdaf,
    angmsdag: angmsdag,
    angmsdah: angmsdah,
    angmsd: angmsd,
    angrt: angrt,
    angrtvb: angrtvb,
    angrtvbd: angrtvbd,
    angsph: angsph,
    angst: angst,
    angzarr: angzarr,
    Aogon: Aogon,
    aogon: aogon,
    Aopf: Aopf,
    aopf: aopf,
    apacir: apacir,
    ap: ap,
    apE: apE,
    ape: ape,
    apid: apid,
    apos: apos,
    ApplyFunction: ApplyFunction,
    approx: approx,
    approxeq: approxeq,
    Aring: Aring,
    aring: aring,
    Ascr: Ascr,
    ascr: ascr,
    Assign: Assign,
    ast: ast,
    asymp: asymp,
    asympeq: asympeq,
    Atilde: Atilde,
    atilde: atilde,
    Auml: Auml,
    auml: auml,
    awconint: awconint,
    awint: awint,
    backcong: backcong,
    backepsilon: backepsilon,
    backprime: backprime,
    backsim: backsim,
    backsimeq: backsimeq,
    Backslash: Backslash,
    Barv: Barv,
    barvee: barvee,
    barwed: barwed,
    Barwed: Barwed,
    barwedge: barwedge,
    bbrk: bbrk,
    bbrktbrk: bbrktbrk,
    bcong: bcong,
    Bcy: Bcy,
    bcy: bcy,
    bdquo: bdquo,
    becaus: becaus,
    because: because,
    Because: Because,
    bemptyv: bemptyv,
    bepsi: bepsi,
    bernou: bernou,
    Bernoullis: Bernoullis,
    Beta: Beta,
    beta: beta,
    beth: beth,
    between: between,
    Bfr: Bfr,
    bfr: bfr,
    bigcap: bigcap,
    bigcirc: bigcirc,
    bigcup: bigcup,
    bigodot: bigodot,
    bigoplus: bigoplus,
    bigotimes: bigotimes,
    bigsqcup: bigsqcup,
    bigstar: bigstar,
    bigtriangledown: bigtriangledown,
    bigtriangleup: bigtriangleup,
    biguplus: biguplus,
    bigvee: bigvee,
    bigwedge: bigwedge,
    bkarow: bkarow,
    blacklozenge: blacklozenge,
    blacksquare: blacksquare,
    blacktriangle: blacktriangle,
    blacktriangledown: blacktriangledown,
    blacktriangleleft: blacktriangleleft,
    blacktriangleright: blacktriangleright,
    blank: blank,
    blk12: blk12,
    blk14: blk14,
    blk34: blk34,
    block: block,
    bne: bne,
    bnequiv: bnequiv,
    bNot: bNot,
    bnot: bnot,
    Bopf: Bopf,
    bopf: bopf,
    bot: bot,
    bottom: bottom,
    bowtie: bowtie,
    boxbox: boxbox,
    boxdl: boxdl,
    boxdL: boxdL,
    boxDl: boxDl,
    boxDL: boxDL,
    boxdr: boxdr,
    boxdR: boxdR,
    boxDr: boxDr,
    boxDR: boxDR,
    boxh: boxh,
    boxH: boxH,
    boxhd: boxhd,
    boxHd: boxHd,
    boxhD: boxhD,
    boxHD: boxHD,
    boxhu: boxhu,
    boxHu: boxHu,
    boxhU: boxhU,
    boxHU: boxHU,
    boxminus: boxminus,
    boxplus: boxplus,
    boxtimes: boxtimes,
    boxul: boxul,
    boxuL: boxuL,
    boxUl: boxUl,
    boxUL: boxUL,
    boxur: boxur,
    boxuR: boxuR,
    boxUr: boxUr,
    boxUR: boxUR,
    boxv: boxv,
    boxV: boxV,
    boxvh: boxvh,
    boxvH: boxvH,
    boxVh: boxVh,
    boxVH: boxVH,
    boxvl: boxvl,
    boxvL: boxvL,
    boxVl: boxVl,
    boxVL: boxVL,
    boxvr: boxvr,
    boxvR: boxvR,
    boxVr: boxVr,
    boxVR: boxVR,
    bprime: bprime,
    breve: breve,
    Breve: Breve,
    brvbar: brvbar,
    bscr: bscr,
    Bscr: Bscr,
    bsemi: bsemi,
    bsim: bsim,
    bsime: bsime,
    bsolb: bsolb,
    bsol: bsol,
    bsolhsub: bsolhsub,
    bull: bull,
    bullet: bullet,
    bump: bump,
    bumpE: bumpE,
    bumpe: bumpe,
    Bumpeq: Bumpeq,
    bumpeq: bumpeq,
    Cacute: Cacute,
    cacute: cacute,
    capand: capand,
    capbrcup: capbrcup,
    capcap: capcap,
    cap: cap,
    Cap: Cap,
    capcup: capcup,
    capdot: capdot,
    CapitalDifferentialD: CapitalDifferentialD,
    caps: caps,
    caret: caret,
    caron: caron,
    Cayleys: Cayleys,
    ccaps: ccaps,
    Ccaron: Ccaron,
    ccaron: ccaron,
    Ccedil: Ccedil,
    ccedil: ccedil,
    Ccirc: Ccirc,
    ccirc: ccirc,
    Cconint: Cconint,
    ccups: ccups,
    ccupssm: ccupssm,
    Cdot: Cdot,
    cdot: cdot,
    cedil: cedil,
    Cedilla: Cedilla,
    cemptyv: cemptyv,
    cent: cent,
    centerdot: centerdot,
    CenterDot: CenterDot,
    cfr: cfr,
    Cfr: Cfr,
    CHcy: CHcy,
    chcy: chcy,
    check: check,
    checkmark: checkmark,
    Chi: Chi,
    chi: chi,
    circ: circ,
    circeq: circeq,
    circlearrowleft: circlearrowleft,
    circlearrowright: circlearrowright,
    circledast: circledast,
    circledcirc: circledcirc,
    circleddash: circleddash,
    CircleDot: CircleDot,
    circledR: circledR,
    circledS: circledS,
    CircleMinus: CircleMinus,
    CirclePlus: CirclePlus,
    CircleTimes: CircleTimes,
    cir: cir,
    cirE: cirE,
    cire: cire,
    cirfnint: cirfnint,
    cirmid: cirmid,
    cirscir: cirscir,
    ClockwiseContourIntegral: ClockwiseContourIntegral,
    CloseCurlyDoubleQuote: CloseCurlyDoubleQuote,
    CloseCurlyQuote: CloseCurlyQuote,
    clubs: clubs,
    clubsuit: clubsuit,
    colon: colon,
    Colon: Colon,
    Colone: Colone,
    colone: colone,
    coloneq: coloneq,
    comma: comma,
    commat: commat,
    comp: comp,
    compfn: compfn,
    complement: complement,
    complexes: complexes,
    cong: cong,
    congdot: congdot,
    Congruent: Congruent,
    conint: conint,
    Conint: Conint,
    ContourIntegral: ContourIntegral,
    copf: copf,
    Copf: Copf,
    coprod: coprod,
    Coproduct: Coproduct,
    copy: copy,
    COPY: COPY,
    copysr: copysr,
    CounterClockwiseContourIntegral: CounterClockwiseContourIntegral,
    crarr: crarr,
    cross: cross,
    Cross: Cross,
    Cscr: Cscr,
    cscr: cscr,
    csub: csub,
    csube: csube,
    csup: csup,
    csupe: csupe,
    ctdot: ctdot,
    cudarrl: cudarrl,
    cudarrr: cudarrr,
    cuepr: cuepr,
    cuesc: cuesc,
    cularr: cularr,
    cularrp: cularrp,
    cupbrcap: cupbrcap,
    cupcap: cupcap,
    CupCap: CupCap,
    cup: cup,
    Cup: Cup,
    cupcup: cupcup,
    cupdot: cupdot,
    cupor: cupor,
    cups: cups,
    curarr: curarr,
    curarrm: curarrm,
    curlyeqprec: curlyeqprec,
    curlyeqsucc: curlyeqsucc,
    curlyvee: curlyvee,
    curlywedge: curlywedge,
    curren: curren,
    curvearrowleft: curvearrowleft,
    curvearrowright: curvearrowright,
    cuvee: cuvee,
    cuwed: cuwed,
    cwconint: cwconint,
    cwint: cwint,
    cylcty: cylcty,
    dagger: dagger,
    Dagger: Dagger,
    daleth: daleth,
    darr: darr,
    Darr: Darr,
    dArr: dArr,
    dash: dash,
    Dashv: Dashv,
    dashv: dashv,
    dbkarow: dbkarow,
    dblac: dblac,
    Dcaron: Dcaron,
    dcaron: dcaron,
    Dcy: Dcy,
    dcy: dcy,
    ddagger: ddagger,
    ddarr: ddarr,
    DD: DD,
    dd: dd,
    DDotrahd: DDotrahd,
    ddotseq: ddotseq,
    deg: deg,
    Del: Del,
    Delta: Delta,
    delta: delta,
    demptyv: demptyv,
    dfisht: dfisht,
    Dfr: Dfr,
    dfr: dfr,
    dHar: dHar,
    dharl: dharl,
    dharr: dharr,
    DiacriticalAcute: DiacriticalAcute,
    DiacriticalDot: DiacriticalDot,
    DiacriticalDoubleAcute: DiacriticalDoubleAcute,
    DiacriticalGrave: DiacriticalGrave,
    DiacriticalTilde: DiacriticalTilde,
    diam: diam,
    diamond: diamond,
    Diamond: Diamond,
    diamondsuit: diamondsuit,
    diams: diams,
    die: die,
    DifferentialD: DifferentialD,
    digamma: digamma,
    disin: disin,
    div: div,
    divide: divide,
    divideontimes: divideontimes,
    divonx: divonx,
    DJcy: DJcy,
    djcy: djcy,
    dlcorn: dlcorn,
    dlcrop: dlcrop,
    dollar: dollar,
    Dopf: Dopf,
    dopf: dopf,
    Dot: Dot,
    dot: dot,
    DotDot: DotDot,
    doteq: doteq,
    doteqdot: doteqdot,
    DotEqual: DotEqual,
    dotminus: dotminus,
    dotplus: dotplus,
    dotsquare: dotsquare,
    doublebarwedge: doublebarwedge,
    DoubleContourIntegral: DoubleContourIntegral,
    DoubleDot: DoubleDot,
    DoubleDownArrow: DoubleDownArrow,
    DoubleLeftArrow: DoubleLeftArrow,
    DoubleLeftRightArrow: DoubleLeftRightArrow,
    DoubleLeftTee: DoubleLeftTee,
    DoubleLongLeftArrow: DoubleLongLeftArrow,
    DoubleLongLeftRightArrow: DoubleLongLeftRightArrow,
    DoubleLongRightArrow: DoubleLongRightArrow,
    DoubleRightArrow: DoubleRightArrow,
    DoubleRightTee: DoubleRightTee,
    DoubleUpArrow: DoubleUpArrow,
    DoubleUpDownArrow: DoubleUpDownArrow,
    DoubleVerticalBar: DoubleVerticalBar,
    DownArrowBar: DownArrowBar,
    downarrow: downarrow,
    DownArrow: DownArrow,
    Downarrow: Downarrow,
    DownArrowUpArrow: DownArrowUpArrow,
    DownBreve: DownBreve,
    downdownarrows: downdownarrows,
    downharpoonleft: downharpoonleft,
    downharpoonright: downharpoonright,
    DownLeftRightVector: DownLeftRightVector,
    DownLeftTeeVector: DownLeftTeeVector,
    DownLeftVectorBar: DownLeftVectorBar,
    DownLeftVector: DownLeftVector,
    DownRightTeeVector: DownRightTeeVector,
    DownRightVectorBar: DownRightVectorBar,
    DownRightVector: DownRightVector,
    DownTeeArrow: DownTeeArrow,
    DownTee: DownTee,
    drbkarow: drbkarow,
    drcorn: drcorn,
    drcrop: drcrop,
    Dscr: Dscr,
    dscr: dscr,
    DScy: DScy,
    dscy: dscy,
    dsol: dsol,
    Dstrok: Dstrok,
    dstrok: dstrok,
    dtdot: dtdot,
    dtri: dtri,
    dtrif: dtrif,
    duarr: duarr,
    duhar: duhar,
    dwangle: dwangle,
    DZcy: DZcy,
    dzcy: dzcy,
    dzigrarr: dzigrarr,
    Eacute: Eacute,
    eacute: eacute,
    easter: easter,
    Ecaron: Ecaron,
    ecaron: ecaron,
    Ecirc: Ecirc,
    ecirc: ecirc,
    ecir: ecir,
    ecolon: ecolon,
    Ecy: Ecy,
    ecy: ecy,
    eDDot: eDDot,
    Edot: Edot,
    edot: edot,
    eDot: eDot,
    ee: ee,
    efDot: efDot,
    Efr: Efr,
    efr: efr,
    eg: eg,
    Egrave: Egrave,
    egrave: egrave,
    egs: egs,
    egsdot: egsdot,
    el: el,
    Element: Element,
    elinters: elinters,
    ell: ell,
    els: els,
    elsdot: elsdot,
    Emacr: Emacr,
    emacr: emacr,
    empty: empty,
    emptyset: emptyset,
    EmptySmallSquare: EmptySmallSquare,
    emptyv: emptyv,
    EmptyVerySmallSquare: EmptyVerySmallSquare,
    emsp13: emsp13,
    emsp14: emsp14,
    emsp: emsp,
    ENG: ENG,
    eng: eng,
    ensp: ensp,
    Eogon: Eogon,
    eogon: eogon,
    Eopf: Eopf,
    eopf: eopf,
    epar: epar,
    eparsl: eparsl,
    eplus: eplus,
    epsi: epsi,
    Epsilon: Epsilon,
    epsilon: epsilon,
    epsiv: epsiv,
    eqcirc: eqcirc,
    eqcolon: eqcolon,
    eqsim: eqsim,
    eqslantgtr: eqslantgtr,
    eqslantless: eqslantless,
    Equal: Equal,
    equals: equals,
    EqualTilde: EqualTilde,
    equest: equest,
    Equilibrium: Equilibrium,
    equiv: equiv,
    equivDD: equivDD,
    eqvparsl: eqvparsl,
    erarr: erarr,
    erDot: erDot,
    escr: escr,
    Escr: Escr,
    esdot: esdot,
    Esim: Esim,
    esim: esim,
    Eta: Eta,
    eta: eta,
    ETH: ETH,
    eth: eth,
    Euml: Euml,
    euml: euml,
    euro: euro,
    excl: excl,
    exist: exist,
    Exists: Exists,
    expectation: expectation,
    exponentiale: exponentiale,
    ExponentialE: ExponentialE,
    fallingdotseq: fallingdotseq,
    Fcy: Fcy,
    fcy: fcy,
    female: female,
    ffilig: ffilig,
    fflig: fflig,
    ffllig: ffllig,
    Ffr: Ffr,
    ffr: ffr,
    filig: filig,
    FilledSmallSquare: FilledSmallSquare,
    FilledVerySmallSquare: FilledVerySmallSquare,
    fjlig: fjlig,
    flat: flat,
    fllig: fllig,
    fltns: fltns,
    fnof: fnof,
    Fopf: Fopf,
    fopf: fopf,
    forall: forall,
    ForAll: ForAll,
    fork: fork,
    forkv: forkv,
    Fouriertrf: Fouriertrf,
    fpartint: fpartint,
    frac12: frac12,
    frac13: frac13,
    frac14: frac14,
    frac15: frac15,
    frac16: frac16,
    frac18: frac18,
    frac23: frac23,
    frac25: frac25,
    frac34: frac34,
    frac35: frac35,
    frac38: frac38,
    frac45: frac45,
    frac56: frac56,
    frac58: frac58,
    frac78: frac78,
    frasl: frasl,
    frown: frown,
    fscr: fscr,
    Fscr: Fscr,
    gacute: gacute,
    Gamma: Gamma,
    gamma: gamma,
    Gammad: Gammad,
    gammad: gammad,
    gap: gap,
    Gbreve: Gbreve,
    gbreve: gbreve,
    Gcedil: Gcedil,
    Gcirc: Gcirc,
    gcirc: gcirc,
    Gcy: Gcy,
    gcy: gcy,
    Gdot: Gdot,
    gdot: gdot,
    ge: ge,
    gE: gE,
    gEl: gEl,
    gel: gel,
    geq: geq,
    geqq: geqq,
    geqslant: geqslant,
    gescc: gescc,
    ges: ges,
    gesdot: gesdot,
    gesdoto: gesdoto,
    gesdotol: gesdotol,
    gesl: gesl,
    gesles: gesles,
    Gfr: Gfr,
    gfr: gfr,
    gg: gg,
    Gg: Gg,
    ggg: ggg,
    gimel: gimel,
    GJcy: GJcy,
    gjcy: gjcy,
    gla: gla,
    gl: gl,
    glE: glE,
    glj: glj,
    gnap: gnap,
    gnapprox: gnapprox,
    gne: gne,
    gnE: gnE,
    gneq: gneq,
    gneqq: gneqq,
    gnsim: gnsim,
    Gopf: Gopf,
    gopf: gopf,
    grave: grave,
    GreaterEqual: GreaterEqual,
    GreaterEqualLess: GreaterEqualLess,
    GreaterFullEqual: GreaterFullEqual,
    GreaterGreater: GreaterGreater,
    GreaterLess: GreaterLess,
    GreaterSlantEqual: GreaterSlantEqual,
    GreaterTilde: GreaterTilde,
    Gscr: Gscr,
    gscr: gscr,
    gsim: gsim,
    gsime: gsime,
    gsiml: gsiml,
    gtcc: gtcc,
    gtcir: gtcir,
    gt: gt,
    GT: GT,
    Gt: Gt,
    gtdot: gtdot,
    gtlPar: gtlPar,
    gtquest: gtquest,
    gtrapprox: gtrapprox,
    gtrarr: gtrarr,
    gtrdot: gtrdot,
    gtreqless: gtreqless,
    gtreqqless: gtreqqless,
    gtrless: gtrless,
    gtrsim: gtrsim,
    gvertneqq: gvertneqq,
    gvnE: gvnE,
    Hacek: Hacek,
    hairsp: hairsp,
    half: half,
    hamilt: hamilt,
    HARDcy: HARDcy,
    hardcy: hardcy,
    harrcir: harrcir,
    harr: harr,
    hArr: hArr,
    harrw: harrw,
    Hat: Hat,
    hbar: hbar,
    Hcirc: Hcirc,
    hcirc: hcirc,
    hearts: hearts,
    heartsuit: heartsuit,
    hellip: hellip,
    hercon: hercon,
    hfr: hfr,
    Hfr: Hfr,
    HilbertSpace: HilbertSpace,
    hksearow: hksearow,
    hkswarow: hkswarow,
    hoarr: hoarr,
    homtht: homtht,
    hookleftarrow: hookleftarrow,
    hookrightarrow: hookrightarrow,
    hopf: hopf,
    Hopf: Hopf,
    horbar: horbar,
    HorizontalLine: HorizontalLine,
    hscr: hscr,
    Hscr: Hscr,
    hslash: hslash,
    Hstrok: Hstrok,
    hstrok: hstrok,
    HumpDownHump: HumpDownHump,
    HumpEqual: HumpEqual,
    hybull: hybull,
    hyphen: hyphen,
    Iacute: Iacute,
    iacute: iacute,
    ic: ic,
    Icirc: Icirc,
    icirc: icirc,
    Icy: Icy,
    icy: icy,
    Idot: Idot,
    IEcy: IEcy,
    iecy: iecy,
    iexcl: iexcl,
    iff: iff,
    ifr: ifr,
    Ifr: Ifr,
    Igrave: Igrave,
    igrave: igrave,
    ii: ii,
    iiiint: iiiint,
    iiint: iiint,
    iinfin: iinfin,
    iiota: iiota,
    IJlig: IJlig,
    ijlig: ijlig,
    Imacr: Imacr,
    imacr: imacr,
    image: image,
    ImaginaryI: ImaginaryI,
    imagline: imagline,
    imagpart: imagpart,
    imath: imath,
    Im: Im,
    imof: imof,
    imped: imped,
    Implies: Implies,
    incare: incare,
    in: "\u2208",
    infin: infin,
    infintie: infintie,
    inodot: inodot,
    intcal: intcal,
    int: int,
    Int: Int,
    integers: integers,
    Integral: Integral,
    intercal: intercal,
    Intersection: Intersection,
    intlarhk: intlarhk,
    intprod: intprod,
    InvisibleComma: InvisibleComma,
    InvisibleTimes: InvisibleTimes,
    IOcy: IOcy,
    iocy: iocy,
    Iogon: Iogon,
    iogon: iogon,
    Iopf: Iopf,
    iopf: iopf,
    Iota: Iota,
    iota: iota,
    iprod: iprod,
    iquest: iquest,
    iscr: iscr,
    Iscr: Iscr,
    isin: isin,
    isindot: isindot,
    isinE: isinE,
    isins: isins,
    isinsv: isinsv,
    isinv: isinv,
    it: it,
    Itilde: Itilde,
    itilde: itilde,
    Iukcy: Iukcy,
    iukcy: iukcy,
    Iuml: Iuml,
    iuml: iuml,
    Jcirc: Jcirc,
    jcirc: jcirc,
    Jcy: Jcy,
    jcy: jcy,
    Jfr: Jfr,
    jfr: jfr,
    jmath: jmath,
    Jopf: Jopf,
    jopf: jopf,
    Jscr: Jscr,
    jscr: jscr,
    Jsercy: Jsercy,
    jsercy: jsercy,
    Jukcy: Jukcy,
    jukcy: jukcy,
    Kappa: Kappa,
    kappa: kappa,
    kappav: kappav,
    Kcedil: Kcedil,
    kcedil: kcedil,
    Kcy: Kcy,
    kcy: kcy,
    Kfr: Kfr,
    kfr: kfr,
    kgreen: kgreen,
    KHcy: KHcy,
    khcy: khcy,
    KJcy: KJcy,
    kjcy: kjcy,
    Kopf: Kopf,
    kopf: kopf,
    Kscr: Kscr,
    kscr: kscr,
    lAarr: lAarr,
    Lacute: Lacute,
    lacute: lacute,
    laemptyv: laemptyv,
    lagran: lagran,
    Lambda: Lambda,
    lambda: lambda,
    lang: lang,
    Lang: Lang,
    langd: langd,
    langle: langle,
    lap: lap,
    Laplacetrf: Laplacetrf,
    laquo: laquo,
    larrb: larrb,
    larrbfs: larrbfs,
    larr: larr,
    Larr: Larr,
    lArr: lArr,
    larrfs: larrfs,
    larrhk: larrhk,
    larrlp: larrlp,
    larrpl: larrpl,
    larrsim: larrsim,
    larrtl: larrtl,
    latail: latail,
    lAtail: lAtail,
    lat: lat,
    late: late,
    lates: lates,
    lbarr: lbarr,
    lBarr: lBarr,
    lbbrk: lbbrk,
    lbrace: lbrace,
    lbrack: lbrack,
    lbrke: lbrke,
    lbrksld: lbrksld,
    lbrkslu: lbrkslu,
    Lcaron: Lcaron,
    lcaron: lcaron,
    Lcedil: Lcedil,
    lcedil: lcedil,
    lceil: lceil,
    lcub: lcub,
    Lcy: Lcy,
    lcy: lcy,
    ldca: ldca,
    ldquo: ldquo,
    ldquor: ldquor,
    ldrdhar: ldrdhar,
    ldrushar: ldrushar,
    ldsh: ldsh,
    le: le,
    lE: lE,
    LeftAngleBracket: LeftAngleBracket,
    LeftArrowBar: LeftArrowBar,
    leftarrow: leftarrow,
    LeftArrow: LeftArrow,
    Leftarrow: Leftarrow,
    LeftArrowRightArrow: LeftArrowRightArrow,
    leftarrowtail: leftarrowtail,
    LeftCeiling: LeftCeiling,
    LeftDoubleBracket: LeftDoubleBracket,
    LeftDownTeeVector: LeftDownTeeVector,
    LeftDownVectorBar: LeftDownVectorBar,
    LeftDownVector: LeftDownVector,
    LeftFloor: LeftFloor,
    leftharpoondown: leftharpoondown,
    leftharpoonup: leftharpoonup,
    leftleftarrows: leftleftarrows,
    leftrightarrow: leftrightarrow,
    LeftRightArrow: LeftRightArrow,
    Leftrightarrow: Leftrightarrow,
    leftrightarrows: leftrightarrows,
    leftrightharpoons: leftrightharpoons,
    leftrightsquigarrow: leftrightsquigarrow,
    LeftRightVector: LeftRightVector,
    LeftTeeArrow: LeftTeeArrow,
    LeftTee: LeftTee,
    LeftTeeVector: LeftTeeVector,
    leftthreetimes: leftthreetimes,
    LeftTriangleBar: LeftTriangleBar,
    LeftTriangle: LeftTriangle,
    LeftTriangleEqual: LeftTriangleEqual,
    LeftUpDownVector: LeftUpDownVector,
    LeftUpTeeVector: LeftUpTeeVector,
    LeftUpVectorBar: LeftUpVectorBar,
    LeftUpVector: LeftUpVector,
    LeftVectorBar: LeftVectorBar,
    LeftVector: LeftVector,
    lEg: lEg,
    leg: leg,
    leq: leq,
    leqq: leqq,
    leqslant: leqslant,
    lescc: lescc,
    les: les,
    lesdot: lesdot,
    lesdoto: lesdoto,
    lesdotor: lesdotor,
    lesg: lesg,
    lesges: lesges,
    lessapprox: lessapprox,
    lessdot: lessdot,
    lesseqgtr: lesseqgtr,
    lesseqqgtr: lesseqqgtr,
    LessEqualGreater: LessEqualGreater,
    LessFullEqual: LessFullEqual,
    LessGreater: LessGreater,
    lessgtr: lessgtr,
    LessLess: LessLess,
    lesssim: lesssim,
    LessSlantEqual: LessSlantEqual,
    LessTilde: LessTilde,
    lfisht: lfisht,
    lfloor: lfloor,
    Lfr: Lfr,
    lfr: lfr,
    lg: lg,
    lgE: lgE,
    lHar: lHar,
    lhard: lhard,
    lharu: lharu,
    lharul: lharul,
    lhblk: lhblk,
    LJcy: LJcy,
    ljcy: ljcy,
    llarr: llarr,
    ll: ll,
    Ll: Ll,
    llcorner: llcorner,
    Lleftarrow: Lleftarrow,
    llhard: llhard,
    lltri: lltri,
    Lmidot: Lmidot,
    lmidot: lmidot,
    lmoustache: lmoustache,
    lmoust: lmoust,
    lnap: lnap,
    lnapprox: lnapprox,
    lne: lne,
    lnE: lnE,
    lneq: lneq,
    lneqq: lneqq,
    lnsim: lnsim,
    loang: loang,
    loarr: loarr,
    lobrk: lobrk,
    longleftarrow: longleftarrow,
    LongLeftArrow: LongLeftArrow,
    Longleftarrow: Longleftarrow,
    longleftrightarrow: longleftrightarrow,
    LongLeftRightArrow: LongLeftRightArrow,
    Longleftrightarrow: Longleftrightarrow,
    longmapsto: longmapsto,
    longrightarrow: longrightarrow,
    LongRightArrow: LongRightArrow,
    Longrightarrow: Longrightarrow,
    looparrowleft: looparrowleft,
    looparrowright: looparrowright,
    lopar: lopar,
    Lopf: Lopf,
    lopf: lopf,
    loplus: loplus,
    lotimes: lotimes,
    lowast: lowast,
    lowbar: lowbar,
    LowerLeftArrow: LowerLeftArrow,
    LowerRightArrow: LowerRightArrow,
    loz: loz,
    lozenge: lozenge,
    lozf: lozf,
    lpar: lpar,
    lparlt: lparlt,
    lrarr: lrarr,
    lrcorner: lrcorner,
    lrhar: lrhar,
    lrhard: lrhard,
    lrm: lrm,
    lrtri: lrtri,
    lsaquo: lsaquo,
    lscr: lscr,
    Lscr: Lscr,
    lsh: lsh,
    Lsh: Lsh,
    lsim: lsim,
    lsime: lsime,
    lsimg: lsimg,
    lsqb: lsqb,
    lsquo: lsquo,
    lsquor: lsquor,
    Lstrok: Lstrok,
    lstrok: lstrok,
    ltcc: ltcc,
    ltcir: ltcir,
    lt: lt,
    LT: LT,
    Lt: Lt,
    ltdot: ltdot,
    lthree: lthree,
    ltimes: ltimes,
    ltlarr: ltlarr,
    ltquest: ltquest,
    ltri: ltri,
    ltrie: ltrie,
    ltrif: ltrif,
    ltrPar: ltrPar,
    lurdshar: lurdshar,
    luruhar: luruhar,
    lvertneqq: lvertneqq,
    lvnE: lvnE,
    macr: macr,
    male: male,
    malt: malt,
    maltese: maltese,
    Map: "\u2905",
    map: map,
    mapsto: mapsto,
    mapstodown: mapstodown,
    mapstoleft: mapstoleft,
    mapstoup: mapstoup,
    marker: marker,
    mcomma: mcomma,
    Mcy: Mcy,
    mcy: mcy,
    mdash: mdash,
    mDDot: mDDot,
    measuredangle: measuredangle,
    MediumSpace: MediumSpace,
    Mellintrf: Mellintrf,
    Mfr: Mfr,
    mfr: mfr,
    mho: mho,
    micro: micro,
    midast: midast,
    midcir: midcir,
    mid: mid,
    middot: middot,
    minusb: minusb,
    minus: minus,
    minusd: minusd,
    minusdu: minusdu,
    MinusPlus: MinusPlus,
    mlcp: mlcp,
    mldr: mldr,
    mnplus: mnplus,
    models: models,
    Mopf: Mopf,
    mopf: mopf,
    mp: mp,
    mscr: mscr,
    Mscr: Mscr,
    mstpos: mstpos,
    Mu: Mu,
    mu: mu,
    multimap: multimap,
    mumap: mumap,
    nabla: nabla,
    Nacute: Nacute,
    nacute: nacute,
    nang: nang,
    nap: nap,
    napE: napE,
    napid: napid,
    napos: napos,
    napprox: napprox,
    natural: natural,
    naturals: naturals,
    natur: natur,
    nbsp: nbsp,
    nbump: nbump,
    nbumpe: nbumpe,
    ncap: ncap,
    Ncaron: Ncaron,
    ncaron: ncaron,
    Ncedil: Ncedil,
    ncedil: ncedil,
    ncong: ncong,
    ncongdot: ncongdot,
    ncup: ncup,
    Ncy: Ncy,
    ncy: ncy,
    ndash: ndash,
    nearhk: nearhk,
    nearr: nearr,
    neArr: neArr,
    nearrow: nearrow,
    ne: ne,
    nedot: nedot,
    NegativeMediumSpace: NegativeMediumSpace,
    NegativeThickSpace: NegativeThickSpace,
    NegativeThinSpace: NegativeThinSpace,
    NegativeVeryThinSpace: NegativeVeryThinSpace,
    nequiv: nequiv,
    nesear: nesear,
    nesim: nesim,
    NestedGreaterGreater: NestedGreaterGreater,
    NestedLessLess: NestedLessLess,
    NewLine: NewLine,
    nexist: nexist,
    nexists: nexists,
    Nfr: Nfr,
    nfr: nfr,
    ngE: ngE,
    nge: nge,
    ngeq: ngeq,
    ngeqq: ngeqq,
    ngeqslant: ngeqslant,
    nges: nges,
    nGg: nGg,
    ngsim: ngsim,
    nGt: nGt,
    ngt: ngt,
    ngtr: ngtr,
    nGtv: nGtv,
    nharr: nharr,
    nhArr: nhArr,
    nhpar: nhpar,
    ni: ni,
    nis: nis,
    nisd: nisd,
    niv: niv,
    NJcy: NJcy,
    njcy: njcy,
    nlarr: nlarr,
    nlArr: nlArr,
    nldr: nldr,
    nlE: nlE,
    nle: nle,
    nleftarrow: nleftarrow,
    nLeftarrow: nLeftarrow,
    nleftrightarrow: nleftrightarrow,
    nLeftrightarrow: nLeftrightarrow,
    nleq: nleq,
    nleqq: nleqq,
    nleqslant: nleqslant,
    nles: nles,
    nless: nless,
    nLl: nLl,
    nlsim: nlsim,
    nLt: nLt,
    nlt: nlt,
    nltri: nltri,
    nltrie: nltrie,
    nLtv: nLtv,
    nmid: nmid,
    NoBreak: NoBreak,
    NonBreakingSpace: NonBreakingSpace,
    nopf: nopf,
    Nopf: Nopf,
    Not: Not,
    not: not,
    NotCongruent: NotCongruent,
    NotCupCap: NotCupCap,
    NotDoubleVerticalBar: NotDoubleVerticalBar,
    NotElement: NotElement,
    NotEqual: NotEqual,
    NotEqualTilde: NotEqualTilde,
    NotExists: NotExists,
    NotGreater: NotGreater,
    NotGreaterEqual: NotGreaterEqual,
    NotGreaterFullEqual: NotGreaterFullEqual,
    NotGreaterGreater: NotGreaterGreater,
    NotGreaterLess: NotGreaterLess,
    NotGreaterSlantEqual: NotGreaterSlantEqual,
    NotGreaterTilde: NotGreaterTilde,
    NotHumpDownHump: NotHumpDownHump,
    NotHumpEqual: NotHumpEqual,
    notin: notin,
    notindot: notindot,
    notinE: notinE,
    notinva: notinva,
    notinvb: notinvb,
    notinvc: notinvc,
    NotLeftTriangleBar: NotLeftTriangleBar,
    NotLeftTriangle: NotLeftTriangle,
    NotLeftTriangleEqual: NotLeftTriangleEqual,
    NotLess: NotLess,
    NotLessEqual: NotLessEqual,
    NotLessGreater: NotLessGreater,
    NotLessLess: NotLessLess,
    NotLessSlantEqual: NotLessSlantEqual,
    NotLessTilde: NotLessTilde,
    NotNestedGreaterGreater: NotNestedGreaterGreater,
    NotNestedLessLess: NotNestedLessLess,
    notni: notni,
    notniva: notniva,
    notnivb: notnivb,
    notnivc: notnivc,
    NotPrecedes: NotPrecedes,
    NotPrecedesEqual: NotPrecedesEqual,
    NotPrecedesSlantEqual: NotPrecedesSlantEqual,
    NotReverseElement: NotReverseElement,
    NotRightTriangleBar: NotRightTriangleBar,
    NotRightTriangle: NotRightTriangle,
    NotRightTriangleEqual: NotRightTriangleEqual,
    NotSquareSubset: NotSquareSubset,
    NotSquareSubsetEqual: NotSquareSubsetEqual,
    NotSquareSuperset: NotSquareSuperset,
    NotSquareSupersetEqual: NotSquareSupersetEqual,
    NotSubset: NotSubset,
    NotSubsetEqual: NotSubsetEqual,
    NotSucceeds: NotSucceeds,
    NotSucceedsEqual: NotSucceedsEqual,
    NotSucceedsSlantEqual: NotSucceedsSlantEqual,
    NotSucceedsTilde: NotSucceedsTilde,
    NotSuperset: NotSuperset,
    NotSupersetEqual: NotSupersetEqual,
    NotTilde: NotTilde,
    NotTildeEqual: NotTildeEqual,
    NotTildeFullEqual: NotTildeFullEqual,
    NotTildeTilde: NotTildeTilde,
    NotVerticalBar: NotVerticalBar,
    nparallel: nparallel,
    npar: npar,
    nparsl: nparsl,
    npart: npart,
    npolint: npolint,
    npr: npr,
    nprcue: nprcue,
    nprec: nprec,
    npreceq: npreceq,
    npre: npre,
    nrarrc: nrarrc,
    nrarr: nrarr,
    nrArr: nrArr,
    nrarrw: nrarrw,
    nrightarrow: nrightarrow,
    nRightarrow: nRightarrow,
    nrtri: nrtri,
    nrtrie: nrtrie,
    nsc: nsc,
    nsccue: nsccue,
    nsce: nsce,
    Nscr: Nscr,
    nscr: nscr,
    nshortmid: nshortmid,
    nshortparallel: nshortparallel,
    nsim: nsim,
    nsime: nsime,
    nsimeq: nsimeq,
    nsmid: nsmid,
    nspar: nspar,
    nsqsube: nsqsube,
    nsqsupe: nsqsupe,
    nsub: nsub,
    nsubE: nsubE,
    nsube: nsube,
    nsubset: nsubset,
    nsubseteq: nsubseteq,
    nsubseteqq: nsubseteqq,
    nsucc: nsucc,
    nsucceq: nsucceq,
    nsup: nsup,
    nsupE: nsupE,
    nsupe: nsupe,
    nsupset: nsupset,
    nsupseteq: nsupseteq,
    nsupseteqq: nsupseteqq,
    ntgl: ntgl,
    Ntilde: Ntilde,
    ntilde: ntilde,
    ntlg: ntlg,
    ntriangleleft: ntriangleleft,
    ntrianglelefteq: ntrianglelefteq,
    ntriangleright: ntriangleright,
    ntrianglerighteq: ntrianglerighteq,
    Nu: Nu,
    nu: nu,
    num: num,
    numero: numero,
    numsp: numsp,
    nvap: nvap,
    nvdash: nvdash,
    nvDash: nvDash,
    nVdash: nVdash,
    nVDash: nVDash,
    nvge: nvge,
    nvgt: nvgt,
    nvHarr: nvHarr,
    nvinfin: nvinfin,
    nvlArr: nvlArr,
    nvle: nvle,
    nvlt: nvlt,
    nvltrie: nvltrie,
    nvrArr: nvrArr,
    nvrtrie: nvrtrie,
    nvsim: nvsim,
    nwarhk: nwarhk,
    nwarr: nwarr,
    nwArr: nwArr,
    nwarrow: nwarrow,
    nwnear: nwnear,
    Oacute: Oacute,
    oacute: oacute,
    oast: oast,
    Ocirc: Ocirc,
    ocirc: ocirc,
    ocir: ocir,
    Ocy: Ocy,
    ocy: ocy,
    odash: odash,
    Odblac: Odblac,
    odblac: odblac,
    odiv: odiv,
    odot: odot,
    odsold: odsold,
    OElig: OElig,
    oelig: oelig,
    ofcir: ofcir,
    Ofr: Ofr,
    ofr: ofr,
    ogon: ogon,
    Ograve: Ograve,
    ograve: ograve,
    ogt: ogt,
    ohbar: ohbar,
    ohm: ohm,
    oint: oint,
    olarr: olarr,
    olcir: olcir,
    olcross: olcross,
    oline: oline,
    olt: olt,
    Omacr: Omacr,
    omacr: omacr,
    Omega: Omega,
    omega: omega,
    Omicron: Omicron,
    omicron: omicron,
    omid: omid,
    ominus: ominus,
    Oopf: Oopf,
    oopf: oopf,
    opar: opar,
    OpenCurlyDoubleQuote: OpenCurlyDoubleQuote,
    OpenCurlyQuote: OpenCurlyQuote,
    operp: operp,
    oplus: oplus,
    orarr: orarr,
    Or: Or,
    or: or,
    ord: ord,
    order: order,
    orderof: orderof,
    ordf: ordf,
    ordm: ordm,
    origof: origof,
    oror: oror,
    orslope: orslope,
    orv: orv,
    oS: oS,
    Oscr: Oscr,
    oscr: oscr,
    Oslash: Oslash,
    oslash: oslash,
    osol: osol,
    Otilde: Otilde,
    otilde: otilde,
    otimesas: otimesas,
    Otimes: Otimes,
    otimes: otimes,
    Ouml: Ouml,
    ouml: ouml,
    ovbar: ovbar,
    OverBar: OverBar,
    OverBrace: OverBrace,
    OverBracket: OverBracket,
    OverParenthesis: OverParenthesis,
    para: para,
    parallel: parallel,
    par: par,
    parsim: parsim,
    parsl: parsl,
    part: part,
    PartialD: PartialD,
    Pcy: Pcy,
    pcy: pcy,
    percnt: percnt,
    period: period,
    permil: permil,
    perp: perp,
    pertenk: pertenk,
    Pfr: Pfr,
    pfr: pfr,
    Phi: Phi,
    phi: phi,
    phiv: phiv,
    phmmat: phmmat,
    phone: phone,
    Pi: Pi,
    pi: pi,
    pitchfork: pitchfork,
    piv: piv,
    planck: planck,
    planckh: planckh,
    plankv: plankv,
    plusacir: plusacir,
    plusb: plusb,
    pluscir: pluscir,
    plus: plus,
    plusdo: plusdo,
    plusdu: plusdu,
    pluse: pluse,
    PlusMinus: PlusMinus,
    plusmn: plusmn,
    plussim: plussim,
    plustwo: plustwo,
    pm: pm,
    Poincareplane: Poincareplane,
    pointint: pointint,
    popf: popf,
    Popf: Popf,
    pound: pound,
    prap: prap,
    Pr: Pr,
    pr: pr,
    prcue: prcue,
    precapprox: precapprox,
    prec: prec,
    preccurlyeq: preccurlyeq,
    Precedes: Precedes,
    PrecedesEqual: PrecedesEqual,
    PrecedesSlantEqual: PrecedesSlantEqual,
    PrecedesTilde: PrecedesTilde,
    preceq: preceq,
    precnapprox: precnapprox,
    precneqq: precneqq,
    precnsim: precnsim,
    pre: pre,
    prE: prE,
    precsim: precsim,
    prime: prime,
    Prime: Prime,
    primes: primes,
    prnap: prnap,
    prnE: prnE,
    prnsim: prnsim,
    prod: prod,
    Product: Product,
    profalar: profalar,
    profline: profline,
    profsurf: profsurf,
    prop: prop,
    Proportional: Proportional,
    Proportion: Proportion,
    propto: propto,
    prsim: prsim,
    prurel: prurel,
    Pscr: Pscr,
    pscr: pscr,
    Psi: Psi,
    psi: psi,
    puncsp: puncsp,
    Qfr: Qfr,
    qfr: qfr,
    qint: qint,
    qopf: qopf,
    Qopf: Qopf,
    qprime: qprime,
    Qscr: Qscr,
    qscr: qscr,
    quaternions: quaternions,
    quatint: quatint,
    quest: quest,
    questeq: questeq,
    quot: quot,
    QUOT: QUOT,
    rAarr: rAarr,
    race: race,
    Racute: Racute,
    racute: racute,
    radic: radic,
    raemptyv: raemptyv,
    rang: rang,
    Rang: Rang,
    rangd: rangd,
    range: range,
    rangle: rangle,
    raquo: raquo,
    rarrap: rarrap,
    rarrb: rarrb,
    rarrbfs: rarrbfs,
    rarrc: rarrc,
    rarr: rarr,
    Rarr: Rarr,
    rArr: rArr,
    rarrfs: rarrfs,
    rarrhk: rarrhk,
    rarrlp: rarrlp,
    rarrpl: rarrpl,
    rarrsim: rarrsim,
    Rarrtl: Rarrtl,
    rarrtl: rarrtl,
    rarrw: rarrw,
    ratail: ratail,
    rAtail: rAtail,
    ratio: ratio,
    rationals: rationals,
    rbarr: rbarr,
    rBarr: rBarr,
    RBarr: RBarr,
    rbbrk: rbbrk,
    rbrace: rbrace,
    rbrack: rbrack,
    rbrke: rbrke,
    rbrksld: rbrksld,
    rbrkslu: rbrkslu,
    Rcaron: Rcaron,
    rcaron: rcaron,
    Rcedil: Rcedil,
    rcedil: rcedil,
    rceil: rceil,
    rcub: rcub,
    Rcy: Rcy,
    rcy: rcy,
    rdca: rdca,
    rdldhar: rdldhar,
    rdquo: rdquo,
    rdquor: rdquor,
    rdsh: rdsh,
    real: real,
    realine: realine,
    realpart: realpart,
    reals: reals,
    Re: Re,
    rect: rect,
    reg: reg,
    REG: REG,
    ReverseElement: ReverseElement,
    ReverseEquilibrium: ReverseEquilibrium,
    ReverseUpEquilibrium: ReverseUpEquilibrium,
    rfisht: rfisht,
    rfloor: rfloor,
    rfr: rfr,
    Rfr: Rfr,
    rHar: rHar,
    rhard: rhard,
    rharu: rharu,
    rharul: rharul,
    Rho: Rho,
    rho: rho,
    rhov: rhov,
    RightAngleBracket: RightAngleBracket,
    RightArrowBar: RightArrowBar,
    rightarrow: rightarrow,
    RightArrow: RightArrow,
    Rightarrow: Rightarrow,
    RightArrowLeftArrow: RightArrowLeftArrow,
    rightarrowtail: rightarrowtail,
    RightCeiling: RightCeiling,
    RightDoubleBracket: RightDoubleBracket,
    RightDownTeeVector: RightDownTeeVector,
    RightDownVectorBar: RightDownVectorBar,
    RightDownVector: RightDownVector,
    RightFloor: RightFloor,
    rightharpoondown: rightharpoondown,
    rightharpoonup: rightharpoonup,
    rightleftarrows: rightleftarrows,
    rightleftharpoons: rightleftharpoons,
    rightrightarrows: rightrightarrows,
    rightsquigarrow: rightsquigarrow,
    RightTeeArrow: RightTeeArrow,
    RightTee: RightTee,
    RightTeeVector: RightTeeVector,
    rightthreetimes: rightthreetimes,
    RightTriangleBar: RightTriangleBar,
    RightTriangle: RightTriangle,
    RightTriangleEqual: RightTriangleEqual,
    RightUpDownVector: RightUpDownVector,
    RightUpTeeVector: RightUpTeeVector,
    RightUpVectorBar: RightUpVectorBar,
    RightUpVector: RightUpVector,
    RightVectorBar: RightVectorBar,
    RightVector: RightVector,
    ring: ring,
    risingdotseq: risingdotseq,
    rlarr: rlarr,
    rlhar: rlhar,
    rlm: rlm,
    rmoustache: rmoustache,
    rmoust: rmoust,
    rnmid: rnmid,
    roang: roang,
    roarr: roarr,
    robrk: robrk,
    ropar: ropar,
    ropf: ropf,
    Ropf: Ropf,
    roplus: roplus,
    rotimes: rotimes,
    RoundImplies: RoundImplies,
    rpar: rpar,
    rpargt: rpargt,
    rppolint: rppolint,
    rrarr: rrarr,
    Rrightarrow: Rrightarrow,
    rsaquo: rsaquo,
    rscr: rscr,
    Rscr: Rscr,
    rsh: rsh,
    Rsh: Rsh,
    rsqb: rsqb,
    rsquo: rsquo,
    rsquor: rsquor,
    rthree: rthree,
    rtimes: rtimes,
    rtri: rtri,
    rtrie: rtrie,
    rtrif: rtrif,
    rtriltri: rtriltri,
    RuleDelayed: RuleDelayed,
    ruluhar: ruluhar,
    rx: rx,
    Sacute: Sacute,
    sacute: sacute,
    sbquo: sbquo,
    scap: scap,
    Scaron: Scaron,
    scaron: scaron,
    Sc: Sc,
    sc: sc,
    sccue: sccue,
    sce: sce,
    scE: scE,
    Scedil: Scedil,
    scedil: scedil,
    Scirc: Scirc,
    scirc: scirc,
    scnap: scnap,
    scnE: scnE,
    scnsim: scnsim,
    scpolint: scpolint,
    scsim: scsim,
    Scy: Scy,
    scy: scy,
    sdotb: sdotb,
    sdot: sdot,
    sdote: sdote,
    searhk: searhk,
    searr: searr,
    seArr: seArr,
    searrow: searrow,
    sect: sect,
    semi: semi,
    seswar: seswar,
    setminus: setminus,
    setmn: setmn,
    sext: sext,
    Sfr: Sfr,
    sfr: sfr,
    sfrown: sfrown,
    sharp: sharp,
    SHCHcy: SHCHcy,
    shchcy: shchcy,
    SHcy: SHcy,
    shcy: shcy,
    ShortDownArrow: ShortDownArrow,
    ShortLeftArrow: ShortLeftArrow,
    shortmid: shortmid,
    shortparallel: shortparallel,
    ShortRightArrow: ShortRightArrow,
    ShortUpArrow: ShortUpArrow,
    shy: shy,
    Sigma: Sigma,
    sigma: sigma,
    sigmaf: sigmaf,
    sigmav: sigmav,
    sim: sim,
    simdot: simdot,
    sime: sime,
    simeq: simeq,
    simg: simg,
    simgE: simgE,
    siml: siml,
    simlE: simlE,
    simne: simne,
    simplus: simplus,
    simrarr: simrarr,
    slarr: slarr,
    SmallCircle: SmallCircle,
    smallsetminus: smallsetminus,
    smashp: smashp,
    smeparsl: smeparsl,
    smid: smid,
    smile: smile,
    smt: smt,
    smte: smte,
    smtes: smtes,
    SOFTcy: SOFTcy,
    softcy: softcy,
    solbar: solbar,
    solb: solb,
    sol: sol,
    Sopf: Sopf,
    sopf: sopf,
    spades: spades,
    spadesuit: spadesuit,
    spar: spar,
    sqcap: sqcap,
    sqcaps: sqcaps,
    sqcup: sqcup,
    sqcups: sqcups,
    Sqrt: Sqrt,
    sqsub: sqsub,
    sqsube: sqsube,
    sqsubset: sqsubset,
    sqsubseteq: sqsubseteq,
    sqsup: sqsup,
    sqsupe: sqsupe,
    sqsupset: sqsupset,
    sqsupseteq: sqsupseteq,
    square: square,
    Square: Square,
    SquareIntersection: SquareIntersection,
    SquareSubset: SquareSubset,
    SquareSubsetEqual: SquareSubsetEqual,
    SquareSuperset: SquareSuperset,
    SquareSupersetEqual: SquareSupersetEqual,
    SquareUnion: SquareUnion,
    squarf: squarf,
    squ: squ,
    squf: squf,
    srarr: srarr,
    Sscr: Sscr,
    sscr: sscr,
    ssetmn: ssetmn,
    ssmile: ssmile,
    sstarf: sstarf,
    Star: Star,
    star: star,
    starf: starf,
    straightepsilon: straightepsilon,
    straightphi: straightphi,
    strns: strns,
    sub: sub,
    Sub: Sub,
    subdot: subdot,
    subE: subE,
    sube: sube,
    subedot: subedot,
    submult: submult,
    subnE: subnE,
    subne: subne,
    subplus: subplus,
    subrarr: subrarr,
    subset: subset,
    Subset: Subset,
    subseteq: subseteq,
    subseteqq: subseteqq,
    SubsetEqual: SubsetEqual,
    subsetneq: subsetneq,
    subsetneqq: subsetneqq,
    subsim: subsim,
    subsub: subsub,
    subsup: subsup,
    succapprox: succapprox,
    succ: succ,
    succcurlyeq: succcurlyeq,
    Succeeds: Succeeds,
    SucceedsEqual: SucceedsEqual,
    SucceedsSlantEqual: SucceedsSlantEqual,
    SucceedsTilde: SucceedsTilde,
    succeq: succeq,
    succnapprox: succnapprox,
    succneqq: succneqq,
    succnsim: succnsim,
    succsim: succsim,
    SuchThat: SuchThat,
    sum: sum,
    Sum: Sum,
    sung: sung,
    sup1: sup1,
    sup2: sup2,
    sup3: sup3,
    sup: sup,
    Sup: Sup,
    supdot: supdot,
    supdsub: supdsub,
    supE: supE,
    supe: supe,
    supedot: supedot,
    Superset: Superset,
    SupersetEqual: SupersetEqual,
    suphsol: suphsol,
    suphsub: suphsub,
    suplarr: suplarr,
    supmult: supmult,
    supnE: supnE,
    supne: supne,
    supplus: supplus,
    supset: supset,
    Supset: Supset,
    supseteq: supseteq,
    supseteqq: supseteqq,
    supsetneq: supsetneq,
    supsetneqq: supsetneqq,
    supsim: supsim,
    supsub: supsub,
    supsup: supsup,
    swarhk: swarhk,
    swarr: swarr,
    swArr: swArr,
    swarrow: swarrow,
    swnwar: swnwar,
    szlig: szlig,
    Tab: Tab,
    target: target,
    Tau: Tau,
    tau: tau,
    tbrk: tbrk,
    Tcaron: Tcaron,
    tcaron: tcaron,
    Tcedil: Tcedil,
    tcedil: tcedil,
    Tcy: Tcy,
    tcy: tcy,
    tdot: tdot,
    telrec: telrec,
    Tfr: Tfr,
    tfr: tfr,
    there4: there4,
    therefore: therefore,
    Therefore: Therefore,
    Theta: Theta,
    theta: theta,
    thetasym: thetasym,
    thetav: thetav,
    thickapprox: thickapprox,
    thicksim: thicksim,
    ThickSpace: ThickSpace,
    ThinSpace: ThinSpace,
    thinsp: thinsp,
    thkap: thkap,
    thksim: thksim,
    THORN: THORN,
    thorn: thorn,
    tilde: tilde,
    Tilde: Tilde,
    TildeEqual: TildeEqual,
    TildeFullEqual: TildeFullEqual,
    TildeTilde: TildeTilde,
    timesbar: timesbar,
    timesb: timesb,
    times: times,
    timesd: timesd,
    tint: tint,
    toea: toea,
    topbot: topbot,
    topcir: topcir,
    top: top,
    Topf: Topf,
    topf: topf,
    topfork: topfork,
    tosa: tosa,
    tprime: tprime,
    trade: trade,
    TRADE: TRADE,
    triangle: triangle,
    triangledown: triangledown,
    triangleleft: triangleleft,
    trianglelefteq: trianglelefteq,
    triangleq: triangleq,
    triangleright: triangleright,
    trianglerighteq: trianglerighteq,
    tridot: tridot,
    trie: trie,
    triminus: triminus,
    TripleDot: TripleDot,
    triplus: triplus,
    trisb: trisb,
    tritime: tritime,
    trpezium: trpezium,
    Tscr: Tscr,
    tscr: tscr,
    TScy: TScy,
    tscy: tscy,
    TSHcy: TSHcy,
    tshcy: tshcy,
    Tstrok: Tstrok,
    tstrok: tstrok,
    twixt: twixt,
    twoheadleftarrow: twoheadleftarrow,
    twoheadrightarrow: twoheadrightarrow,
    Uacute: Uacute,
    uacute: uacute,
    uarr: uarr,
    Uarr: Uarr,
    uArr: uArr,
    Uarrocir: Uarrocir,
    Ubrcy: Ubrcy,
    ubrcy: ubrcy,
    Ubreve: Ubreve,
    ubreve: ubreve,
    Ucirc: Ucirc,
    ucirc: ucirc,
    Ucy: Ucy,
    ucy: ucy,
    udarr: udarr,
    Udblac: Udblac,
    udblac: udblac,
    udhar: udhar,
    ufisht: ufisht,
    Ufr: Ufr,
    ufr: ufr,
    Ugrave: Ugrave,
    ugrave: ugrave,
    uHar: uHar,
    uharl: uharl,
    uharr: uharr,
    uhblk: uhblk,
    ulcorn: ulcorn,
    ulcorner: ulcorner,
    ulcrop: ulcrop,
    ultri: ultri,
    Umacr: Umacr,
    umacr: umacr,
    uml: uml,
    UnderBar: UnderBar,
    UnderBrace: UnderBrace,
    UnderBracket: UnderBracket,
    UnderParenthesis: UnderParenthesis,
    Union: Union,
    UnionPlus: UnionPlus,
    Uogon: Uogon,
    uogon: uogon,
    Uopf: Uopf,
    uopf: uopf,
    UpArrowBar: UpArrowBar,
    uparrow: uparrow,
    UpArrow: UpArrow,
    Uparrow: Uparrow,
    UpArrowDownArrow: UpArrowDownArrow,
    updownarrow: updownarrow,
    UpDownArrow: UpDownArrow,
    Updownarrow: Updownarrow,
    UpEquilibrium: UpEquilibrium,
    upharpoonleft: upharpoonleft,
    upharpoonright: upharpoonright,
    uplus: uplus,
    UpperLeftArrow: UpperLeftArrow,
    UpperRightArrow: UpperRightArrow,
    upsi: upsi,
    Upsi: Upsi,
    upsih: upsih,
    Upsilon: Upsilon,
    upsilon: upsilon,
    UpTeeArrow: UpTeeArrow,
    UpTee: UpTee,
    upuparrows: upuparrows,
    urcorn: urcorn,
    urcorner: urcorner,
    urcrop: urcrop,
    Uring: Uring,
    uring: uring,
    urtri: urtri,
    Uscr: Uscr,
    uscr: uscr,
    utdot: utdot,
    Utilde: Utilde,
    utilde: utilde,
    utri: utri,
    utrif: utrif,
    uuarr: uuarr,
    Uuml: Uuml,
    uuml: uuml,
    uwangle: uwangle,
    vangrt: vangrt,
    varepsilon: varepsilon,
    varkappa: varkappa,
    varnothing: varnothing,
    varphi: varphi,
    varpi: varpi,
    varpropto: varpropto,
    varr: varr,
    vArr: vArr,
    varrho: varrho,
    varsigma: varsigma,
    varsubsetneq: varsubsetneq,
    varsubsetneqq: varsubsetneqq,
    varsupsetneq: varsupsetneq,
    varsupsetneqq: varsupsetneqq,
    vartheta: vartheta,
    vartriangleleft: vartriangleleft,
    vartriangleright: vartriangleright,
    vBar: vBar,
    Vbar: Vbar,
    vBarv: vBarv,
    Vcy: Vcy,
    vcy: vcy,
    vdash: vdash,
    vDash: vDash,
    Vdash: Vdash,
    VDash: VDash,
    Vdashl: Vdashl,
    veebar: veebar,
    vee: vee,
    Vee: Vee,
    veeeq: veeeq,
    vellip: vellip,
    verbar: verbar,
    Verbar: Verbar,
    vert: vert,
    Vert: Vert,
    VerticalBar: VerticalBar,
    VerticalLine: VerticalLine,
    VerticalSeparator: VerticalSeparator,
    VerticalTilde: VerticalTilde,
    VeryThinSpace: VeryThinSpace,
    Vfr: Vfr,
    vfr: vfr,
    vltri: vltri,
    vnsub: vnsub,
    vnsup: vnsup,
    Vopf: Vopf,
    vopf: vopf,
    vprop: vprop,
    vrtri: vrtri,
    Vscr: Vscr,
    vscr: vscr,
    vsubnE: vsubnE,
    vsubne: vsubne,
    vsupnE: vsupnE,
    vsupne: vsupne,
    Vvdash: Vvdash,
    vzigzag: vzigzag,
    Wcirc: Wcirc,
    wcirc: wcirc,
    wedbar: wedbar,
    wedge: wedge,
    Wedge: Wedge,
    wedgeq: wedgeq,
    weierp: weierp,
    Wfr: Wfr,
    wfr: wfr,
    Wopf: Wopf,
    wopf: wopf,
    wp: wp,
    wr: wr,
    wreath: wreath,
    Wscr: Wscr,
    wscr: wscr,
    xcap: xcap,
    xcirc: xcirc,
    xcup: xcup,
    xdtri: xdtri,
    Xfr: Xfr,
    xfr: xfr,
    xharr: xharr,
    xhArr: xhArr,
    Xi: Xi,
    xi: xi,
    xlarr: xlarr,
    xlArr: xlArr,
    xmap: xmap,
    xnis: xnis,
    xodot: xodot,
    Xopf: Xopf,
    xopf: xopf,
    xoplus: xoplus,
    xotime: xotime,
    xrarr: xrarr,
    xrArr: xrArr,
    Xscr: Xscr,
    xscr: xscr,
    xsqcup: xsqcup,
    xuplus: xuplus,
    xutri: xutri,
    xvee: xvee,
    xwedge: xwedge,
    Yacute: Yacute,
    yacute: yacute,
    YAcy: YAcy,
    yacy: yacy,
    Ycirc: Ycirc,
    ycirc: ycirc,
    Ycy: Ycy,
    ycy: ycy,
    yen: yen,
    Yfr: Yfr,
    yfr: yfr,
    YIcy: YIcy,
    yicy: yicy,
    Yopf: Yopf,
    yopf: yopf,
    Yscr: Yscr,
    yscr: yscr,
    YUcy: YUcy,
    yucy: yucy,
    yuml: yuml,
    Yuml: Yuml,
    Zacute: Zacute,
    zacute: zacute,
    Zcaron: Zcaron,
    zcaron: zcaron,
    Zcy: Zcy,
    zcy: zcy,
    Zdot: Zdot,
    zdot: zdot,
    zeetrf: zeetrf,
    ZeroWidthSpace: ZeroWidthSpace,
    Zeta: Zeta,
    zeta: zeta,
    zfr: zfr,
    Zfr: Zfr,
    ZHcy: ZHcy,
    zhcy: zhcy,
    zigrarr: zigrarr,
    zopf: zopf,
    Zopf: Zopf,
    Zscr: Zscr,
    zscr: zscr,
    zwj: zwj,
    zwnj: zwnj
  };
  /*eslint quotes:0*/  var entities = require$$0;
  var regex = /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/;
  var encodeCache = {};
  // Create a lookup array where anything but characters in `chars` string
  // and alphanumeric chars is percent-encoded.
  
    function getEncodeCache(exclude) {
    var i, ch, cache = encodeCache[exclude];
    if (cache) {
      return cache;
    }
    cache = encodeCache[exclude] = [];
    for (i = 0; i < 128; i++) {
      ch = String.fromCharCode(i);
      if (/^[0-9a-z]$/i.test(ch)) {
        // always allow unencoded alphanumeric characters
        cache.push(ch);
      } else {
        cache.push("%" + ("0" + i.toString(16).toUpperCase()).slice(-2));
      }
    }
    for (i = 0; i < exclude.length; i++) {
      cache[exclude.charCodeAt(i)] = exclude[i];
    }
    return cache;
  }
  // Encode unsafe characters with percent-encoding, skipping already
  // encoded sequences.
  
  //  - string       - string to encode
  //  - exclude      - list of characters to ignore (in addition to a-zA-Z0-9)
  //  - keepEscaped  - don't encode '%' in a correct escape sequence (default: true)
  
    function encode(string, exclude, keepEscaped) {
    var i, l, code, nextCode, cache, result = "";
    if (typeof exclude !== "string") {
      // encode(string, keepEscaped)
      keepEscaped = exclude;
      exclude = encode.defaultChars;
    }
    if (typeof keepEscaped === "undefined") {
      keepEscaped = true;
    }
    cache = getEncodeCache(exclude);
    for (i = 0, l = string.length; i < l; i++) {
      code = string.charCodeAt(i);
      if (keepEscaped && code === 37 /* % */ && i + 2 < l) {
        if (/^[0-9a-f]{2}$/i.test(string.slice(i + 1, i + 3))) {
          result += string.slice(i, i + 3);
          i += 2;
          continue;
        }
      }
      if (code < 128) {
        result += cache[code];
        continue;
      }
      if (code >= 55296 && code <= 57343) {
        if (code >= 55296 && code <= 56319 && i + 1 < l) {
          nextCode = string.charCodeAt(i + 1);
          if (nextCode >= 56320 && nextCode <= 57343) {
            result += encodeURIComponent(string[i] + string[i + 1]);
            i++;
            continue;
          }
        }
        result += "%EF%BF%BD";
        continue;
      }
      result += encodeURIComponent(string[i]);
    }
    return result;
  }
  encode.defaultChars = ";/?:@&=+$,-_.!~*'()#";
  encode.componentChars = "-_.!~*'()";
  var encode_1 = encode;
  /* eslint-disable no-bitwise */  var decodeCache = {};
  function getDecodeCache(exclude) {
    var i, ch, cache = decodeCache[exclude];
    if (cache) {
      return cache;
    }
    cache = decodeCache[exclude] = [];
    for (i = 0; i < 128; i++) {
      ch = String.fromCharCode(i);
      cache.push(ch);
    }
    for (i = 0; i < exclude.length; i++) {
      ch = exclude.charCodeAt(i);
      cache[ch] = "%" + ("0" + ch.toString(16).toUpperCase()).slice(-2);
    }
    return cache;
  }
  // Decode percent-encoded string.
  
    function decode(string, exclude) {
    var cache;
    if (typeof exclude !== "string") {
      exclude = decode.defaultChars;
    }
    cache = getDecodeCache(exclude);
    return string.replace(/(%[a-f0-9]{2})+/gi, (function(seq) {
      var i, l, b1, b2, b3, b4, chr, result = "";
      for (i = 0, l = seq.length; i < l; i += 3) {
        b1 = parseInt(seq.slice(i + 1, i + 3), 16);
        if (b1 < 128) {
          result += cache[b1];
          continue;
        }
        if ((b1 & 224) === 192 && i + 3 < l) {
          // 110xxxxx 10xxxxxx
          b2 = parseInt(seq.slice(i + 4, i + 6), 16);
          if ((b2 & 192) === 128) {
            chr = b1 << 6 & 1984 | b2 & 63;
            if (chr < 128) {
              result += "\ufffd\ufffd";
            } else {
              result += String.fromCharCode(chr);
            }
            i += 3;
            continue;
          }
        }
        if ((b1 & 240) === 224 && i + 6 < l) {
          // 1110xxxx 10xxxxxx 10xxxxxx
          b2 = parseInt(seq.slice(i + 4, i + 6), 16);
          b3 = parseInt(seq.slice(i + 7, i + 9), 16);
          if ((b2 & 192) === 128 && (b3 & 192) === 128) {
            chr = b1 << 12 & 61440 | b2 << 6 & 4032 | b3 & 63;
            if (chr < 2048 || chr >= 55296 && chr <= 57343) {
              result += "\ufffd\ufffd\ufffd";
            } else {
              result += String.fromCharCode(chr);
            }
            i += 6;
            continue;
          }
        }
        if ((b1 & 248) === 240 && i + 9 < l) {
          // 111110xx 10xxxxxx 10xxxxxx 10xxxxxx
          b2 = parseInt(seq.slice(i + 4, i + 6), 16);
          b3 = parseInt(seq.slice(i + 7, i + 9), 16);
          b4 = parseInt(seq.slice(i + 10, i + 12), 16);
          if ((b2 & 192) === 128 && (b3 & 192) === 128 && (b4 & 192) === 128) {
            chr = b1 << 18 & 1835008 | b2 << 12 & 258048 | b3 << 6 & 4032 | b4 & 63;
            if (chr < 65536 || chr > 1114111) {
              result += "\ufffd\ufffd\ufffd\ufffd";
            } else {
              chr -= 65536;
              result += String.fromCharCode(55296 + (chr >> 10), 56320 + (chr & 1023));
            }
            i += 9;
            continue;
          }
        }
        result += "\ufffd";
      }
      return result;
    }));
  }
  decode.defaultChars = ";/?:@&=+$,#";
  decode.componentChars = "";
  var decode_1 = decode;
  var format = function format(url) {
    var result = "";
    result += url.protocol || "";
    result += url.slashes ? "//" : "";
    result += url.auth ? url.auth + "@" : "";
    if (url.hostname && url.hostname.indexOf(":") !== -1) {
      // ipv6 address
      result += "[" + url.hostname + "]";
    } else {
      result += url.hostname || "";
    }
    result += url.port ? ":" + url.port : "";
    result += url.pathname || "";
    result += url.search || "";
    result += url.hash || "";
    return result;
  };
  
  // Changes from joyent/node:
  
  // 1. No leading slash in paths,
  //    e.g. in `url.parse('http://foo?bar')` pathname is ``, not `/`
  
  // 2. Backslashes are not replaced with slashes,
  //    so `http:\\example.org\` is treated like a relative path
  
  // 3. Trailing colon is treated like a part of the path,
  //    i.e. in `http://example.org:foo` pathname is `:foo`
  
  // 4. Nothing is URL-encoded in the resulting object,
  //    (in joyent/node some chars in auth and paths are encoded)
  
  // 5. `url.parse()` does not have `parseQueryString` argument
  
  // 6. Removed extraneous result properties: `host`, `path`, `query`, etc.,
  //    which can be constructed using other parts of the url.
  
    function Url() {
    this.protocol = null;
    this.slashes = null;
    this.auth = null;
    this.port = null;
    this.hostname = null;
    this.hash = null;
    this.search = null;
    this.pathname = null;
  }
  // Reference: RFC 3986, RFC 1808, RFC 2396
  // define these here so at least they only have to be
  // compiled once on the first module load.
    var protocolPattern = /^([a-z0-9.+-]+:)/i, portPattern = /:[0-9]*$/, 
  // Special case for a simple path URL
  simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, 
  // RFC 2396: characters reserved for delimiting URLs.
  // We actually just auto-escape these.
  delims = [ "<", ">", '"', "`", " ", "\r", "\n", "\t" ], 
  // RFC 2396: characters not allowed for various reasons.
  unwise = [ "{", "}", "|", "\\", "^", "`" ].concat(delims), 
  // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
  autoEscape = [ "'" ].concat(unwise), 
  // Characters that are never ever allowed in a hostname.
  // Note that any invalid chars are also handled, but these
  // are the ones that are *expected* to be seen, so we fast-path
  // them.
  nonHostChars = [ "%", "/", "?", ";", "#" ].concat(autoEscape), hostEndingChars = [ "/", "?", "#" ], hostnameMaxLen = 255, hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/, hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, 
  // protocols that can allow "unsafe" and "unwise" chars.
  /* eslint-disable no-script-url */
  // protocols that never have a hostname.
  hostlessProtocol = {
    javascript: true,
    "javascript:": true
  }, 
  // protocols that always contain a // bit.
  slashedProtocol = {
    http: true,
    https: true,
    ftp: true,
    gopher: true,
    file: true,
    "http:": true,
    "https:": true,
    "ftp:": true,
    "gopher:": true,
    "file:": true
  };
  /* eslint-enable no-script-url */  function urlParse(url, slashesDenoteHost) {
    if (url && url instanceof Url) {
      return url;
    }
    var u = new Url;
    u.parse(url, slashesDenoteHost);
    return u;
  }
  Url.prototype.parse = function(url, slashesDenoteHost) {
    var i, l, lowerProto, hec, slashes, rest = url;
    // trim before proceeding.
    // This is to support parse stuff like "  http://foo.com  \n"
        rest = rest.trim();
    if (!slashesDenoteHost && url.split("#").length === 1) {
      // Try fast path regexp
      var simplePath = simplePathPattern.exec(rest);
      if (simplePath) {
        this.pathname = simplePath[1];
        if (simplePath[2]) {
          this.search = simplePath[2];
        }
        return this;
      }
    }
    var proto = protocolPattern.exec(rest);
    if (proto) {
      proto = proto[0];
      lowerProto = proto.toLowerCase();
      this.protocol = proto;
      rest = rest.substr(proto.length);
    }
    // figure out if it's got a host
    // user@server is *always* interpreted as a hostname, and url
    // resolution will treat //foo/bar as host=foo,path=bar because that's
    // how the browser resolves relative URLs.
        if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
      slashes = rest.substr(0, 2) === "//";
      if (slashes && !(proto && hostlessProtocol[proto])) {
        rest = rest.substr(2);
        this.slashes = true;
      }
    }
    if (!hostlessProtocol[proto] && (slashes || proto && !slashedProtocol[proto])) {
      // there's a hostname.
      // the first instance of /, ?, ;, or # ends the host.
      // If there is an @ in the hostname, then non-host chars *are* allowed
      // to the left of the last @ sign, unless some host-ending character
      // comes *before* the @-sign.
      // URLs are obnoxious.
      // ex:
      // http://a@b@c/ => user:a@b host:c
      // http://a@b?@c => user:a host:c path:/?@c
      // v0.12 TODO(isaacs): This is not quite how Chrome does things.
      // Review our test case against browsers more comprehensively.
      // find the first instance of any hostEndingChars
      var hostEnd = -1;
      for (i = 0; i < hostEndingChars.length; i++) {
        hec = rest.indexOf(hostEndingChars[i]);
        if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) {
          hostEnd = hec;
        }
      }
      // at this point, either we have an explicit point where the
      // auth portion cannot go past, or the last @ char is the decider.
            var auth, atSign;
      if (hostEnd === -1) {
        // atSign can be anywhere.
        atSign = rest.lastIndexOf("@");
      } else {
        // atSign must be in auth portion.
        // http://a@b/c@d => host:b auth:a path:/c@d
        atSign = rest.lastIndexOf("@", hostEnd);
      }
      // Now we have a portion which is definitely the auth.
      // Pull that off.
            if (atSign !== -1) {
        auth = rest.slice(0, atSign);
        rest = rest.slice(atSign + 1);
        this.auth = auth;
      }
      // the host is the remaining to the left of the first non-host char
            hostEnd = -1;
      for (i = 0; i < nonHostChars.length; i++) {
        hec = rest.indexOf(nonHostChars[i]);
        if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) {
          hostEnd = hec;
        }
      }
      // if we still have not hit it, then the entire thing is a host.
            if (hostEnd === -1) {
        hostEnd = rest.length;
      }
      if (rest[hostEnd - 1] === ":") {
        hostEnd--;
      }
      var host = rest.slice(0, hostEnd);
      rest = rest.slice(hostEnd);
      // pull out port.
            this.parseHost(host);
      // we've indicated that there is a hostname,
      // so even if it's empty, it has to be present.
            this.hostname = this.hostname || "";
      // if hostname begins with [ and ends with ]
      // assume that it's an IPv6 address.
            var ipv6Hostname = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
      // validate a little.
            if (!ipv6Hostname) {
        var hostparts = this.hostname.split(/\./);
        for (i = 0, l = hostparts.length; i < l; i++) {
          var part = hostparts[i];
          if (!part) {
            continue;
          }
          if (!part.match(hostnamePartPattern)) {
            var newpart = "";
            for (var j = 0, k = part.length; j < k; j++) {
              if (part.charCodeAt(j) > 127) {
                // we replace non-ASCII char with a temporary placeholder
                // we need this to make sure size of hostname is not
                // broken by replacing non-ASCII by nothing
                newpart += "x";
              } else {
                newpart += part[j];
              }
            }
            // we test again with ASCII char only
                        if (!newpart.match(hostnamePartPattern)) {
              var validParts = hostparts.slice(0, i);
              var notHost = hostparts.slice(i + 1);
              var bit = part.match(hostnamePartStart);
              if (bit) {
                validParts.push(bit[1]);
                notHost.unshift(bit[2]);
              }
              if (notHost.length) {
                rest = notHost.join(".") + rest;
              }
              this.hostname = validParts.join(".");
              break;
            }
          }
        }
      }
      if (this.hostname.length > hostnameMaxLen) {
        this.hostname = "";
      }
      // strip [ and ] from the hostname
      // the host field still retains them, though
            if (ipv6Hostname) {
        this.hostname = this.hostname.substr(1, this.hostname.length - 2);
      }
    }
    // chop off from the tail first.
        var hash = rest.indexOf("#");
    if (hash !== -1) {
      // got a fragment string.
      this.hash = rest.substr(hash);
      rest = rest.slice(0, hash);
    }
    var qm = rest.indexOf("?");
    if (qm !== -1) {
      this.search = rest.substr(qm);
      rest = rest.slice(0, qm);
    }
    if (rest) {
      this.pathname = rest;
    }
    if (slashedProtocol[lowerProto] && this.hostname && !this.pathname) {
      this.pathname = "";
    }
    return this;
  };
  Url.prototype.parseHost = function(host) {
    var port = portPattern.exec(host);
    if (port) {
      port = port[0];
      if (port !== ":") {
        this.port = port.substr(1);
      }
      host = host.substr(0, host.length - port.length);
    }
    if (host) {
      this.hostname = host;
    }
  };
  var parse = urlParse;
  var encode$1 = encode_1;
  var decode$1 = decode_1;
  var format$1 = format;
  var parse$1 = parse;
  var mdurl = {
    encode: encode$1,
    decode: decode$1,
    format: format$1,
    parse: parse$1
  };
  var regex$1 = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
  var regex$2 = /[\0-\x1F\x7F-\x9F]/;
  var regex$3 = /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/;
  var regex$4 = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/;
  var Any = regex$1;
  var Cc = regex$2;
  var Cf = regex$3;
  var P = regex;
  var Z = regex$4;
  var uc_micro = {
    Any: Any,
    Cc: Cc,
    Cf: Cf,
    P: P,
    Z: Z
  };
  var utils = createCommonjsModule((function(module, exports) {
    function _class(obj) {
      return Object.prototype.toString.call(obj);
    }
    function isString(obj) {
      return _class(obj) === "[object String]";
    }
    var _hasOwnProperty = Object.prototype.hasOwnProperty;
    function has(object, key) {
      return _hasOwnProperty.call(object, key);
    }
    // Merge objects
    
        function assign(obj /*from1, from2, from3, ...*/) {
      var sources = Array.prototype.slice.call(arguments, 1);
      sources.forEach((function(source) {
        if (!source) {
          return;
        }
        if (typeof source !== "object") {
          throw new TypeError(source + "must be object");
        }
        Object.keys(source).forEach((function(key) {
          obj[key] = source[key];
        }));
      }));
      return obj;
    }
    // Remove element from array and put another array at those position.
    // Useful for some operations with tokens
        function arrayReplaceAt(src, pos, newElements) {
      return [].concat(src.slice(0, pos), newElements, src.slice(pos + 1));
    }
    ////////////////////////////////////////////////////////////////////////////////
        function isValidEntityCode(c) {
      /*eslint no-bitwise:0*/
      // broken sequence
      if (c >= 55296 && c <= 57343) {
        return false;
      }
      // never used
            if (c >= 64976 && c <= 65007) {
        return false;
      }
      if ((c & 65535) === 65535 || (c & 65535) === 65534) {
        return false;
      }
      // control codes
            if (c >= 0 && c <= 8) {
        return false;
      }
      if (c === 11) {
        return false;
      }
      if (c >= 14 && c <= 31) {
        return false;
      }
      if (c >= 127 && c <= 159) {
        return false;
      }
      // out of range
            if (c > 1114111) {
        return false;
      }
      return true;
    }
    function fromCodePoint(c) {
      /*eslint no-bitwise:0*/
      if (c > 65535) {
        c -= 65536;
        var surrogate1 = 55296 + (c >> 10), surrogate2 = 56320 + (c & 1023);
        return String.fromCharCode(surrogate1, surrogate2);
      }
      return String.fromCharCode(c);
    }
    var UNESCAPE_MD_RE = /\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g;
    var ENTITY_RE = /&([a-z#][a-z0-9]{1,31});/gi;
    var UNESCAPE_ALL_RE = new RegExp(UNESCAPE_MD_RE.source + "|" + ENTITY_RE.source, "gi");
    var DIGITAL_ENTITY_TEST_RE = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i;
    function replaceEntityPattern(match, name) {
      var code = 0;
      if (has(entities, name)) {
        return entities[name];
      }
      if (name.charCodeAt(0) === 35 /* # */ && DIGITAL_ENTITY_TEST_RE.test(name)) {
        code = name[1].toLowerCase() === "x" ? parseInt(name.slice(2), 16) : parseInt(name.slice(1), 10);
        if (isValidEntityCode(code)) {
          return fromCodePoint(code);
        }
      }
      return match;
    }
    /*function replaceEntities(str) {
	  if (str.indexOf('&') < 0) { return str; }

	  return str.replace(ENTITY_RE, replaceEntityPattern);
	}*/    function unescapeMd(str) {
      if (str.indexOf("\\") < 0) {
        return str;
      }
      return str.replace(UNESCAPE_MD_RE, "$1");
    }
    function unescapeAll(str) {
      if (str.indexOf("\\") < 0 && str.indexOf("&") < 0) {
        return str;
      }
      return str.replace(UNESCAPE_ALL_RE, (function(match, escaped, entity) {
        if (escaped) {
          return escaped;
        }
        return replaceEntityPattern(match, entity);
      }));
    }
    ////////////////////////////////////////////////////////////////////////////////
        var HTML_ESCAPE_TEST_RE = /[&<>"]/;
    var HTML_ESCAPE_REPLACE_RE = /[&<>"]/g;
    var HTML_REPLACEMENTS = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;"
    };
    function replaceUnsafeChar(ch) {
      return HTML_REPLACEMENTS[ch];
    }
    function escapeHtml(str) {
      if (HTML_ESCAPE_TEST_RE.test(str)) {
        return str.replace(HTML_ESCAPE_REPLACE_RE, replaceUnsafeChar);
      }
      return str;
    }
    ////////////////////////////////////////////////////////////////////////////////
        var REGEXP_ESCAPE_RE = /[.?*+^$[\]\\(){}|-]/g;
    function escapeRE(str) {
      return str.replace(REGEXP_ESCAPE_RE, "\\$&");
    }
    ////////////////////////////////////////////////////////////////////////////////
        function isSpace(code) {
      switch (code) {
       case 9:
       case 32:
        return true;
      }
      return false;
    }
    // Zs (unicode class) || [\t\f\v\r\n]
        function isWhiteSpace(code) {
      if (code >= 8192 && code <= 8202) {
        return true;
      }
      switch (code) {
       case 9:
 // \t
               case 10:
 // \n
               case 11:
 // \v
               case 12:
 // \f
               case 13:
 // \r
               case 32:
       case 160:
       case 5760:
       case 8239:
       case 8287:
       case 12288:
        return true;
      }
      return false;
    }
    ////////////////////////////////////////////////////////////////////////////////
    /*eslint-disable max-len*/
    // Currently without astral characters support.
        function isPunctChar(ch) {
      return regex.test(ch);
    }
    // Markdown ASCII punctuation characters.
    
    // !, ", #, $, %, &, ', (, ), *, +, ,, -, ., /, :, ;, <, =, >, ?, @, [, \, ], ^, _, `, {, |, }, or ~
    // http://spec.commonmark.org/0.15/#ascii-punctuation-character
    
    // Don't confuse with unicode punctuation !!! It lacks some chars in ascii range.
    
        function isMdAsciiPunct(ch) {
      switch (ch) {
       case 33 /* ! */ :
       case 34 /* " */ :
       case 35 /* # */ :
       case 36 /* $ */ :
       case 37 /* % */ :
       case 38 /* & */ :
       case 39 /* ' */ :
       case 40 /* ( */ :
       case 41 /* ) */ :
       case 42 /* * */ :
       case 43 /* + */ :
       case 44 /* , */ :
       case 45 /* - */ :
       case 46 /* . */ :
       case 47 /* / */ :
       case 58 /* : */ :
       case 59 /* ; */ :
       case 60 /* < */ :
       case 61 /* = */ :
       case 62 /* > */ :
       case 63 /* ? */ :
       case 64 /* @ */ :
       case 91 /* [ */ :
       case 92 /* \ */ :
       case 93 /* ] */ :
       case 94 /* ^ */ :
       case 95 /* _ */ :
       case 96 /* ` */ :
       case 123 /* { */ :
       case 124 /* | */ :
       case 125 /* } */ :
       case 126 /* ~ */ :
        return true;

       default:
        return false;
      }
    }
    // Hepler to unify [reference labels].
    
        function normalizeReference(str) {
      // Trim and collapse whitespace
      str = str.trim().replace(/\s+/g, " ");
      // In node v10 'ẞ'.toLowerCase() === 'Ṿ', which is presumed to be a bug
      // fixed in v12 (couldn't find any details).
      
      // So treat this one as a special case
      // (remove this when node v10 is no longer supported).
      
            if ("\u1e9e".toLowerCase() === "\u1e7e") {
        str = str.replace(/\u1e9e/g, "\xdf");
      }
      // .toLowerCase().toUpperCase() should get rid of all differences
      // between letter variants.
      
      // Simple .toLowerCase() doesn't normalize 125 code points correctly,
      // and .toUpperCase doesn't normalize 6 of them (list of exceptions:
      // İ, ϴ, ẞ, Ω, K, Å - those are already uppercased, but have differently
      // uppercased versions).
      
      // Here's an example showing how it happens. Lets take greek letter omega:
      // uppercase U+0398 (Θ), U+03f4 (ϴ) and lowercase U+03b8 (θ), U+03d1 (ϑ)
      
      // Unicode entries:
      // 0398;GREEK CAPITAL LETTER THETA;Lu;0;L;;;;;N;;;;03B8;
      // 03B8;GREEK SMALL LETTER THETA;Ll;0;L;;;;;N;;;0398;;0398
      // 03D1;GREEK THETA SYMBOL;Ll;0;L;<compat> 03B8;;;;N;GREEK SMALL LETTER SCRIPT THETA;;0398;;0398
      // 03F4;GREEK CAPITAL THETA SYMBOL;Lu;0;L;<compat> 0398;;;;N;;;;03B8;
      
      // Case-insensitive comparison should treat all of them as equivalent.
      
      // But .toLowerCase() doesn't change ϑ (it's already lowercase),
      // and .toUpperCase() doesn't change ϴ (already uppercase).
      
      // Applying first lower then upper case normalizes any character:
      // '\u0398\u03f4\u03b8\u03d1'.toLowerCase().toUpperCase() === '\u0398\u0398\u0398\u0398'
      
      // Note: this is equivalent to unicode case folding; unicode normalization
      // is a different step that is not required here.
      
      // Final result should be uppercased, because it's later stored in an object
      // (this avoid a conflict with Object.prototype members,
      // most notably, `__proto__`)
      
            return str.toLowerCase().toUpperCase();
    }
    ////////////////////////////////////////////////////////////////////////////////
    // Re-export libraries commonly used in both markdown-it and its plugins,
    // so plugins won't have to depend on them explicitly, which reduces their
    // bundled size (e.g. a browser build).
    
        exports.lib = {};
    exports.lib.mdurl = mdurl;
    exports.lib.ucmicro = uc_micro;
    exports.assign = assign;
    exports.isString = isString;
    exports.has = has;
    exports.unescapeMd = unescapeMd;
    exports.unescapeAll = unescapeAll;
    exports.isValidEntityCode = isValidEntityCode;
    exports.fromCodePoint = fromCodePoint;
    // exports.replaceEntities     = replaceEntities;
        exports.escapeHtml = escapeHtml;
    exports.arrayReplaceAt = arrayReplaceAt;
    exports.isSpace = isSpace;
    exports.isWhiteSpace = isWhiteSpace;
    exports.isMdAsciiPunct = isMdAsciiPunct;
    exports.isPunctChar = isPunctChar;
    exports.escapeRE = escapeRE;
    exports.normalizeReference = normalizeReference;
  }));
  // Parse link label
    var parse_link_label = function parseLinkLabel(state, start, disableNested) {
    var level, found, marker, prevPos, labelEnd = -1, max = state.posMax, oldPos = state.pos;
    state.pos = start + 1;
    level = 1;
    while (state.pos < max) {
      marker = state.src.charCodeAt(state.pos);
      if (marker === 93 /* ] */) {
        level--;
        if (level === 0) {
          found = true;
          break;
        }
      }
      prevPos = state.pos;
      state.md.inline.skipToken(state);
      if (marker === 91 /* [ */) {
        if (prevPos === state.pos - 1) {
          // increase level if we find text `[`, which is not a part of any token
          level++;
        } else if (disableNested) {
          state.pos = oldPos;
          return -1;
        }
      }
    }
    if (found) {
      labelEnd = state.pos;
    }
    // restore old state
        state.pos = oldPos;
    return labelEnd;
  };
  var unescapeAll = utils.unescapeAll;
  var parse_link_destination = function parseLinkDestination(str, pos, max) {
    var code, level, lines = 0, start = pos, result = {
      ok: false,
      pos: 0,
      lines: 0,
      str: ""
    };
    if (str.charCodeAt(pos) === 60 /* < */) {
      pos++;
      while (pos < max) {
        code = str.charCodeAt(pos);
        if (code === 10 /* \n */) {
          return result;
        }
        if (code === 62 /* > */) {
          result.pos = pos + 1;
          result.str = unescapeAll(str.slice(start + 1, pos));
          result.ok = true;
          return result;
        }
        if (code === 92 /* \ */ && pos + 1 < max) {
          pos += 2;
          continue;
        }
        pos++;
      }
      // no closing '>'
            return result;
    }
    // this should be ... } else { ... branch
        level = 0;
    while (pos < max) {
      code = str.charCodeAt(pos);
      if (code === 32) {
        break;
      }
      // ascii control characters
            if (code < 32 || code === 127) {
        break;
      }
      if (code === 92 /* \ */ && pos + 1 < max) {
        pos += 2;
        continue;
      }
      if (code === 40 /* ( */) {
        level++;
      }
      if (code === 41 /* ) */) {
        if (level === 0) {
          break;
        }
        level--;
      }
      pos++;
    }
    if (start === pos) {
      return result;
    }
    if (level !== 0) {
      return result;
    }
    result.str = unescapeAll(str.slice(start, pos));
    result.lines = lines;
    result.pos = pos;
    result.ok = true;
    return result;
  };
  var unescapeAll$1 = utils.unescapeAll;
  var parse_link_title = function parseLinkTitle(str, pos, max) {
    var code, marker, lines = 0, start = pos, result = {
      ok: false,
      pos: 0,
      lines: 0,
      str: ""
    };
    if (pos >= max) {
      return result;
    }
    marker = str.charCodeAt(pos);
    if (marker !== 34 /* " */ && marker !== 39 /* ' */ && marker !== 40 /* ( */) {
      return result;
    }
    pos++;
    // if opening marker is "(", switch it to closing marker ")"
        if (marker === 40) {
      marker = 41;
    }
    while (pos < max) {
      code = str.charCodeAt(pos);
      if (code === marker) {
        result.pos = pos + 1;
        result.lines = lines;
        result.str = unescapeAll$1(str.slice(start + 1, pos));
        result.ok = true;
        return result;
      } else if (code === 10) {
        lines++;
      } else if (code === 92 /* \ */ && pos + 1 < max) {
        pos++;
        if (str.charCodeAt(pos) === 10) {
          lines++;
        }
      }
      pos++;
    }
    return result;
  };
  var parseLinkLabel = parse_link_label;
  var parseLinkDestination = parse_link_destination;
  var parseLinkTitle = parse_link_title;
  var helpers = {
    parseLinkLabel: parseLinkLabel,
    parseLinkDestination: parseLinkDestination,
    parseLinkTitle: parseLinkTitle
  };
  var assign = utils.assign;
  var unescapeAll$2 = utils.unescapeAll;
  var escapeHtml = utils.escapeHtml;
  ////////////////////////////////////////////////////////////////////////////////
    var default_rules = {};
  default_rules.code_inline = function(tokens, idx, options, env, slf) {
    var token = tokens[idx];
    return "<code" + slf.renderAttrs(token) + ">" + escapeHtml(tokens[idx].content) + "</code>";
  };
  default_rules.code_block = function(tokens, idx, options, env, slf) {
    var token = tokens[idx];
    return "<pre" + slf.renderAttrs(token) + "><code>" + escapeHtml(tokens[idx].content) + "</code></pre>\n";
  };
  default_rules.fence = function(tokens, idx, options, env, slf) {
    var token = tokens[idx], info = token.info ? unescapeAll$2(token.info).trim() : "", langName = "", langAttrs = "", highlighted, i, arr, tmpAttrs, tmpToken;
    if (info) {
      arr = info.split(/(\s+)/g);
      langName = arr[0];
      langAttrs = arr.slice(2).join("");
    }
    if (options.highlight) {
      highlighted = options.highlight(token.content, langName, langAttrs) || escapeHtml(token.content);
    } else {
      highlighted = escapeHtml(token.content);
    }
    if (highlighted.indexOf("<pre") === 0) {
      return highlighted + "\n";
    }
    // If language exists, inject class gently, without modifying original token.
    // May be, one day we will add .clone() for token and simplify this part, but
    // now we prefer to keep things local.
        if (info) {
      i = token.attrIndex("class");
      tmpAttrs = token.attrs ? token.attrs.slice() : [];
      if (i < 0) {
        tmpAttrs.push([ "class", options.langPrefix + langName ]);
      } else {
        tmpAttrs[i][1] += " " + options.langPrefix + langName;
      }
      // Fake token just to render attributes
            tmpToken = {
        attrs: tmpAttrs
      };
      return "<pre><code" + slf.renderAttrs(tmpToken) + ">" + highlighted + "</code></pre>\n";
    }
    return "<pre><code" + slf.renderAttrs(token) + ">" + highlighted + "</code></pre>\n";
  };
  default_rules.image = function(tokens, idx, options, env, slf) {
    var token = tokens[idx];
    // "alt" attr MUST be set, even if empty. Because it's mandatory and
    // should be placed on proper position for tests.
    
    // Replace content with actual value
        token.attrs[token.attrIndex("alt")][1] = slf.renderInlineAsText(token.children, options, env);
    return slf.renderToken(tokens, idx, options);
  };
  default_rules.hardbreak = function(tokens, idx, options /*, env */) {
    return options.xhtmlOut ? "<br />\n" : "<br>\n";
  };
  default_rules.softbreak = function(tokens, idx, options /*, env */) {
    return options.breaks ? options.xhtmlOut ? "<br />\n" : "<br>\n" : "\n";
  };
  default_rules.text = function(tokens, idx /*, options, env */) {
    return escapeHtml(tokens[idx].content);
  };
  default_rules.html_block = function(tokens, idx /*, options, env */) {
    return tokens[idx].content;
  };
  default_rules.html_inline = function(tokens, idx /*, options, env */) {
    return tokens[idx].content;
  };
  /**
	 * new Renderer()
	 *
	 * Creates new [[Renderer]] instance and fill [[Renderer#rules]] with defaults.
	 **/  function Renderer() {
    /**
	   * Renderer#rules -> Object
	   *
	   * Contains render rules for tokens. Can be updated and extended.
	   *
	   * ##### Example
	   *
	   * ```javascript
	   * var md = require('markdown-it')();
	   *
	   * md.renderer.rules.strong_open  = function () { return '<b>'; };
	   * md.renderer.rules.strong_close = function () { return '</b>'; };
	   *
	   * var result = md.renderInline(...);
	   * ```
	   *
	   * Each rule is called as independent static function with fixed signature:
	   *
	   * ```javascript
	   * function my_token_render(tokens, idx, options, env, renderer) {
	   *   // ...
	   *   return renderedHTML;
	   * }
	   * ```
	   *
	   * See [source code](https://github.com/markdown-it/markdown-it/blob/master/lib/renderer.js)
	   * for more details and examples.
	   **/
    this.rules = assign({}, default_rules);
  }
  /**
	 * Renderer.renderAttrs(token) -> String
	 *
	 * Render token attributes to string.
	 **/  Renderer.prototype.renderAttrs = function renderAttrs(token) {
    var i, l, result;
    if (!token.attrs) {
      return "";
    }
    result = "";
    for (i = 0, l = token.attrs.length; i < l; i++) {
      result += " " + escapeHtml(token.attrs[i][0]) + '="' + escapeHtml(token.attrs[i][1]) + '"';
    }
    return result;
  };
  /**
	 * Renderer.renderToken(tokens, idx, options) -> String
	 * - tokens (Array): list of tokens
	 * - idx (Numbed): token index to render
	 * - options (Object): params of parser instance
	 *
	 * Default token renderer. Can be overriden by custom function
	 * in [[Renderer#rules]].
	 **/  Renderer.prototype.renderToken = function renderToken(tokens, idx, options) {
    var nextToken, result = "", needLf = false, token = tokens[idx];
    // Tight list paragraphs
        if (token.hidden) {
      return "";
    }
    // Insert a newline between hidden paragraph and subsequent opening
    // block-level tag.
    
    // For example, here we should insert a newline before blockquote:
    //  - a
    //    >
    
        if (token.block && token.nesting !== -1 && idx && tokens[idx - 1].hidden) {
      result += "\n";
    }
    // Add token name, e.g. `<img`
        result += (token.nesting === -1 ? "</" : "<") + token.tag;
    // Encode attributes, e.g. `<img src="foo"`
        result += this.renderAttrs(token);
    // Add a slash for self-closing tags, e.g. `<img src="foo" /`
        if (token.nesting === 0 && options.xhtmlOut) {
      result += " /";
    }
    // Check if we need to add a newline after this tag
        if (token.block) {
      needLf = true;
      if (token.nesting === 1) {
        if (idx + 1 < tokens.length) {
          nextToken = tokens[idx + 1];
          if (nextToken.type === "inline" || nextToken.hidden) {
            // Block-level tag containing an inline tag.
            needLf = false;
          } else if (nextToken.nesting === -1 && nextToken.tag === token.tag) {
            // Opening tag + closing tag of the same type. E.g. `<li></li>`.
            needLf = false;
          }
        }
      }
    }
    result += needLf ? ">\n" : ">";
    return result;
  };
  /**
	 * Renderer.renderInline(tokens, options, env) -> String
	 * - tokens (Array): list on block tokens to renter
	 * - options (Object): params of parser instance
	 * - env (Object): additional data from parsed input (references, for example)
	 *
	 * The same as [[Renderer.render]], but for single token of `inline` type.
	 **/  Renderer.prototype.renderInline = function(tokens, options, env) {
    var type, result = "", rules = this.rules;
    for (var i = 0, len = tokens.length; i < len; i++) {
      type = tokens[i].type;
      if (typeof rules[type] !== "undefined") {
        result += rules[type](tokens, i, options, env, this);
      } else {
        result += this.renderToken(tokens, i, options);
      }
    }
    return result;
  };
  /** internal
	 * Renderer.renderInlineAsText(tokens, options, env) -> String
	 * - tokens (Array): list on block tokens to renter
	 * - options (Object): params of parser instance
	 * - env (Object): additional data from parsed input (references, for example)
	 *
	 * Special kludge for image `alt` attributes to conform CommonMark spec.
	 * Don't try to use it! Spec requires to show `alt` content with stripped markup,
	 * instead of simple escaping.
	 **/  Renderer.prototype.renderInlineAsText = function(tokens, options, env) {
    var result = "";
    for (var i = 0, len = tokens.length; i < len; i++) {
      if (tokens[i].type === "text") {
        result += tokens[i].content;
      } else if (tokens[i].type === "image") {
        result += this.renderInlineAsText(tokens[i].children, options, env);
      }
    }
    return result;
  };
  /**
	 * Renderer.render(tokens, options, env) -> String
	 * - tokens (Array): list on block tokens to renter
	 * - options (Object): params of parser instance
	 * - env (Object): additional data from parsed input (references, for example)
	 *
	 * Takes token stream and generates HTML. Probably, you will never need to call
	 * this method directly.
	 **/  Renderer.prototype.render = function(tokens, options, env) {
    var i, len, type, result = "", rules = this.rules;
    for (i = 0, len = tokens.length; i < len; i++) {
      type = tokens[i].type;
      if (type === "inline") {
        result += this.renderInline(tokens[i].children, options, env);
      } else if (typeof rules[type] !== "undefined") {
        result += rules[tokens[i].type](tokens, i, options, env, this);
      } else {
        result += this.renderToken(tokens, i, options, env);
      }
    }
    return result;
  };
  var renderer = Renderer;
  /**
	 * class Ruler
	 *
	 * Helper class, used by [[MarkdownIt#core]], [[MarkdownIt#block]] and
	 * [[MarkdownIt#inline]] to manage sequences of functions (rules):
	 *
	 * - keep rules in defined order
	 * - assign the name to each rule
	 * - enable/disable rules
	 * - add/replace rules
	 * - allow assign rules to additional named chains (in the same)
	 * - cacheing lists of active rules
	 *
	 * You will not need use this class directly until write plugins. For simple
	 * rules control use [[MarkdownIt.disable]], [[MarkdownIt.enable]] and
	 * [[MarkdownIt.use]].
	 **/
  /**
	 * new Ruler()
	 **/  function Ruler() {
    // List of added rules. Each element is:
    // {
    //   name: XXX,
    //   enabled: Boolean,
    //   fn: Function(),
    //   alt: [ name2, name3 ]
    // }
    this.__rules__ = [];
    // Cached rule chains.
    
    // First level - chain name, '' for default.
    // Second level - diginal anchor for fast filtering by charcodes.
    
        this.__cache__ = null;
  }
  ////////////////////////////////////////////////////////////////////////////////
  // Helper methods, should not be used directly
  // Find rule index by name
  
    Ruler.prototype.__find__ = function(name) {
    for (var i = 0; i < this.__rules__.length; i++) {
      if (this.__rules__[i].name === name) {
        return i;
      }
    }
    return -1;
  };
  // Build rules lookup cache
  
    Ruler.prototype.__compile__ = function() {
    var self = this;
    var chains = [ "" ];
    // collect unique names
        self.__rules__.forEach((function(rule) {
      if (!rule.enabled) {
        return;
      }
      rule.alt.forEach((function(altName) {
        if (chains.indexOf(altName) < 0) {
          chains.push(altName);
        }
      }));
    }));
    self.__cache__ = {};
    chains.forEach((function(chain) {
      self.__cache__[chain] = [];
      self.__rules__.forEach((function(rule) {
        if (!rule.enabled) {
          return;
        }
        if (chain && rule.alt.indexOf(chain) < 0) {
          return;
        }
        self.__cache__[chain].push(rule.fn);
      }));
    }));
  };
  /**
	 * Ruler.at(name, fn [, options])
	 * - name (String): rule name to replace.
	 * - fn (Function): new rule function.
	 * - options (Object): new rule options (not mandatory).
	 *
	 * Replace rule by name with new function & options. Throws error if name not
	 * found.
	 *
	 * ##### Options:
	 *
	 * - __alt__ - array with names of "alternate" chains.
	 *
	 * ##### Example
	 *
	 * Replace existing typographer replacement rule with new one:
	 *
	 * ```javascript
	 * var md = require('markdown-it')();
	 *
	 * md.core.ruler.at('replacements', function replace(state) {
	 *   //...
	 * });
	 * ```
	 **/  Ruler.prototype.at = function(name, fn, options) {
    var index = this.__find__(name);
    var opt = options || {};
    if (index === -1) {
      throw new Error("Parser rule not found: " + name);
    }
    this.__rules__[index].fn = fn;
    this.__rules__[index].alt = opt.alt || [];
    this.__cache__ = null;
  };
  /**
	 * Ruler.before(beforeName, ruleName, fn [, options])
	 * - beforeName (String): new rule will be added before this one.
	 * - ruleName (String): name of added rule.
	 * - fn (Function): rule function.
	 * - options (Object): rule options (not mandatory).
	 *
	 * Add new rule to chain before one with given name. See also
	 * [[Ruler.after]], [[Ruler.push]].
	 *
	 * ##### Options:
	 *
	 * - __alt__ - array with names of "alternate" chains.
	 *
	 * ##### Example
	 *
	 * ```javascript
	 * var md = require('markdown-it')();
	 *
	 * md.block.ruler.before('paragraph', 'my_rule', function replace(state) {
	 *   //...
	 * });
	 * ```
	 **/  Ruler.prototype.before = function(beforeName, ruleName, fn, options) {
    var index = this.__find__(beforeName);
    var opt = options || {};
    if (index === -1) {
      throw new Error("Parser rule not found: " + beforeName);
    }
    this.__rules__.splice(index, 0, {
      name: ruleName,
      enabled: true,
      fn: fn,
      alt: opt.alt || []
    });
    this.__cache__ = null;
  };
  /**
	 * Ruler.after(afterName, ruleName, fn [, options])
	 * - afterName (String): new rule will be added after this one.
	 * - ruleName (String): name of added rule.
	 * - fn (Function): rule function.
	 * - options (Object): rule options (not mandatory).
	 *
	 * Add new rule to chain after one with given name. See also
	 * [[Ruler.before]], [[Ruler.push]].
	 *
	 * ##### Options:
	 *
	 * - __alt__ - array with names of "alternate" chains.
	 *
	 * ##### Example
	 *
	 * ```javascript
	 * var md = require('markdown-it')();
	 *
	 * md.inline.ruler.after('text', 'my_rule', function replace(state) {
	 *   //...
	 * });
	 * ```
	 **/  Ruler.prototype.after = function(afterName, ruleName, fn, options) {
    var index = this.__find__(afterName);
    var opt = options || {};
    if (index === -1) {
      throw new Error("Parser rule not found: " + afterName);
    }
    this.__rules__.splice(index + 1, 0, {
      name: ruleName,
      enabled: true,
      fn: fn,
      alt: opt.alt || []
    });
    this.__cache__ = null;
  };
  /**
	 * Ruler.push(ruleName, fn [, options])
	 * - ruleName (String): name of added rule.
	 * - fn (Function): rule function.
	 * - options (Object): rule options (not mandatory).
	 *
	 * Push new rule to the end of chain. See also
	 * [[Ruler.before]], [[Ruler.after]].
	 *
	 * ##### Options:
	 *
	 * - __alt__ - array with names of "alternate" chains.
	 *
	 * ##### Example
	 *
	 * ```javascript
	 * var md = require('markdown-it')();
	 *
	 * md.core.ruler.push('my_rule', function replace(state) {
	 *   //...
	 * });
	 * ```
	 **/  Ruler.prototype.push = function(ruleName, fn, options) {
    var opt = options || {};
    this.__rules__.push({
      name: ruleName,
      enabled: true,
      fn: fn,
      alt: opt.alt || []
    });
    this.__cache__ = null;
  };
  /**
	 * Ruler.enable(list [, ignoreInvalid]) -> Array
	 * - list (String|Array): list of rule names to enable.
	 * - ignoreInvalid (Boolean): set `true` to ignore errors when rule not found.
	 *
	 * Enable rules with given names. If any rule name not found - throw Error.
	 * Errors can be disabled by second param.
	 *
	 * Returns list of found rule names (if no exception happened).
	 *
	 * See also [[Ruler.disable]], [[Ruler.enableOnly]].
	 **/  Ruler.prototype.enable = function(list, ignoreInvalid) {
    if (!Array.isArray(list)) {
      list = [ list ];
    }
    var result = [];
    // Search by name and enable
        list.forEach((function(name) {
      var idx = this.__find__(name);
      if (idx < 0) {
        if (ignoreInvalid) {
          return;
        }
        throw new Error("Rules manager: invalid rule name " + name);
      }
      this.__rules__[idx].enabled = true;
      result.push(name);
    }), this);
    this.__cache__ = null;
    return result;
  };
  /**
	 * Ruler.enableOnly(list [, ignoreInvalid])
	 * - list (String|Array): list of rule names to enable (whitelist).
	 * - ignoreInvalid (Boolean): set `true` to ignore errors when rule not found.
	 *
	 * Enable rules with given names, and disable everything else. If any rule name
	 * not found - throw Error. Errors can be disabled by second param.
	 *
	 * See also [[Ruler.disable]], [[Ruler.enable]].
	 **/  Ruler.prototype.enableOnly = function(list, ignoreInvalid) {
    if (!Array.isArray(list)) {
      list = [ list ];
    }
    this.__rules__.forEach((function(rule) {
      rule.enabled = false;
    }));
    this.enable(list, ignoreInvalid);
  };
  /**
	 * Ruler.disable(list [, ignoreInvalid]) -> Array
	 * - list (String|Array): list of rule names to disable.
	 * - ignoreInvalid (Boolean): set `true` to ignore errors when rule not found.
	 *
	 * Disable rules with given names. If any rule name not found - throw Error.
	 * Errors can be disabled by second param.
	 *
	 * Returns list of found rule names (if no exception happened).
	 *
	 * See also [[Ruler.enable]], [[Ruler.enableOnly]].
	 **/  Ruler.prototype.disable = function(list, ignoreInvalid) {
    if (!Array.isArray(list)) {
      list = [ list ];
    }
    var result = [];
    // Search by name and disable
        list.forEach((function(name) {
      var idx = this.__find__(name);
      if (idx < 0) {
        if (ignoreInvalid) {
          return;
        }
        throw new Error("Rules manager: invalid rule name " + name);
      }
      this.__rules__[idx].enabled = false;
      result.push(name);
    }), this);
    this.__cache__ = null;
    return result;
  };
  /**
	 * Ruler.getRules(chainName) -> Array
	 *
	 * Return array of active functions (rules) for given chain name. It analyzes
	 * rules configuration, compiles caches if not exists and returns result.
	 *
	 * Default chain name is `''` (empty string). It can't be skipped. That's
	 * done intentionally, to keep signature monomorphic for high speed.
	 **/  Ruler.prototype.getRules = function(chainName) {
    if (this.__cache__ === null) {
      this.__compile__();
    }
    // Chain can be empty, if rules disabled. But we still have to return Array.
        return this.__cache__[chainName] || [];
  };
  var ruler = Ruler;
  // Normalize input string
  // https://spec.commonmark.org/0.29/#line-ending
    var NEWLINES_RE = /\r\n?|\n/g;
  var NULL_RE = /\0/g;
  var normalize = function normalize(state) {
    var str;
    // Normalize newlines
        str = state.src.replace(NEWLINES_RE, "\n");
    // Replace NULL characters
        str = str.replace(NULL_RE, "\ufffd");
    state.src = str;
  };
  var block$1 = function block(state) {
    var token;
    if (state.inlineMode) {
      token = new state.Token("inline", "", 0);
      token.content = state.src;
      token.map = [ 0, 1 ];
      token.children = [];
      state.tokens.push(token);
    } else {
      state.md.block.parse(state.src, state.md, state.env, state.tokens);
    }
  };
  var inline = function inline(state) {
    var tokens = state.tokens, tok, i, l;
    // Parse inlines
        for (i = 0, l = tokens.length; i < l; i++) {
      tok = tokens[i];
      if (tok.type === "inline") {
        state.md.inline.parse(tok.content, state.md, state.env, tok.children);
      }
    }
  };
  var arrayReplaceAt = utils.arrayReplaceAt;
  function isLinkOpen(str) {
    return /^<a[>\s]/i.test(str);
  }
  function isLinkClose(str) {
    return /^<\/a\s*>/i.test(str);
  }
  var linkify = function linkify(state) {
    var i, j, l, tokens, token, currentToken, nodes, ln, text, pos, lastPos, level, htmlLinkLevel, url, fullUrl, urlText, blockTokens = state.tokens, links;
    if (!state.md.options.linkify) {
      return;
    }
    for (j = 0, l = blockTokens.length; j < l; j++) {
      if (blockTokens[j].type !== "inline" || !state.md.linkify.pretest(blockTokens[j].content)) {
        continue;
      }
      tokens = blockTokens[j].children;
      htmlLinkLevel = 0;
      // We scan from the end, to keep position when new tags added.
      // Use reversed logic in links start/end match
            for (i = tokens.length - 1; i >= 0; i--) {
        currentToken = tokens[i];
        // Skip content of markdown links
                if (currentToken.type === "link_close") {
          i--;
          while (tokens[i].level !== currentToken.level && tokens[i].type !== "link_open") {
            i--;
          }
          continue;
        }
        // Skip content of html tag links
                if (currentToken.type === "html_inline") {
          if (isLinkOpen(currentToken.content) && htmlLinkLevel > 0) {
            htmlLinkLevel--;
          }
          if (isLinkClose(currentToken.content)) {
            htmlLinkLevel++;
          }
        }
        if (htmlLinkLevel > 0) {
          continue;
        }
        if (currentToken.type === "text" && state.md.linkify.test(currentToken.content)) {
          text = currentToken.content;
          links = state.md.linkify.match(text);
          // Now split string to nodes
                    nodes = [];
          level = currentToken.level;
          lastPos = 0;
          for (ln = 0; ln < links.length; ln++) {
            url = links[ln].url;
            fullUrl = state.md.normalizeLink(url);
            if (!state.md.validateLink(fullUrl)) {
              continue;
            }
            urlText = links[ln].text;
            // Linkifier might send raw hostnames like "example.com", where url
            // starts with domain name. So we prepend http:// in those cases,
            // and remove it afterwards.
            
                        if (!links[ln].schema) {
              urlText = state.md.normalizeLinkText("http://" + urlText).replace(/^http:\/\//, "");
            } else if (links[ln].schema === "mailto:" && !/^mailto:/i.test(urlText)) {
              urlText = state.md.normalizeLinkText("mailto:" + urlText).replace(/^mailto:/, "");
            } else {
              urlText = state.md.normalizeLinkText(urlText);
            }
            pos = links[ln].index;
            if (pos > lastPos) {
              token = new state.Token("text", "", 0);
              token.content = text.slice(lastPos, pos);
              token.level = level;
              nodes.push(token);
            }
            token = new state.Token("link_open", "a", 1);
            token.attrs = [ [ "href", fullUrl ] ];
            token.level = level++;
            token.markup = "linkify";
            token.info = "auto";
            nodes.push(token);
            token = new state.Token("text", "", 0);
            token.content = urlText;
            token.level = level;
            nodes.push(token);
            token = new state.Token("link_close", "a", -1);
            token.level = --level;
            token.markup = "linkify";
            token.info = "auto";
            nodes.push(token);
            lastPos = links[ln].lastIndex;
          }
          if (lastPos < text.length) {
            token = new state.Token("text", "", 0);
            token.content = text.slice(lastPos);
            token.level = level;
            nodes.push(token);
          }
          // replace current node
                    blockTokens[j].children = tokens = arrayReplaceAt(tokens, i, nodes);
        }
      }
    }
  };
  // Simple typographic replacements
  // TODO:
  // - fractionals 1/2, 1/4, 3/4 -> ½, ¼, ¾
  // - miltiplication 2 x 4 -> 2 × 4
    var RARE_RE = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/;
  // Workaround for phantomjs - need regex without /g flag,
  // or root check will fail every second time
    var SCOPED_ABBR_TEST_RE = /\((c|tm|r|p)\)/i;
  var SCOPED_ABBR_RE = /\((c|tm|r|p)\)/gi;
  var SCOPED_ABBR = {
    c: "\xa9",
    r: "\xae",
    p: "\xa7",
    tm: "\u2122"
  };
  function replaceFn(match, name) {
    return SCOPED_ABBR[name.toLowerCase()];
  }
  function replace_scoped(inlineTokens) {
    var i, token, inside_autolink = 0;
    for (i = inlineTokens.length - 1; i >= 0; i--) {
      token = inlineTokens[i];
      if (token.type === "text" && !inside_autolink) {
        token.content = token.content.replace(SCOPED_ABBR_RE, replaceFn);
      }
      if (token.type === "link_open" && token.info === "auto") {
        inside_autolink--;
      }
      if (token.type === "link_close" && token.info === "auto") {
        inside_autolink++;
      }
    }
  }
  function replace_rare(inlineTokens) {
    var i, token, inside_autolink = 0;
    for (i = inlineTokens.length - 1; i >= 0; i--) {
      token = inlineTokens[i];
      if (token.type === "text" && !inside_autolink) {
        if (RARE_RE.test(token.content)) {
          token.content = token.content.replace(/\+-/g, "\xb1").replace(/\.{2,}/g, "\u2026").replace(/([?!])\u2026/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---(?=[^-]|$)/gm, "$1\u2014").replace(/(^|\s)--(?=\s|$)/gm, "$1\u2013").replace(/(^|[^-\s])--(?=[^-\s]|$)/gm, "$1\u2013");
        }
      }
      if (token.type === "link_open" && token.info === "auto") {
        inside_autolink--;
      }
      if (token.type === "link_close" && token.info === "auto") {
        inside_autolink++;
      }
    }
  }
  var replacements = function replace(state) {
    var blkIdx;
    if (!state.md.options.typographer) {
      return;
    }
    for (blkIdx = state.tokens.length - 1; blkIdx >= 0; blkIdx--) {
      if (state.tokens[blkIdx].type !== "inline") {
        continue;
      }
      if (SCOPED_ABBR_TEST_RE.test(state.tokens[blkIdx].content)) {
        replace_scoped(state.tokens[blkIdx].children);
      }
      if (RARE_RE.test(state.tokens[blkIdx].content)) {
        replace_rare(state.tokens[blkIdx].children);
      }
    }
  };
  var isWhiteSpace = utils.isWhiteSpace;
  var isPunctChar = utils.isPunctChar;
  var isMdAsciiPunct = utils.isMdAsciiPunct;
  var QUOTE_TEST_RE = /['"]/;
  var QUOTE_RE = /['"]/g;
  var APOSTROPHE = "\u2019";
 /* ’ */  function replaceAt(str, index, ch) {
    return str.substr(0, index) + ch + str.substr(index + 1);
  }
  function process_inlines(tokens, state) {
    var i, token, text, t, pos, max, thisLevel, item, lastChar, nextChar, isLastPunctChar, isNextPunctChar, isLastWhiteSpace, isNextWhiteSpace, canOpen, canClose, j, isSingle, stack, openQuote, closeQuote;
    stack = [];
    for (i = 0; i < tokens.length; i++) {
      token = tokens[i];
      thisLevel = tokens[i].level;
      for (j = stack.length - 1; j >= 0; j--) {
        if (stack[j].level <= thisLevel) {
          break;
        }
      }
      stack.length = j + 1;
      if (token.type !== "text") {
        continue;
      }
      text = token.content;
      pos = 0;
      max = text.length;
      /*eslint no-labels:0,block-scoped-var:0*/      OUTER: while (pos < max) {
        QUOTE_RE.lastIndex = pos;
        t = QUOTE_RE.exec(text);
        if (!t) {
          break;
        }
        canOpen = canClose = true;
        pos = t.index + 1;
        isSingle = t[0] === "'";
        // Find previous character,
        // default to space if it's the beginning of the line
        
                lastChar = 32;
        if (t.index - 1 >= 0) {
          lastChar = text.charCodeAt(t.index - 1);
        } else {
          for (j = i - 1; j >= 0; j--) {
            if (tokens[j].type === "softbreak" || tokens[j].type === "hardbreak") break;
 // lastChar defaults to 0x20
                        if (!tokens[j].content) continue;
 // should skip all tokens except 'text', 'html_inline' or 'code_inline'
                        lastChar = tokens[j].content.charCodeAt(tokens[j].content.length - 1);
            break;
          }
        }
        // Find next character,
        // default to space if it's the end of the line
        
                nextChar = 32;
        if (pos < max) {
          nextChar = text.charCodeAt(pos);
        } else {
          for (j = i + 1; j < tokens.length; j++) {
            if (tokens[j].type === "softbreak" || tokens[j].type === "hardbreak") break;
 // nextChar defaults to 0x20
                        if (!tokens[j].content) continue;
 // should skip all tokens except 'text', 'html_inline' or 'code_inline'
                        nextChar = tokens[j].content.charCodeAt(0);
            break;
          }
        }
        isLastPunctChar = isMdAsciiPunct(lastChar) || isPunctChar(String.fromCharCode(lastChar));
        isNextPunctChar = isMdAsciiPunct(nextChar) || isPunctChar(String.fromCharCode(nextChar));
        isLastWhiteSpace = isWhiteSpace(lastChar);
        isNextWhiteSpace = isWhiteSpace(nextChar);
        if (isNextWhiteSpace) {
          canOpen = false;
        } else if (isNextPunctChar) {
          if (!(isLastWhiteSpace || isLastPunctChar)) {
            canOpen = false;
          }
        }
        if (isLastWhiteSpace) {
          canClose = false;
        } else if (isLastPunctChar) {
          if (!(isNextWhiteSpace || isNextPunctChar)) {
            canClose = false;
          }
        }
        if (nextChar === 34 /* " */ && t[0] === '"') {
          if (lastChar >= 48 /* 0 */ && lastChar <= 57 /* 9 */) {
            // special case: 1"" - count first quote as an inch
            canClose = canOpen = false;
          }
        }
        if (canOpen && canClose) {
          // Replace quotes in the middle of punctuation sequence, but not
          // in the middle of the words, i.e.:
          // 1. foo " bar " baz - not replaced
          // 2. foo-"-bar-"-baz - replaced
          // 3. foo"bar"baz     - not replaced
          canOpen = isLastPunctChar;
          canClose = isNextPunctChar;
        }
        if (!canOpen && !canClose) {
          // middle of word
          if (isSingle) {
            token.content = replaceAt(token.content, t.index, APOSTROPHE);
          }
          continue;
        }
        if (canClose) {
          // this could be a closing quote, rewind the stack to get a match
          for (j = stack.length - 1; j >= 0; j--) {
            item = stack[j];
            if (stack[j].level < thisLevel) {
              break;
            }
            if (item.single === isSingle && stack[j].level === thisLevel) {
              item = stack[j];
              if (isSingle) {
                openQuote = state.md.options.quotes[2];
                closeQuote = state.md.options.quotes[3];
              } else {
                openQuote = state.md.options.quotes[0];
                closeQuote = state.md.options.quotes[1];
              }
              // replace token.content *before* tokens[item.token].content,
              // because, if they are pointing at the same token, replaceAt
              // could mess up indices when quote length != 1
                            token.content = replaceAt(token.content, t.index, closeQuote);
              tokens[item.token].content = replaceAt(tokens[item.token].content, item.pos, openQuote);
              pos += closeQuote.length - 1;
              if (item.token === i) {
                pos += openQuote.length - 1;
              }
              text = token.content;
              max = text.length;
              stack.length = j;
              continue OUTER;
            }
          }
        }
        if (canOpen) {
          stack.push({
            token: i,
            pos: t.index,
            single: isSingle,
            level: thisLevel
          });
        } else if (canClose && isSingle) {
          token.content = replaceAt(token.content, t.index, APOSTROPHE);
        }
      }
    }
  }
  var smartquotes = function smartquotes(state) {
    /*eslint max-depth:0*/
    var blkIdx;
    if (!state.md.options.typographer) {
      return;
    }
    for (blkIdx = state.tokens.length - 1; blkIdx >= 0; blkIdx--) {
      if (state.tokens[blkIdx].type !== "inline" || !QUOTE_TEST_RE.test(state.tokens[blkIdx].content)) {
        continue;
      }
      process_inlines(state.tokens[blkIdx].children, state);
    }
  };
  // Token class
  /**
	 * class Token
	 **/
  /**
	 * new Token(type, tag, nesting)
	 *
	 * Create new token and fill passed properties.
	 **/  function Token(type, tag, nesting) {
    /**
	   * Token#type -> String
	   *
	   * Type of the token (string, e.g. "paragraph_open")
	   **/
    this.type = type;
    /**
	   * Token#tag -> String
	   *
	   * html tag name, e.g. "p"
	   **/    this.tag = tag;
    /**
	   * Token#attrs -> Array
	   *
	   * Html attributes. Format: `[ [ name1, value1 ], [ name2, value2 ] ]`
	   **/    this.attrs = null;
    /**
	   * Token#map -> Array
	   *
	   * Source map info. Format: `[ line_begin, line_end ]`
	   **/    this.map = null;
    /**
	   * Token#nesting -> Number
	   *
	   * Level change (number in {-1, 0, 1} set), where:
	   *
	   * -  `1` means the tag is opening
	   * -  `0` means the tag is self-closing
	   * - `-1` means the tag is closing
	   **/    this.nesting = nesting;
    /**
	   * Token#level -> Number
	   *
	   * nesting level, the same as `state.level`
	   **/    this.level = 0;
    /**
	   * Token#children -> Array
	   *
	   * An array of child nodes (inline and img tokens)
	   **/    this.children = null;
    /**
	   * Token#content -> String
	   *
	   * In a case of self-closing tag (code, html, fence, etc.),
	   * it has contents of this tag.
	   **/    this.content = "";
    /**
	   * Token#markup -> String
	   *
	   * '*' or '_' for emphasis, fence string for fence, etc.
	   **/    this.markup = "";
    /**
	   * Token#info -> String
	   *
	   * fence infostring
	   **/    this.info = "";
    /**
	   * Token#meta -> Object
	   *
	   * A place for plugins to store an arbitrary data
	   **/    this.meta = null;
    /**
	   * Token#block -> Boolean
	   *
	   * True for block-level tokens, false for inline tokens.
	   * Used in renderer to calculate line breaks
	   **/    this.block = false;
    /**
	   * Token#hidden -> Boolean
	   *
	   * If it's true, ignore this element when rendering. Used for tight lists
	   * to hide paragraphs.
	   **/    this.hidden = false;
  }
  /**
	 * Token.attrIndex(name) -> Number
	 *
	 * Search attribute index by name.
	 **/  Token.prototype.attrIndex = function attrIndex(name) {
    var attrs, i, len;
    if (!this.attrs) {
      return -1;
    }
    attrs = this.attrs;
    for (i = 0, len = attrs.length; i < len; i++) {
      if (attrs[i][0] === name) {
        return i;
      }
    }
    return -1;
  };
  /**
	 * Token.attrPush(attrData)
	 *
	 * Add `[ name, value ]` attribute to list. Init attrs if necessary
	 **/  Token.prototype.attrPush = function attrPush(attrData) {
    if (this.attrs) {
      this.attrs.push(attrData);
    } else {
      this.attrs = [ attrData ];
    }
  };
  /**
	 * Token.attrSet(name, value)
	 *
	 * Set `name` attribute to `value`. Override old value if exists.
	 **/  Token.prototype.attrSet = function attrSet(name, value) {
    var idx = this.attrIndex(name), attrData = [ name, value ];
    if (idx < 0) {
      this.attrPush(attrData);
    } else {
      this.attrs[idx] = attrData;
    }
  };
  /**
	 * Token.attrGet(name)
	 *
	 * Get the value of attribute `name`, or null if it does not exist.
	 **/  Token.prototype.attrGet = function attrGet(name) {
    var idx = this.attrIndex(name), value = null;
    if (idx >= 0) {
      value = this.attrs[idx][1];
    }
    return value;
  };
  /**
	 * Token.attrJoin(name, value)
	 *
	 * Join value to existing attribute via space. Or create new attribute if not
	 * exists. Useful to operate with token classes.
	 **/  Token.prototype.attrJoin = function attrJoin(name, value) {
    var idx = this.attrIndex(name);
    if (idx < 0) {
      this.attrPush([ name, value ]);
    } else {
      this.attrs[idx][1] = this.attrs[idx][1] + " " + value;
    }
  };
  var token = Token;
  function StateCore(src, md, env) {
    this.src = src;
    this.env = env;
    this.tokens = [];
    this.inlineMode = false;
    this.md = md;
 // link to parser instance
    }
  // re-export Token class to use in core rules
    StateCore.prototype.Token = token;
  var state_core = StateCore;
  var _rules = [ [ "normalize", normalize ], [ "block", block$1 ], [ "inline", inline ], [ "linkify", linkify ], [ "replacements", replacements ], [ "smartquotes", smartquotes ] ];
  /**
	 * new Core()
	 **/  function Core() {
    /**
	   * Core#ruler -> Ruler
	   *
	   * [[Ruler]] instance. Keep configuration of core rules.
	   **/
    this.ruler = new ruler;
    for (var i = 0; i < _rules.length; i++) {
      this.ruler.push(_rules[i][0], _rules[i][1]);
    }
  }
  /**
	 * Core.process(state)
	 *
	 * Executes core chain rules.
	 **/  Core.prototype.process = function(state) {
    var i, l, rules;
    rules = this.ruler.getRules("");
    for (i = 0, l = rules.length; i < l; i++) {
      rules[i](state);
    }
  };
  Core.prototype.State = state_core;
  var parser_core = Core;
  var isSpace = utils.isSpace;
  function getLine(state, line) {
    var pos = state.bMarks[line] + state.tShift[line], max = state.eMarks[line];
    return state.src.substr(pos, max - pos);
  }
  function escapedSplit(str) {
    var result = [], pos = 0, max = str.length, ch, isEscaped = false, lastPos = 0, current = "";
    ch = str.charCodeAt(pos);
    while (pos < max) {
      if (ch === 124 /* | */) {
        if (!isEscaped) {
          // pipe separating cells, '|'
          result.push(current + str.substring(lastPos, pos));
          current = "";
          lastPos = pos + 1;
        } else {
          // escaped pipe, '\|'
          current += str.substring(lastPos, pos - 1);
          lastPos = pos;
        }
      }
      isEscaped = ch === 92 /* \ */;
      pos++;
      ch = str.charCodeAt(pos);
    }
    result.push(current + str.substring(lastPos));
    return result;
  }
  var table = function table(state, startLine, endLine, silent) {
    var ch, lineText, pos, i, l, nextLine, columns, columnCount, token, aligns, t, tableLines, tbodyLines, oldParentType, terminate, terminatorRules;
    // should have at least two lines
        if (startLine + 2 > endLine) {
      return false;
    }
    nextLine = startLine + 1;
    if (state.sCount[nextLine] < state.blkIndent) {
      return false;
    }
    // if it's indented more than 3 spaces, it should be a code block
        if (state.sCount[nextLine] - state.blkIndent >= 4) {
      return false;
    }
    // first character of the second line should be '|', '-', ':',
    // and no other characters are allowed but spaces;
    // basically, this is the equivalent of /^[-:|][-:|\s]*$/ regexp
        pos = state.bMarks[nextLine] + state.tShift[nextLine];
    if (pos >= state.eMarks[nextLine]) {
      return false;
    }
    ch = state.src.charCodeAt(pos++);
    if (ch !== 124 /* | */ && ch !== 45 /* - */ && ch !== 58 /* : */) {
      return false;
    }
    while (pos < state.eMarks[nextLine]) {
      ch = state.src.charCodeAt(pos);
      if (ch !== 124 /* | */ && ch !== 45 /* - */ && ch !== 58 /* : */ && !isSpace(ch)) {
        return false;
      }
      pos++;
    }
    lineText = getLine(state, startLine + 1);
    columns = lineText.split("|");
    aligns = [];
    for (i = 0; i < columns.length; i++) {
      t = columns[i].trim();
      if (!t) {
        // allow empty columns before and after table, but not in between columns;
        // e.g. allow ` |---| `, disallow ` ---||--- `
        if (i === 0 || i === columns.length - 1) {
          continue;
        } else {
          return false;
        }
      }
      if (!/^:?-+:?$/.test(t)) {
        return false;
      }
      if (t.charCodeAt(t.length - 1) === 58 /* : */) {
        aligns.push(t.charCodeAt(0) === 58 /* : */ ? "center" : "right");
      } else if (t.charCodeAt(0) === 58 /* : */) {
        aligns.push("left");
      } else {
        aligns.push("");
      }
    }
    lineText = getLine(state, startLine).trim();
    if (lineText.indexOf("|") === -1) {
      return false;
    }
    if (state.sCount[startLine] - state.blkIndent >= 4) {
      return false;
    }
    columns = escapedSplit(lineText);
    if (columns.length && columns[0] === "") columns.shift();
    if (columns.length && columns[columns.length - 1] === "") columns.pop();
    // header row will define an amount of columns in the entire table,
    // and align row should be exactly the same (the rest of the rows can differ)
        columnCount = columns.length;
    if (columnCount === 0 || columnCount !== aligns.length) {
      return false;
    }
    if (silent) {
      return true;
    }
    oldParentType = state.parentType;
    state.parentType = "table";
    // use 'blockquote' lists for termination because it's
    // the most similar to tables
        terminatorRules = state.md.block.ruler.getRules("blockquote");
    token = state.push("table_open", "table", 1);
    token.map = tableLines = [ startLine, 0 ];
    token = state.push("thead_open", "thead", 1);
    token.map = [ startLine, startLine + 1 ];
    token = state.push("tr_open", "tr", 1);
    token.map = [ startLine, startLine + 1 ];
    for (i = 0; i < columns.length; i++) {
      token = state.push("th_open", "th", 1);
      if (aligns[i]) {
        token.attrs = [ [ "style", "text-align:" + aligns[i] ] ];
      }
      token = state.push("inline", "", 0);
      token.content = columns[i].trim();
      token.children = [];
      token = state.push("th_close", "th", -1);
    }
    token = state.push("tr_close", "tr", -1);
    token = state.push("thead_close", "thead", -1);
    for (nextLine = startLine + 2; nextLine < endLine; nextLine++) {
      if (state.sCount[nextLine] < state.blkIndent) {
        break;
      }
      terminate = false;
      for (i = 0, l = terminatorRules.length; i < l; i++) {
        if (terminatorRules[i](state, nextLine, endLine, true)) {
          terminate = true;
          break;
        }
      }
      if (terminate) {
        break;
      }
      lineText = getLine(state, nextLine).trim();
      if (!lineText) {
        break;
      }
      if (state.sCount[nextLine] - state.blkIndent >= 4) {
        break;
      }
      columns = escapedSplit(lineText);
      if (columns.length && columns[0] === "") columns.shift();
      if (columns.length && columns[columns.length - 1] === "") columns.pop();
      if (nextLine === startLine + 2) {
        token = state.push("tbody_open", "tbody", 1);
        token.map = tbodyLines = [ startLine + 2, 0 ];
      }
      token = state.push("tr_open", "tr", 1);
      token.map = [ nextLine, nextLine + 1 ];
      for (i = 0; i < columnCount; i++) {
        token = state.push("td_open", "td", 1);
        if (aligns[i]) {
          token.attrs = [ [ "style", "text-align:" + aligns[i] ] ];
        }
        token = state.push("inline", "", 0);
        token.content = columns[i] ? columns[i].trim() : "";
        token.children = [];
        token = state.push("td_close", "td", -1);
      }
      token = state.push("tr_close", "tr", -1);
    }
    if (tbodyLines) {
      token = state.push("tbody_close", "tbody", -1);
      tbodyLines[1] = nextLine;
    }
    token = state.push("table_close", "table", -1);
    tableLines[1] = nextLine;
    state.parentType = oldParentType;
    state.line = nextLine;
    return true;
  };
  // Code block (4 spaces padded)
    var code = function code(state, startLine, endLine /*, silent*/) {
    var nextLine, last, token;
    if (state.sCount[startLine] - state.blkIndent < 4) {
      return false;
    }
    last = nextLine = startLine + 1;
    while (nextLine < endLine) {
      if (state.isEmpty(nextLine)) {
        nextLine++;
        continue;
      }
      if (state.sCount[nextLine] - state.blkIndent >= 4) {
        nextLine++;
        last = nextLine;
        continue;
      }
      break;
    }
    state.line = last;
    token = state.push("code_block", "code", 0);
    token.content = state.getLines(startLine, last, 4 + state.blkIndent, true);
    token.map = [ startLine, state.line ];
    return true;
  };
  // fences (``` lang, ~~~ lang)
    var fence = function fence(state, startLine, endLine, silent) {
    var marker, len, params, nextLine, mem, token, markup, haveEndMarker = false, pos = state.bMarks[startLine] + state.tShift[startLine], max = state.eMarks[startLine];
    // if it's indented more than 3 spaces, it should be a code block
        if (state.sCount[startLine] - state.blkIndent >= 4) {
      return false;
    }
    if (pos + 3 > max) {
      return false;
    }
    marker = state.src.charCodeAt(pos);
    if (marker !== 126 /* ~ */ && marker !== 96 /* ` */) {
      return false;
    }
    // scan marker length
        mem = pos;
    pos = state.skipChars(pos, marker);
    len = pos - mem;
    if (len < 3) {
      return false;
    }
    markup = state.src.slice(mem, pos);
    params = state.src.slice(pos, max);
    if (marker === 96 /* ` */) {
      if (params.indexOf(String.fromCharCode(marker)) >= 0) {
        return false;
      }
    }
    // Since start is found, we can report success here in validation mode
        if (silent) {
      return true;
    }
    // search end of block
        nextLine = startLine;
    for (;;) {
      nextLine++;
      if (nextLine >= endLine) {
        // unclosed block should be autoclosed by end of document.
        // also block seems to be autoclosed by end of parent
        break;
      }
      pos = mem = state.bMarks[nextLine] + state.tShift[nextLine];
      max = state.eMarks[nextLine];
      if (pos < max && state.sCount[nextLine] < state.blkIndent) {
        // non-empty line with negative indent should stop the list:
        // - ```
        //  test
        break;
      }
      if (state.src.charCodeAt(pos) !== marker) {
        continue;
      }
      if (state.sCount[nextLine] - state.blkIndent >= 4) {
        // closing fence should be indented less than 4 spaces
        continue;
      }
      pos = state.skipChars(pos, marker);
      // closing code fence must be at least as long as the opening one
            if (pos - mem < len) {
        continue;
      }
      // make sure tail has spaces only
            pos = state.skipSpaces(pos);
      if (pos < max) {
        continue;
      }
      haveEndMarker = true;
      // found!
            break;
    }
    // If a fence has heading spaces, they should be removed from its inner block
        len = state.sCount[startLine];
    state.line = nextLine + (haveEndMarker ? 1 : 0);
    token = state.push("fence", "code", 0);
    token.info = params;
    token.content = state.getLines(startLine + 1, nextLine, len, true);
    token.markup = markup;
    token.map = [ startLine, state.line ];
    return true;
  };
  var isSpace$1 = utils.isSpace;
  var blockquote = function blockquote(state, startLine, endLine, silent) {
    var adjustTab, ch, i, initial, l, lastLineEmpty, lines, nextLine, offset, oldBMarks, oldBSCount, oldIndent, oldParentType, oldSCount, oldTShift, spaceAfterMarker, terminate, terminatorRules, token, isOutdented, oldLineMax = state.lineMax, pos = state.bMarks[startLine] + state.tShift[startLine], max = state.eMarks[startLine];
    // if it's indented more than 3 spaces, it should be a code block
        if (state.sCount[startLine] - state.blkIndent >= 4) {
      return false;
    }
    // check the block quote marker
        if (state.src.charCodeAt(pos++) !== 62 /* > */) {
      return false;
    }
    // we know that it's going to be a valid blockquote,
    // so no point trying to find the end of it in silent mode
        if (silent) {
      return true;
    }
    // set offset past spaces and ">"
        initial = offset = state.sCount[startLine] + 1;
    // skip one optional space after '>'
        if (state.src.charCodeAt(pos) === 32 /* space */) {
      // ' >   test '
      //     ^ -- position start of line here:
      pos++;
      initial++;
      offset++;
      adjustTab = false;
      spaceAfterMarker = true;
    } else if (state.src.charCodeAt(pos) === 9 /* tab */) {
      spaceAfterMarker = true;
      if ((state.bsCount[startLine] + offset) % 4 === 3) {
        // '  >\t  test '
        //       ^ -- position start of line here (tab has width===1)
        pos++;
        initial++;
        offset++;
        adjustTab = false;
      } else {
        // ' >\t  test '
        //    ^ -- position start of line here + shift bsCount slightly
        //         to make extra space appear
        adjustTab = true;
      }
    } else {
      spaceAfterMarker = false;
    }
    oldBMarks = [ state.bMarks[startLine] ];
    state.bMarks[startLine] = pos;
    while (pos < max) {
      ch = state.src.charCodeAt(pos);
      if (isSpace$1(ch)) {
        if (ch === 9) {
          offset += 4 - (offset + state.bsCount[startLine] + (adjustTab ? 1 : 0)) % 4;
        } else {
          offset++;
        }
      } else {
        break;
      }
      pos++;
    }
    oldBSCount = [ state.bsCount[startLine] ];
    state.bsCount[startLine] = state.sCount[startLine] + 1 + (spaceAfterMarker ? 1 : 0);
    lastLineEmpty = pos >= max;
    oldSCount = [ state.sCount[startLine] ];
    state.sCount[startLine] = offset - initial;
    oldTShift = [ state.tShift[startLine] ];
    state.tShift[startLine] = pos - state.bMarks[startLine];
    terminatorRules = state.md.block.ruler.getRules("blockquote");
    oldParentType = state.parentType;
    state.parentType = "blockquote";
    // Search the end of the block
    
    // Block ends with either:
    //  1. an empty line outside:
    //     ```
    //     > test
    
    //     ```
    //  2. an empty line inside:
    //     ```
    //     >
    //     test
    //     ```
    //  3. another tag:
    //     ```
    //     > test
    //      - - -
    //     ```
        for (nextLine = startLine + 1; nextLine < endLine; nextLine++) {
      // check if it's outdented, i.e. it's inside list item and indented
      // less than said list item:
      // ```
      // 1. anything
      //    > current blockquote
      // 2. checking this line
      // ```
      isOutdented = state.sCount[nextLine] < state.blkIndent;
      pos = state.bMarks[nextLine] + state.tShift[nextLine];
      max = state.eMarks[nextLine];
      if (pos >= max) {
        // Case 1: line is not inside the blockquote, and this line is empty.
        break;
      }
      if (state.src.charCodeAt(pos++) === 62 /* > */ && !isOutdented) {
        // This line is inside the blockquote.
        // set offset past spaces and ">"
        initial = offset = state.sCount[nextLine] + 1;
        // skip one optional space after '>'
                if (state.src.charCodeAt(pos) === 32 /* space */) {
          // ' >   test '
          //     ^ -- position start of line here:
          pos++;
          initial++;
          offset++;
          adjustTab = false;
          spaceAfterMarker = true;
        } else if (state.src.charCodeAt(pos) === 9 /* tab */) {
          spaceAfterMarker = true;
          if ((state.bsCount[nextLine] + offset) % 4 === 3) {
            // '  >\t  test '
            //       ^ -- position start of line here (tab has width===1)
            pos++;
            initial++;
            offset++;
            adjustTab = false;
          } else {
            // ' >\t  test '
            //    ^ -- position start of line here + shift bsCount slightly
            //         to make extra space appear
            adjustTab = true;
          }
        } else {
          spaceAfterMarker = false;
        }
        oldBMarks.push(state.bMarks[nextLine]);
        state.bMarks[nextLine] = pos;
        while (pos < max) {
          ch = state.src.charCodeAt(pos);
          if (isSpace$1(ch)) {
            if (ch === 9) {
              offset += 4 - (offset + state.bsCount[nextLine] + (adjustTab ? 1 : 0)) % 4;
            } else {
              offset++;
            }
          } else {
            break;
          }
          pos++;
        }
        lastLineEmpty = pos >= max;
        oldBSCount.push(state.bsCount[nextLine]);
        state.bsCount[nextLine] = state.sCount[nextLine] + 1 + (spaceAfterMarker ? 1 : 0);
        oldSCount.push(state.sCount[nextLine]);
        state.sCount[nextLine] = offset - initial;
        oldTShift.push(state.tShift[nextLine]);
        state.tShift[nextLine] = pos - state.bMarks[nextLine];
        continue;
      }
      // Case 2: line is not inside the blockquote, and the last line was empty.
            if (lastLineEmpty) {
        break;
      }
      // Case 3: another tag found.
            terminate = false;
      for (i = 0, l = terminatorRules.length; i < l; i++) {
        if (terminatorRules[i](state, nextLine, endLine, true)) {
          terminate = true;
          break;
        }
      }
      if (terminate) {
        // Quirk to enforce "hard termination mode" for paragraphs;
        // normally if you call `tokenize(state, startLine, nextLine)`,
        // paragraphs will look below nextLine for paragraph continuation,
        // but if blockquote is terminated by another tag, they shouldn't
        state.lineMax = nextLine;
        if (state.blkIndent !== 0) {
          // state.blkIndent was non-zero, we now set it to zero,
          // so we need to re-calculate all offsets to appear as
          // if indent wasn't changed
          oldBMarks.push(state.bMarks[nextLine]);
          oldBSCount.push(state.bsCount[nextLine]);
          oldTShift.push(state.tShift[nextLine]);
          oldSCount.push(state.sCount[nextLine]);
          state.sCount[nextLine] -= state.blkIndent;
        }
        break;
      }
      oldBMarks.push(state.bMarks[nextLine]);
      oldBSCount.push(state.bsCount[nextLine]);
      oldTShift.push(state.tShift[nextLine]);
      oldSCount.push(state.sCount[nextLine]);
      // A negative indentation means that this is a paragraph continuation
      
            state.sCount[nextLine] = -1;
    }
    oldIndent = state.blkIndent;
    state.blkIndent = 0;
    token = state.push("blockquote_open", "blockquote", 1);
    token.markup = ">";
    token.map = lines = [ startLine, 0 ];
    state.md.block.tokenize(state, startLine, nextLine);
    token = state.push("blockquote_close", "blockquote", -1);
    token.markup = ">";
    state.lineMax = oldLineMax;
    state.parentType = oldParentType;
    lines[1] = state.line;
    // Restore original tShift; this might not be necessary since the parser
    // has already been here, but just to make sure we can do that.
        for (i = 0; i < oldTShift.length; i++) {
      state.bMarks[i + startLine] = oldBMarks[i];
      state.tShift[i + startLine] = oldTShift[i];
      state.sCount[i + startLine] = oldSCount[i];
      state.bsCount[i + startLine] = oldBSCount[i];
    }
    state.blkIndent = oldIndent;
    return true;
  };
  var isSpace$2 = utils.isSpace;
  var hr = function hr(state, startLine, endLine, silent) {
    var marker, cnt, ch, token, pos = state.bMarks[startLine] + state.tShift[startLine], max = state.eMarks[startLine];
    // if it's indented more than 3 spaces, it should be a code block
        if (state.sCount[startLine] - state.blkIndent >= 4) {
      return false;
    }
    marker = state.src.charCodeAt(pos++);
    // Check hr marker
        if (marker !== 42 /* * */ && marker !== 45 /* - */ && marker !== 95 /* _ */) {
      return false;
    }
    // markers can be mixed with spaces, but there should be at least 3 of them
        cnt = 1;
    while (pos < max) {
      ch = state.src.charCodeAt(pos++);
      if (ch !== marker && !isSpace$2(ch)) {
        return false;
      }
      if (ch === marker) {
        cnt++;
      }
    }
    if (cnt < 3) {
      return false;
    }
    if (silent) {
      return true;
    }
    state.line = startLine + 1;
    token = state.push("hr", "hr", 0);
    token.map = [ startLine, state.line ];
    token.markup = Array(cnt + 1).join(String.fromCharCode(marker));
    return true;
  };
  var isSpace$3 = utils.isSpace;
  // Search `[-+*][\n ]`, returns next pos after marker on success
  // or -1 on fail.
    function skipBulletListMarker(state, startLine) {
    var marker, pos, max, ch;
    pos = state.bMarks[startLine] + state.tShift[startLine];
    max = state.eMarks[startLine];
    marker = state.src.charCodeAt(pos++);
    // Check bullet
        if (marker !== 42 /* * */ && marker !== 45 /* - */ && marker !== 43 /* + */) {
      return -1;
    }
    if (pos < max) {
      ch = state.src.charCodeAt(pos);
      if (!isSpace$3(ch)) {
        // " -test " - is not a list item
        return -1;
      }
    }
    return pos;
  }
  // Search `\d+[.)][\n ]`, returns next pos after marker on success
  // or -1 on fail.
    function skipOrderedListMarker(state, startLine) {
    var ch, start = state.bMarks[startLine] + state.tShift[startLine], pos = start, max = state.eMarks[startLine];
    // List marker should have at least 2 chars (digit + dot)
        if (pos + 1 >= max) {
      return -1;
    }
    ch = state.src.charCodeAt(pos++);
    if (ch < 48 /* 0 */ || ch > 57 /* 9 */) {
      return -1;
    }
    for (;;) {
      // EOL -> fail
      if (pos >= max) {
        return -1;
      }
      ch = state.src.charCodeAt(pos++);
      if (ch >= 48 /* 0 */ && ch <= 57 /* 9 */) {
        // List marker should have no more than 9 digits
        // (prevents integer overflow in browsers)
        if (pos - start >= 10) {
          return -1;
        }
        continue;
      }
      // found valid marker
            if (ch === 41 /* ) */ || ch === 46 /* . */) {
        break;
      }
      return -1;
    }
    if (pos < max) {
      ch = state.src.charCodeAt(pos);
      if (!isSpace$3(ch)) {
        // " 1.test " - is not a list item
        return -1;
      }
    }
    return pos;
  }
  function markTightParagraphs(state, idx) {
    var i, l, level = state.level + 2;
    for (i = idx + 2, l = state.tokens.length - 2; i < l; i++) {
      if (state.tokens[i].level === level && state.tokens[i].type === "paragraph_open") {
        state.tokens[i + 2].hidden = true;
        state.tokens[i].hidden = true;
        i += 2;
      }
    }
  }
  var list = function list(state, startLine, endLine, silent) {
    var ch, contentStart, i, indent, indentAfterMarker, initial, isOrdered, itemLines, l, listLines, listTokIdx, markerCharCode, markerValue, max, nextLine, offset, oldListIndent, oldParentType, oldSCount, oldTShift, oldTight, pos, posAfterMarker, prevEmptyEnd, start, terminate, terminatorRules, token, isTerminatingParagraph = false, tight = true;
    // if it's indented more than 3 spaces, it should be a code block
        if (state.sCount[startLine] - state.blkIndent >= 4) {
      return false;
    }
    // Special case:
    //  - item 1
    //   - item 2
    //    - item 3
    //     - item 4
    //      - this one is a paragraph continuation
        if (state.listIndent >= 0 && state.sCount[startLine] - state.listIndent >= 4 && state.sCount[startLine] < state.blkIndent) {
      return false;
    }
    // limit conditions when list can interrupt
    // a paragraph (validation mode only)
        if (silent && state.parentType === "paragraph") {
      // Next list item should still terminate previous list item;
      // This code can fail if plugins use blkIndent as well as lists,
      // but I hope the spec gets fixed long before that happens.
      if (state.tShift[startLine] >= state.blkIndent) {
        isTerminatingParagraph = true;
      }
    }
    // Detect list type and position after marker
        if ((posAfterMarker = skipOrderedListMarker(state, startLine)) >= 0) {
      isOrdered = true;
      start = state.bMarks[startLine] + state.tShift[startLine];
      markerValue = Number(state.src.substr(start, posAfterMarker - start - 1));
      // If we're starting a new ordered list right after
      // a paragraph, it should start with 1.
            if (isTerminatingParagraph && markerValue !== 1) return false;
    } else if ((posAfterMarker = skipBulletListMarker(state, startLine)) >= 0) {
      isOrdered = false;
    } else {
      return false;
    }
    // If we're starting a new unordered list right after
    // a paragraph, first line should not be empty.
        if (isTerminatingParagraph) {
      if (state.skipSpaces(posAfterMarker) >= state.eMarks[startLine]) return false;
    }
    // We should terminate list on style change. Remember first one to compare.
        markerCharCode = state.src.charCodeAt(posAfterMarker - 1);
    // For validation mode we can terminate immediately
        if (silent) {
      return true;
    }
    // Start list
        listTokIdx = state.tokens.length;
    if (isOrdered) {
      token = state.push("ordered_list_open", "ol", 1);
      if (markerValue !== 1) {
        token.attrs = [ [ "start", markerValue ] ];
      }
    } else {
      token = state.push("bullet_list_open", "ul", 1);
    }
    token.map = listLines = [ startLine, 0 ];
    token.markup = String.fromCharCode(markerCharCode);
    
    // Iterate list items
    
        nextLine = startLine;
    prevEmptyEnd = false;
    terminatorRules = state.md.block.ruler.getRules("list");
    oldParentType = state.parentType;
    state.parentType = "list";
    while (nextLine < endLine) {
      pos = posAfterMarker;
      max = state.eMarks[nextLine];
      initial = offset = state.sCount[nextLine] + posAfterMarker - (state.bMarks[startLine] + state.tShift[startLine]);
      while (pos < max) {
        ch = state.src.charCodeAt(pos);
        if (ch === 9) {
          offset += 4 - (offset + state.bsCount[nextLine]) % 4;
        } else if (ch === 32) {
          offset++;
        } else {
          break;
        }
        pos++;
      }
      contentStart = pos;
      if (contentStart >= max) {
        // trimming space in "-    \n  3" case, indent is 1 here
        indentAfterMarker = 1;
      } else {
        indentAfterMarker = offset - initial;
      }
      // If we have more than 4 spaces, the indent is 1
      // (the rest is just indented code block)
            if (indentAfterMarker > 4) {
        indentAfterMarker = 1;
      }
      // "  -  test"
      //  ^^^^^ - calculating total length of this thing
            indent = initial + indentAfterMarker;
      // Run subparser & write tokens
            token = state.push("list_item_open", "li", 1);
      token.markup = String.fromCharCode(markerCharCode);
      token.map = itemLines = [ startLine, 0 ];
      // change current state, then restore it after parser subcall
            oldTight = state.tight;
      oldTShift = state.tShift[startLine];
      oldSCount = state.sCount[startLine];
      //  - example list
      // ^ listIndent position will be here
      //   ^ blkIndent position will be here
      
            oldListIndent = state.listIndent;
      state.listIndent = state.blkIndent;
      state.blkIndent = indent;
      state.tight = true;
      state.tShift[startLine] = contentStart - state.bMarks[startLine];
      state.sCount[startLine] = offset;
      if (contentStart >= max && state.isEmpty(startLine + 1)) {
        // workaround for this case
        // (list item is empty, list terminates before "foo"):
        // ~~~~~~~~
        //   -
        //     foo
        // ~~~~~~~~
        state.line = Math.min(state.line + 2, endLine);
      } else {
        state.md.block.tokenize(state, startLine, endLine, true);
      }
      // If any of list item is tight, mark list as tight
            if (!state.tight || prevEmptyEnd) {
        tight = false;
      }
      // Item become loose if finish with empty line,
      // but we should filter last element, because it means list finish
            prevEmptyEnd = state.line - startLine > 1 && state.isEmpty(state.line - 1);
      state.blkIndent = state.listIndent;
      state.listIndent = oldListIndent;
      state.tShift[startLine] = oldTShift;
      state.sCount[startLine] = oldSCount;
      state.tight = oldTight;
      token = state.push("list_item_close", "li", -1);
      token.markup = String.fromCharCode(markerCharCode);
      nextLine = startLine = state.line;
      itemLines[1] = nextLine;
      contentStart = state.bMarks[startLine];
      if (nextLine >= endLine) {
        break;
      }
      
      // Try to check if list is terminated or continued.
      
            if (state.sCount[nextLine] < state.blkIndent) {
        break;
      }
      // if it's indented more than 3 spaces, it should be a code block
            if (state.sCount[startLine] - state.blkIndent >= 4) {
        break;
      }
      // fail if terminating block found
            terminate = false;
      for (i = 0, l = terminatorRules.length; i < l; i++) {
        if (terminatorRules[i](state, nextLine, endLine, true)) {
          terminate = true;
          break;
        }
      }
      if (terminate) {
        break;
      }
      // fail if list has another type
            if (isOrdered) {
        posAfterMarker = skipOrderedListMarker(state, nextLine);
        if (posAfterMarker < 0) {
          break;
        }
      } else {
        posAfterMarker = skipBulletListMarker(state, nextLine);
        if (posAfterMarker < 0) {
          break;
        }
      }
      if (markerCharCode !== state.src.charCodeAt(posAfterMarker - 1)) {
        break;
      }
    }
    // Finalize list
        if (isOrdered) {
      token = state.push("ordered_list_close", "ol", -1);
    } else {
      token = state.push("bullet_list_close", "ul", -1);
    }
    token.markup = String.fromCharCode(markerCharCode);
    listLines[1] = nextLine;
    state.line = nextLine;
    state.parentType = oldParentType;
    // mark paragraphs tight if needed
        if (tight) {
      markTightParagraphs(state, listTokIdx);
    }
    return true;
  };
  var normalizeReference = utils.normalizeReference;
  var isSpace$4 = utils.isSpace;
  var reference = function reference(state, startLine, _endLine, silent) {
    var ch, destEndPos, destEndLineNo, endLine, href, i, l, label, labelEnd, oldParentType, res, start, str, terminate, terminatorRules, title, lines = 0, pos = state.bMarks[startLine] + state.tShift[startLine], max = state.eMarks[startLine], nextLine = startLine + 1;
    // if it's indented more than 3 spaces, it should be a code block
        if (state.sCount[startLine] - state.blkIndent >= 4) {
      return false;
    }
    if (state.src.charCodeAt(pos) !== 91 /* [ */) {
      return false;
    }
    // Simple check to quickly interrupt scan on [link](url) at the start of line.
    // Can be useful on practice: https://github.com/markdown-it/markdown-it/issues/54
        while (++pos < max) {
      if (state.src.charCodeAt(pos) === 93 /* ] */ && state.src.charCodeAt(pos - 1) !== 92 /* \ */) {
        if (pos + 1 === max) {
          return false;
        }
        if (state.src.charCodeAt(pos + 1) !== 58 /* : */) {
          return false;
        }
        break;
      }
    }
    endLine = state.lineMax;
    // jump line-by-line until empty one or EOF
        terminatorRules = state.md.block.ruler.getRules("reference");
    oldParentType = state.parentType;
    state.parentType = "reference";
    for (;nextLine < endLine && !state.isEmpty(nextLine); nextLine++) {
      // this would be a code block normally, but after paragraph
      // it's considered a lazy continuation regardless of what's there
      if (state.sCount[nextLine] - state.blkIndent > 3) {
        continue;
      }
      // quirk for blockquotes, this line should already be checked by that rule
            if (state.sCount[nextLine] < 0) {
        continue;
      }
      // Some tags can terminate paragraph without empty line.
            terminate = false;
      for (i = 0, l = terminatorRules.length; i < l; i++) {
        if (terminatorRules[i](state, nextLine, endLine, true)) {
          terminate = true;
          break;
        }
      }
      if (terminate) {
        break;
      }
    }
    str = state.getLines(startLine, nextLine, state.blkIndent, false).trim();
    max = str.length;
    for (pos = 1; pos < max; pos++) {
      ch = str.charCodeAt(pos);
      if (ch === 91 /* [ */) {
        return false;
      } else if (ch === 93 /* ] */) {
        labelEnd = pos;
        break;
      } else if (ch === 10 /* \n */) {
        lines++;
      } else if (ch === 92 /* \ */) {
        pos++;
        if (pos < max && str.charCodeAt(pos) === 10) {
          lines++;
        }
      }
    }
    if (labelEnd < 0 || str.charCodeAt(labelEnd + 1) !== 58 /* : */) {
      return false;
    }
    // [label]:   destination   'title'
    //         ^^^ skip optional whitespace here
        for (pos = labelEnd + 2; pos < max; pos++) {
      ch = str.charCodeAt(pos);
      if (ch === 10) {
        lines++;
      } else if (isSpace$4(ch)) ; else {
        break;
      }
    }
    // [label]:   destination   'title'
    //            ^^^^^^^^^^^ parse this
        res = state.md.helpers.parseLinkDestination(str, pos, max);
    if (!res.ok) {
      return false;
    }
    href = state.md.normalizeLink(res.str);
    if (!state.md.validateLink(href)) {
      return false;
    }
    pos = res.pos;
    lines += res.lines;
    // save cursor state, we could require to rollback later
        destEndPos = pos;
    destEndLineNo = lines;
    // [label]:   destination   'title'
    //                       ^^^ skipping those spaces
        start = pos;
    for (;pos < max; pos++) {
      ch = str.charCodeAt(pos);
      if (ch === 10) {
        lines++;
      } else if (isSpace$4(ch)) ; else {
        break;
      }
    }
    // [label]:   destination   'title'
    //                          ^^^^^^^ parse this
        res = state.md.helpers.parseLinkTitle(str, pos, max);
    if (pos < max && start !== pos && res.ok) {
      title = res.str;
      pos = res.pos;
      lines += res.lines;
    } else {
      title = "";
      pos = destEndPos;
      lines = destEndLineNo;
    }
    // skip trailing spaces until the rest of the line
        while (pos < max) {
      ch = str.charCodeAt(pos);
      if (!isSpace$4(ch)) {
        break;
      }
      pos++;
    }
    if (pos < max && str.charCodeAt(pos) !== 10) {
      if (title) {
        // garbage at the end of the line after title,
        // but it could still be a valid reference if we roll back
        title = "";
        pos = destEndPos;
        lines = destEndLineNo;
        while (pos < max) {
          ch = str.charCodeAt(pos);
          if (!isSpace$4(ch)) {
            break;
          }
          pos++;
        }
      }
    }
    if (pos < max && str.charCodeAt(pos) !== 10) {
      // garbage at the end of the line
      return false;
    }
    label = normalizeReference(str.slice(1, labelEnd));
    if (!label) {
      // CommonMark 0.20 disallows empty labels
      return false;
    }
    // Reference can not terminate anything. This check is for safety only.
    /*istanbul ignore if*/    if (silent) {
      return true;
    }
    if (typeof state.env.references === "undefined") {
      state.env.references = {};
    }
    if (typeof state.env.references[label] === "undefined") {
      state.env.references[label] = {
        title: title,
        href: href
      };
    }
    state.parentType = oldParentType;
    state.line = startLine + lines + 1;
    return true;
  };
  var isSpace$5 = utils.isSpace;
  var heading = function heading(state, startLine, endLine, silent) {
    var ch, level, tmp, token, pos = state.bMarks[startLine] + state.tShift[startLine], max = state.eMarks[startLine];
    // if it's indented more than 3 spaces, it should be a code block
        if (state.sCount[startLine] - state.blkIndent >= 4) {
      return false;
    }
    ch = state.src.charCodeAt(pos);
    if (ch !== 35 /* # */ || pos >= max) {
      return false;
    }
    // count heading level
        level = 1;
    ch = state.src.charCodeAt(++pos);
    while (ch === 35 /* # */ && pos < max && level <= 6) {
      level++;
      ch = state.src.charCodeAt(++pos);
    }
    if (level > 6 || pos < max && !isSpace$5(ch)) {
      return false;
    }
    if (silent) {
      return true;
    }
    // Let's cut tails like '    ###  ' from the end of string
        max = state.skipSpacesBack(max, pos);
    tmp = state.skipCharsBack(max, 35, pos);
 // #
        if (tmp > pos && isSpace$5(state.src.charCodeAt(tmp - 1))) {
      max = tmp;
    }
    state.line = startLine + 1;
    token = state.push("heading_open", "h" + String(level), 1);
    token.markup = "########".slice(0, level);
    token.map = [ startLine, state.line ];
    token = state.push("inline", "", 0);
    token.content = state.src.slice(pos, max).trim();
    token.map = [ startLine, state.line ];
    token.children = [];
    token = state.push("heading_close", "h" + String(level), -1);
    token.markup = "########".slice(0, level);
    return true;
  };
  // lheading (---, ===)
    var lheading = function lheading(state, startLine, endLine /*, silent*/) {
    var content, terminate, i, l, token, pos, max, level, marker, nextLine = startLine + 1, oldParentType, terminatorRules = state.md.block.ruler.getRules("paragraph");
    // if it's indented more than 3 spaces, it should be a code block
        if (state.sCount[startLine] - state.blkIndent >= 4) {
      return false;
    }
    oldParentType = state.parentType;
    state.parentType = "paragraph";
 // use paragraph to match terminatorRules
    // jump line-by-line until empty one or EOF
        for (;nextLine < endLine && !state.isEmpty(nextLine); nextLine++) {
      // this would be a code block normally, but after paragraph
      // it's considered a lazy continuation regardless of what's there
      if (state.sCount[nextLine] - state.blkIndent > 3) {
        continue;
      }
      
      // Check for underline in setext header
      
            if (state.sCount[nextLine] >= state.blkIndent) {
        pos = state.bMarks[nextLine] + state.tShift[nextLine];
        max = state.eMarks[nextLine];
        if (pos < max) {
          marker = state.src.charCodeAt(pos);
          if (marker === 45 /* - */ || marker === 61 /* = */) {
            pos = state.skipChars(pos, marker);
            pos = state.skipSpaces(pos);
            if (pos >= max) {
              level = marker === 61 /* = */ ? 1 : 2;
              break;
            }
          }
        }
      }
      // quirk for blockquotes, this line should already be checked by that rule
            if (state.sCount[nextLine] < 0) {
        continue;
      }
      // Some tags can terminate paragraph without empty line.
            terminate = false;
      for (i = 0, l = terminatorRules.length; i < l; i++) {
        if (terminatorRules[i](state, nextLine, endLine, true)) {
          terminate = true;
          break;
        }
      }
      if (terminate) {
        break;
      }
    }
    if (!level) {
      // Didn't find valid underline
      return false;
    }
    content = state.getLines(startLine, nextLine, state.blkIndent, false).trim();
    state.line = nextLine + 1;
    token = state.push("heading_open", "h" + String(level), 1);
    token.markup = String.fromCharCode(marker);
    token.map = [ startLine, state.line ];
    token = state.push("inline", "", 0);
    token.content = content;
    token.map = [ startLine, state.line - 1 ];
    token.children = [];
    token = state.push("heading_close", "h" + String(level), -1);
    token.markup = String.fromCharCode(marker);
    state.parentType = oldParentType;
    return true;
  };
  // List of valid html blocks names, accorting to commonmark spec
    var html_blocks = [ "address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hr", "html", "iframe", "legend", "li", "link", "main", "menu", "menuitem", "meta", "nav", "noframes", "ol", "optgroup", "option", "p", "param", "section", "source", "summary", "table", "tbody", "td", "tfoot", "th", "thead", "title", "tr", "track", "ul" ];
  // Regexps to match html elements
    var attr_name = "[a-zA-Z_:][a-zA-Z0-9:._-]*";
  var unquoted = "[^\"'=<>`\\x00-\\x20]+";
  var single_quoted = "'[^']*'";
  var double_quoted = '"[^"]*"';
  var attr_value = "(?:" + unquoted + "|" + single_quoted + "|" + double_quoted + ")";
  var attribute = "(?:\\s+" + attr_name + "(?:\\s*=\\s*" + attr_value + ")?)";
  var open_tag = "<[A-Za-z][A-Za-z0-9\\-]*" + attribute + "*\\s*\\/?>";
  var close_tag = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>";
  var comment = "\x3c!----\x3e|\x3c!--(?:-?[^>-])(?:-?[^-])*--\x3e";
  var processing = "<[?].*?[?]>";
  var declaration = "<![A-Z]+\\s+[^>]*>";
  var cdata = "<!\\[CDATA\\[[\\s\\S]*?\\]\\]>";
  var HTML_TAG_RE = new RegExp("^(?:" + open_tag + "|" + close_tag + "|" + comment + "|" + processing + "|" + declaration + "|" + cdata + ")");
  var HTML_OPEN_CLOSE_TAG_RE = new RegExp("^(?:" + open_tag + "|" + close_tag + ")");
  var HTML_TAG_RE_1 = HTML_TAG_RE;
  var HTML_OPEN_CLOSE_TAG_RE_1 = HTML_OPEN_CLOSE_TAG_RE;
  var html_re = {
    HTML_TAG_RE: HTML_TAG_RE_1,
    HTML_OPEN_CLOSE_TAG_RE: HTML_OPEN_CLOSE_TAG_RE_1
  };
  var HTML_OPEN_CLOSE_TAG_RE$1 = html_re.HTML_OPEN_CLOSE_TAG_RE;
  // An array of opening and corresponding closing sequences for html tags,
  // last argument defines whether it can terminate a paragraph or not
  
    var HTML_SEQUENCES = [ [ /^<(script|pre|style)(?=(\s|>|$))/i, /<\/(script|pre|style)>/i, true ], [ /^<!--/, /-->/, true ], [ /^<\?/, /\?>/, true ], [ /^<![A-Z]/, />/, true ], [ /^<!\[CDATA\[/, /\]\]>/, true ], [ new RegExp("^</?(" + html_blocks.join("|") + ")(?=(\\s|/?>|$))", "i"), /^$/, true ], [ new RegExp(HTML_OPEN_CLOSE_TAG_RE$1.source + "\\s*$"), /^$/, false ] ];
  var html_block = function html_block(state, startLine, endLine, silent) {
    var i, nextLine, token, lineText, pos = state.bMarks[startLine] + state.tShift[startLine], max = state.eMarks[startLine];
    // if it's indented more than 3 spaces, it should be a code block
        if (state.sCount[startLine] - state.blkIndent >= 4) {
      return false;
    }
    if (!state.md.options.html) {
      return false;
    }
    if (state.src.charCodeAt(pos) !== 60 /* < */) {
      return false;
    }
    lineText = state.src.slice(pos, max);
    for (i = 0; i < HTML_SEQUENCES.length; i++) {
      if (HTML_SEQUENCES[i][0].test(lineText)) {
        break;
      }
    }
    if (i === HTML_SEQUENCES.length) {
      return false;
    }
    if (silent) {
      // true if this sequence can be a terminator, false otherwise
      return HTML_SEQUENCES[i][2];
    }
    nextLine = startLine + 1;
    // If we are here - we detected HTML block.
    // Let's roll down till block end.
        if (!HTML_SEQUENCES[i][1].test(lineText)) {
      for (;nextLine < endLine; nextLine++) {
        if (state.sCount[nextLine] < state.blkIndent) {
          break;
        }
        pos = state.bMarks[nextLine] + state.tShift[nextLine];
        max = state.eMarks[nextLine];
        lineText = state.src.slice(pos, max);
        if (HTML_SEQUENCES[i][1].test(lineText)) {
          if (lineText.length !== 0) {
            nextLine++;
          }
          break;
        }
      }
    }
    state.line = nextLine;
    token = state.push("html_block", "", 0);
    token.map = [ startLine, nextLine ];
    token.content = state.getLines(startLine, nextLine, state.blkIndent, true);
    return true;
  };
  // Paragraph
    var paragraph = function paragraph(state, startLine /*, endLine*/) {
    var content, terminate, i, l, token, oldParentType, nextLine = startLine + 1, terminatorRules = state.md.block.ruler.getRules("paragraph"), endLine = state.lineMax;
    oldParentType = state.parentType;
    state.parentType = "paragraph";
    // jump line-by-line until empty one or EOF
        for (;nextLine < endLine && !state.isEmpty(nextLine); nextLine++) {
      // this would be a code block normally, but after paragraph
      // it's considered a lazy continuation regardless of what's there
      if (state.sCount[nextLine] - state.blkIndent > 3) {
        continue;
      }
      // quirk for blockquotes, this line should already be checked by that rule
            if (state.sCount[nextLine] < 0) {
        continue;
      }
      // Some tags can terminate paragraph without empty line.
            terminate = false;
      for (i = 0, l = terminatorRules.length; i < l; i++) {
        if (terminatorRules[i](state, nextLine, endLine, true)) {
          terminate = true;
          break;
        }
      }
      if (terminate) {
        break;
      }
    }
    content = state.getLines(startLine, nextLine, state.blkIndent, false).trim();
    state.line = nextLine;
    token = state.push("paragraph_open", "p", 1);
    token.map = [ startLine, state.line ];
    token = state.push("inline", "", 0);
    token.content = content;
    token.map = [ startLine, state.line ];
    token.children = [];
    token = state.push("paragraph_close", "p", -1);
    state.parentType = oldParentType;
    return true;
  };
  var isSpace$6 = utils.isSpace;
  function StateBlock(src, md, env, tokens) {
    var ch, s, start, pos, len, indent, offset, indent_found;
    this.src = src;
    // link to parser instance
        this.md = md;
    this.env = env;
    
    // Internal state vartiables
    
        this.tokens = tokens;
    this.bMarks = [];
 // line begin offsets for fast jumps
        this.eMarks = [];
 // line end offsets for fast jumps
        this.tShift = [];
 // offsets of the first non-space characters (tabs not expanded)
        this.sCount = [];
 // indents for each line (tabs expanded)
    // An amount of virtual spaces (tabs expanded) between beginning
    // of each line (bMarks) and real beginning of that line.
    
    // It exists only as a hack because blockquotes override bMarks
    // losing information in the process.
    
    // It's used only when expanding tabs, you can think about it as
    // an initial tab length, e.g. bsCount=21 applied to string `\t123`
    // means first tab should be expanded to 4-21%4 === 3 spaces.
    
        this.bsCount = [];
    // block parser variables
        this.blkIndent = 0;
 // required block content indent (for example, if we are
    // inside a list, it would be positioned after list marker)
        this.line = 0;
 // line index in src
        this.lineMax = 0;
 // lines count
        this.tight = false;
 // loose/tight mode for lists
        this.ddIndent = -1;
 // indent of the current dd block (-1 if there isn't any)
        this.listIndent = -1;
 // indent of the current list block (-1 if there isn't any)
    // can be 'blockquote', 'list', 'root', 'paragraph' or 'reference'
    // used in lists to determine if they interrupt a paragraph
        this.parentType = "root";
    this.level = 0;
    // renderer
        this.result = "";
    // Create caches
    // Generate markers.
        s = this.src;
    indent_found = false;
    for (start = pos = indent = offset = 0, len = s.length; pos < len; pos++) {
      ch = s.charCodeAt(pos);
      if (!indent_found) {
        if (isSpace$6(ch)) {
          indent++;
          if (ch === 9) {
            offset += 4 - offset % 4;
          } else {
            offset++;
          }
          continue;
        } else {
          indent_found = true;
        }
      }
      if (ch === 10 || pos === len - 1) {
        if (ch !== 10) {
          pos++;
        }
        this.bMarks.push(start);
        this.eMarks.push(pos);
        this.tShift.push(indent);
        this.sCount.push(offset);
        this.bsCount.push(0);
        indent_found = false;
        indent = 0;
        offset = 0;
        start = pos + 1;
      }
    }
    // Push fake entry to simplify cache bounds checks
        this.bMarks.push(s.length);
    this.eMarks.push(s.length);
    this.tShift.push(0);
    this.sCount.push(0);
    this.bsCount.push(0);
    this.lineMax = this.bMarks.length - 1;
 // don't count last fake line
    }
  // Push new token to "stream".
  
    StateBlock.prototype.push = function(type, tag, nesting) {
    var token$1 = new token(type, tag, nesting);
    token$1.block = true;
    if (nesting < 0) this.level--;
 // closing tag
        token$1.level = this.level;
    if (nesting > 0) this.level++;
 // opening tag
        this.tokens.push(token$1);
    return token$1;
  };
  StateBlock.prototype.isEmpty = function isEmpty(line) {
    return this.bMarks[line] + this.tShift[line] >= this.eMarks[line];
  };
  StateBlock.prototype.skipEmptyLines = function skipEmptyLines(from) {
    for (var max = this.lineMax; from < max; from++) {
      if (this.bMarks[from] + this.tShift[from] < this.eMarks[from]) {
        break;
      }
    }
    return from;
  };
  // Skip spaces from given position.
    StateBlock.prototype.skipSpaces = function skipSpaces(pos) {
    var ch;
    for (var max = this.src.length; pos < max; pos++) {
      ch = this.src.charCodeAt(pos);
      if (!isSpace$6(ch)) {
        break;
      }
    }
    return pos;
  };
  // Skip spaces from given position in reverse.
    StateBlock.prototype.skipSpacesBack = function skipSpacesBack(pos, min) {
    if (pos <= min) {
      return pos;
    }
    while (pos > min) {
      if (!isSpace$6(this.src.charCodeAt(--pos))) {
        return pos + 1;
      }
    }
    return pos;
  };
  // Skip char codes from given position
    StateBlock.prototype.skipChars = function skipChars(pos, code) {
    for (var max = this.src.length; pos < max; pos++) {
      if (this.src.charCodeAt(pos) !== code) {
        break;
      }
    }
    return pos;
  };
  // Skip char codes reverse from given position - 1
    StateBlock.prototype.skipCharsBack = function skipCharsBack(pos, code, min) {
    if (pos <= min) {
      return pos;
    }
    while (pos > min) {
      if (code !== this.src.charCodeAt(--pos)) {
        return pos + 1;
      }
    }
    return pos;
  };
  // cut lines range from source.
    StateBlock.prototype.getLines = function getLines(begin, end, indent, keepLastLF) {
    var i, lineIndent, ch, first, last, queue, lineStart, line = begin;
    if (begin >= end) {
      return "";
    }
    queue = new Array(end - begin);
    for (i = 0; line < end; line++, i++) {
      lineIndent = 0;
      lineStart = first = this.bMarks[line];
      if (line + 1 < end || keepLastLF) {
        // No need for bounds check because we have fake entry on tail.
        last = this.eMarks[line] + 1;
      } else {
        last = this.eMarks[line];
      }
      while (first < last && lineIndent < indent) {
        ch = this.src.charCodeAt(first);
        if (isSpace$6(ch)) {
          if (ch === 9) {
            lineIndent += 4 - (lineIndent + this.bsCount[line]) % 4;
          } else {
            lineIndent++;
          }
        } else if (first - lineStart < this.tShift[line]) {
          // patched tShift masked characters to look like spaces (blockquotes, list markers)
          lineIndent++;
        } else {
          break;
        }
        first++;
      }
      if (lineIndent > indent) {
        // partially expanding tabs in code blocks, e.g '\t\tfoobar'
        // with indent=2 becomes '  \tfoobar'
        queue[i] = new Array(lineIndent - indent + 1).join(" ") + this.src.slice(first, last);
      } else {
        queue[i] = this.src.slice(first, last);
      }
    }
    return queue.join("");
  };
  // re-export Token class to use in block rules
    StateBlock.prototype.Token = token;
  var state_block = StateBlock;
  var _rules$1 = [ 
  // First 2 params - rule name & source. Secondary array - list of rules,
  // which can be terminated by this one.
  [ "table", table, [ "paragraph", "reference" ] ], [ "code", code ], [ "fence", fence, [ "paragraph", "reference", "blockquote", "list" ] ], [ "blockquote", blockquote, [ "paragraph", "reference", "blockquote", "list" ] ], [ "hr", hr, [ "paragraph", "reference", "blockquote", "list" ] ], [ "list", list, [ "paragraph", "reference", "blockquote" ] ], [ "reference", reference ], [ "heading", heading, [ "paragraph", "reference", "blockquote" ] ], [ "lheading", lheading ], [ "html_block", html_block, [ "paragraph", "reference", "blockquote" ] ], [ "paragraph", paragraph ] ];
  /**
	 * new ParserBlock()
	 **/  function ParserBlock() {
    /**
	   * ParserBlock#ruler -> Ruler
	   *
	   * [[Ruler]] instance. Keep configuration of block rules.
	   **/
    this.ruler = new ruler;
    for (var i = 0; i < _rules$1.length; i++) {
      this.ruler.push(_rules$1[i][0], _rules$1[i][1], {
        alt: (_rules$1[i][2] || []).slice()
      });
    }
  }
  // Generate tokens for input range
  
    ParserBlock.prototype.tokenize = function(state, startLine, endLine) {
    var ok, i, rules = this.ruler.getRules(""), len = rules.length, line = startLine, hasEmptyLines = false, maxNesting = state.md.options.maxNesting;
    while (line < endLine) {
      state.line = line = state.skipEmptyLines(line);
      if (line >= endLine) {
        break;
      }
      // Termination condition for nested calls.
      // Nested calls currently used for blockquotes & lists
            if (state.sCount[line] < state.blkIndent) {
        break;
      }
      // If nesting level exceeded - skip tail to the end. That's not ordinary
      // situation and we should not care about content.
            if (state.level >= maxNesting) {
        state.line = endLine;
        break;
      }
      // Try all possible rules.
      // On success, rule should:
      
      // - update `state.line`
      // - update `state.tokens`
      // - return true
            for (i = 0; i < len; i++) {
        ok = rules[i](state, line, endLine, false);
        if (ok) {
          break;
        }
      }
      // set state.tight if we had an empty line before current tag
      // i.e. latest empty line should not count
            state.tight = !hasEmptyLines;
      // paragraph might "eat" one newline after it in nested lists
            if (state.isEmpty(state.line - 1)) {
        hasEmptyLines = true;
      }
      line = state.line;
      if (line < endLine && state.isEmpty(line)) {
        hasEmptyLines = true;
        line++;
        state.line = line;
      }
    }
  };
  /**
	 * ParserBlock.parse(str, md, env, outTokens)
	 *
	 * Process input string and push block tokens into `outTokens`
	 **/  ParserBlock.prototype.parse = function(src, md, env, outTokens) {
    var state;
    if (!src) {
      return;
    }
    state = new this.State(src, md, env, outTokens);
    this.tokenize(state, state.line, state.lineMax);
  };
  ParserBlock.prototype.State = state_block;
  var parser_block = ParserBlock;
  // Skip text characters for text token, place those to pending buffer
  // Rule to skip pure text
  // '{}$%@~+=:' reserved for extentions
  // !, ", #, $, %, &, ', (, ), *, +, ,, -, ., /, :, ;, <, =, >, ?, @, [, \, ], ^, _, `, {, |, }, or ~
  // !!!! Don't confuse with "Markdown ASCII Punctuation" chars
  // http://spec.commonmark.org/0.15/#ascii-punctuation-character
    function isTerminatorChar(ch) {
    switch (ch) {
     case 10 /* \n */ :
     case 33 /* ! */ :
     case 35 /* # */ :
     case 36 /* $ */ :
     case 37 /* % */ :
     case 38 /* & */ :
     case 42 /* * */ :
     case 43 /* + */ :
     case 45 /* - */ :
     case 58 /* : */ :
     case 60 /* < */ :
     case 61 /* = */ :
     case 62 /* > */ :
     case 64 /* @ */ :
     case 91 /* [ */ :
     case 92 /* \ */ :
     case 93 /* ] */ :
     case 94 /* ^ */ :
     case 95 /* _ */ :
     case 96 /* ` */ :
     case 123 /* { */ :
     case 125 /* } */ :
     case 126 /* ~ */ :
      return true;

     default:
      return false;
    }
  }
  var text = function text(state, silent) {
    var pos = state.pos;
    while (pos < state.posMax && !isTerminatorChar(state.src.charCodeAt(pos))) {
      pos++;
    }
    if (pos === state.pos) {
      return false;
    }
    if (!silent) {
      state.pending += state.src.slice(state.pos, pos);
    }
    state.pos = pos;
    return true;
  };
  var isSpace$7 = utils.isSpace;
  var newline = function newline(state, silent) {
    var pmax, max, pos = state.pos;
    if (state.src.charCodeAt(pos) !== 10 /* \n */) {
      return false;
    }
    pmax = state.pending.length - 1;
    max = state.posMax;
    // '  \n' -> hardbreak
    // Lookup in pending chars is bad practice! Don't copy to other rules!
    // Pending string is stored in concat mode, indexed lookups will cause
    // convertion to flat mode.
        if (!silent) {
      if (pmax >= 0 && state.pending.charCodeAt(pmax) === 32) {
        if (pmax >= 1 && state.pending.charCodeAt(pmax - 1) === 32) {
          state.pending = state.pending.replace(/ +$/, "");
          state.push("hardbreak", "br", 0);
        } else {
          state.pending = state.pending.slice(0, -1);
          state.push("softbreak", "br", 0);
        }
      } else {
        state.push("softbreak", "br", 0);
      }
    }
    pos++;
    // skip heading spaces for next line
        while (pos < max && isSpace$7(state.src.charCodeAt(pos))) {
      pos++;
    }
    state.pos = pos;
    return true;
  };
  var isSpace$8 = utils.isSpace;
  var ESCAPED = [];
  for (var i = 0; i < 256; i++) {
    ESCAPED.push(0);
  }
  "\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach((function(ch) {
    ESCAPED[ch.charCodeAt(0)] = 1;
  }));
  var _escape = function escape(state, silent) {
    var ch, pos = state.pos, max = state.posMax;
    if (state.src.charCodeAt(pos) !== 92 /* \ */) {
      return false;
    }
    pos++;
    if (pos < max) {
      ch = state.src.charCodeAt(pos);
      if (ch < 256 && ESCAPED[ch] !== 0) {
        if (!silent) {
          state.pending += state.src[pos];
        }
        state.pos += 2;
        return true;
      }
      if (ch === 10) {
        if (!silent) {
          state.push("hardbreak", "br", 0);
        }
        pos++;
        // skip leading whitespaces from next line
                while (pos < max) {
          ch = state.src.charCodeAt(pos);
          if (!isSpace$8(ch)) {
            break;
          }
          pos++;
        }
        state.pos = pos;
        return true;
      }
    }
    if (!silent) {
      state.pending += "\\";
    }
    state.pos++;
    return true;
  };
  // Parse backticks
    var backticks = function backtick(state, silent) {
    var start, max, marker, matchStart, matchEnd, token, pos = state.pos, ch = state.src.charCodeAt(pos);
    if (ch !== 96 /* ` */) {
      return false;
    }
    start = pos;
    pos++;
    max = state.posMax;
    while (pos < max && state.src.charCodeAt(pos) === 96 /* ` */) {
      pos++;
    }
    marker = state.src.slice(start, pos);
    matchStart = matchEnd = pos;
    while ((matchStart = state.src.indexOf("`", matchEnd)) !== -1) {
      matchEnd = matchStart + 1;
      while (matchEnd < max && state.src.charCodeAt(matchEnd) === 96 /* ` */) {
        matchEnd++;
      }
      if (matchEnd - matchStart === marker.length) {
        if (!silent) {
          token = state.push("code_inline", "code", 0);
          token.markup = marker;
          token.content = state.src.slice(pos, matchStart).replace(/\n/g, " ").replace(/^ (.+) $/, "$1");
        }
        state.pos = matchEnd;
        return true;
      }
    }
    if (!silent) {
      state.pending += marker;
    }
    state.pos += marker.length;
    return true;
  };
  // ~~strike through~~
  // Insert each marker as a separate text token, and add it to delimiter list
  
    var tokenize = function strikethrough(state, silent) {
    var i, scanned, token, len, ch, start = state.pos, marker = state.src.charCodeAt(start);
    if (silent) {
      return false;
    }
    if (marker !== 126 /* ~ */) {
      return false;
    }
    scanned = state.scanDelims(state.pos, true);
    len = scanned.length;
    ch = String.fromCharCode(marker);
    if (len < 2) {
      return false;
    }
    if (len % 2) {
      token = state.push("text", "", 0);
      token.content = ch;
      len--;
    }
    for (i = 0; i < len; i += 2) {
      token = state.push("text", "", 0);
      token.content = ch + ch;
      state.delimiters.push({
        marker: marker,
        length: 0,
        // disable "rule of 3" length checks meant for emphasis
        jump: i,
        token: state.tokens.length - 1,
        end: -1,
        open: scanned.can_open,
        close: scanned.can_close
      });
    }
    state.pos += scanned.length;
    return true;
  };
  function postProcess(state, delimiters) {
    var i, j, startDelim, endDelim, token, loneMarkers = [], max = delimiters.length;
    for (i = 0; i < max; i++) {
      startDelim = delimiters[i];
      if (startDelim.marker !== 126 /* ~ */) {
        continue;
      }
      if (startDelim.end === -1) {
        continue;
      }
      endDelim = delimiters[startDelim.end];
      token = state.tokens[startDelim.token];
      token.type = "s_open";
      token.tag = "s";
      token.nesting = 1;
      token.markup = "~~";
      token.content = "";
      token = state.tokens[endDelim.token];
      token.type = "s_close";
      token.tag = "s";
      token.nesting = -1;
      token.markup = "~~";
      token.content = "";
      if (state.tokens[endDelim.token - 1].type === "text" && state.tokens[endDelim.token - 1].content === "~") {
        loneMarkers.push(endDelim.token - 1);
      }
    }
    // If a marker sequence has an odd number of characters, it's splitted
    // like this: `~~~~~` -> `~` + `~~` + `~~`, leaving one marker at the
    // start of the sequence.
    
    // So, we have to move all those markers after subsequent s_close tags.
    
        while (loneMarkers.length) {
      i = loneMarkers.pop();
      j = i + 1;
      while (j < state.tokens.length && state.tokens[j].type === "s_close") {
        j++;
      }
      j--;
      if (i !== j) {
        token = state.tokens[j];
        state.tokens[j] = state.tokens[i];
        state.tokens[i] = token;
      }
    }
  }
  // Walk through delimiter list and replace text tokens with tags
  
    var postProcess_1 = function strikethrough(state) {
    var curr, tokens_meta = state.tokens_meta, max = state.tokens_meta.length;
    postProcess(state, state.delimiters);
    for (curr = 0; curr < max; curr++) {
      if (tokens_meta[curr] && tokens_meta[curr].delimiters) {
        postProcess(state, tokens_meta[curr].delimiters);
      }
    }
  };
  var strikethrough = {
    tokenize: tokenize,
    postProcess: postProcess_1
  };
  // Process *this* and _that_
  // Insert each marker as a separate text token, and add it to delimiter list
  
    var tokenize$1 = function emphasis(state, silent) {
    var i, scanned, token, start = state.pos, marker = state.src.charCodeAt(start);
    if (silent) {
      return false;
    }
    if (marker !== 95 /* _ */ && marker !== 42 /* * */) {
      return false;
    }
    scanned = state.scanDelims(state.pos, marker === 42);
    for (i = 0; i < scanned.length; i++) {
      token = state.push("text", "", 0);
      token.content = String.fromCharCode(marker);
      state.delimiters.push({
        // Char code of the starting marker (number).
        marker: marker,
        // Total length of these series of delimiters.
        length: scanned.length,
        // An amount of characters before this one that's equivalent to
        // current one. In plain English: if this delimiter does not open
        // an emphasis, neither do previous `jump` characters.
        // Used to skip sequences like "*****" in one step, for 1st asterisk
        // value will be 0, for 2nd it's 1 and so on.
        jump: i,
        // A position of the token this delimiter corresponds to.
        token: state.tokens.length - 1,
        // If this delimiter is matched as a valid opener, `end` will be
        // equal to its position, otherwise it's `-1`.
        end: -1,
        // Boolean flags that determine if this delimiter could open or close
        // an emphasis.
        open: scanned.can_open,
        close: scanned.can_close
      });
    }
    state.pos += scanned.length;
    return true;
  };
  function postProcess$1(state, delimiters) {
    var i, startDelim, endDelim, token, ch, isStrong, max = delimiters.length;
    for (i = max - 1; i >= 0; i--) {
      startDelim = delimiters[i];
      if (startDelim.marker !== 95 /* _ */ && startDelim.marker !== 42 /* * */) {
        continue;
      }
      // Process only opening markers
            if (startDelim.end === -1) {
        continue;
      }
      endDelim = delimiters[startDelim.end];
      // If the previous delimiter has the same marker and is adjacent to this one,
      // merge those into one strong delimiter.
      
      // `<em><em>whatever</em></em>` -> `<strong>whatever</strong>`
      
            isStrong = i > 0 && delimiters[i - 1].end === startDelim.end + 1 && delimiters[i - 1].token === startDelim.token - 1 && delimiters[startDelim.end + 1].token === endDelim.token + 1 && delimiters[i - 1].marker === startDelim.marker;
      ch = String.fromCharCode(startDelim.marker);
      token = state.tokens[startDelim.token];
      token.type = isStrong ? "strong_open" : "em_open";
      token.tag = isStrong ? "strong" : "em";
      token.nesting = 1;
      token.markup = isStrong ? ch + ch : ch;
      token.content = "";
      token = state.tokens[endDelim.token];
      token.type = isStrong ? "strong_close" : "em_close";
      token.tag = isStrong ? "strong" : "em";
      token.nesting = -1;
      token.markup = isStrong ? ch + ch : ch;
      token.content = "";
      if (isStrong) {
        state.tokens[delimiters[i - 1].token].content = "";
        state.tokens[delimiters[startDelim.end + 1].token].content = "";
        i--;
      }
    }
  }
  // Walk through delimiter list and replace text tokens with tags
  
    var postProcess_1$1 = function emphasis(state) {
    var curr, tokens_meta = state.tokens_meta, max = state.tokens_meta.length;
    postProcess$1(state, state.delimiters);
    for (curr = 0; curr < max; curr++) {
      if (tokens_meta[curr] && tokens_meta[curr].delimiters) {
        postProcess$1(state, tokens_meta[curr].delimiters);
      }
    }
  };
  var emphasis = {
    tokenize: tokenize$1,
    postProcess: postProcess_1$1
  };
  var normalizeReference$1 = utils.normalizeReference;
  var isSpace$9 = utils.isSpace;
  var link = function link(state, silent) {
    var attrs, code, label, labelEnd, labelStart, pos, res, ref, title, token, href = "", oldPos = state.pos, max = state.posMax, start = state.pos, parseReference = true;
    if (state.src.charCodeAt(state.pos) !== 91 /* [ */) {
      return false;
    }
    labelStart = state.pos + 1;
    labelEnd = state.md.helpers.parseLinkLabel(state, state.pos, true);
    // parser failed to find ']', so it's not a valid link
        if (labelEnd < 0) {
      return false;
    }
    pos = labelEnd + 1;
    if (pos < max && state.src.charCodeAt(pos) === 40 /* ( */) {
      // Inline link
      // might have found a valid shortcut link, disable reference parsing
      parseReference = false;
      // [link](  <href>  "title"  )
      //        ^^ skipping these spaces
            pos++;
      for (;pos < max; pos++) {
        code = state.src.charCodeAt(pos);
        if (!isSpace$9(code) && code !== 10) {
          break;
        }
      }
      if (pos >= max) {
        return false;
      }
      // [link](  <href>  "title"  )
      //          ^^^^^^ parsing link destination
            start = pos;
      res = state.md.helpers.parseLinkDestination(state.src, pos, state.posMax);
      if (res.ok) {
        href = state.md.normalizeLink(res.str);
        if (state.md.validateLink(href)) {
          pos = res.pos;
        } else {
          href = "";
        }
      }
      // [link](  <href>  "title"  )
      //                ^^ skipping these spaces
            start = pos;
      for (;pos < max; pos++) {
        code = state.src.charCodeAt(pos);
        if (!isSpace$9(code) && code !== 10) {
          break;
        }
      }
      // [link](  <href>  "title"  )
      //                  ^^^^^^^ parsing link title
            res = state.md.helpers.parseLinkTitle(state.src, pos, state.posMax);
      if (pos < max && start !== pos && res.ok) {
        title = res.str;
        pos = res.pos;
        // [link](  <href>  "title"  )
        //                         ^^ skipping these spaces
                for (;pos < max; pos++) {
          code = state.src.charCodeAt(pos);
          if (!isSpace$9(code) && code !== 10) {
            break;
          }
        }
      } else {
        title = "";
      }
      if (pos >= max || state.src.charCodeAt(pos) !== 41 /* ) */) {
        // parsing a valid shortcut link failed, fallback to reference
        parseReference = true;
      }
      pos++;
    }
    if (parseReference) {
      // Link reference
      if (typeof state.env.references === "undefined") {
        return false;
      }
      if (pos < max && state.src.charCodeAt(pos) === 91 /* [ */) {
        start = pos + 1;
        pos = state.md.helpers.parseLinkLabel(state, pos);
        if (pos >= 0) {
          label = state.src.slice(start, pos++);
        } else {
          pos = labelEnd + 1;
        }
      } else {
        pos = labelEnd + 1;
      }
      // covers label === '' and label === undefined
      // (collapsed reference link and shortcut reference link respectively)
            if (!label) {
        label = state.src.slice(labelStart, labelEnd);
      }
      ref = state.env.references[normalizeReference$1(label)];
      if (!ref) {
        state.pos = oldPos;
        return false;
      }
      href = ref.href;
      title = ref.title;
    }
    
    // We found the end of the link, and know for a fact it's a valid link;
    // so all that's left to do is to call tokenizer.
    
        if (!silent) {
      state.pos = labelStart;
      state.posMax = labelEnd;
      token = state.push("link_open", "a", 1);
      token.attrs = attrs = [ [ "href", href ] ];
      if (title) {
        attrs.push([ "title", title ]);
      }
      state.md.inline.tokenize(state);
      token = state.push("link_close", "a", -1);
    }
    state.pos = pos;
    state.posMax = max;
    return true;
  };
  var normalizeReference$2 = utils.normalizeReference;
  var isSpace$a = utils.isSpace;
  var image$1 = function image(state, silent) {
    var attrs, code, content, label, labelEnd, labelStart, pos, ref, res, title, token, tokens, start, href = "", oldPos = state.pos, max = state.posMax;
    if (state.src.charCodeAt(state.pos) !== 33 /* ! */) {
      return false;
    }
    if (state.src.charCodeAt(state.pos + 1) !== 91 /* [ */) {
      return false;
    }
    labelStart = state.pos + 2;
    labelEnd = state.md.helpers.parseLinkLabel(state, state.pos + 1, false);
    // parser failed to find ']', so it's not a valid link
        if (labelEnd < 0) {
      return false;
    }
    pos = labelEnd + 1;
    if (pos < max && state.src.charCodeAt(pos) === 40 /* ( */) {
      // Inline link
      // [link](  <href>  "title"  )
      //        ^^ skipping these spaces
      pos++;
      for (;pos < max; pos++) {
        code = state.src.charCodeAt(pos);
        if (!isSpace$a(code) && code !== 10) {
          break;
        }
      }
      if (pos >= max) {
        return false;
      }
      // [link](  <href>  "title"  )
      //          ^^^^^^ parsing link destination
            start = pos;
      res = state.md.helpers.parseLinkDestination(state.src, pos, state.posMax);
      if (res.ok) {
        href = state.md.normalizeLink(res.str);
        if (state.md.validateLink(href)) {
          pos = res.pos;
        } else {
          href = "";
        }
      }
      // [link](  <href>  "title"  )
      //                ^^ skipping these spaces
            start = pos;
      for (;pos < max; pos++) {
        code = state.src.charCodeAt(pos);
        if (!isSpace$a(code) && code !== 10) {
          break;
        }
      }
      // [link](  <href>  "title"  )
      //                  ^^^^^^^ parsing link title
            res = state.md.helpers.parseLinkTitle(state.src, pos, state.posMax);
      if (pos < max && start !== pos && res.ok) {
        title = res.str;
        pos = res.pos;
        // [link](  <href>  "title"  )
        //                         ^^ skipping these spaces
                for (;pos < max; pos++) {
          code = state.src.charCodeAt(pos);
          if (!isSpace$a(code) && code !== 10) {
            break;
          }
        }
      } else {
        title = "";
      }
      if (pos >= max || state.src.charCodeAt(pos) !== 41 /* ) */) {
        state.pos = oldPos;
        return false;
      }
      pos++;
    } else {
      // Link reference
      if (typeof state.env.references === "undefined") {
        return false;
      }
      if (pos < max && state.src.charCodeAt(pos) === 91 /* [ */) {
        start = pos + 1;
        pos = state.md.helpers.parseLinkLabel(state, pos);
        if (pos >= 0) {
          label = state.src.slice(start, pos++);
        } else {
          pos = labelEnd + 1;
        }
      } else {
        pos = labelEnd + 1;
      }
      // covers label === '' and label === undefined
      // (collapsed reference link and shortcut reference link respectively)
            if (!label) {
        label = state.src.slice(labelStart, labelEnd);
      }
      ref = state.env.references[normalizeReference$2(label)];
      if (!ref) {
        state.pos = oldPos;
        return false;
      }
      href = ref.href;
      title = ref.title;
    }
    
    // We found the end of the link, and know for a fact it's a valid link;
    // so all that's left to do is to call tokenizer.
    
        if (!silent) {
      content = state.src.slice(labelStart, labelEnd);
      state.md.inline.parse(content, state.md, state.env, tokens = []);
      token = state.push("image", "img", 0);
      token.attrs = attrs = [ [ "src", href ], [ "alt", "" ] ];
      token.children = tokens;
      token.content = content;
      if (title) {
        attrs.push([ "title", title ]);
      }
    }
    state.pos = pos;
    state.posMax = max;
    return true;
  };
  // Process autolinks '<protocol:...>'
  /*eslint max-len:0*/  var EMAIL_RE = /^<([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)>/;
  var AUTOLINK_RE = /^<([a-zA-Z][a-zA-Z0-9+.\-]{1,31}):([^<>\x00-\x20]*)>/;
  var autolink = function autolink(state, silent) {
    var tail, linkMatch, emailMatch, url, fullUrl, token, pos = state.pos;
    if (state.src.charCodeAt(pos) !== 60 /* < */) {
      return false;
    }
    tail = state.src.slice(pos);
    if (tail.indexOf(">") < 0) {
      return false;
    }
    if (AUTOLINK_RE.test(tail)) {
      linkMatch = tail.match(AUTOLINK_RE);
      url = linkMatch[0].slice(1, -1);
      fullUrl = state.md.normalizeLink(url);
      if (!state.md.validateLink(fullUrl)) {
        return false;
      }
      if (!silent) {
        token = state.push("link_open", "a", 1);
        token.attrs = [ [ "href", fullUrl ] ];
        token.markup = "autolink";
        token.info = "auto";
        token = state.push("text", "", 0);
        token.content = state.md.normalizeLinkText(url);
        token = state.push("link_close", "a", -1);
        token.markup = "autolink";
        token.info = "auto";
      }
      state.pos += linkMatch[0].length;
      return true;
    }
    if (EMAIL_RE.test(tail)) {
      emailMatch = tail.match(EMAIL_RE);
      url = emailMatch[0].slice(1, -1);
      fullUrl = state.md.normalizeLink("mailto:" + url);
      if (!state.md.validateLink(fullUrl)) {
        return false;
      }
      if (!silent) {
        token = state.push("link_open", "a", 1);
        token.attrs = [ [ "href", fullUrl ] ];
        token.markup = "autolink";
        token.info = "auto";
        token = state.push("text", "", 0);
        token.content = state.md.normalizeLinkText(url);
        token = state.push("link_close", "a", -1);
        token.markup = "autolink";
        token.info = "auto";
      }
      state.pos += emailMatch[0].length;
      return true;
    }
    return false;
  };
  var HTML_TAG_RE$1 = html_re.HTML_TAG_RE;
  function isLetter(ch) {
    /*eslint no-bitwise:0*/
    var lc = ch | 32;
 // to lower case
        return lc >= 97 /* a */ && lc <= 122 /* z */;
  }
  var html_inline = function html_inline(state, silent) {
    var ch, match, max, token, pos = state.pos;
    if (!state.md.options.html) {
      return false;
    }
    // Check start
        max = state.posMax;
    if (state.src.charCodeAt(pos) !== 60 /* < */ || pos + 2 >= max) {
      return false;
    }
    // Quick fail on second char
        ch = state.src.charCodeAt(pos + 1);
    if (ch !== 33 /* ! */ && ch !== 63 /* ? */ && ch !== 47 /* / */ && !isLetter(ch)) {
      return false;
    }
    match = state.src.slice(pos).match(HTML_TAG_RE$1);
    if (!match) {
      return false;
    }
    if (!silent) {
      token = state.push("html_inline", "", 0);
      token.content = state.src.slice(pos, pos + match[0].length);
    }
    state.pos += match[0].length;
    return true;
  };
  var has = utils.has;
  var isValidEntityCode = utils.isValidEntityCode;
  var fromCodePoint = utils.fromCodePoint;
  var DIGITAL_RE = /^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i;
  var NAMED_RE = /^&([a-z][a-z0-9]{1,31});/i;
  var entity = function entity(state, silent) {
    var ch, code, match, pos = state.pos, max = state.posMax;
    if (state.src.charCodeAt(pos) !== 38 /* & */) {
      return false;
    }
    if (pos + 1 < max) {
      ch = state.src.charCodeAt(pos + 1);
      if (ch === 35 /* # */) {
        match = state.src.slice(pos).match(DIGITAL_RE);
        if (match) {
          if (!silent) {
            code = match[1][0].toLowerCase() === "x" ? parseInt(match[1].slice(1), 16) : parseInt(match[1], 10);
            state.pending += isValidEntityCode(code) ? fromCodePoint(code) : fromCodePoint(65533);
          }
          state.pos += match[0].length;
          return true;
        }
      } else {
        match = state.src.slice(pos).match(NAMED_RE);
        if (match) {
          if (has(entities, match[1])) {
            if (!silent) {
              state.pending += entities[match[1]];
            }
            state.pos += match[0].length;
            return true;
          }
        }
      }
    }
    if (!silent) {
      state.pending += "&";
    }
    state.pos++;
    return true;
  };
  // For each opening emphasis-like marker find a matching closing one
    function processDelimiters(state, delimiters) {
    var closerIdx, openerIdx, closer, opener, minOpenerIdx, newMinOpenerIdx, isOddMatch, lastJump, openersBottom = {}, max = delimiters.length;
    for (closerIdx = 0; closerIdx < max; closerIdx++) {
      closer = delimiters[closerIdx];
      // Length is only used for emphasis-specific "rule of 3",
      // if it's not defined (in strikethrough or 3rd party plugins),
      // we can default it to 0 to disable those checks.
      
            closer.length = closer.length || 0;
      if (!closer.close) continue;
      // Previously calculated lower bounds (previous fails)
      // for each marker and each delimiter length modulo 3.
            if (!openersBottom.hasOwnProperty(closer.marker)) {
        openersBottom[closer.marker] = [ -1, -1, -1 ];
      }
      minOpenerIdx = openersBottom[closer.marker][closer.length % 3];
      newMinOpenerIdx = -1;
      openerIdx = closerIdx - closer.jump - 1;
      for (;openerIdx > minOpenerIdx; openerIdx -= opener.jump + 1) {
        opener = delimiters[openerIdx];
        if (opener.marker !== closer.marker) continue;
        if (newMinOpenerIdx === -1) newMinOpenerIdx = openerIdx;
        if (opener.open && opener.end < 0) {
          isOddMatch = false;
          // from spec:
          
          // If one of the delimiters can both open and close emphasis, then the
          // sum of the lengths of the delimiter runs containing the opening and
          // closing delimiters must not be a multiple of 3 unless both lengths
          // are multiples of 3.
          
                    if (opener.close || closer.open) {
            if ((opener.length + closer.length) % 3 === 0) {
              if (opener.length % 3 !== 0 || closer.length % 3 !== 0) {
                isOddMatch = true;
              }
            }
          }
          if (!isOddMatch) {
            // If previous delimiter cannot be an opener, we can safely skip
            // the entire sequence in future checks. This is required to make
            // sure algorithm has linear complexity (see *_*_*_*_*_... case).
            lastJump = openerIdx > 0 && !delimiters[openerIdx - 1].open ? delimiters[openerIdx - 1].jump + 1 : 0;
            closer.jump = closerIdx - openerIdx + lastJump;
            closer.open = false;
            opener.end = closerIdx;
            opener.jump = lastJump;
            opener.close = false;
            newMinOpenerIdx = -1;
            break;
          }
        }
      }
      if (newMinOpenerIdx !== -1) {
        // If match for this delimiter run failed, we want to set lower bound for
        // future lookups. This is required to make sure algorithm has linear
        // complexity.
        // See details here:
        // https://github.com/commonmark/cmark/issues/178#issuecomment-270417442
        openersBottom[closer.marker][(closer.length || 0) % 3] = newMinOpenerIdx;
      }
    }
  }
  var balance_pairs = function link_pairs(state) {
    var curr, tokens_meta = state.tokens_meta, max = state.tokens_meta.length;
    processDelimiters(state, state.delimiters);
    for (curr = 0; curr < max; curr++) {
      if (tokens_meta[curr] && tokens_meta[curr].delimiters) {
        processDelimiters(state, tokens_meta[curr].delimiters);
      }
    }
  };
  // Clean up tokens after emphasis and strikethrough postprocessing:
    var text_collapse = function text_collapse(state) {
    var curr, last, level = 0, tokens = state.tokens, max = state.tokens.length;
    for (curr = last = 0; curr < max; curr++) {
      // re-calculate levels after emphasis/strikethrough turns some text nodes
      // into opening/closing tags
      if (tokens[curr].nesting < 0) level--;
 // closing tag
            tokens[curr].level = level;
      if (tokens[curr].nesting > 0) level++;
 // opening tag
            if (tokens[curr].type === "text" && curr + 1 < max && tokens[curr + 1].type === "text") {
        // collapse two adjacent text nodes
        tokens[curr + 1].content = tokens[curr].content + tokens[curr + 1].content;
      } else {
        if (curr !== last) {
          tokens[last] = tokens[curr];
        }
        last++;
      }
    }
    if (curr !== last) {
      tokens.length = last;
    }
  };
  var isWhiteSpace$1 = utils.isWhiteSpace;
  var isPunctChar$1 = utils.isPunctChar;
  var isMdAsciiPunct$1 = utils.isMdAsciiPunct;
  function StateInline(src, md, env, outTokens) {
    this.src = src;
    this.env = env;
    this.md = md;
    this.tokens = outTokens;
    this.tokens_meta = Array(outTokens.length);
    this.pos = 0;
    this.posMax = this.src.length;
    this.level = 0;
    this.pending = "";
    this.pendingLevel = 0;
    // Stores { start: end } pairs. Useful for backtrack
    // optimization of pairs parse (emphasis, strikes).
        this.cache = {};
    // List of emphasis-like delimiters for current tag
        this.delimiters = [];
    // Stack of delimiter lists for upper level tags
        this._prev_delimiters = [];
  }
  // Flush pending text
  
    StateInline.prototype.pushPending = function() {
    var token$1 = new token("text", "", 0);
    token$1.content = this.pending;
    token$1.level = this.pendingLevel;
    this.tokens.push(token$1);
    this.pending = "";
    return token$1;
  };
  // Push new token to "stream".
  // If pending text exists - flush it as text token
  
    StateInline.prototype.push = function(type, tag, nesting) {
    if (this.pending) {
      this.pushPending();
    }
    var token$1 = new token(type, tag, nesting);
    var token_meta = null;
    if (nesting < 0) {
      // closing tag
      this.level--;
      this.delimiters = this._prev_delimiters.pop();
    }
    token$1.level = this.level;
    if (nesting > 0) {
      // opening tag
      this.level++;
      this._prev_delimiters.push(this.delimiters);
      this.delimiters = [];
      token_meta = {
        delimiters: this.delimiters
      };
    }
    this.pendingLevel = this.level;
    this.tokens.push(token$1);
    this.tokens_meta.push(token_meta);
    return token$1;
  };
  // Scan a sequence of emphasis-like markers, and determine whether
  // it can start an emphasis sequence or end an emphasis sequence.
  
  //  - start - position to scan from (it should point at a valid marker);
  //  - canSplitWord - determine if these markers can be found inside a word
  
    StateInline.prototype.scanDelims = function(start, canSplitWord) {
    var pos = start, lastChar, nextChar, count, can_open, can_close, isLastWhiteSpace, isLastPunctChar, isNextWhiteSpace, isNextPunctChar, left_flanking = true, right_flanking = true, max = this.posMax, marker = this.src.charCodeAt(start);
    // treat beginning of the line as a whitespace
        lastChar = start > 0 ? this.src.charCodeAt(start - 1) : 32;
    while (pos < max && this.src.charCodeAt(pos) === marker) {
      pos++;
    }
    count = pos - start;
    // treat end of the line as a whitespace
        nextChar = pos < max ? this.src.charCodeAt(pos) : 32;
    isLastPunctChar = isMdAsciiPunct$1(lastChar) || isPunctChar$1(String.fromCharCode(lastChar));
    isNextPunctChar = isMdAsciiPunct$1(nextChar) || isPunctChar$1(String.fromCharCode(nextChar));
    isLastWhiteSpace = isWhiteSpace$1(lastChar);
    isNextWhiteSpace = isWhiteSpace$1(nextChar);
    if (isNextWhiteSpace) {
      left_flanking = false;
    } else if (isNextPunctChar) {
      if (!(isLastWhiteSpace || isLastPunctChar)) {
        left_flanking = false;
      }
    }
    if (isLastWhiteSpace) {
      right_flanking = false;
    } else if (isLastPunctChar) {
      if (!(isNextWhiteSpace || isNextPunctChar)) {
        right_flanking = false;
      }
    }
    if (!canSplitWord) {
      can_open = left_flanking && (!right_flanking || isLastPunctChar);
      can_close = right_flanking && (!left_flanking || isNextPunctChar);
    } else {
      can_open = left_flanking;
      can_close = right_flanking;
    }
    return {
      can_open: can_open,
      can_close: can_close,
      length: count
    };
  };
  // re-export Token class to use in block rules
    StateInline.prototype.Token = token;
  var state_inline = StateInline;
  ////////////////////////////////////////////////////////////////////////////////
  // Parser rules
    var _rules$2 = [ [ "text", text ], [ "newline", newline ], [ "escape", _escape ], [ "backticks", backticks ], [ "strikethrough", strikethrough.tokenize ], [ "emphasis", emphasis.tokenize ], [ "link", link ], [ "image", image$1 ], [ "autolink", autolink ], [ "html_inline", html_inline ], [ "entity", entity ] ];
  var _rules2 = [ [ "balance_pairs", balance_pairs ], [ "strikethrough", strikethrough.postProcess ], [ "emphasis", emphasis.postProcess ], [ "text_collapse", text_collapse ] ];
  /**
	 * new ParserInline()
	 **/  function ParserInline() {
    var i;
    /**
	   * ParserInline#ruler -> Ruler
	   *
	   * [[Ruler]] instance. Keep configuration of inline rules.
	   **/    this.ruler = new ruler;
    for (i = 0; i < _rules$2.length; i++) {
      this.ruler.push(_rules$2[i][0], _rules$2[i][1]);
    }
    /**
	   * ParserInline#ruler2 -> Ruler
	   *
	   * [[Ruler]] instance. Second ruler used for post-processing
	   * (e.g. in emphasis-like rules).
	   **/    this.ruler2 = new ruler;
    for (i = 0; i < _rules2.length; i++) {
      this.ruler2.push(_rules2[i][0], _rules2[i][1]);
    }
  }
  // Skip single token by running all rules in validation mode;
  // returns `true` if any rule reported success
  
    ParserInline.prototype.skipToken = function(state) {
    var ok, i, pos = state.pos, rules = this.ruler.getRules(""), len = rules.length, maxNesting = state.md.options.maxNesting, cache = state.cache;
    if (typeof cache[pos] !== "undefined") {
      state.pos = cache[pos];
      return;
    }
    if (state.level < maxNesting) {
      for (i = 0; i < len; i++) {
        // Increment state.level and decrement it later to limit recursion.
        // It's harmless to do here, because no tokens are created. But ideally,
        // we'd need a separate private state variable for this purpose.
        state.level++;
        ok = rules[i](state, true);
        state.level--;
        if (ok) {
          break;
        }
      }
    } else {
      // Too much nesting, just skip until the end of the paragraph.
      // NOTE: this will cause links to behave incorrectly in the following case,
      //       when an amount of `[` is exactly equal to `maxNesting + 1`:
      //       [[[[[[[[[[[[[[[[[[[[[foo]()
      // TODO: remove this workaround when CM standard will allow nested links
      //       (we can replace it by preventing links from being parsed in
      //       validation mode)
      state.pos = state.posMax;
    }
    if (!ok) {
      state.pos++;
    }
    cache[pos] = state.pos;
  };
  // Generate tokens for input range
  
    ParserInline.prototype.tokenize = function(state) {
    var ok, i, rules = this.ruler.getRules(""), len = rules.length, end = state.posMax, maxNesting = state.md.options.maxNesting;
    while (state.pos < end) {
      // Try all possible rules.
      // On success, rule should:
      // - update `state.pos`
      // - update `state.tokens`
      // - return true
      if (state.level < maxNesting) {
        for (i = 0; i < len; i++) {
          ok = rules[i](state, false);
          if (ok) {
            break;
          }
        }
      }
      if (ok) {
        if (state.pos >= end) {
          break;
        }
        continue;
      }
      state.pending += state.src[state.pos++];
    }
    if (state.pending) {
      state.pushPending();
    }
  };
  /**
	 * ParserInline.parse(str, md, env, outTokens)
	 *
	 * Process input string and push inline tokens into `outTokens`
	 **/  ParserInline.prototype.parse = function(str, md, env, outTokens) {
    var i, rules, len;
    var state = new this.State(str, md, env, outTokens);
    this.tokenize(state);
    rules = this.ruler2.getRules("");
    len = rules.length;
    for (i = 0; i < len; i++) {
      rules[i](state);
    }
  };
  ParserInline.prototype.State = state_inline;
  var parser_inline = ParserInline;
  var re = function(opts) {
    var re = {};
    // Use direct extract instead of `regenerate` to reduse browserified size
        re.src_Any = regex$1.source;
    re.src_Cc = regex$2.source;
    re.src_Z = regex$4.source;
    re.src_P = regex.source;
    // \p{\Z\P\Cc\CF} (white spaces + control + format + punctuation)
        re.src_ZPCc = [ re.src_Z, re.src_P, re.src_Cc ].join("|");
    // \p{\Z\Cc} (white spaces + control)
        re.src_ZCc = [ re.src_Z, re.src_Cc ].join("|");
    // Experimental. List of chars, completely prohibited in links
    // because can separate it from other part of text
        var text_separators = "[><\uff5c]";
    // All possible word characters (everything without punctuation, spaces & controls)
    // Defined via punctuation & spaces to save space
    // Should be something like \p{\L\N\S\M} (\w but without `_`)
        re.src_pseudo_letter = "(?:(?!" + text_separators + "|" + re.src_ZPCc + ")" + re.src_Any + ")";
    // The same as abothe but without [0-9]
    // var src_pseudo_letter_non_d = '(?:(?![0-9]|' + src_ZPCc + ')' + src_Any + ')';
    ////////////////////////////////////////////////////////////////////////////////
        re.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)";
    // Prohibit any of "@/[]()" in user/pass to avoid wrong domain fetch.
        re.src_auth = "(?:(?:(?!" + re.src_ZCc + "|[@/\\[\\]()]).)+@)?";
    re.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?";
    re.src_host_terminator = "(?=$|" + text_separators + "|" + re.src_ZPCc + ")(?!-|_|:\\d|\\.-|\\.(?!$|" + re.src_ZPCc + "))";
    re.src_path = "(?:" + "[/?#]" + "(?:" + "(?!" + re.src_ZCc + "|" + text_separators + "|[()[\\]{}.,\"'?!\\-]).|" + "\\[(?:(?!" + re.src_ZCc + "|\\]).)*\\]|" + "\\((?:(?!" + re.src_ZCc + "|[)]).)*\\)|" + "\\{(?:(?!" + re.src_ZCc + "|[}]).)*\\}|" + '\\"(?:(?!' + re.src_ZCc + '|["]).)+\\"|' + "\\'(?:(?!" + re.src_ZCc + "|[']).)+\\'|" + "\\'(?=" + re.src_pseudo_letter + "|[-]).|" + // allow `I'm_king` if no pair found
    "\\.{2,}[a-zA-Z0-9%/&]|" + // google has many dots in "google search" links (#66, #81).
    // github has ... in commit range links,
    // Restrict to
    // - english
    // - percent-encoded
    // - parts of file path
    // - params separator
    // until more examples found.
    "\\.(?!" + re.src_ZCc + "|[.]).|" + (opts && opts["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + "\\,(?!" + re.src_ZCc + ").|" + // allow `,,,` in paths
    "\\!+(?!" + re.src_ZCc + "|[!]).|" + // allow `!!!` in paths, but not at the end
    "\\?(?!" + re.src_ZCc + "|[?])." + ")+" + "|\\/" + ")?";
    // Allow anything in markdown spec, forbid quote (") at the first position
    // because emails enclosed in quotes are far more common
        re.src_email_name = '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*';
    re.src_xn = "xn--[a-z0-9\\-]{1,59}";
    // More to read about domain names
    // http://serverfault.com/questions/638260/
        re.src_domain_root = 
    // Allow letters & digits (http://test1)
    "(?:" + re.src_xn + "|" + re.src_pseudo_letter + "{1,63}" + ")";
    re.src_domain = "(?:" + re.src_xn + "|" + "(?:" + re.src_pseudo_letter + ")" + "|" + "(?:" + re.src_pseudo_letter + "(?:-|" + re.src_pseudo_letter + "){0,61}" + re.src_pseudo_letter + ")" + ")";
    re.src_host = "(?:" + 
    // Don't need IP check, because digits are already allowed in normal domain names
    //   src_ip4 +
    // '|' +
    "(?:(?:(?:" + re.src_domain + ")\\.)*" + re.src_domain /*_root*/ + ")" + ")";
    re.tpl_host_fuzzy = "(?:" + re.src_ip4 + "|" + "(?:(?:(?:" + re.src_domain + ")\\.)+(?:%TLDS%))" + ")";
    re.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + re.src_domain + ")\\.)+(?:%TLDS%))";
    re.src_host_strict = re.src_host + re.src_host_terminator;
    re.tpl_host_fuzzy_strict = re.tpl_host_fuzzy + re.src_host_terminator;
    re.src_host_port_strict = re.src_host + re.src_port + re.src_host_terminator;
    re.tpl_host_port_fuzzy_strict = re.tpl_host_fuzzy + re.src_port + re.src_host_terminator;
    re.tpl_host_port_no_ip_fuzzy_strict = re.tpl_host_no_ip_fuzzy + re.src_port + re.src_host_terminator;
    ////////////////////////////////////////////////////////////////////////////////
    // Main rules
    // Rude test fuzzy links by host, for quick deny
        re.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + re.src_ZPCc + "|>|$))";
    re.tpl_email_fuzzy = "(^|" + text_separators + '|"|\\(|' + re.src_ZCc + ")" + "(" + re.src_email_name + "@" + re.tpl_host_fuzzy_strict + ")";
    re.tpl_link_fuzzy = 
    // Fuzzy link can't be prepended with .:/\- and non punctuation.
    // but can start with > (markdown blockquote)
    "(^|(?![.:/\\-_@])(?:[$+<=>^`|\uff5c]|" + re.src_ZPCc + "))" + "((?![$+<=>^`|\uff5c])" + re.tpl_host_port_fuzzy_strict + re.src_path + ")";
    re.tpl_link_no_ip_fuzzy = 
    // Fuzzy link can't be prepended with .:/\- and non punctuation.
    // but can start with > (markdown blockquote)
    "(^|(?![.:/\\-_@])(?:[$+<=>^`|\uff5c]|" + re.src_ZPCc + "))" + "((?![$+<=>^`|\uff5c])" + re.tpl_host_port_no_ip_fuzzy_strict + re.src_path + ")";
    return re;
  };
  ////////////////////////////////////////////////////////////////////////////////
  // Helpers
  // Merge objects
  
    function assign$1(obj /*from1, from2, from3, ...*/) {
    var sources = Array.prototype.slice.call(arguments, 1);
    sources.forEach((function(source) {
      if (!source) {
        return;
      }
      Object.keys(source).forEach((function(key) {
        obj[key] = source[key];
      }));
    }));
    return obj;
  }
  function _class(obj) {
    return Object.prototype.toString.call(obj);
  }
  function isString(obj) {
    return _class(obj) === "[object String]";
  }
  function isObject(obj) {
    return _class(obj) === "[object Object]";
  }
  function isRegExp(obj) {
    return _class(obj) === "[object RegExp]";
  }
  function isFunction(obj) {
    return _class(obj) === "[object Function]";
  }
  function escapeRE(str) {
    return str.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
  }
  ////////////////////////////////////////////////////////////////////////////////
    var defaultOptions = {
    fuzzyLink: true,
    fuzzyEmail: true,
    fuzzyIP: false
  };
  function isOptionsObj(obj) {
    return Object.keys(obj || {}).reduce((function(acc, k) {
      return acc || defaultOptions.hasOwnProperty(k);
    }), false);
  }
  var defaultSchemas = {
    "http:": {
      validate: function(text, pos, self) {
        var tail = text.slice(pos);
        if (!self.re.http) {
          // compile lazily, because "host"-containing variables can change on tlds update.
          self.re.http = new RegExp("^\\/\\/" + self.re.src_auth + self.re.src_host_port_strict + self.re.src_path, "i");
        }
        if (self.re.http.test(tail)) {
          return tail.match(self.re.http)[0].length;
        }
        return 0;
      }
    },
    "https:": "http:",
    "ftp:": "http:",
    "//": {
      validate: function(text, pos, self) {
        var tail = text.slice(pos);
        if (!self.re.no_http) {
          // compile lazily, because "host"-containing variables can change on tlds update.
          self.re.no_http = new RegExp("^" + self.re.src_auth + 
          // Don't allow single-level domains, because of false positives like '//test'
          // with code comments
          "(?:localhost|(?:(?:" + self.re.src_domain + ")\\.)+" + self.re.src_domain_root + ")" + self.re.src_port + self.re.src_host_terminator + self.re.src_path, "i");
        }
        if (self.re.no_http.test(tail)) {
          // should not be `://` & `///`, that protects from errors in protocol name
          if (pos >= 3 && text[pos - 3] === ":") {
            return 0;
          }
          if (pos >= 3 && text[pos - 3] === "/") {
            return 0;
          }
          return tail.match(self.re.no_http)[0].length;
        }
        return 0;
      }
    },
    "mailto:": {
      validate: function(text, pos, self) {
        var tail = text.slice(pos);
        if (!self.re.mailto) {
          self.re.mailto = new RegExp("^" + self.re.src_email_name + "@" + self.re.src_host_strict, "i");
        }
        if (self.re.mailto.test(tail)) {
          return tail.match(self.re.mailto)[0].length;
        }
        return 0;
      }
    }
  };
  /*eslint-disable max-len*/
  // RE pattern for 2-character tlds (autogenerated by ./support/tlds_2char_gen.js)
    var tlds_2ch_src_re = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]";
  // DON'T try to make PRs with changes. Extend TLDs with LinkifyIt.tlds() instead
    var tlds_default = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|\u0440\u0444".split("|");
  /*eslint-enable max-len*/
  ////////////////////////////////////////////////////////////////////////////////
    function resetScanCache(self) {
    self.__index__ = -1;
    self.__text_cache__ = "";
  }
  function createValidator(re) {
    return function(text, pos) {
      var tail = text.slice(pos);
      if (re.test(tail)) {
        return tail.match(re)[0].length;
      }
      return 0;
    };
  }
  function createNormalizer() {
    return function(match, self) {
      self.normalize(match);
    };
  }
  // Schemas compiler. Build regexps.
  
    function compile(self) {
    // Load & clone RE patterns.
    var re$1 = self.re = re(self.__opts__);
    // Define dynamic patterns
        var tlds = self.__tlds__.slice();
    self.onCompile();
    if (!self.__tlds_replaced__) {
      tlds.push(tlds_2ch_src_re);
    }
    tlds.push(re$1.src_xn);
    re$1.src_tlds = tlds.join("|");
    function untpl(tpl) {
      return tpl.replace("%TLDS%", re$1.src_tlds);
    }
    re$1.email_fuzzy = RegExp(untpl(re$1.tpl_email_fuzzy), "i");
    re$1.link_fuzzy = RegExp(untpl(re$1.tpl_link_fuzzy), "i");
    re$1.link_no_ip_fuzzy = RegExp(untpl(re$1.tpl_link_no_ip_fuzzy), "i");
    re$1.host_fuzzy_test = RegExp(untpl(re$1.tpl_host_fuzzy_test), "i");
    
    // Compile each schema
    
        var aliases = [];
    self.__compiled__ = {};
 // Reset compiled data
        function schemaError(name, val) {
      throw new Error('(LinkifyIt) Invalid schema "' + name + '": ' + val);
    }
    Object.keys(self.__schemas__).forEach((function(name) {
      var val = self.__schemas__[name];
      // skip disabled methods
            if (val === null) {
        return;
      }
      var compiled = {
        validate: null,
        link: null
      };
      self.__compiled__[name] = compiled;
      if (isObject(val)) {
        if (isRegExp(val.validate)) {
          compiled.validate = createValidator(val.validate);
        } else if (isFunction(val.validate)) {
          compiled.validate = val.validate;
        } else {
          schemaError(name, val);
        }
        if (isFunction(val.normalize)) {
          compiled.normalize = val.normalize;
        } else if (!val.normalize) {
          compiled.normalize = createNormalizer();
        } else {
          schemaError(name, val);
        }
        return;
      }
      if (isString(val)) {
        aliases.push(name);
        return;
      }
      schemaError(name, val);
    }));
    
    // Compile postponed aliases
    
        aliases.forEach((function(alias) {
      if (!self.__compiled__[self.__schemas__[alias]]) {
        // Silently fail on missed schemas to avoid errons on disable.
        // schemaError(alias, self.__schemas__[alias]);
        return;
      }
      self.__compiled__[alias].validate = self.__compiled__[self.__schemas__[alias]].validate;
      self.__compiled__[alias].normalize = self.__compiled__[self.__schemas__[alias]].normalize;
    }));
    
    // Fake record for guessed links
    
        self.__compiled__[""] = {
      validate: null,
      normalize: createNormalizer()
    };
    
    // Build schema condition
    
        var slist = Object.keys(self.__compiled__).filter((function(name) {
      // Filter disabled & fake schemas
      return name.length > 0 && self.__compiled__[name];
    })).map(escapeRE).join("|");
    // (?!_) cause 1.5x slowdown
        self.re.schema_test = RegExp("(^|(?!_)(?:[><\uff5c]|" + re$1.src_ZPCc + "))(" + slist + ")", "i");
    self.re.schema_search = RegExp("(^|(?!_)(?:[><\uff5c]|" + re$1.src_ZPCc + "))(" + slist + ")", "ig");
    self.re.pretest = RegExp("(" + self.re.schema_test.source + ")|(" + self.re.host_fuzzy_test.source + ")|@", "i");
    
    // Cleanup
    
        resetScanCache(self);
  }
  /**
	 * class Match
	 *
	 * Match result. Single element of array, returned by [[LinkifyIt#match]]
	 **/  function Match(self, shift) {
    var start = self.__index__, end = self.__last_index__, text = self.__text_cache__.slice(start, end);
    /**
	   * Match#schema -> String
	   *
	   * Prefix (protocol) for matched string.
	   **/    this.schema = self.__schema__.toLowerCase();
    /**
	   * Match#index -> Number
	   *
	   * First position of matched string.
	   **/    this.index = start + shift;
    /**
	   * Match#lastIndex -> Number
	   *
	   * Next position after matched string.
	   **/    this.lastIndex = end + shift;
    /**
	   * Match#raw -> String
	   *
	   * Matched string.
	   **/    this.raw = text;
    /**
	   * Match#text -> String
	   *
	   * Notmalized text of matched string.
	   **/    this.text = text;
    /**
	   * Match#url -> String
	   *
	   * Normalized url of matched string.
	   **/    this.url = text;
  }
  function createMatch(self, shift) {
    var match = new Match(self, shift);
    self.__compiled__[match.schema].normalize(match, self);
    return match;
  }
  /**
	 * class LinkifyIt
	 **/
  /**
	 * new LinkifyIt(schemas, options)
	 * - schemas (Object): Optional. Additional schemas to validate (prefix/validator)
	 * - options (Object): { fuzzyLink|fuzzyEmail|fuzzyIP: true|false }
	 *
	 * Creates new linkifier instance with optional additional schemas.
	 * Can be called without `new` keyword for convenience.
	 *
	 * By default understands:
	 *
	 * - `http(s)://...` , `ftp://...`, `mailto:...` & `//...` links
	 * - "fuzzy" links and emails (example.com, foo@bar.com).
	 *
	 * `schemas` is an object, where each key/value describes protocol/rule:
	 *
	 * - __key__ - link prefix (usually, protocol name with `:` at the end, `skype:`
	 *   for example). `linkify-it` makes shure that prefix is not preceeded with
	 *   alphanumeric char and symbols. Only whitespaces and punctuation allowed.
	 * - __value__ - rule to check tail after link prefix
	 *   - _String_ - just alias to existing rule
	 *   - _Object_
	 *     - _validate_ - validator function (should return matched length on success),
	 *       or `RegExp`.
	 *     - _normalize_ - optional function to normalize text & url of matched result
	 *       (for example, for @twitter mentions).
	 *
	 * `options`:
	 *
	 * - __fuzzyLink__ - recognige URL-s without `http(s):` prefix. Default `true`.
	 * - __fuzzyIP__ - allow IPs in fuzzy links above. Can conflict with some texts
	 *   like version numbers. Default `false`.
	 * - __fuzzyEmail__ - recognize emails without `mailto:` prefix.
	 *
	 **/  function LinkifyIt(schemas, options) {
    if (!(this instanceof LinkifyIt)) {
      return new LinkifyIt(schemas, options);
    }
    if (!options) {
      if (isOptionsObj(schemas)) {
        options = schemas;
        schemas = {};
      }
    }
    this.__opts__ = assign$1({}, defaultOptions, options);
    // Cache last tested result. Used to skip repeating steps on next `match` call.
        this.__index__ = -1;
    this.__last_index__ = -1;
 // Next scan position
        this.__schema__ = "";
    this.__text_cache__ = "";
    this.__schemas__ = assign$1({}, defaultSchemas, schemas);
    this.__compiled__ = {};
    this.__tlds__ = tlds_default;
    this.__tlds_replaced__ = false;
    this.re = {};
    compile(this);
  }
  /** chainable
	 * LinkifyIt#add(schema, definition)
	 * - schema (String): rule name (fixed pattern prefix)
	 * - definition (String|RegExp|Object): schema definition
	 *
	 * Add new rule definition. See constructor description for details.
	 **/  LinkifyIt.prototype.add = function add(schema, definition) {
    this.__schemas__[schema] = definition;
    compile(this);
    return this;
  };
  /** chainable
	 * LinkifyIt#set(options)
	 * - options (Object): { fuzzyLink|fuzzyEmail|fuzzyIP: true|false }
	 *
	 * Set recognition options for links without schema.
	 **/  LinkifyIt.prototype.set = function set(options) {
    this.__opts__ = assign$1(this.__opts__, options);
    return this;
  };
  /**
	 * LinkifyIt#test(text) -> Boolean
	 *
	 * Searches linkifiable pattern and returns `true` on success or `false` on fail.
	 **/  LinkifyIt.prototype.test = function test(text) {
    // Reset scan cache
    this.__text_cache__ = text;
    this.__index__ = -1;
    if (!text.length) {
      return false;
    }
    var m, ml, me, len, shift, next, re, tld_pos, at_pos;
    // try to scan for link with schema - that's the most simple rule
        if (this.re.schema_test.test(text)) {
      re = this.re.schema_search;
      re.lastIndex = 0;
      while ((m = re.exec(text)) !== null) {
        len = this.testSchemaAt(text, m[2], re.lastIndex);
        if (len) {
          this.__schema__ = m[2];
          this.__index__ = m.index + m[1].length;
          this.__last_index__ = m.index + m[0].length + len;
          break;
        }
      }
    }
    if (this.__opts__.fuzzyLink && this.__compiled__["http:"]) {
      // guess schemaless links
      tld_pos = text.search(this.re.host_fuzzy_test);
      if (tld_pos >= 0) {
        // if tld is located after found link - no need to check fuzzy pattern
        if (this.__index__ < 0 || tld_pos < this.__index__) {
          if ((ml = text.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) !== null) {
            shift = ml.index + ml[1].length;
            if (this.__index__ < 0 || shift < this.__index__) {
              this.__schema__ = "";
              this.__index__ = shift;
              this.__last_index__ = ml.index + ml[0].length;
            }
          }
        }
      }
    }
    if (this.__opts__.fuzzyEmail && this.__compiled__["mailto:"]) {
      // guess schemaless emails
      at_pos = text.indexOf("@");
      if (at_pos >= 0) {
        // We can't skip this check, because this cases are possible:
        // 192.168.1.1@gmail.com, my.in@example.com
        if ((me = text.match(this.re.email_fuzzy)) !== null) {
          shift = me.index + me[1].length;
          next = me.index + me[0].length;
          if (this.__index__ < 0 || shift < this.__index__ || shift === this.__index__ && next > this.__last_index__) {
            this.__schema__ = "mailto:";
            this.__index__ = shift;
            this.__last_index__ = next;
          }
        }
      }
    }
    return this.__index__ >= 0;
  };
  /**
	 * LinkifyIt#pretest(text) -> Boolean
	 *
	 * Very quick check, that can give false positives. Returns true if link MAY BE
	 * can exists. Can be used for speed optimization, when you need to check that
	 * link NOT exists.
	 **/  LinkifyIt.prototype.pretest = function pretest(text) {
    return this.re.pretest.test(text);
  };
  /**
	 * LinkifyIt#testSchemaAt(text, name, position) -> Number
	 * - text (String): text to scan
	 * - name (String): rule (schema) name
	 * - position (Number): text offset to check from
	 *
	 * Similar to [[LinkifyIt#test]] but checks only specific protocol tail exactly
	 * at given position. Returns length of found pattern (0 on fail).
	 **/  LinkifyIt.prototype.testSchemaAt = function testSchemaAt(text, schema, pos) {
    // If not supported schema check requested - terminate
    if (!this.__compiled__[schema.toLowerCase()]) {
      return 0;
    }
    return this.__compiled__[schema.toLowerCase()].validate(text, pos, this);
  };
  /**
	 * LinkifyIt#match(text) -> Array|null
	 *
	 * Returns array of found link descriptions or `null` on fail. We strongly
	 * recommend to use [[LinkifyIt#test]] first, for best speed.
	 *
	 * ##### Result match description
	 *
	 * - __schema__ - link schema, can be empty for fuzzy links, or `//` for
	 *   protocol-neutral  links.
	 * - __index__ - offset of matched text
	 * - __lastIndex__ - index of next char after mathch end
	 * - __raw__ - matched text
	 * - __text__ - normalized text
	 * - __url__ - link, generated from matched text
	 **/  LinkifyIt.prototype.match = function match(text) {
    var shift = 0, result = [];
    // Try to take previous element from cache, if .test() called before
        if (this.__index__ >= 0 && this.__text_cache__ === text) {
      result.push(createMatch(this, shift));
      shift = this.__last_index__;
    }
    // Cut head if cache was used
        var tail = shift ? text.slice(shift) : text;
    // Scan string until end reached
        while (this.test(tail)) {
      result.push(createMatch(this, shift));
      tail = tail.slice(this.__last_index__);
      shift += this.__last_index__;
    }
    if (result.length) {
      return result;
    }
    return null;
  };
  /** chainable
	 * LinkifyIt#tlds(list [, keepOld]) -> this
	 * - list (Array): list of tlds
	 * - keepOld (Boolean): merge with current list if `true` (`false` by default)
	 *
	 * Load (or merge) new tlds list. Those are user for fuzzy links (without prefix)
	 * to avoid false positives. By default this algorythm used:
	 *
	 * - hostname with any 2-letter root zones are ok.
	 * - biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф
	 *   are ok.
	 * - encoded (`xn--...`) root zones are ok.
	 *
	 * If list is replaced, then exact match for 2-chars root zones will be checked.
	 **/  LinkifyIt.prototype.tlds = function tlds(list, keepOld) {
    list = Array.isArray(list) ? list : [ list ];
    if (!keepOld) {
      this.__tlds__ = list.slice();
      this.__tlds_replaced__ = true;
      compile(this);
      return this;
    }
    this.__tlds__ = this.__tlds__.concat(list).sort().filter((function(el, idx, arr) {
      return el !== arr[idx - 1];
    })).reverse();
    compile(this);
    return this;
  };
  /**
	 * LinkifyIt#normalize(match)
	 *
	 * Default normalizer (if schema does not define it's own).
	 **/  LinkifyIt.prototype.normalize = function normalize(match) {
    // Do minimal possible changes by default. Need to collect feedback prior
    // to move forward https://github.com/markdown-it/linkify-it/issues/1
    if (!match.schema) {
      match.url = "http://" + match.url;
    }
    if (match.schema === "mailto:" && !/^mailto:/i.test(match.url)) {
      match.url = "mailto:" + match.url;
    }
  };
  /**
	 * LinkifyIt#onCompile()
	 *
	 * Override to modify basic RegExp-s.
	 **/  LinkifyIt.prototype.onCompile = function onCompile() {};
  var linkifyIt = LinkifyIt;
  /*! https://mths.be/punycode v1.4.1 by @mathias */
  /** Highest positive signed 32-bit float value */  var maxInt = 2147483647;
 // aka. 0x7FFFFFFF or 2^31-1
  /** Bootstring parameters */  var base = 36;
  var tMin = 1;
  var tMax = 26;
  var skew = 38;
  var damp = 700;
  var initialBias = 72;
  var initialN = 128;
 // 0x80
    var delimiter = "-";
 // '\x2D'
  /** Regular expressions */  var regexPunycode = /^xn--/;
  var regexNonASCII = /[^\x20-\x7E]/;
 // unprintable ASCII chars + non-ASCII chars
    var regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g;
 // RFC 3490 separators
  /** Error messages */  var errors = {
    overflow: "Overflow: input needs wider integers to process",
    "not-basic": "Illegal input >= 0x80 (not a basic code point)",
    "invalid-input": "Invalid input"
  };
  /** Convenience shortcuts */  var baseMinusTMin = base - tMin;
  var floor = Math.floor;
  var stringFromCharCode = String.fromCharCode;
  /*--------------------------------------------------------------------------*/
  /**
	 * A generic error utility function.
	 * @private
	 * @param {String} type The error type.
	 * @returns {Error} Throws a `RangeError` with the applicable error message.
	 */  function error(type) {
    throw new RangeError(errors[type]);
  }
  /**
	 * A generic `Array#map` utility function.
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} callback The function that gets called for every array
	 * item.
	 * @returns {Array} A new array of values returned by the callback function.
	 */  function map$1(array, fn) {
    var length = array.length;
    var result = [];
    while (length--) {
      result[length] = fn(array[length]);
    }
    return result;
  }
  /**
	 * A simple `Array#map`-like wrapper to work with domain name strings or email
	 * addresses.
	 * @private
	 * @param {String} domain The domain name or email address.
	 * @param {Function} callback The function that gets called for every
	 * character.
	 * @returns {Array} A new string of characters returned by the callback
	 * function.
	 */  function mapDomain(string, fn) {
    var parts = string.split("@");
    var result = "";
    if (parts.length > 1) {
      // In email addresses, only the domain name should be punycoded. Leave
      // the local part (i.e. everything up to `@`) intact.
      result = parts[0] + "@";
      string = parts[1];
    }
    // Avoid `split(regex)` for IE8 compatibility. See #17.
        string = string.replace(regexSeparators, ".");
    var labels = string.split(".");
    var encoded = map$1(labels, fn).join(".");
    return result + encoded;
  }
  /**
	 * Creates an array containing the numeric code points of each Unicode
	 * character in the string. While JavaScript uses UCS-2 internally,
	 * this function will convert a pair of surrogate halves (each of which
	 * UCS-2 exposes as separate characters) into a single code point,
	 * matching UTF-16.
	 * @see `punycode.ucs2.encode`
	 * @see <https://mathiasbynens.be/notes/javascript-encoding>
	 * @memberOf punycode.ucs2
	 * @name decode
	 * @param {String} string The Unicode input string (UCS-2).
	 * @returns {Array} The new array of code points.
	 */  function ucs2decode(string) {
    var output = [], counter = 0, length = string.length, value, extra;
    while (counter < length) {
      value = string.charCodeAt(counter++);
      if (value >= 55296 && value <= 56319 && counter < length) {
        // high surrogate, and there is a next character
        extra = string.charCodeAt(counter++);
        if ((extra & 64512) == 56320) {
          // low surrogate
          output.push(((value & 1023) << 10) + (extra & 1023) + 65536);
        } else {
          // unmatched surrogate; only append this code unit, in case the next
          // code unit is the high surrogate of a surrogate pair
          output.push(value);
          counter--;
        }
      } else {
        output.push(value);
      }
    }
    return output;
  }
  /**
	 * Creates a string based on an array of numeric code points.
	 * @see `punycode.ucs2.decode`
	 * @memberOf punycode.ucs2
	 * @name encode
	 * @param {Array} codePoints The array of numeric code points.
	 * @returns {String} The new Unicode string (UCS-2).
	 */  function ucs2encode(array) {
    return map$1(array, (function(value) {
      var output = "";
      if (value > 65535) {
        value -= 65536;
        output += stringFromCharCode(value >>> 10 & 1023 | 55296);
        value = 56320 | value & 1023;
      }
      output += stringFromCharCode(value);
      return output;
    })).join("");
  }
  /**
	 * Converts a basic code point into a digit/integer.
	 * @see `digitToBasic()`
	 * @private
	 * @param {Number} codePoint The basic numeric code point value.
	 * @returns {Number} The numeric value of a basic code point (for use in
	 * representing integers) in the range `0` to `base - 1`, or `base` if
	 * the code point does not represent a value.
	 */  function basicToDigit(codePoint) {
    if (codePoint - 48 < 10) {
      return codePoint - 22;
    }
    if (codePoint - 65 < 26) {
      return codePoint - 65;
    }
    if (codePoint - 97 < 26) {
      return codePoint - 97;
    }
    return base;
  }
  /**
	 * Converts a digit/integer into a basic code point.
	 * @see `basicToDigit()`
	 * @private
	 * @param {Number} digit The numeric value of a basic code point.
	 * @returns {Number} The basic code point whose value (when used for
	 * representing integers) is `digit`, which needs to be in the range
	 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
	 * used; else, the lowercase form is used. The behavior is undefined
	 * if `flag` is non-zero and `digit` has no uppercase form.
	 */  function digitToBasic(digit, flag) {
    //  0..25 map to ASCII a..z or A..Z
    // 26..35 map to ASCII 0..9
    return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
  }
  /**
	 * Bias adaptation function as per section 3.4 of RFC 3492.
	 * https://tools.ietf.org/html/rfc3492#section-3.4
	 * @private
	 */  function adapt(delta, numPoints, firstTime) {
    var k = 0;
    delta = firstTime ? floor(delta / damp) : delta >> 1;
    delta += floor(delta / numPoints);
    for (;delta > baseMinusTMin * tMax >> 1; k += base) {
      delta = floor(delta / baseMinusTMin);
    }
    return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
  }
  /**
	 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
	 * symbols.
	 * @memberOf punycode
	 * @param {String} input The Punycode string of ASCII-only symbols.
	 * @returns {String} The resulting string of Unicode symbols.
	 */  function decode$2(input) {
    // Don't use UCS-2
    var output = [], inputLength = input.length, out, i = 0, n = initialN, bias = initialBias, basic, j, index, oldi, w, k, digit, t, 
    /** Cached calculation results */
    baseMinusT;
    // Handle the basic code points: let `basic` be the number of input code
    // points before the last delimiter, or `0` if there is none, then copy
    // the first basic code points to the output.
        basic = input.lastIndexOf(delimiter);
    if (basic < 0) {
      basic = 0;
    }
    for (j = 0; j < basic; ++j) {
      // if it's not a basic code point
      if (input.charCodeAt(j) >= 128) {
        error("not-basic");
      }
      output.push(input.charCodeAt(j));
    }
    // Main decoding loop: start just after the last delimiter if any basic code
    // points were copied; start at the beginning otherwise.
        for (index = basic > 0 ? basic + 1 : 0; index < inputLength; ) {
      // `index` is the index of the next character to be consumed.
      // Decode a generalized variable-length integer into `delta`,
      // which gets added to `i`. The overflow checking is easier
      // if we increase `i` as we go, then subtract off its starting
      // value at the end to obtain `delta`.
      for (oldi = i, w = 1, k = base; ;k += base) {
        if (index >= inputLength) {
          error("invalid-input");
        }
        digit = basicToDigit(input.charCodeAt(index++));
        if (digit >= base || digit > floor((maxInt - i) / w)) {
          error("overflow");
        }
        i += digit * w;
        t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
        if (digit < t) {
          break;
        }
        baseMinusT = base - t;
        if (w > floor(maxInt / baseMinusT)) {
          error("overflow");
        }
        w *= baseMinusT;
      }
      out = output.length + 1;
      bias = adapt(i - oldi, out, oldi == 0);
      // `i` was supposed to wrap around from `out` to `0`,
      // incrementing `n` each time, so we'll fix that now:
            if (floor(i / out) > maxInt - n) {
        error("overflow");
      }
      n += floor(i / out);
      i %= out;
      // Insert `n` at position `i` of the output
            output.splice(i++, 0, n);
    }
    return ucs2encode(output);
  }
  /**
	 * Converts a string of Unicode symbols (e.g. a domain name label) to a
	 * Punycode string of ASCII-only symbols.
	 * @memberOf punycode
	 * @param {String} input The string of Unicode symbols.
	 * @returns {String} The resulting Punycode string of ASCII-only symbols.
	 */  function encode$2(input) {
    var n, delta, handledCPCount, basicLength, bias, j, m, q, k, t, currentValue, output = [], 
    /** `inputLength` will hold the number of code points in `input`. */
    inputLength, 
    /** Cached calculation results */
    handledCPCountPlusOne, baseMinusT, qMinusT;
    // Convert the input in UCS-2 to Unicode
        input = ucs2decode(input);
    // Cache the length
        inputLength = input.length;
    // Initialize the state
        n = initialN;
    delta = 0;
    bias = initialBias;
    // Handle the basic code points
        for (j = 0; j < inputLength; ++j) {
      currentValue = input[j];
      if (currentValue < 128) {
        output.push(stringFromCharCode(currentValue));
      }
    }
    handledCPCount = basicLength = output.length;
    // `handledCPCount` is the number of code points that have been handled;
    // `basicLength` is the number of basic code points.
    // Finish the basic string - if it is not empty - with a delimiter
        if (basicLength) {
      output.push(delimiter);
    }
    // Main encoding loop:
        while (handledCPCount < inputLength) {
      // All non-basic code points < n have been handled already. Find the next
      // larger one:
      for (m = maxInt, j = 0; j < inputLength; ++j) {
        currentValue = input[j];
        if (currentValue >= n && currentValue < m) {
          m = currentValue;
        }
      }
      // Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
      // but guard against overflow
            handledCPCountPlusOne = handledCPCount + 1;
      if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
        error("overflow");
      }
      delta += (m - n) * handledCPCountPlusOne;
      n = m;
      for (j = 0; j < inputLength; ++j) {
        currentValue = input[j];
        if (currentValue < n && ++delta > maxInt) {
          error("overflow");
        }
        if (currentValue == n) {
          // Represent delta as a generalized variable-length integer
          for (q = delta, k = base; ;k += base) {
            t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
            if (q < t) {
              break;
            }
            qMinusT = q - t;
            baseMinusT = base - t;
            output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0)));
            q = floor(qMinusT / baseMinusT);
          }
          output.push(stringFromCharCode(digitToBasic(q, 0)));
          bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
          delta = 0;
          ++handledCPCount;
        }
      }
      ++delta;
      ++n;
    }
    return output.join("");
  }
  /**
	 * Converts a Punycode string representing a domain name or an email address
	 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
	 * it doesn't matter if you call it on a string that has already been
	 * converted to Unicode.
	 * @memberOf punycode
	 * @param {String} input The Punycoded domain name or email address to
	 * convert to Unicode.
	 * @returns {String} The Unicode representation of the given Punycode
	 * string.
	 */  function toUnicode(input) {
    return mapDomain(input, (function(string) {
      return regexPunycode.test(string) ? decode$2(string.slice(4).toLowerCase()) : string;
    }));
  }
  /**
	 * Converts a Unicode string representing a domain name or an email address to
	 * Punycode. Only the non-ASCII parts of the domain name will be converted,
	 * i.e. it doesn't matter if you call it with a domain that's already in
	 * ASCII.
	 * @memberOf punycode
	 * @param {String} input The domain name or email address to convert, as a
	 * Unicode string.
	 * @returns {String} The Punycode representation of the given domain name or
	 * email address.
	 */  function toASCII(input) {
    return mapDomain(input, (function(string) {
      return regexNonASCII.test(string) ? "xn--" + encode$2(string) : string;
    }));
  }
  var version = "1.4.1";
  /**
	 * An object of methods to convert from JavaScript's internal character
	 * representation (UCS-2) to Unicode code points, and back.
	 * @see <https://mathiasbynens.be/notes/javascript-encoding>
	 * @memberOf punycode
	 * @type Object
	 */  var ucs2 = {
    decode: ucs2decode,
    encode: ucs2encode
  };
  var punycode = {
    version: version,
    ucs2: ucs2,
    toASCII: toASCII,
    toUnicode: toUnicode,
    encode: encode$2,
    decode: decode$2
  };
  var punycode$1 =  Object.freeze({
    __proto__: null,
    decode: decode$2,
    encode: encode$2,
    toUnicode: toUnicode,
    toASCII: toASCII,
    version: version,
    ucs2: ucs2,
    default: punycode
  });
  // markdown-it default options
    var _default = {
    options: {
      html: false,
      // Enable HTML tags in source
      xhtmlOut: false,
      // Use '/' to close single tags (<br />)
      breaks: false,
      // Convert '\n' in paragraphs into <br>
      langPrefix: "language-",
      // CSS language prefix for fenced blocks
      linkify: false,
      // autoconvert URL-like texts to links
      // Enable some language-neutral replacements + quotes beautification
      typographer: false,
      // Double + single quotes replacement pairs, when typographer enabled,
      // and smartquotes on. Could be either a String or an Array.
      // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
      // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
      quotes: "\u201c\u201d\u2018\u2019",
      /* “”‘’ */
      // Highlighter function. Should return escaped HTML,
      // or '' if the source string is not changed and should be escaped externaly.
      // If result starts with <pre... internal wrapper is skipped.
      // function (/*str, lang*/) { return ''; }
      highlight: null,
      maxNesting: 100
    },
    components: {
      core: {},
      block: {},
      inline: {}
    }
  };
  // "Zero" preset, with nothing enabled. Useful for manual configuring of simple
    var zero = {
    options: {
      html: false,
      // Enable HTML tags in source
      xhtmlOut: false,
      // Use '/' to close single tags (<br />)
      breaks: false,
      // Convert '\n' in paragraphs into <br>
      langPrefix: "language-",
      // CSS language prefix for fenced blocks
      linkify: false,
      // autoconvert URL-like texts to links
      // Enable some language-neutral replacements + quotes beautification
      typographer: false,
      // Double + single quotes replacement pairs, when typographer enabled,
      // and smartquotes on. Could be either a String or an Array.
      // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
      // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
      quotes: "\u201c\u201d\u2018\u2019",
      /* “”‘’ */
      // Highlighter function. Should return escaped HTML,
      // or '' if the source string is not changed and should be escaped externaly.
      // If result starts with <pre... internal wrapper is skipped.
      // function (/*str, lang*/) { return ''; }
      highlight: null,
      maxNesting: 20
    },
    components: {
      core: {
        rules: [ "normalize", "block", "inline" ]
      },
      block: {
        rules: [ "paragraph" ]
      },
      inline: {
        rules: [ "text" ],
        rules2: [ "balance_pairs", "text_collapse" ]
      }
    }
  };
  // Commonmark default options
    var commonmark = {
    options: {
      html: true,
      // Enable HTML tags in source
      xhtmlOut: true,
      // Use '/' to close single tags (<br />)
      breaks: false,
      // Convert '\n' in paragraphs into <br>
      langPrefix: "language-",
      // CSS language prefix for fenced blocks
      linkify: false,
      // autoconvert URL-like texts to links
      // Enable some language-neutral replacements + quotes beautification
      typographer: false,
      // Double + single quotes replacement pairs, when typographer enabled,
      // and smartquotes on. Could be either a String or an Array.
      // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
      // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
      quotes: "\u201c\u201d\u2018\u2019",
      /* “”‘’ */
      // Highlighter function. Should return escaped HTML,
      // or '' if the source string is not changed and should be escaped externaly.
      // If result starts with <pre... internal wrapper is skipped.
      // function (/*str, lang*/) { return ''; }
      highlight: null,
      maxNesting: 20
    },
    components: {
      core: {
        rules: [ "normalize", "block", "inline" ]
      },
      block: {
        rules: [ "blockquote", "code", "fence", "heading", "hr", "html_block", "lheading", "list", "reference", "paragraph" ]
      },
      inline: {
        rules: [ "autolink", "backticks", "emphasis", "entity", "escape", "html_inline", "image", "link", "newline", "text" ],
        rules2: [ "balance_pairs", "emphasis", "text_collapse" ]
      }
    }
  };
  var punycode$2 =  getAugmentedNamespace(punycode$1);
  var config = {
    default: _default,
    zero: zero,
    commonmark: commonmark
  };
  ////////////////////////////////////////////////////////////////////////////////
  
  // This validator can prohibit more than really needed to prevent XSS. It's a
  // tradeoff to keep code simple and to be secure by default.
  
  // If you need different setup - override validator method as you wish. Or
  // replace it with dummy function and use external sanitizer.
  
    var BAD_PROTO_RE = /^(vbscript|javascript|file|data):/;
  var GOOD_DATA_RE = /^data:image\/(gif|png|jpeg|webp);/;
  function validateLink(url) {
    // url should be normalized at this point, and existing entities are decoded
    var str = url.trim().toLowerCase();
    return BAD_PROTO_RE.test(str) ? GOOD_DATA_RE.test(str) ? true : false : true;
  }
  ////////////////////////////////////////////////////////////////////////////////
    var RECODE_HOSTNAME_FOR = [ "http:", "https:", "mailto:" ];
  function normalizeLink(url) {
    var parsed = mdurl.parse(url, true);
    if (parsed.hostname) {
      // Encode hostnames in urls like:
      // `http://host/`, `https://host/`, `mailto:user@host`, `//host/`
      // We don't encode unknown schemas, because it's likely that we encode
      // something we shouldn't (e.g. `skype:name` treated as `skype:host`)
      if (!parsed.protocol || RECODE_HOSTNAME_FOR.indexOf(parsed.protocol) >= 0) {
        try {
          parsed.hostname = punycode$2.toASCII(parsed.hostname);
        } catch (er) {}
      }
    }
    return mdurl.encode(mdurl.format(parsed));
  }
  function normalizeLinkText(url) {
    var parsed = mdurl.parse(url, true);
    if (parsed.hostname) {
      // Encode hostnames in urls like:
      // `http://host/`, `https://host/`, `mailto:user@host`, `//host/`
      // We don't encode unknown schemas, because it's likely that we encode
      // something we shouldn't (e.g. `skype:name` treated as `skype:host`)
      if (!parsed.protocol || RECODE_HOSTNAME_FOR.indexOf(parsed.protocol) >= 0) {
        try {
          parsed.hostname = punycode$2.toUnicode(parsed.hostname);
        } catch (er) {}
      }
    }
    // add '%' to exclude list because of https://github.com/markdown-it/markdown-it/issues/720
        return mdurl.decode(mdurl.format(parsed), mdurl.decode.defaultChars + "%");
  }
  /**
	 * class MarkdownIt
	 *
	 * Main parser/renderer class.
	 *
	 * ##### Usage
	 *
	 * ```javascript
	 * // node.js, "classic" way:
	 * var MarkdownIt = require('markdown-it'),
	 *     md = new MarkdownIt();
	 * var result = md.render('# markdown-it rulezz!');
	 *
	 * // node.js, the same, but with sugar:
	 * var md = require('markdown-it')();
	 * var result = md.render('# markdown-it rulezz!');
	 *
	 * // browser without AMD, added to "window" on script load
	 * // Note, there are no dash.
	 * var md = window.markdownit();
	 * var result = md.render('# markdown-it rulezz!');
	 * ```
	 *
	 * Single line rendering, without paragraph wrap:
	 *
	 * ```javascript
	 * var md = require('markdown-it')();
	 * var result = md.renderInline('__markdown-it__ rulezz!');
	 * ```
	 **/
  /**
	 * new MarkdownIt([presetName, options])
	 * - presetName (String): optional, `commonmark` / `zero`
	 * - options (Object)
	 *
	 * Creates parser instanse with given config. Can be called without `new`.
	 *
	 * ##### presetName
	 *
	 * MarkdownIt provides named presets as a convenience to quickly
	 * enable/disable active syntax rules and options for common use cases.
	 *
	 * - ["commonmark"](https://github.com/markdown-it/markdown-it/blob/master/lib/presets/commonmark.js) -
	 *   configures parser to strict [CommonMark](http://commonmark.org/) mode.
	 * - [default](https://github.com/markdown-it/markdown-it/blob/master/lib/presets/default.js) -
	 *   similar to GFM, used when no preset name given. Enables all available rules,
	 *   but still without html, typographer & autolinker.
	 * - ["zero"](https://github.com/markdown-it/markdown-it/blob/master/lib/presets/zero.js) -
	 *   all rules disabled. Useful to quickly setup your config via `.enable()`.
	 *   For example, when you need only `bold` and `italic` markup and nothing else.
	 *
	 * ##### options:
	 *
	 * - __html__ - `false`. Set `true` to enable HTML tags in source. Be careful!
	 *   That's not safe! You may need external sanitizer to protect output from XSS.
	 *   It's better to extend features via plugins, instead of enabling HTML.
	 * - __xhtmlOut__ - `false`. Set `true` to add '/' when closing single tags
	 *   (`<br />`). This is needed only for full CommonMark compatibility. In real
	 *   world you will need HTML output.
	 * - __breaks__ - `false`. Set `true` to convert `\n` in paragraphs into `<br>`.
	 * - __langPrefix__ - `language-`. CSS language class prefix for fenced blocks.
	 *   Can be useful for external highlighters.
	 * - __linkify__ - `false`. Set `true` to autoconvert URL-like text to links.
	 * - __typographer__  - `false`. Set `true` to enable [some language-neutral
	 *   replacement](https://github.com/markdown-it/markdown-it/blob/master/lib/rules_core/replacements.js) +
	 *   quotes beautification (smartquotes).
	 * - __quotes__ - `“”‘’`, String or Array. Double + single quotes replacement
	 *   pairs, when typographer enabled and smartquotes on. For example, you can
	 *   use `'«»„“'` for Russian, `'„“‚‘'` for German, and
	 *   `['«\xA0', '\xA0»', '‹\xA0', '\xA0›']` for French (including nbsp).
	 * - __highlight__ - `null`. Highlighter function for fenced code blocks.
	 *   Highlighter `function (str, lang)` should return escaped HTML. It can also
	 *   return empty string if the source was not changed and should be escaped
	 *   externaly. If result starts with <pre... internal wrapper is skipped.
	 *
	 * ##### Example
	 *
	 * ```javascript
	 * // commonmark mode
	 * var md = require('markdown-it')('commonmark');
	 *
	 * // default mode
	 * var md = require('markdown-it')();
	 *
	 * // enable everything
	 * var md = require('markdown-it')({
	 *   html: true,
	 *   linkify: true,
	 *   typographer: true
	 * });
	 * ```
	 *
	 * ##### Syntax highlighting
	 *
	 * ```js
	 * var hljs = require('highlight.js') // https://highlightjs.org/
	 *
	 * var md = require('markdown-it')({
	 *   highlight: function (str, lang) {
	 *     if (lang && hljs.getLanguage(lang)) {
	 *       try {
	 *         return hljs.highlight(lang, str, true).value;
	 *       } catch (__) {}
	 *     }
	 *
	 *     return ''; // use external default escaping
	 *   }
	 * });
	 * ```
	 *
	 * Or with full wrapper override (if you need assign class to `<pre>`):
	 *
	 * ```javascript
	 * var hljs = require('highlight.js') // https://highlightjs.org/
	 *
	 * // Actual default values
	 * var md = require('markdown-it')({
	 *   highlight: function (str, lang) {
	 *     if (lang && hljs.getLanguage(lang)) {
	 *       try {
	 *         return '<pre class="hljs"><code>' +
	 *                hljs.highlight(lang, str, true).value +
	 *                '</code></pre>';
	 *       } catch (__) {}
	 *     }
	 *
	 *     return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
	 *   }
	 * });
	 * ```
	 *
	 **/  function MarkdownIt(presetName, options) {
    if (!(this instanceof MarkdownIt)) {
      return new MarkdownIt(presetName, options);
    }
    if (!options) {
      if (!utils.isString(presetName)) {
        options = presetName || {};
        presetName = "default";
      }
    }
    /**
	   * MarkdownIt#inline -> ParserInline
	   *
	   * Instance of [[ParserInline]]. You may need it to add new rules when
	   * writing plugins. For simple rules control use [[MarkdownIt.disable]] and
	   * [[MarkdownIt.enable]].
	   **/    this.inline = new parser_inline;
    /**
	   * MarkdownIt#block -> ParserBlock
	   *
	   * Instance of [[ParserBlock]]. You may need it to add new rules when
	   * writing plugins. For simple rules control use [[MarkdownIt.disable]] and
	   * [[MarkdownIt.enable]].
	   **/    this.block = new parser_block;
    /**
	   * MarkdownIt#core -> Core
	   *
	   * Instance of [[Core]] chain executor. You may need it to add new rules when
	   * writing plugins. For simple rules control use [[MarkdownIt.disable]] and
	   * [[MarkdownIt.enable]].
	   **/    this.core = new parser_core;
    /**
	   * MarkdownIt#renderer -> Renderer
	   *
	   * Instance of [[Renderer]]. Use it to modify output look. Or to add rendering
	   * rules for new token types, generated by plugins.
	   *
	   * ##### Example
	   *
	   * ```javascript
	   * var md = require('markdown-it')();
	   *
	   * function myToken(tokens, idx, options, env, self) {
	   *   //...
	   *   return result;
	   * };
	   *
	   * md.renderer.rules['my_token'] = myToken
	   * ```
	   *
	   * See [[Renderer]] docs and [source code](https://github.com/markdown-it/markdown-it/blob/master/lib/renderer.js).
	   **/    this.renderer = new renderer;
    /**
	   * MarkdownIt#linkify -> LinkifyIt
	   *
	   * [linkify-it](https://github.com/markdown-it/linkify-it) instance.
	   * Used by [linkify](https://github.com/markdown-it/markdown-it/blob/master/lib/rules_core/linkify.js)
	   * rule.
	   **/    this.linkify = new linkifyIt;
    /**
	   * MarkdownIt#validateLink(url) -> Boolean
	   *
	   * Link validation function. CommonMark allows too much in links. By default
	   * we disable `javascript:`, `vbscript:`, `file:` schemas, and almost all `data:...` schemas
	   * except some embedded image types.
	   *
	   * You can change this behaviour:
	   *
	   * ```javascript
	   * var md = require('markdown-it')();
	   * // enable everything
	   * md.validateLink = function () { return true; }
	   * ```
	   **/    this.validateLink = validateLink;
    /**
	   * MarkdownIt#normalizeLink(url) -> String
	   *
	   * Function used to encode link url to a machine-readable format,
	   * which includes url-encoding, punycode, etc.
	   **/    this.normalizeLink = normalizeLink;
    /**
	   * MarkdownIt#normalizeLinkText(url) -> String
	   *
	   * Function used to decode link url to a human-readable format`
	   **/    this.normalizeLinkText = normalizeLinkText;
    // Expose utils & helpers for easy acces from plugins
    /**
	   * MarkdownIt#utils -> utils
	   *
	   * Assorted utility functions, useful to write plugins. See details
	   * [here](https://github.com/markdown-it/markdown-it/blob/master/lib/common/utils.js).
	   **/    this.utils = utils;
    /**
	   * MarkdownIt#helpers -> helpers
	   *
	   * Link components parser functions, useful to write plugins. See details
	   * [here](https://github.com/markdown-it/markdown-it/blob/master/lib/helpers).
	   **/    this.helpers = utils.assign({}, helpers);
    this.options = {};
    this.configure(presetName);
    if (options) {
      this.set(options);
    }
  }
  /** chainable
	 * MarkdownIt.set(options)
	 *
	 * Set parser options (in the same format as in constructor). Probably, you
	 * will never need it, but you can change options after constructor call.
	 *
	 * ##### Example
	 *
	 * ```javascript
	 * var md = require('markdown-it')()
	 *             .set({ html: true, breaks: true })
	 *             .set({ typographer, true });
	 * ```
	 *
	 * __Note:__ To achieve the best possible performance, don't modify a
	 * `markdown-it` instance options on the fly. If you need multiple configurations
	 * it's best to create multiple instances and initialize each with separate
	 * config.
	 **/  MarkdownIt.prototype.set = function(options) {
    utils.assign(this.options, options);
    return this;
  };
  /** chainable, internal
	 * MarkdownIt.configure(presets)
	 *
	 * Batch load of all options and compenent settings. This is internal method,
	 * and you probably will not need it. But if you will - see available presets
	 * and data structure [here](https://github.com/markdown-it/markdown-it/tree/master/lib/presets)
	 *
	 * We strongly recommend to use presets instead of direct config loads. That
	 * will give better compatibility with next versions.
	 **/  MarkdownIt.prototype.configure = function(presets) {
    var self = this, presetName;
    if (utils.isString(presets)) {
      presetName = presets;
      presets = config[presetName];
      if (!presets) {
        throw new Error('Wrong `markdown-it` preset "' + presetName + '", check name');
      }
    }
    if (!presets) {
      throw new Error("Wrong `markdown-it` preset, can't be empty");
    }
    if (presets.options) {
      self.set(presets.options);
    }
    if (presets.components) {
      Object.keys(presets.components).forEach((function(name) {
        if (presets.components[name].rules) {
          self[name].ruler.enableOnly(presets.components[name].rules);
        }
        if (presets.components[name].rules2) {
          self[name].ruler2.enableOnly(presets.components[name].rules2);
        }
      }));
    }
    return this;
  };
  /** chainable
	 * MarkdownIt.enable(list, ignoreInvalid)
	 * - list (String|Array): rule name or list of rule names to enable
	 * - ignoreInvalid (Boolean): set `true` to ignore errors when rule not found.
	 *
	 * Enable list or rules. It will automatically find appropriate components,
	 * containing rules with given names. If rule not found, and `ignoreInvalid`
	 * not set - throws exception.
	 *
	 * ##### Example
	 *
	 * ```javascript
	 * var md = require('markdown-it')()
	 *             .enable(['sub', 'sup'])
	 *             .disable('smartquotes');
	 * ```
	 **/  MarkdownIt.prototype.enable = function(list, ignoreInvalid) {
    var result = [];
    if (!Array.isArray(list)) {
      list = [ list ];
    }
    [ "core", "block", "inline" ].forEach((function(chain) {
      result = result.concat(this[chain].ruler.enable(list, true));
    }), this);
    result = result.concat(this.inline.ruler2.enable(list, true));
    var missed = list.filter((function(name) {
      return result.indexOf(name) < 0;
    }));
    if (missed.length && !ignoreInvalid) {
      throw new Error("MarkdownIt. Failed to enable unknown rule(s): " + missed);
    }
    return this;
  };
  /** chainable
	 * MarkdownIt.disable(list, ignoreInvalid)
	 * - list (String|Array): rule name or list of rule names to disable.
	 * - ignoreInvalid (Boolean): set `true` to ignore errors when rule not found.
	 *
	 * The same as [[MarkdownIt.enable]], but turn specified rules off.
	 **/  MarkdownIt.prototype.disable = function(list, ignoreInvalid) {
    var result = [];
    if (!Array.isArray(list)) {
      list = [ list ];
    }
    [ "core", "block", "inline" ].forEach((function(chain) {
      result = result.concat(this[chain].ruler.disable(list, true));
    }), this);
    result = result.concat(this.inline.ruler2.disable(list, true));
    var missed = list.filter((function(name) {
      return result.indexOf(name) < 0;
    }));
    if (missed.length && !ignoreInvalid) {
      throw new Error("MarkdownIt. Failed to disable unknown rule(s): " + missed);
    }
    return this;
  };
  /** chainable
	 * MarkdownIt.use(plugin, params)
	 *
	 * Load specified plugin with given params into current parser instance.
	 * It's just a sugar to call `plugin(md, params)` with curring.
	 *
	 * ##### Example
	 *
	 * ```javascript
	 * var iterator = require('markdown-it-for-inline');
	 * var md = require('markdown-it')()
	 *             .use(iterator, 'foo_replace', 'text', function (tokens, idx) {
	 *               tokens[idx].content = tokens[idx].content.replace(/foo/g, 'bar');
	 *             });
	 * ```
	 **/  MarkdownIt.prototype.use = function(plugin /*, params, ... */) {
    var args = [ this ].concat(Array.prototype.slice.call(arguments, 1));
    plugin.apply(plugin, args);
    return this;
  };
  /** internal
	 * MarkdownIt.parse(src, env) -> Array
	 * - src (String): source string
	 * - env (Object): environment sandbox
	 *
	 * Parse input string and return list of block tokens (special token type
	 * "inline" will contain list of inline tokens). You should not call this
	 * method directly, until you write custom renderer (for example, to produce
	 * AST).
	 *
	 * `env` is used to pass data between "distributed" rules and return additional
	 * metadata like reference info, needed for the renderer. It also can be used to
	 * inject data in specific cases. Usually, you will be ok to pass `{}`,
	 * and then pass updated object to renderer.
	 **/  MarkdownIt.prototype.parse = function(src, env) {
    if (typeof src !== "string") {
      throw new Error("Input data should be a String");
    }
    var state = new this.core.State(src, this, env);
    this.core.process(state);
    return state.tokens;
  };
  /**
	 * MarkdownIt.render(src [, env]) -> String
	 * - src (String): source string
	 * - env (Object): environment sandbox
	 *
	 * Render markdown string into html. It does all magic for you :).
	 *
	 * `env` can be used to inject additional metadata (`{}` by default).
	 * But you will not need it with high probability. See also comment
	 * in [[MarkdownIt.parse]].
	 **/  MarkdownIt.prototype.render = function(src, env) {
    env = env || {};
    return this.renderer.render(this.parse(src, env), this.options, env);
  };
  /** internal
	 * MarkdownIt.parseInline(src, env) -> Array
	 * - src (String): source string
	 * - env (Object): environment sandbox
	 *
	 * The same as [[MarkdownIt.parse]] but skip all block rules. It returns the
	 * block tokens list with the single `inline` element, containing parsed inline
	 * tokens in `children` property. Also updates `env` object.
	 **/  MarkdownIt.prototype.parseInline = function(src, env) {
    var state = new this.core.State(src, this, env);
    state.inlineMode = true;
    this.core.process(state);
    return state.tokens;
  };
  /**
	 * MarkdownIt.renderInline(src [, env]) -> String
	 * - src (String): source string
	 * - env (Object): environment sandbox
	 *
	 * Similar to [[MarkdownIt.render]] but for single paragraph content. Result
	 * will NOT be wrapped into `<p>` tags.
	 **/  MarkdownIt.prototype.renderInline = function(src, env) {
    env = env || {};
    return this.renderer.render(this.parseInline(src, env), this.options, env);
  };
  var lib = MarkdownIt;
  var markdownIt = lib;
  // Process ~subscript~
  // same as UNESCAPE_MD_RE plus a space
    var UNESCAPE_RE = /\\([ \\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;
  function subscript(state, silent) {
    var found, content, token, max = state.posMax, start = state.pos;
    if (state.src.charCodeAt(start) !== 126 /* ~ */) {
      return false;
    }
    if (silent) {
      return false;
    }
 // don't run any pairs in validation mode
        if (start + 2 >= max) {
      return false;
    }
    state.pos = start + 1;
    while (state.pos < max) {
      if (state.src.charCodeAt(state.pos) === 126 /* ~ */) {
        found = true;
        break;
      }
      state.md.inline.skipToken(state);
    }
    if (!found || start + 1 === state.pos) {
      state.pos = start;
      return false;
    }
    content = state.src.slice(start + 1, state.pos);
    // don't allow unescaped spaces/newlines inside
        if (content.match(/(^|[^\\])(\\\\)*\s/)) {
      state.pos = start;
      return false;
    }
    // found!
        state.posMax = state.pos;
    state.pos = start + 1;
    // Earlier we checked !silent, but this implementation does not need it
        token = state.push("sub_open", "sub", 1);
    token.markup = "~";
    token = state.push("text", "", 0);
    token.content = content.replace(UNESCAPE_RE, "$1");
    token = state.push("sub_close", "sub", -1);
    token.markup = "~";
    state.pos = state.posMax + 1;
    state.posMax = max;
    return true;
  }
  var markdownItSub = function sub_plugin(md) {
    md.inline.ruler.after("emphasis", "sub", subscript);
  };
  // Process ^superscript^
  // same as UNESCAPE_MD_RE plus a space
    var UNESCAPE_RE$1 = /\\([ \\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;
  function superscript(state, silent) {
    var found, content, token, max = state.posMax, start = state.pos;
    if (state.src.charCodeAt(start) !== 94 /* ^ */) {
      return false;
    }
    if (silent) {
      return false;
    }
 // don't run any pairs in validation mode
        if (start + 2 >= max) {
      return false;
    }
    state.pos = start + 1;
    while (state.pos < max) {
      if (state.src.charCodeAt(state.pos) === 94 /* ^ */) {
        found = true;
        break;
      }
      state.md.inline.skipToken(state);
    }
    if (!found || start + 1 === state.pos) {
      state.pos = start;
      return false;
    }
    content = state.src.slice(start + 1, state.pos);
    // don't allow unescaped spaces/newlines inside
        if (content.match(/(^|[^\\])(\\\\)*\s/)) {
      state.pos = start;
      return false;
    }
    // found!
        state.posMax = state.pos;
    state.pos = start + 1;
    // Earlier we checked !silent, but this implementation does not need it
        token = state.push("sup_open", "sup", 1);
    token.markup = "^";
    token = state.push("text", "", 0);
    token.content = content.replace(UNESCAPE_RE$1, "$1");
    token = state.push("sup_close", "sup", -1);
    token.markup = "^";
    state.pos = state.posMax + 1;
    state.posMax = max;
    return true;
  }
  var markdownItSup = function sup_plugin(md) {
    md.inline.ruler.after("emphasis", "sup", superscript);
  };
  // Process footnotes
  ////////////////////////////////////////////////////////////////////////////////
  // Renderer partials
    function render_footnote_anchor_name(tokens, idx, options, env /*, slf*/) {
    var n = Number(tokens[idx].meta.id + 1).toString();
    var prefix = "";
    if (typeof env.docId === "string") {
      prefix = "-" + env.docId + "-";
    }
    return prefix + n;
  }
  function render_footnote_caption(tokens, idx /*, options, env, slf*/) {
    var n = Number(tokens[idx].meta.id + 1).toString();
    if (tokens[idx].meta.subId > 0) {
      n += ":" + tokens[idx].meta.subId;
    }
    return "[" + n + "]";
  }
  function render_footnote_ref(tokens, idx, options, env, slf) {
    var id = slf.rules.footnote_anchor_name(tokens, idx, options, env, slf);
    var caption = slf.rules.footnote_caption(tokens, idx, options, env, slf);
    var refid = id;
    if (tokens[idx].meta.subId > 0) {
      refid += ":" + tokens[idx].meta.subId;
    }
    return '<sup class="footnote-ref"><a href="#fn' + id + '" id="fnref' + refid + '">' + caption + "</a></sup>";
  }
  function render_footnote_block_open(tokens, idx, options) {
    return (options.xhtmlOut ? '<hr class="footnotes-sep" />\n' : '<hr class="footnotes-sep">\n') + '<section class="footnotes">\n' + '<ol class="footnotes-list">\n';
  }
  function render_footnote_block_close() {
    return "</ol>\n</section>\n";
  }
  function render_footnote_open(tokens, idx, options, env, slf) {
    var id = slf.rules.footnote_anchor_name(tokens, idx, options, env, slf);
    if (tokens[idx].meta.subId > 0) {
      id += ":" + tokens[idx].meta.subId;
    }
    return '<li id="fn' + id + '" class="footnote-item">';
  }
  function render_footnote_close() {
    return "</li>\n";
  }
  function render_footnote_anchor(tokens, idx, options, env, slf) {
    var id = slf.rules.footnote_anchor_name(tokens, idx, options, env, slf);
    if (tokens[idx].meta.subId > 0) {
      id += ":" + tokens[idx].meta.subId;
    }
    /* ↩ with escape code to prevent display as Apple Emoji on iOS */    return ' <a href="#fnref' + id + '" class="footnote-backref">\u21a9\ufe0e</a>';
  }
  var markdownItFootnote = function footnote_plugin(md) {
    var parseLinkLabel = md.helpers.parseLinkLabel, isSpace = md.utils.isSpace;
    md.renderer.rules.footnote_ref = render_footnote_ref;
    md.renderer.rules.footnote_block_open = render_footnote_block_open;
    md.renderer.rules.footnote_block_close = render_footnote_block_close;
    md.renderer.rules.footnote_open = render_footnote_open;
    md.renderer.rules.footnote_close = render_footnote_close;
    md.renderer.rules.footnote_anchor = render_footnote_anchor;
    // helpers (only used in other rules, no tokens are attached to those)
        md.renderer.rules.footnote_caption = render_footnote_caption;
    md.renderer.rules.footnote_anchor_name = render_footnote_anchor_name;
    // Process footnote block definition
        function footnote_def(state, startLine, endLine, silent) {
      var oldBMark, oldTShift, oldSCount, oldParentType, pos, label, token, initial, offset, ch, posAfterColon, start = state.bMarks[startLine] + state.tShift[startLine], max = state.eMarks[startLine];
      // line should be at least 5 chars - "[^x]:"
            if (start + 4 > max) {
        return false;
      }
      if (state.src.charCodeAt(start) !== 91 /* [ */) {
        return false;
      }
      if (state.src.charCodeAt(start + 1) !== 94 /* ^ */) {
        return false;
      }
      for (pos = start + 2; pos < max; pos++) {
        if (state.src.charCodeAt(pos) === 32) {
          return false;
        }
        if (state.src.charCodeAt(pos) === 93 /* ] */) {
          break;
        }
      }
      if (pos === start + 2) {
        return false;
      }
 // no empty footnote labels
            if (pos + 1 >= max || state.src.charCodeAt(++pos) !== 58 /* : */) {
        return false;
      }
      if (silent) {
        return true;
      }
      pos++;
      if (!state.env.footnotes) {
        state.env.footnotes = {};
      }
      if (!state.env.footnotes.refs) {
        state.env.footnotes.refs = {};
      }
      label = state.src.slice(start + 2, pos - 2);
      state.env.footnotes.refs[":" + label] = -1;
      token = new state.Token("footnote_reference_open", "", 1);
      token.meta = {
        label: label
      };
      token.level = state.level++;
      state.tokens.push(token);
      oldBMark = state.bMarks[startLine];
      oldTShift = state.tShift[startLine];
      oldSCount = state.sCount[startLine];
      oldParentType = state.parentType;
      posAfterColon = pos;
      initial = offset = state.sCount[startLine] + pos - (state.bMarks[startLine] + state.tShift[startLine]);
      while (pos < max) {
        ch = state.src.charCodeAt(pos);
        if (isSpace(ch)) {
          if (ch === 9) {
            offset += 4 - offset % 4;
          } else {
            offset++;
          }
        } else {
          break;
        }
        pos++;
      }
      state.tShift[startLine] = pos - posAfterColon;
      state.sCount[startLine] = offset - initial;
      state.bMarks[startLine] = posAfterColon;
      state.blkIndent += 4;
      state.parentType = "footnote";
      if (state.sCount[startLine] < state.blkIndent) {
        state.sCount[startLine] += state.blkIndent;
      }
      state.md.block.tokenize(state, startLine, endLine, true);
      state.parentType = oldParentType;
      state.blkIndent -= 4;
      state.tShift[startLine] = oldTShift;
      state.sCount[startLine] = oldSCount;
      state.bMarks[startLine] = oldBMark;
      token = new state.Token("footnote_reference_close", "", -1);
      token.level = --state.level;
      state.tokens.push(token);
      return true;
    }
    // Process inline footnotes (^[...])
        function footnote_inline(state, silent) {
      var labelStart, labelEnd, footnoteId, token, tokens, max = state.posMax, start = state.pos;
      if (start + 2 >= max) {
        return false;
      }
      if (state.src.charCodeAt(start) !== 94 /* ^ */) {
        return false;
      }
      if (state.src.charCodeAt(start + 1) !== 91 /* [ */) {
        return false;
      }
      labelStart = start + 2;
      labelEnd = parseLinkLabel(state, start + 1);
      // parser failed to find ']', so it's not a valid note
            if (labelEnd < 0) {
        return false;
      }
      // We found the end of the link, and know for a fact it's a valid link;
      // so all that's left to do is to call tokenizer.
      
            if (!silent) {
        if (!state.env.footnotes) {
          state.env.footnotes = {};
        }
        if (!state.env.footnotes.list) {
          state.env.footnotes.list = [];
        }
        footnoteId = state.env.footnotes.list.length;
        state.md.inline.parse(state.src.slice(labelStart, labelEnd), state.md, state.env, tokens = []);
        token = state.push("footnote_ref", "", 0);
        token.meta = {
          id: footnoteId
        };
        state.env.footnotes.list[footnoteId] = {
          content: state.src.slice(labelStart, labelEnd),
          tokens: tokens
        };
      }
      state.pos = labelEnd + 1;
      state.posMax = max;
      return true;
    }
    // Process footnote references ([^...])
        function footnote_ref(state, silent) {
      var label, pos, footnoteId, footnoteSubId, token, max = state.posMax, start = state.pos;
      // should be at least 4 chars - "[^x]"
            if (start + 3 > max) {
        return false;
      }
      if (!state.env.footnotes || !state.env.footnotes.refs) {
        return false;
      }
      if (state.src.charCodeAt(start) !== 91 /* [ */) {
        return false;
      }
      if (state.src.charCodeAt(start + 1) !== 94 /* ^ */) {
        return false;
      }
      for (pos = start + 2; pos < max; pos++) {
        if (state.src.charCodeAt(pos) === 32) {
          return false;
        }
        if (state.src.charCodeAt(pos) === 10) {
          return false;
        }
        if (state.src.charCodeAt(pos) === 93 /* ] */) {
          break;
        }
      }
      if (pos === start + 2) {
        return false;
      }
 // no empty footnote labels
            if (pos >= max) {
        return false;
      }
      pos++;
      label = state.src.slice(start + 2, pos - 1);
      if (typeof state.env.footnotes.refs[":" + label] === "undefined") {
        return false;
      }
      if (!silent) {
        if (!state.env.footnotes.list) {
          state.env.footnotes.list = [];
        }
        if (state.env.footnotes.refs[":" + label] < 0) {
          footnoteId = state.env.footnotes.list.length;
          state.env.footnotes.list[footnoteId] = {
            label: label,
            count: 0
          };
          state.env.footnotes.refs[":" + label] = footnoteId;
        } else {
          footnoteId = state.env.footnotes.refs[":" + label];
        }
        footnoteSubId = state.env.footnotes.list[footnoteId].count;
        state.env.footnotes.list[footnoteId].count++;
        token = state.push("footnote_ref", "", 0);
        token.meta = {
          id: footnoteId,
          subId: footnoteSubId,
          label: label
        };
      }
      state.pos = pos;
      state.posMax = max;
      return true;
    }
    // Glue footnote tokens to end of token stream
        function footnote_tail(state) {
      var i, l, j, t, lastParagraph, list, token, tokens, current, currentLabel, insideRef = false, refTokens = {};
      if (!state.env.footnotes) {
        return;
      }
      state.tokens = state.tokens.filter((function(tok) {
        if (tok.type === "footnote_reference_open") {
          insideRef = true;
          current = [];
          currentLabel = tok.meta.label;
          return false;
        }
        if (tok.type === "footnote_reference_close") {
          insideRef = false;
          // prepend ':' to avoid conflict with Object.prototype members
                    refTokens[":" + currentLabel] = current;
          return false;
        }
        if (insideRef) {
          current.push(tok);
        }
        return !insideRef;
      }));
      if (!state.env.footnotes.list) {
        return;
      }
      list = state.env.footnotes.list;
      token = new state.Token("footnote_block_open", "", 1);
      state.tokens.push(token);
      for (i = 0, l = list.length; i < l; i++) {
        token = new state.Token("footnote_open", "", 1);
        token.meta = {
          id: i,
          label: list[i].label
        };
        state.tokens.push(token);
        if (list[i].tokens) {
          tokens = [];
          token = new state.Token("paragraph_open", "p", 1);
          token.block = true;
          tokens.push(token);
          token = new state.Token("inline", "", 0);
          token.children = list[i].tokens;
          token.content = list[i].content;
          tokens.push(token);
          token = new state.Token("paragraph_close", "p", -1);
          token.block = true;
          tokens.push(token);
        } else if (list[i].label) {
          tokens = refTokens[":" + list[i].label];
        }
        state.tokens = state.tokens.concat(tokens);
        if (state.tokens[state.tokens.length - 1].type === "paragraph_close") {
          lastParagraph = state.tokens.pop();
        } else {
          lastParagraph = null;
        }
        t = list[i].count > 0 ? list[i].count : 1;
        for (j = 0; j < t; j++) {
          token = new state.Token("footnote_anchor", "", 0);
          token.meta = {
            id: i,
            subId: j,
            label: list[i].label
          };
          state.tokens.push(token);
        }
        if (lastParagraph) {
          state.tokens.push(lastParagraph);
        }
        token = new state.Token("footnote_close", "", -1);
        state.tokens.push(token);
      }
      token = new state.Token("footnote_block_close", "", -1);
      state.tokens.push(token);
    }
    md.block.ruler.before("reference", "footnote_def", footnote_def, {
      alt: [ "paragraph", "reference" ]
    });
    md.inline.ruler.after("image", "footnote_inline", footnote_inline);
    md.inline.ruler.after("footnote_inline", "footnote_ref", footnote_ref);
    md.core.ruler.after("inline", "footnote_tail", footnote_tail);
  };
  // Process definition lists
    var markdownItDeflist = function deflist_plugin(md) {
    var isSpace = md.utils.isSpace;
    // Search `[:~][\n ]`, returns next pos after marker on success
    // or -1 on fail.
        function skipMarker(state, line) {
      var pos, marker, start = state.bMarks[line] + state.tShift[line], max = state.eMarks[line];
      if (start >= max) {
        return -1;
      }
      // Check bullet
            marker = state.src.charCodeAt(start++);
      if (marker !== 126 /* ~ */ && marker !== 58 /* : */) {
        return -1;
      }
      pos = state.skipSpaces(start);
      // require space after ":"
            if (start === pos) {
        return -1;
      }
      // no empty definitions, e.g. "  : "
            if (pos >= max) {
        return -1;
      }
      return start;
    }
    function markTightParagraphs(state, idx) {
      var i, l, level = state.level + 2;
      for (i = idx + 2, l = state.tokens.length - 2; i < l; i++) {
        if (state.tokens[i].level === level && state.tokens[i].type === "paragraph_open") {
          state.tokens[i + 2].hidden = true;
          state.tokens[i].hidden = true;
          i += 2;
        }
      }
    }
    function deflist(state, startLine, endLine, silent) {
      var ch, contentStart, ddLine, dtLine, itemLines, listLines, listTokIdx, max, nextLine, offset, oldDDIndent, oldIndent, oldParentType, oldSCount, oldTShift, oldTight, pos, prevEmptyEnd, tight, token;
      if (silent) {
        // quirk: validation mode validates a dd block only, not a whole deflist
        if (state.ddIndent < 0) {
          return false;
        }
        return skipMarker(state, startLine) >= 0;
      }
      nextLine = startLine + 1;
      if (nextLine >= endLine) {
        return false;
      }
      if (state.isEmpty(nextLine)) {
        nextLine++;
        if (nextLine >= endLine) {
          return false;
        }
      }
      if (state.sCount[nextLine] < state.blkIndent) {
        return false;
      }
      contentStart = skipMarker(state, nextLine);
      if (contentStart < 0) {
        return false;
      }
      // Start list
            listTokIdx = state.tokens.length;
      tight = true;
      token = state.push("dl_open", "dl", 1);
      token.map = listLines = [ startLine, 0 ];
      
      // Iterate list items
      
            dtLine = startLine;
      ddLine = nextLine;
      // One definition list can contain multiple DTs,
      // and one DT can be followed by multiple DDs.
      
      // Thus, there is two loops here, and label is
      // needed to break out of the second one
      
      /*eslint no-labels:0,block-scoped-var:0*/      OUTER: for (;;) {
        prevEmptyEnd = false;
        token = state.push("dt_open", "dt", 1);
        token.map = [ dtLine, dtLine ];
        token = state.push("inline", "", 0);
        token.map = [ dtLine, dtLine ];
        token.content = state.getLines(dtLine, dtLine + 1, state.blkIndent, false).trim();
        token.children = [];
        token = state.push("dt_close", "dt", -1);
        for (;;) {
          token = state.push("dd_open", "dd", 1);
          token.map = itemLines = [ nextLine, 0 ];
          pos = contentStart;
          max = state.eMarks[ddLine];
          offset = state.sCount[ddLine] + contentStart - (state.bMarks[ddLine] + state.tShift[ddLine]);
          while (pos < max) {
            ch = state.src.charCodeAt(pos);
            if (isSpace(ch)) {
              if (ch === 9) {
                offset += 4 - offset % 4;
              } else {
                offset++;
              }
            } else {
              break;
            }
            pos++;
          }
          contentStart = pos;
          oldTight = state.tight;
          oldDDIndent = state.ddIndent;
          oldIndent = state.blkIndent;
          oldTShift = state.tShift[ddLine];
          oldSCount = state.sCount[ddLine];
          oldParentType = state.parentType;
          state.blkIndent = state.ddIndent = state.sCount[ddLine] + 2;
          state.tShift[ddLine] = contentStart - state.bMarks[ddLine];
          state.sCount[ddLine] = offset;
          state.tight = true;
          state.parentType = "deflist";
          state.md.block.tokenize(state, ddLine, endLine, true);
          // If any of list item is tight, mark list as tight
                    if (!state.tight || prevEmptyEnd) {
            tight = false;
          }
          // Item become loose if finish with empty line,
          // but we should filter last element, because it means list finish
                    prevEmptyEnd = state.line - ddLine > 1 && state.isEmpty(state.line - 1);
          state.tShift[ddLine] = oldTShift;
          state.sCount[ddLine] = oldSCount;
          state.tight = oldTight;
          state.parentType = oldParentType;
          state.blkIndent = oldIndent;
          state.ddIndent = oldDDIndent;
          token = state.push("dd_close", "dd", -1);
          itemLines[1] = nextLine = state.line;
          if (nextLine >= endLine) {
            break OUTER;
          }
          if (state.sCount[nextLine] < state.blkIndent) {
            break OUTER;
          }
          contentStart = skipMarker(state, nextLine);
          if (contentStart < 0) {
            break;
          }
          ddLine = nextLine;
          // go to the next loop iteration:
          // insert DD tag and repeat checking
                }
        if (nextLine >= endLine) {
          break;
        }
        dtLine = nextLine;
        if (state.isEmpty(dtLine)) {
          break;
        }
        if (state.sCount[dtLine] < state.blkIndent) {
          break;
        }
        ddLine = dtLine + 1;
        if (ddLine >= endLine) {
          break;
        }
        if (state.isEmpty(ddLine)) {
          ddLine++;
        }
        if (ddLine >= endLine) {
          break;
        }
        if (state.sCount[ddLine] < state.blkIndent) {
          break;
        }
        contentStart = skipMarker(state, ddLine);
        if (contentStart < 0) {
          break;
        }
        // go to the next loop iteration:
        // insert DT and DD tags and repeat checking
            }
      // Finilize list
            token = state.push("dl_close", "dl", -1);
      listLines[1] = nextLine;
      state.line = nextLine;
      // mark paragraphs tight if needed
            if (tight) {
        markTightParagraphs(state, listTokIdx);
      }
      return true;
    }
    md.block.ruler.before("paragraph", "deflist", deflist, {
      alt: [ "paragraph", "reference", "blockquote" ]
    });
  };
  // Enclose abbreviations in <abbr> tags
    var markdownItAbbr = function sub_plugin(md) {
    var escapeRE = md.utils.escapeRE, arrayReplaceAt = md.utils.arrayReplaceAt;
    // ASCII characters in Cc, Sc, Sm, Sk categories we should terminate on;
    // you can check character classes here:
    // http://www.unicode.org/Public/UNIDATA/UnicodeData.txt
        var OTHER_CHARS = " \r\n$+<=>^`|~";
    var UNICODE_PUNCT_RE = md.utils.lib.ucmicro.P.source;
    var UNICODE_SPACE_RE = md.utils.lib.ucmicro.Z.source;
    function abbr_def(state, startLine, endLine, silent) {
      var label, title, ch, labelStart, labelEnd, pos = state.bMarks[startLine] + state.tShift[startLine], max = state.eMarks[startLine];
      if (pos + 2 >= max) {
        return false;
      }
      if (state.src.charCodeAt(pos++) !== 42 /* * */) {
        return false;
      }
      if (state.src.charCodeAt(pos++) !== 91 /* [ */) {
        return false;
      }
      labelStart = pos;
      for (;pos < max; pos++) {
        ch = state.src.charCodeAt(pos);
        if (ch === 91 /* [ */) {
          return false;
        } else if (ch === 93 /* ] */) {
          labelEnd = pos;
          break;
        } else if (ch === 92 /* \ */) {
          pos++;
        }
      }
      if (labelEnd < 0 || state.src.charCodeAt(labelEnd + 1) !== 58 /* : */) {
        return false;
      }
      if (silent) {
        return true;
      }
      label = state.src.slice(labelStart, labelEnd).replace(/\\(.)/g, "$1");
      title = state.src.slice(labelEnd + 2, max).trim();
      if (label.length === 0) {
        return false;
      }
      if (title.length === 0) {
        return false;
      }
      if (!state.env.abbreviations) {
        state.env.abbreviations = {};
      }
      // prepend ':' to avoid conflict with Object.prototype members
            if (typeof state.env.abbreviations[":" + label] === "undefined") {
        state.env.abbreviations[":" + label] = title;
      }
      state.line = startLine + 1;
      return true;
    }
    function abbr_replace(state) {
      var i, j, l, tokens, token, text, nodes, pos, reg, m, regText, regSimple, currentToken, blockTokens = state.tokens;
      if (!state.env.abbreviations) {
        return;
      }
      regSimple = new RegExp("(?:" + Object.keys(state.env.abbreviations).map((function(x) {
        return x.substr(1);
      })).sort((function(a, b) {
        return b.length - a.length;
      })).map(escapeRE).join("|") + ")");
      regText = "(^|" + UNICODE_PUNCT_RE + "|" + UNICODE_SPACE_RE + "|[" + OTHER_CHARS.split("").map(escapeRE).join("") + "])" + "(" + Object.keys(state.env.abbreviations).map((function(x) {
        return x.substr(1);
      })).sort((function(a, b) {
        return b.length - a.length;
      })).map(escapeRE).join("|") + ")" + "($|" + UNICODE_PUNCT_RE + "|" + UNICODE_SPACE_RE + "|[" + OTHER_CHARS.split("").map(escapeRE).join("") + "])";
      reg = new RegExp(regText, "g");
      for (j = 0, l = blockTokens.length; j < l; j++) {
        if (blockTokens[j].type !== "inline") {
          continue;
        }
        tokens = blockTokens[j].children;
        // We scan from the end, to keep position when new tags added.
                for (i = tokens.length - 1; i >= 0; i--) {
          currentToken = tokens[i];
          if (currentToken.type !== "text") {
            continue;
          }
          pos = 0;
          text = currentToken.content;
          reg.lastIndex = 0;
          nodes = [];
          // fast regexp run to determine whether there are any abbreviated words
          // in the current token
                    if (!regSimple.test(text)) {
            continue;
          }
          while (m = reg.exec(text)) {
            if (m.index > 0 || m[1].length > 0) {
              token = new state.Token("text", "", 0);
              token.content = text.slice(pos, m.index + m[1].length);
              nodes.push(token);
            }
            token = new state.Token("abbr_open", "abbr", 1);
            token.attrs = [ [ "title", state.env.abbreviations[":" + m[2]] ] ];
            nodes.push(token);
            token = new state.Token("text", "", 0);
            token.content = m[2];
            nodes.push(token);
            token = new state.Token("abbr_close", "abbr", -1);
            nodes.push(token);
            reg.lastIndex -= m[3].length;
            pos = reg.lastIndex;
          }
          if (!nodes.length) {
            continue;
          }
          if (pos < text.length) {
            token = new state.Token("text", "", 0);
            token.content = text.slice(pos);
            nodes.push(token);
          }
          // replace current node
                    blockTokens[j].children = tokens = arrayReplaceAt(tokens, i, nodes);
        }
      }
    }
    md.block.ruler.before("reference", "abbr_def", abbr_def, {
      alt: [ "paragraph", "reference" ]
    });
    md.core.ruler.after("linkify", "abbr_replace", abbr_replace);
  };
  var grinning = "\ud83d\ude00";
  var smiley = "\ud83d\ude03";
  var smile$1 = "\ud83d\ude04";
  var grin = "\ud83d\ude01";
  var laughing = "\ud83d\ude06";
  var satisfied = "\ud83d\ude06";
  var sweat_smile = "\ud83d\ude05";
  var rofl = "\ud83e\udd23";
  var joy = "\ud83d\ude02";
  var slightly_smiling_face = "\ud83d\ude42";
  var upside_down_face = "\ud83d\ude43";
  var wink = "\ud83d\ude09";
  var blush = "\ud83d\ude0a";
  var innocent = "\ud83d\ude07";
  var smiling_face_with_three_hearts = "\ud83e\udd70";
  var heart_eyes = "\ud83d\ude0d";
  var star_struck = "\ud83e\udd29";
  var kissing_heart = "\ud83d\ude18";
  var kissing = "\ud83d\ude17";
  var relaxed = "\u263a\ufe0f";
  var kissing_closed_eyes = "\ud83d\ude1a";
  var kissing_smiling_eyes = "\ud83d\ude19";
  var smiling_face_with_tear = "\ud83e\udd72";
  var yum = "\ud83d\ude0b";
  var stuck_out_tongue = "\ud83d\ude1b";
  var stuck_out_tongue_winking_eye = "\ud83d\ude1c";
  var zany_face = "\ud83e\udd2a";
  var stuck_out_tongue_closed_eyes = "\ud83d\ude1d";
  var money_mouth_face = "\ud83e\udd11";
  var hugs = "\ud83e\udd17";
  var hand_over_mouth = "\ud83e\udd2d";
  var shushing_face = "\ud83e\udd2b";
  var thinking = "\ud83e\udd14";
  var zipper_mouth_face = "\ud83e\udd10";
  var raised_eyebrow = "\ud83e\udd28";
  var neutral_face = "\ud83d\ude10";
  var expressionless = "\ud83d\ude11";
  var no_mouth = "\ud83d\ude36";
  var smirk = "\ud83d\ude0f";
  var unamused = "\ud83d\ude12";
  var roll_eyes = "\ud83d\ude44";
  var grimacing = "\ud83d\ude2c";
  var lying_face = "\ud83e\udd25";
  var relieved = "\ud83d\ude0c";
  var pensive = "\ud83d\ude14";
  var sleepy = "\ud83d\ude2a";
  var drooling_face = "\ud83e\udd24";
  var sleeping = "\ud83d\ude34";
  var mask = "\ud83d\ude37";
  var face_with_thermometer = "\ud83e\udd12";
  var face_with_head_bandage = "\ud83e\udd15";
  var nauseated_face = "\ud83e\udd22";
  var vomiting_face = "\ud83e\udd2e";
  var sneezing_face = "\ud83e\udd27";
  var hot_face = "\ud83e\udd75";
  var cold_face = "\ud83e\udd76";
  var woozy_face = "\ud83e\udd74";
  var dizzy_face = "\ud83d\ude35";
  var exploding_head = "\ud83e\udd2f";
  var cowboy_hat_face = "\ud83e\udd20";
  var partying_face = "\ud83e\udd73";
  var disguised_face = "\ud83e\udd78";
  var sunglasses = "\ud83d\ude0e";
  var nerd_face = "\ud83e\udd13";
  var monocle_face = "\ud83e\uddd0";
  var confused = "\ud83d\ude15";
  var worried = "\ud83d\ude1f";
  var slightly_frowning_face = "\ud83d\ude41";
  var frowning_face = "\u2639\ufe0f";
  var open_mouth = "\ud83d\ude2e";
  var hushed = "\ud83d\ude2f";
  var astonished = "\ud83d\ude32";
  var flushed = "\ud83d\ude33";
  var pleading_face = "\ud83e\udd7a";
  var frowning = "\ud83d\ude26";
  var anguished = "\ud83d\ude27";
  var fearful = "\ud83d\ude28";
  var cold_sweat = "\ud83d\ude30";
  var disappointed_relieved = "\ud83d\ude25";
  var cry = "\ud83d\ude22";
  var sob = "\ud83d\ude2d";
  var scream = "\ud83d\ude31";
  var confounded = "\ud83d\ude16";
  var persevere = "\ud83d\ude23";
  var disappointed = "\ud83d\ude1e";
  var sweat = "\ud83d\ude13";
  var weary = "\ud83d\ude29";
  var tired_face = "\ud83d\ude2b";
  var yawning_face = "\ud83e\udd71";
  var triumph = "\ud83d\ude24";
  var rage = "\ud83d\ude21";
  var pout = "\ud83d\ude21";
  var angry = "\ud83d\ude20";
  var cursing_face = "\ud83e\udd2c";
  var smiling_imp = "\ud83d\ude08";
  var imp = "\ud83d\udc7f";
  var skull = "\ud83d\udc80";
  var skull_and_crossbones = "\u2620\ufe0f";
  var hankey = "\ud83d\udca9";
  var poop = "\ud83d\udca9";
  var shit = "\ud83d\udca9";
  var clown_face = "\ud83e\udd21";
  var japanese_ogre = "\ud83d\udc79";
  var japanese_goblin = "\ud83d\udc7a";
  var ghost = "\ud83d\udc7b";
  var alien = "\ud83d\udc7d";
  var space_invader = "\ud83d\udc7e";
  var robot = "\ud83e\udd16";
  var smiley_cat = "\ud83d\ude3a";
  var smile_cat = "\ud83d\ude38";
  var joy_cat = "\ud83d\ude39";
  var heart_eyes_cat = "\ud83d\ude3b";
  var smirk_cat = "\ud83d\ude3c";
  var kissing_cat = "\ud83d\ude3d";
  var scream_cat = "\ud83d\ude40";
  var crying_cat_face = "\ud83d\ude3f";
  var pouting_cat = "\ud83d\ude3e";
  var see_no_evil = "\ud83d\ude48";
  var hear_no_evil = "\ud83d\ude49";
  var speak_no_evil = "\ud83d\ude4a";
  var kiss = "\ud83d\udc8b";
  var love_letter = "\ud83d\udc8c";
  var cupid = "\ud83d\udc98";
  var gift_heart = "\ud83d\udc9d";
  var sparkling_heart = "\ud83d\udc96";
  var heartpulse = "\ud83d\udc97";
  var heartbeat = "\ud83d\udc93";
  var revolving_hearts = "\ud83d\udc9e";
  var two_hearts = "\ud83d\udc95";
  var heart_decoration = "\ud83d\udc9f";
  var heavy_heart_exclamation = "\u2763\ufe0f";
  var broken_heart = "\ud83d\udc94";
  var heart = "\u2764\ufe0f";
  var orange_heart = "\ud83e\udde1";
  var yellow_heart = "\ud83d\udc9b";
  var green_heart = "\ud83d\udc9a";
  var blue_heart = "\ud83d\udc99";
  var purple_heart = "\ud83d\udc9c";
  var brown_heart = "\ud83e\udd0e";
  var black_heart = "\ud83d\udda4";
  var white_heart = "\ud83e\udd0d";
  var anger = "\ud83d\udca2";
  var boom = "\ud83d\udca5";
  var collision = "\ud83d\udca5";
  var dizzy = "\ud83d\udcab";
  var sweat_drops = "\ud83d\udca6";
  var dash$1 = "\ud83d\udca8";
  var hole = "\ud83d\udd73\ufe0f";
  var bomb = "\ud83d\udca3";
  var speech_balloon = "\ud83d\udcac";
  var eye_speech_bubble = "\ud83d\udc41\ufe0f\u200d\ud83d\udde8\ufe0f";
  var left_speech_bubble = "\ud83d\udde8\ufe0f";
  var right_anger_bubble = "\ud83d\uddef\ufe0f";
  var thought_balloon = "\ud83d\udcad";
  var zzz = "\ud83d\udca4";
  var wave = "\ud83d\udc4b";
  var raised_back_of_hand = "\ud83e\udd1a";
  var raised_hand_with_fingers_splayed = "\ud83d\udd90\ufe0f";
  var hand = "\u270b";
  var raised_hand = "\u270b";
  var vulcan_salute = "\ud83d\udd96";
  var ok_hand = "\ud83d\udc4c";
  var pinched_fingers = "\ud83e\udd0c";
  var pinching_hand = "\ud83e\udd0f";
  var v = "\u270c\ufe0f";
  var crossed_fingers = "\ud83e\udd1e";
  var love_you_gesture = "\ud83e\udd1f";
  var metal = "\ud83e\udd18";
  var call_me_hand = "\ud83e\udd19";
  var point_left = "\ud83d\udc48";
  var point_right = "\ud83d\udc49";
  var point_up_2 = "\ud83d\udc46";
  var middle_finger = "\ud83d\udd95";
  var fu = "\ud83d\udd95";
  var point_down = "\ud83d\udc47";
  var point_up = "\u261d\ufe0f";
  var thumbsup = "\ud83d\udc4d";
  var thumbsdown = "\ud83d\udc4e";
  var fist_raised = "\u270a";
  var fist = "\u270a";
  var fist_oncoming = "\ud83d\udc4a";
  var facepunch = "\ud83d\udc4a";
  var punch = "\ud83d\udc4a";
  var fist_left = "\ud83e\udd1b";
  var fist_right = "\ud83e\udd1c";
  var clap = "\ud83d\udc4f";
  var raised_hands = "\ud83d\ude4c";
  var open_hands = "\ud83d\udc50";
  var palms_up_together = "\ud83e\udd32";
  var handshake = "\ud83e\udd1d";
  var pray = "\ud83d\ude4f";
  var writing_hand = "\u270d\ufe0f";
  var nail_care = "\ud83d\udc85";
  var selfie = "\ud83e\udd33";
  var muscle = "\ud83d\udcaa";
  var mechanical_arm = "\ud83e\uddbe";
  var mechanical_leg = "\ud83e\uddbf";
  var leg$1 = "\ud83e\uddb5";
  var foot = "\ud83e\uddb6";
  var ear = "\ud83d\udc42";
  var ear_with_hearing_aid = "\ud83e\uddbb";
  var nose = "\ud83d\udc43";
  var brain = "\ud83e\udde0";
  var anatomical_heart = "\ud83e\udec0";
  var lungs = "\ud83e\udec1";
  var tooth = "\ud83e\uddb7";
  var bone = "\ud83e\uddb4";
  var eyes = "\ud83d\udc40";
  var eye = "\ud83d\udc41\ufe0f";
  var tongue = "\ud83d\udc45";
  var lips = "\ud83d\udc44";
  var baby = "\ud83d\udc76";
  var child = "\ud83e\uddd2";
  var boy = "\ud83d\udc66";
  var girl = "\ud83d\udc67";
  var adult = "\ud83e\uddd1";
  var blond_haired_person = "\ud83d\udc71";
  var man = "\ud83d\udc68";
  var bearded_person = "\ud83e\uddd4";
  var red_haired_man = "\ud83d\udc68\u200d\ud83e\uddb0";
  var curly_haired_man = "\ud83d\udc68\u200d\ud83e\uddb1";
  var white_haired_man = "\ud83d\udc68\u200d\ud83e\uddb3";
  var bald_man = "\ud83d\udc68\u200d\ud83e\uddb2";
  var woman = "\ud83d\udc69";
  var red_haired_woman = "\ud83d\udc69\u200d\ud83e\uddb0";
  var person_red_hair = "\ud83e\uddd1\u200d\ud83e\uddb0";
  var curly_haired_woman = "\ud83d\udc69\u200d\ud83e\uddb1";
  var person_curly_hair = "\ud83e\uddd1\u200d\ud83e\uddb1";
  var white_haired_woman = "\ud83d\udc69\u200d\ud83e\uddb3";
  var person_white_hair = "\ud83e\uddd1\u200d\ud83e\uddb3";
  var bald_woman = "\ud83d\udc69\u200d\ud83e\uddb2";
  var person_bald = "\ud83e\uddd1\u200d\ud83e\uddb2";
  var blond_haired_woman = "\ud83d\udc71\u200d\u2640\ufe0f";
  var blonde_woman = "\ud83d\udc71\u200d\u2640\ufe0f";
  var blond_haired_man = "\ud83d\udc71\u200d\u2642\ufe0f";
  var older_adult = "\ud83e\uddd3";
  var older_man = "\ud83d\udc74";
  var older_woman = "\ud83d\udc75";
  var frowning_person = "\ud83d\ude4d";
  var frowning_man = "\ud83d\ude4d\u200d\u2642\ufe0f";
  var frowning_woman = "\ud83d\ude4d\u200d\u2640\ufe0f";
  var pouting_face = "\ud83d\ude4e";
  var pouting_man = "\ud83d\ude4e\u200d\u2642\ufe0f";
  var pouting_woman = "\ud83d\ude4e\u200d\u2640\ufe0f";
  var no_good = "\ud83d\ude45";
  var no_good_man = "\ud83d\ude45\u200d\u2642\ufe0f";
  var ng_man = "\ud83d\ude45\u200d\u2642\ufe0f";
  var no_good_woman = "\ud83d\ude45\u200d\u2640\ufe0f";
  var ng_woman = "\ud83d\ude45\u200d\u2640\ufe0f";
  var ok_person = "\ud83d\ude46";
  var ok_man = "\ud83d\ude46\u200d\u2642\ufe0f";
  var ok_woman = "\ud83d\ude46\u200d\u2640\ufe0f";
  var tipping_hand_person = "\ud83d\udc81";
  var information_desk_person = "\ud83d\udc81";
  var tipping_hand_man = "\ud83d\udc81\u200d\u2642\ufe0f";
  var sassy_man = "\ud83d\udc81\u200d\u2642\ufe0f";
  var tipping_hand_woman = "\ud83d\udc81\u200d\u2640\ufe0f";
  var sassy_woman = "\ud83d\udc81\u200d\u2640\ufe0f";
  var raising_hand = "\ud83d\ude4b";
  var raising_hand_man = "\ud83d\ude4b\u200d\u2642\ufe0f";
  var raising_hand_woman = "\ud83d\ude4b\u200d\u2640\ufe0f";
  var deaf_person = "\ud83e\uddcf";
  var deaf_man = "\ud83e\uddcf\u200d\u2642\ufe0f";
  var deaf_woman = "\ud83e\uddcf\u200d\u2640\ufe0f";
  var bow = "\ud83d\ude47";
  var bowing_man = "\ud83d\ude47\u200d\u2642\ufe0f";
  var bowing_woman = "\ud83d\ude47\u200d\u2640\ufe0f";
  var facepalm = "\ud83e\udd26";
  var man_facepalming = "\ud83e\udd26\u200d\u2642\ufe0f";
  var woman_facepalming = "\ud83e\udd26\u200d\u2640\ufe0f";
  var shrug = "\ud83e\udd37";
  var man_shrugging = "\ud83e\udd37\u200d\u2642\ufe0f";
  var woman_shrugging = "\ud83e\udd37\u200d\u2640\ufe0f";
  var health_worker = "\ud83e\uddd1\u200d\u2695\ufe0f";
  var man_health_worker = "\ud83d\udc68\u200d\u2695\ufe0f";
  var woman_health_worker = "\ud83d\udc69\u200d\u2695\ufe0f";
  var student = "\ud83e\uddd1\u200d\ud83c\udf93";
  var man_student = "\ud83d\udc68\u200d\ud83c\udf93";
  var woman_student = "\ud83d\udc69\u200d\ud83c\udf93";
  var teacher = "\ud83e\uddd1\u200d\ud83c\udfeb";
  var man_teacher = "\ud83d\udc68\u200d\ud83c\udfeb";
  var woman_teacher = "\ud83d\udc69\u200d\ud83c\udfeb";
  var judge = "\ud83e\uddd1\u200d\u2696\ufe0f";
  var man_judge = "\ud83d\udc68\u200d\u2696\ufe0f";
  var woman_judge = "\ud83d\udc69\u200d\u2696\ufe0f";
  var farmer = "\ud83e\uddd1\u200d\ud83c\udf3e";
  var man_farmer = "\ud83d\udc68\u200d\ud83c\udf3e";
  var woman_farmer = "\ud83d\udc69\u200d\ud83c\udf3e";
  var cook = "\ud83e\uddd1\u200d\ud83c\udf73";
  var man_cook = "\ud83d\udc68\u200d\ud83c\udf73";
  var woman_cook = "\ud83d\udc69\u200d\ud83c\udf73";
  var mechanic = "\ud83e\uddd1\u200d\ud83d\udd27";
  var man_mechanic = "\ud83d\udc68\u200d\ud83d\udd27";
  var woman_mechanic = "\ud83d\udc69\u200d\ud83d\udd27";
  var factory_worker = "\ud83e\uddd1\u200d\ud83c\udfed";
  var man_factory_worker = "\ud83d\udc68\u200d\ud83c\udfed";
  var woman_factory_worker = "\ud83d\udc69\u200d\ud83c\udfed";
  var office_worker = "\ud83e\uddd1\u200d\ud83d\udcbc";
  var man_office_worker = "\ud83d\udc68\u200d\ud83d\udcbc";
  var woman_office_worker = "\ud83d\udc69\u200d\ud83d\udcbc";
  var scientist = "\ud83e\uddd1\u200d\ud83d\udd2c";
  var man_scientist = "\ud83d\udc68\u200d\ud83d\udd2c";
  var woman_scientist = "\ud83d\udc69\u200d\ud83d\udd2c";
  var technologist = "\ud83e\uddd1\u200d\ud83d\udcbb";
  var man_technologist = "\ud83d\udc68\u200d\ud83d\udcbb";
  var woman_technologist = "\ud83d\udc69\u200d\ud83d\udcbb";
  var singer = "\ud83e\uddd1\u200d\ud83c\udfa4";
  var man_singer = "\ud83d\udc68\u200d\ud83c\udfa4";
  var woman_singer = "\ud83d\udc69\u200d\ud83c\udfa4";
  var artist = "\ud83e\uddd1\u200d\ud83c\udfa8";
  var man_artist = "\ud83d\udc68\u200d\ud83c\udfa8";
  var woman_artist = "\ud83d\udc69\u200d\ud83c\udfa8";
  var pilot = "\ud83e\uddd1\u200d\u2708\ufe0f";
  var man_pilot = "\ud83d\udc68\u200d\u2708\ufe0f";
  var woman_pilot = "\ud83d\udc69\u200d\u2708\ufe0f";
  var astronaut = "\ud83e\uddd1\u200d\ud83d\ude80";
  var man_astronaut = "\ud83d\udc68\u200d\ud83d\ude80";
  var woman_astronaut = "\ud83d\udc69\u200d\ud83d\ude80";
  var firefighter = "\ud83e\uddd1\u200d\ud83d\ude92";
  var man_firefighter = "\ud83d\udc68\u200d\ud83d\ude92";
  var woman_firefighter = "\ud83d\udc69\u200d\ud83d\ude92";
  var police_officer = "\ud83d\udc6e";
  var cop = "\ud83d\udc6e";
  var policeman = "\ud83d\udc6e\u200d\u2642\ufe0f";
  var policewoman = "\ud83d\udc6e\u200d\u2640\ufe0f";
  var detective = "\ud83d\udd75\ufe0f";
  var male_detective = "\ud83d\udd75\ufe0f\u200d\u2642\ufe0f";
  var female_detective = "\ud83d\udd75\ufe0f\u200d\u2640\ufe0f";
  var guard = "\ud83d\udc82";
  var guardsman = "\ud83d\udc82\u200d\u2642\ufe0f";
  var guardswoman = "\ud83d\udc82\u200d\u2640\ufe0f";
  var ninja = "\ud83e\udd77";
  var construction_worker = "\ud83d\udc77";
  var construction_worker_man = "\ud83d\udc77\u200d\u2642\ufe0f";
  var construction_worker_woman = "\ud83d\udc77\u200d\u2640\ufe0f";
  var prince = "\ud83e\udd34";
  var princess = "\ud83d\udc78";
  var person_with_turban = "\ud83d\udc73";
  var man_with_turban = "\ud83d\udc73\u200d\u2642\ufe0f";
  var woman_with_turban = "\ud83d\udc73\u200d\u2640\ufe0f";
  var man_with_gua_pi_mao = "\ud83d\udc72";
  var woman_with_headscarf = "\ud83e\uddd5";
  var person_in_tuxedo = "\ud83e\udd35";
  var man_in_tuxedo = "\ud83e\udd35\u200d\u2642\ufe0f";
  var woman_in_tuxedo = "\ud83e\udd35\u200d\u2640\ufe0f";
  var person_with_veil = "\ud83d\udc70";
  var man_with_veil = "\ud83d\udc70\u200d\u2642\ufe0f";
  var woman_with_veil = "\ud83d\udc70\u200d\u2640\ufe0f";
  var bride_with_veil = "\ud83d\udc70\u200d\u2640\ufe0f";
  var pregnant_woman = "\ud83e\udd30";
  var breast_feeding = "\ud83e\udd31";
  var woman_feeding_baby = "\ud83d\udc69\u200d\ud83c\udf7c";
  var man_feeding_baby = "\ud83d\udc68\u200d\ud83c\udf7c";
  var person_feeding_baby = "\ud83e\uddd1\u200d\ud83c\udf7c";
  var angel = "\ud83d\udc7c";
  var santa = "\ud83c\udf85";
  var mrs_claus = "\ud83e\udd36";
  var mx_claus = "\ud83e\uddd1\u200d\ud83c\udf84";
  var superhero = "\ud83e\uddb8";
  var superhero_man = "\ud83e\uddb8\u200d\u2642\ufe0f";
  var superhero_woman = "\ud83e\uddb8\u200d\u2640\ufe0f";
  var supervillain = "\ud83e\uddb9";
  var supervillain_man = "\ud83e\uddb9\u200d\u2642\ufe0f";
  var supervillain_woman = "\ud83e\uddb9\u200d\u2640\ufe0f";
  var mage = "\ud83e\uddd9";
  var mage_man = "\ud83e\uddd9\u200d\u2642\ufe0f";
  var mage_woman = "\ud83e\uddd9\u200d\u2640\ufe0f";
  var fairy = "\ud83e\uddda";
  var fairy_man = "\ud83e\uddda\u200d\u2642\ufe0f";
  var fairy_woman = "\ud83e\uddda\u200d\u2640\ufe0f";
  var vampire = "\ud83e\udddb";
  var vampire_man = "\ud83e\udddb\u200d\u2642\ufe0f";
  var vampire_woman = "\ud83e\udddb\u200d\u2640\ufe0f";
  var merperson = "\ud83e\udddc";
  var merman = "\ud83e\udddc\u200d\u2642\ufe0f";
  var mermaid = "\ud83e\udddc\u200d\u2640\ufe0f";
  var elf = "\ud83e\udddd";
  var elf_man = "\ud83e\udddd\u200d\u2642\ufe0f";
  var elf_woman = "\ud83e\udddd\u200d\u2640\ufe0f";
  var genie = "\ud83e\uddde";
  var genie_man = "\ud83e\uddde\u200d\u2642\ufe0f";
  var genie_woman = "\ud83e\uddde\u200d\u2640\ufe0f";
  var zombie = "\ud83e\udddf";
  var zombie_man = "\ud83e\udddf\u200d\u2642\ufe0f";
  var zombie_woman = "\ud83e\udddf\u200d\u2640\ufe0f";
  var massage = "\ud83d\udc86";
  var massage_man = "\ud83d\udc86\u200d\u2642\ufe0f";
  var massage_woman = "\ud83d\udc86\u200d\u2640\ufe0f";
  var haircut = "\ud83d\udc87";
  var haircut_man = "\ud83d\udc87\u200d\u2642\ufe0f";
  var haircut_woman = "\ud83d\udc87\u200d\u2640\ufe0f";
  var walking = "\ud83d\udeb6";
  var walking_man = "\ud83d\udeb6\u200d\u2642\ufe0f";
  var walking_woman = "\ud83d\udeb6\u200d\u2640\ufe0f";
  var standing_person = "\ud83e\uddcd";
  var standing_man = "\ud83e\uddcd\u200d\u2642\ufe0f";
  var standing_woman = "\ud83e\uddcd\u200d\u2640\ufe0f";
  var kneeling_person = "\ud83e\uddce";
  var kneeling_man = "\ud83e\uddce\u200d\u2642\ufe0f";
  var kneeling_woman = "\ud83e\uddce\u200d\u2640\ufe0f";
  var person_with_probing_cane = "\ud83e\uddd1\u200d\ud83e\uddaf";
  var man_with_probing_cane = "\ud83d\udc68\u200d\ud83e\uddaf";
  var woman_with_probing_cane = "\ud83d\udc69\u200d\ud83e\uddaf";
  var person_in_motorized_wheelchair = "\ud83e\uddd1\u200d\ud83e\uddbc";
  var man_in_motorized_wheelchair = "\ud83d\udc68\u200d\ud83e\uddbc";
  var woman_in_motorized_wheelchair = "\ud83d\udc69\u200d\ud83e\uddbc";
  var person_in_manual_wheelchair = "\ud83e\uddd1\u200d\ud83e\uddbd";
  var man_in_manual_wheelchair = "\ud83d\udc68\u200d\ud83e\uddbd";
  var woman_in_manual_wheelchair = "\ud83d\udc69\u200d\ud83e\uddbd";
  var runner = "\ud83c\udfc3";
  var running = "\ud83c\udfc3";
  var running_man = "\ud83c\udfc3\u200d\u2642\ufe0f";
  var running_woman = "\ud83c\udfc3\u200d\u2640\ufe0f";
  var woman_dancing = "\ud83d\udc83";
  var dancer = "\ud83d\udc83";
  var man_dancing = "\ud83d\udd7a";
  var business_suit_levitating = "\ud83d\udd74\ufe0f";
  var dancers = "\ud83d\udc6f";
  var dancing_men = "\ud83d\udc6f\u200d\u2642\ufe0f";
  var dancing_women = "\ud83d\udc6f\u200d\u2640\ufe0f";
  var sauna_person = "\ud83e\uddd6";
  var sauna_man = "\ud83e\uddd6\u200d\u2642\ufe0f";
  var sauna_woman = "\ud83e\uddd6\u200d\u2640\ufe0f";
  var climbing = "\ud83e\uddd7";
  var climbing_man = "\ud83e\uddd7\u200d\u2642\ufe0f";
  var climbing_woman = "\ud83e\uddd7\u200d\u2640\ufe0f";
  var person_fencing = "\ud83e\udd3a";
  var horse_racing = "\ud83c\udfc7";
  var skier = "\u26f7\ufe0f";
  var snowboarder = "\ud83c\udfc2";
  var golfing = "\ud83c\udfcc\ufe0f";
  var golfing_man = "\ud83c\udfcc\ufe0f\u200d\u2642\ufe0f";
  var golfing_woman = "\ud83c\udfcc\ufe0f\u200d\u2640\ufe0f";
  var surfer = "\ud83c\udfc4";
  var surfing_man = "\ud83c\udfc4\u200d\u2642\ufe0f";
  var surfing_woman = "\ud83c\udfc4\u200d\u2640\ufe0f";
  var rowboat = "\ud83d\udea3";
  var rowing_man = "\ud83d\udea3\u200d\u2642\ufe0f";
  var rowing_woman = "\ud83d\udea3\u200d\u2640\ufe0f";
  var swimmer = "\ud83c\udfca";
  var swimming_man = "\ud83c\udfca\u200d\u2642\ufe0f";
  var swimming_woman = "\ud83c\udfca\u200d\u2640\ufe0f";
  var bouncing_ball_person = "\u26f9\ufe0f";
  var bouncing_ball_man = "\u26f9\ufe0f\u200d\u2642\ufe0f";
  var basketball_man = "\u26f9\ufe0f\u200d\u2642\ufe0f";
  var bouncing_ball_woman = "\u26f9\ufe0f\u200d\u2640\ufe0f";
  var basketball_woman = "\u26f9\ufe0f\u200d\u2640\ufe0f";
  var weight_lifting = "\ud83c\udfcb\ufe0f";
  var weight_lifting_man = "\ud83c\udfcb\ufe0f\u200d\u2642\ufe0f";
  var weight_lifting_woman = "\ud83c\udfcb\ufe0f\u200d\u2640\ufe0f";
  var bicyclist = "\ud83d\udeb4";
  var biking_man = "\ud83d\udeb4\u200d\u2642\ufe0f";
  var biking_woman = "\ud83d\udeb4\u200d\u2640\ufe0f";
  var mountain_bicyclist = "\ud83d\udeb5";
  var mountain_biking_man = "\ud83d\udeb5\u200d\u2642\ufe0f";
  var mountain_biking_woman = "\ud83d\udeb5\u200d\u2640\ufe0f";
  var cartwheeling = "\ud83e\udd38";
  var man_cartwheeling = "\ud83e\udd38\u200d\u2642\ufe0f";
  var woman_cartwheeling = "\ud83e\udd38\u200d\u2640\ufe0f";
  var wrestling = "\ud83e\udd3c";
  var men_wrestling = "\ud83e\udd3c\u200d\u2642\ufe0f";
  var women_wrestling = "\ud83e\udd3c\u200d\u2640\ufe0f";
  var water_polo = "\ud83e\udd3d";
  var man_playing_water_polo = "\ud83e\udd3d\u200d\u2642\ufe0f";
  var woman_playing_water_polo = "\ud83e\udd3d\u200d\u2640\ufe0f";
  var handball_person = "\ud83e\udd3e";
  var man_playing_handball = "\ud83e\udd3e\u200d\u2642\ufe0f";
  var woman_playing_handball = "\ud83e\udd3e\u200d\u2640\ufe0f";
  var juggling_person = "\ud83e\udd39";
  var man_juggling = "\ud83e\udd39\u200d\u2642\ufe0f";
  var woman_juggling = "\ud83e\udd39\u200d\u2640\ufe0f";
  var lotus_position = "\ud83e\uddd8";
  var lotus_position_man = "\ud83e\uddd8\u200d\u2642\ufe0f";
  var lotus_position_woman = "\ud83e\uddd8\u200d\u2640\ufe0f";
  var bath = "\ud83d\udec0";
  var sleeping_bed = "\ud83d\udecc";
  var people_holding_hands = "\ud83e\uddd1\u200d\ud83e\udd1d\u200d\ud83e\uddd1";
  var two_women_holding_hands = "\ud83d\udc6d";
  var couple = "\ud83d\udc6b";
  var two_men_holding_hands = "\ud83d\udc6c";
  var couplekiss = "\ud83d\udc8f";
  var couplekiss_man_woman = "\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68";
  var couplekiss_man_man = "\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68";
  var couplekiss_woman_woman = "\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69";
  var couple_with_heart = "\ud83d\udc91";
  var couple_with_heart_woman_man = "\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc68";
  var couple_with_heart_man_man = "\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc68";
  var couple_with_heart_woman_woman = "\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc69";
  var family = "\ud83d\udc6a";
  var family_man_woman_boy = "\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66";
  var family_man_woman_girl = "\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67";
  var family_man_woman_girl_boy = "\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66";
  var family_man_woman_boy_boy = "\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66";
  var family_man_woman_girl_girl = "\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc67";
  var family_man_man_boy = "\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66";
  var family_man_man_girl = "\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67";
  var family_man_man_girl_boy = "\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d\udc66";
  var family_man_man_boy_boy = "\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66";
  var family_man_man_girl_girl = "\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d\udc67";
  var family_woman_woman_boy = "\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66";
  var family_woman_woman_girl = "\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67";
  var family_woman_woman_girl_boy = "\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66";
  var family_woman_woman_boy_boy = "\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66";
  var family_woman_woman_girl_girl = "\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc67";
  var family_man_boy = "\ud83d\udc68\u200d\ud83d\udc66";
  var family_man_boy_boy = "\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66";
  var family_man_girl = "\ud83d\udc68\u200d\ud83d\udc67";
  var family_man_girl_boy = "\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d\udc66";
  var family_man_girl_girl = "\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d\udc67";
  var family_woman_boy = "\ud83d\udc69\u200d\ud83d\udc66";
  var family_woman_boy_boy = "\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66";
  var family_woman_girl = "\ud83d\udc69\u200d\ud83d\udc67";
  var family_woman_girl_boy = "\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66";
  var family_woman_girl_girl = "\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc67";
  var speaking_head = "\ud83d\udde3\ufe0f";
  var bust_in_silhouette = "\ud83d\udc64";
  var busts_in_silhouette = "\ud83d\udc65";
  var people_hugging = "\ud83e\udec2";
  var footprints = "\ud83d\udc63";
  var monkey_face = "\ud83d\udc35";
  var monkey = "\ud83d\udc12";
  var gorilla = "\ud83e\udd8d";
  var orangutan = "\ud83e\udda7";
  var dog = "\ud83d\udc36";
  var dog2 = "\ud83d\udc15";
  var guide_dog = "\ud83e\uddae";
  var service_dog = "\ud83d\udc15\u200d\ud83e\uddba";
  var poodle = "\ud83d\udc29";
  var wolf = "\ud83d\udc3a";
  var fox_face = "\ud83e\udd8a";
  var raccoon = "\ud83e\udd9d";
  var cat = "\ud83d\udc31";
  var cat2 = "\ud83d\udc08";
  var black_cat = "\ud83d\udc08\u200d\u2b1b";
  var lion = "\ud83e\udd81";
  var tiger = "\ud83d\udc2f";
  var tiger2 = "\ud83d\udc05";
  var leopard = "\ud83d\udc06";
  var horse = "\ud83d\udc34";
  var racehorse = "\ud83d\udc0e";
  var unicorn = "\ud83e\udd84";
  var zebra = "\ud83e\udd93";
  var deer = "\ud83e\udd8c";
  var bison = "\ud83e\uddac";
  var cow = "\ud83d\udc2e";
  var ox = "\ud83d\udc02";
  var water_buffalo = "\ud83d\udc03";
  var cow2 = "\ud83d\udc04";
  var pig = "\ud83d\udc37";
  var pig2 = "\ud83d\udc16";
  var boar = "\ud83d\udc17";
  var pig_nose = "\ud83d\udc3d";
  var ram = "\ud83d\udc0f";
  var sheep = "\ud83d\udc11";
  var goat = "\ud83d\udc10";
  var dromedary_camel = "\ud83d\udc2a";
  var camel = "\ud83d\udc2b";
  var llama = "\ud83e\udd99";
  var giraffe = "\ud83e\udd92";
  var elephant = "\ud83d\udc18";
  var mammoth = "\ud83e\udda3";
  var rhinoceros = "\ud83e\udd8f";
  var hippopotamus = "\ud83e\udd9b";
  var mouse = "\ud83d\udc2d";
  var mouse2 = "\ud83d\udc01";
  var rat = "\ud83d\udc00";
  var hamster = "\ud83d\udc39";
  var rabbit = "\ud83d\udc30";
  var rabbit2 = "\ud83d\udc07";
  var chipmunk = "\ud83d\udc3f\ufe0f";
  var beaver = "\ud83e\uddab";
  var hedgehog = "\ud83e\udd94";
  var bat = "\ud83e\udd87";
  var bear = "\ud83d\udc3b";
  var polar_bear = "\ud83d\udc3b\u200d\u2744\ufe0f";
  var koala = "\ud83d\udc28";
  var panda_face = "\ud83d\udc3c";
  var sloth = "\ud83e\udda5";
  var otter = "\ud83e\udda6";
  var skunk = "\ud83e\udda8";
  var kangaroo = "\ud83e\udd98";
  var badger = "\ud83e\udda1";
  var feet = "\ud83d\udc3e";
  var paw_prints = "\ud83d\udc3e";
  var turkey = "\ud83e\udd83";
  var chicken = "\ud83d\udc14";
  var rooster = "\ud83d\udc13";
  var hatching_chick = "\ud83d\udc23";
  var baby_chick = "\ud83d\udc24";
  var hatched_chick = "\ud83d\udc25";
  var bird = "\ud83d\udc26";
  var penguin = "\ud83d\udc27";
  var dove = "\ud83d\udd4a\ufe0f";
  var eagle = "\ud83e\udd85";
  var duck = "\ud83e\udd86";
  var swan = "\ud83e\udda2";
  var owl = "\ud83e\udd89";
  var dodo = "\ud83e\udda4";
  var feather = "\ud83e\udeb6";
  var flamingo = "\ud83e\udda9";
  var peacock = "\ud83e\udd9a";
  var parrot = "\ud83e\udd9c";
  var frog = "\ud83d\udc38";
  var crocodile = "\ud83d\udc0a";
  var turtle = "\ud83d\udc22";
  var lizard = "\ud83e\udd8e";
  var snake = "\ud83d\udc0d";
  var dragon_face = "\ud83d\udc32";
  var dragon = "\ud83d\udc09";
  var sauropod = "\ud83e\udd95";
  var whale = "\ud83d\udc33";
  var whale2 = "\ud83d\udc0b";
  var dolphin = "\ud83d\udc2c";
  var flipper = "\ud83d\udc2c";
  var seal = "\ud83e\uddad";
  var fish = "\ud83d\udc1f";
  var tropical_fish = "\ud83d\udc20";
  var blowfish = "\ud83d\udc21";
  var shark = "\ud83e\udd88";
  var octopus = "\ud83d\udc19";
  var shell = "\ud83d\udc1a";
  var snail = "\ud83d\udc0c";
  var butterfly = "\ud83e\udd8b";
  var bug = "\ud83d\udc1b";
  var ant = "\ud83d\udc1c";
  var bee = "\ud83d\udc1d";
  var honeybee = "\ud83d\udc1d";
  var beetle = "\ud83e\udeb2";
  var lady_beetle = "\ud83d\udc1e";
  var cricket = "\ud83e\udd97";
  var cockroach = "\ud83e\udeb3";
  var spider = "\ud83d\udd77\ufe0f";
  var spider_web = "\ud83d\udd78\ufe0f";
  var scorpion = "\ud83e\udd82";
  var mosquito = "\ud83e\udd9f";
  var fly = "\ud83e\udeb0";
  var worm = "\ud83e\udeb1";
  var microbe = "\ud83e\udda0";
  var bouquet = "\ud83d\udc90";
  var cherry_blossom = "\ud83c\udf38";
  var white_flower = "\ud83d\udcae";
  var rosette = "\ud83c\udff5\ufe0f";
  var rose = "\ud83c\udf39";
  var wilted_flower = "\ud83e\udd40";
  var hibiscus = "\ud83c\udf3a";
  var sunflower = "\ud83c\udf3b";
  var blossom = "\ud83c\udf3c";
  var tulip = "\ud83c\udf37";
  var seedling = "\ud83c\udf31";
  var potted_plant = "\ud83e\udeb4";
  var evergreen_tree = "\ud83c\udf32";
  var deciduous_tree = "\ud83c\udf33";
  var palm_tree = "\ud83c\udf34";
  var cactus = "\ud83c\udf35";
  var ear_of_rice = "\ud83c\udf3e";
  var herb = "\ud83c\udf3f";
  var shamrock = "\u2618\ufe0f";
  var four_leaf_clover = "\ud83c\udf40";
  var maple_leaf = "\ud83c\udf41";
  var fallen_leaf = "\ud83c\udf42";
  var leaves = "\ud83c\udf43";
  var grapes = "\ud83c\udf47";
  var melon = "\ud83c\udf48";
  var watermelon = "\ud83c\udf49";
  var tangerine = "\ud83c\udf4a";
  var orange = "\ud83c\udf4a";
  var mandarin = "\ud83c\udf4a";
  var lemon = "\ud83c\udf4b";
  var banana = "\ud83c\udf4c";
  var pineapple = "\ud83c\udf4d";
  var mango = "\ud83e\udd6d";
  var apple = "\ud83c\udf4e";
  var green_apple = "\ud83c\udf4f";
  var pear = "\ud83c\udf50";
  var peach = "\ud83c\udf51";
  var cherries = "\ud83c\udf52";
  var strawberry = "\ud83c\udf53";
  var blueberries = "\ud83e\uded0";
  var kiwi_fruit = "\ud83e\udd5d";
  var tomato = "\ud83c\udf45";
  var olive = "\ud83e\uded2";
  var coconut = "\ud83e\udd65";
  var avocado = "\ud83e\udd51";
  var eggplant = "\ud83c\udf46";
  var potato = "\ud83e\udd54";
  var carrot = "\ud83e\udd55";
  var corn = "\ud83c\udf3d";
  var hot_pepper = "\ud83c\udf36\ufe0f";
  var bell_pepper = "\ud83e\uded1";
  var cucumber = "\ud83e\udd52";
  var leafy_green = "\ud83e\udd6c";
  var broccoli = "\ud83e\udd66";
  var garlic = "\ud83e\uddc4";
  var onion = "\ud83e\uddc5";
  var mushroom = "\ud83c\udf44";
  var peanuts = "\ud83e\udd5c";
  var chestnut = "\ud83c\udf30";
  var bread = "\ud83c\udf5e";
  var croissant = "\ud83e\udd50";
  var baguette_bread = "\ud83e\udd56";
  var flatbread = "\ud83e\uded3";
  var pretzel = "\ud83e\udd68";
  var bagel = "\ud83e\udd6f";
  var pancakes = "\ud83e\udd5e";
  var waffle = "\ud83e\uddc7";
  var cheese = "\ud83e\uddc0";
  var meat_on_bone = "\ud83c\udf56";
  var poultry_leg = "\ud83c\udf57";
  var cut_of_meat = "\ud83e\udd69";
  var bacon = "\ud83e\udd53";
  var hamburger = "\ud83c\udf54";
  var fries = "\ud83c\udf5f";
  var pizza = "\ud83c\udf55";
  var hotdog = "\ud83c\udf2d";
  var sandwich = "\ud83e\udd6a";
  var taco = "\ud83c\udf2e";
  var burrito = "\ud83c\udf2f";
  var tamale = "\ud83e\uded4";
  var stuffed_flatbread = "\ud83e\udd59";
  var falafel = "\ud83e\uddc6";
  var egg = "\ud83e\udd5a";
  var fried_egg = "\ud83c\udf73";
  var shallow_pan_of_food = "\ud83e\udd58";
  var stew = "\ud83c\udf72";
  var fondue = "\ud83e\uded5";
  var bowl_with_spoon = "\ud83e\udd63";
  var green_salad = "\ud83e\udd57";
  var popcorn = "\ud83c\udf7f";
  var butter = "\ud83e\uddc8";
  var salt = "\ud83e\uddc2";
  var canned_food = "\ud83e\udd6b";
  var bento = "\ud83c\udf71";
  var rice_cracker = "\ud83c\udf58";
  var rice_ball = "\ud83c\udf59";
  var rice = "\ud83c\udf5a";
  var curry = "\ud83c\udf5b";
  var ramen = "\ud83c\udf5c";
  var spaghetti = "\ud83c\udf5d";
  var sweet_potato = "\ud83c\udf60";
  var oden = "\ud83c\udf62";
  var sushi = "\ud83c\udf63";
  var fried_shrimp = "\ud83c\udf64";
  var fish_cake = "\ud83c\udf65";
  var moon_cake = "\ud83e\udd6e";
  var dango = "\ud83c\udf61";
  var dumpling = "\ud83e\udd5f";
  var fortune_cookie = "\ud83e\udd60";
  var takeout_box = "\ud83e\udd61";
  var crab = "\ud83e\udd80";
  var lobster = "\ud83e\udd9e";
  var shrimp = "\ud83e\udd90";
  var squid = "\ud83e\udd91";
  var oyster = "\ud83e\uddaa";
  var icecream = "\ud83c\udf66";
  var shaved_ice = "\ud83c\udf67";
  var ice_cream = "\ud83c\udf68";
  var doughnut = "\ud83c\udf69";
  var cookie = "\ud83c\udf6a";
  var birthday = "\ud83c\udf82";
  var cake = "\ud83c\udf70";
  var cupcake = "\ud83e\uddc1";
  var pie = "\ud83e\udd67";
  var chocolate_bar = "\ud83c\udf6b";
  var candy = "\ud83c\udf6c";
  var lollipop = "\ud83c\udf6d";
  var custard = "\ud83c\udf6e";
  var honey_pot = "\ud83c\udf6f";
  var baby_bottle = "\ud83c\udf7c";
  var milk_glass = "\ud83e\udd5b";
  var coffee = "\u2615";
  var teapot = "\ud83e\uded6";
  var tea = "\ud83c\udf75";
  var sake = "\ud83c\udf76";
  var champagne = "\ud83c\udf7e";
  var wine_glass = "\ud83c\udf77";
  var cocktail = "\ud83c\udf78";
  var tropical_drink = "\ud83c\udf79";
  var beer = "\ud83c\udf7a";
  var beers = "\ud83c\udf7b";
  var clinking_glasses = "\ud83e\udd42";
  var tumbler_glass = "\ud83e\udd43";
  var cup_with_straw = "\ud83e\udd64";
  var bubble_tea = "\ud83e\uddcb";
  var beverage_box = "\ud83e\uddc3";
  var mate = "\ud83e\uddc9";
  var ice_cube = "\ud83e\uddca";
  var chopsticks = "\ud83e\udd62";
  var plate_with_cutlery = "\ud83c\udf7d\ufe0f";
  var fork_and_knife = "\ud83c\udf74";
  var spoon = "\ud83e\udd44";
  var hocho = "\ud83d\udd2a";
  var knife = "\ud83d\udd2a";
  var amphora = "\ud83c\udffa";
  var earth_africa = "\ud83c\udf0d";
  var earth_americas = "\ud83c\udf0e";
  var earth_asia = "\ud83c\udf0f";
  var globe_with_meridians = "\ud83c\udf10";
  var world_map = "\ud83d\uddfa\ufe0f";
  var japan = "\ud83d\uddfe";
  var compass = "\ud83e\udded";
  var mountain_snow = "\ud83c\udfd4\ufe0f";
  var mountain = "\u26f0\ufe0f";
  var volcano = "\ud83c\udf0b";
  var mount_fuji = "\ud83d\uddfb";
  var camping = "\ud83c\udfd5\ufe0f";
  var beach_umbrella = "\ud83c\udfd6\ufe0f";
  var desert = "\ud83c\udfdc\ufe0f";
  var desert_island = "\ud83c\udfdd\ufe0f";
  var national_park = "\ud83c\udfde\ufe0f";
  var stadium = "\ud83c\udfdf\ufe0f";
  var classical_building = "\ud83c\udfdb\ufe0f";
  var building_construction = "\ud83c\udfd7\ufe0f";
  var bricks = "\ud83e\uddf1";
  var rock = "\ud83e\udea8";
  var wood = "\ud83e\udeb5";
  var hut = "\ud83d\uded6";
  var houses = "\ud83c\udfd8\ufe0f";
  var derelict_house = "\ud83c\udfda\ufe0f";
  var house = "\ud83c\udfe0";
  var house_with_garden = "\ud83c\udfe1";
  var office = "\ud83c\udfe2";
  var post_office = "\ud83c\udfe3";
  var european_post_office = "\ud83c\udfe4";
  var hospital = "\ud83c\udfe5";
  var bank = "\ud83c\udfe6";
  var hotel = "\ud83c\udfe8";
  var love_hotel = "\ud83c\udfe9";
  var convenience_store = "\ud83c\udfea";
  var school = "\ud83c\udfeb";
  var department_store = "\ud83c\udfec";
  var factory = "\ud83c\udfed";
  var japanese_castle = "\ud83c\udfef";
  var european_castle = "\ud83c\udff0";
  var wedding = "\ud83d\udc92";
  var tokyo_tower = "\ud83d\uddfc";
  var statue_of_liberty = "\ud83d\uddfd";
  var church = "\u26ea";
  var mosque = "\ud83d\udd4c";
  var hindu_temple = "\ud83d\uded5";
  var synagogue = "\ud83d\udd4d";
  var shinto_shrine = "\u26e9\ufe0f";
  var kaaba = "\ud83d\udd4b";
  var fountain = "\u26f2";
  var tent = "\u26fa";
  var foggy = "\ud83c\udf01";
  var night_with_stars = "\ud83c\udf03";
  var cityscape = "\ud83c\udfd9\ufe0f";
  var sunrise_over_mountains = "\ud83c\udf04";
  var sunrise = "\ud83c\udf05";
  var city_sunset = "\ud83c\udf06";
  var city_sunrise = "\ud83c\udf07";
  var bridge_at_night = "\ud83c\udf09";
  var hotsprings = "\u2668\ufe0f";
  var carousel_horse = "\ud83c\udfa0";
  var ferris_wheel = "\ud83c\udfa1";
  var roller_coaster = "\ud83c\udfa2";
  var barber = "\ud83d\udc88";
  var circus_tent = "\ud83c\udfaa";
  var steam_locomotive = "\ud83d\ude82";
  var railway_car = "\ud83d\ude83";
  var bullettrain_side = "\ud83d\ude84";
  var bullettrain_front = "\ud83d\ude85";
  var train2 = "\ud83d\ude86";
  var metro = "\ud83d\ude87";
  var light_rail = "\ud83d\ude88";
  var station = "\ud83d\ude89";
  var tram = "\ud83d\ude8a";
  var monorail = "\ud83d\ude9d";
  var mountain_railway = "\ud83d\ude9e";
  var train = "\ud83d\ude8b";
  var bus = "\ud83d\ude8c";
  var oncoming_bus = "\ud83d\ude8d";
  var trolleybus = "\ud83d\ude8e";
  var minibus = "\ud83d\ude90";
  var ambulance = "\ud83d\ude91";
  var fire_engine = "\ud83d\ude92";
  var police_car = "\ud83d\ude93";
  var oncoming_police_car = "\ud83d\ude94";
  var taxi = "\ud83d\ude95";
  var oncoming_taxi = "\ud83d\ude96";
  var car = "\ud83d\ude97";
  var red_car = "\ud83d\ude97";
  var oncoming_automobile = "\ud83d\ude98";
  var blue_car = "\ud83d\ude99";
  var pickup_truck = "\ud83d\udefb";
  var truck = "\ud83d\ude9a";
  var articulated_lorry = "\ud83d\ude9b";
  var tractor = "\ud83d\ude9c";
  var racing_car = "\ud83c\udfce\ufe0f";
  var motorcycle = "\ud83c\udfcd\ufe0f";
  var motor_scooter = "\ud83d\udef5";
  var manual_wheelchair = "\ud83e\uddbd";
  var motorized_wheelchair = "\ud83e\uddbc";
  var auto_rickshaw = "\ud83d\udefa";
  var bike = "\ud83d\udeb2";
  var kick_scooter = "\ud83d\udef4";
  var skateboard = "\ud83d\udef9";
  var roller_skate = "\ud83d\udefc";
  var busstop = "\ud83d\ude8f";
  var motorway = "\ud83d\udee3\ufe0f";
  var railway_track = "\ud83d\udee4\ufe0f";
  var oil_drum = "\ud83d\udee2\ufe0f";
  var fuelpump = "\u26fd";
  var rotating_light = "\ud83d\udea8";
  var traffic_light = "\ud83d\udea5";
  var vertical_traffic_light = "\ud83d\udea6";
  var stop_sign = "\ud83d\uded1";
  var construction = "\ud83d\udea7";
  var anchor = "\u2693";
  var boat = "\u26f5";
  var sailboat = "\u26f5";
  var canoe = "\ud83d\udef6";
  var speedboat = "\ud83d\udea4";
  var passenger_ship = "\ud83d\udef3\ufe0f";
  var ferry = "\u26f4\ufe0f";
  var motor_boat = "\ud83d\udee5\ufe0f";
  var ship = "\ud83d\udea2";
  var airplane = "\u2708\ufe0f";
  var small_airplane = "\ud83d\udee9\ufe0f";
  var flight_departure = "\ud83d\udeeb";
  var flight_arrival = "\ud83d\udeec";
  var parachute = "\ud83e\ude82";
  var seat = "\ud83d\udcba";
  var helicopter = "\ud83d\ude81";
  var suspension_railway = "\ud83d\ude9f";
  var mountain_cableway = "\ud83d\udea0";
  var aerial_tramway = "\ud83d\udea1";
  var artificial_satellite = "\ud83d\udef0\ufe0f";
  var rocket = "\ud83d\ude80";
  var flying_saucer = "\ud83d\udef8";
  var bellhop_bell = "\ud83d\udece\ufe0f";
  var luggage = "\ud83e\uddf3";
  var hourglass = "\u231b";
  var hourglass_flowing_sand = "\u23f3";
  var watch = "\u231a";
  var alarm_clock = "\u23f0";
  var stopwatch = "\u23f1\ufe0f";
  var timer_clock = "\u23f2\ufe0f";
  var mantelpiece_clock = "\ud83d\udd70\ufe0f";
  var clock12 = "\ud83d\udd5b";
  var clock1230 = "\ud83d\udd67";
  var clock1 = "\ud83d\udd50";
  var clock130 = "\ud83d\udd5c";
  var clock2 = "\ud83d\udd51";
  var clock230 = "\ud83d\udd5d";
  var clock3 = "\ud83d\udd52";
  var clock330 = "\ud83d\udd5e";
  var clock4 = "\ud83d\udd53";
  var clock430 = "\ud83d\udd5f";
  var clock5 = "\ud83d\udd54";
  var clock530 = "\ud83d\udd60";
  var clock6 = "\ud83d\udd55";
  var clock630 = "\ud83d\udd61";
  var clock7 = "\ud83d\udd56";
  var clock730 = "\ud83d\udd62";
  var clock8 = "\ud83d\udd57";
  var clock830 = "\ud83d\udd63";
  var clock9 = "\ud83d\udd58";
  var clock930 = "\ud83d\udd64";
  var clock10 = "\ud83d\udd59";
  var clock1030 = "\ud83d\udd65";
  var clock11 = "\ud83d\udd5a";
  var clock1130 = "\ud83d\udd66";
  var new_moon = "\ud83c\udf11";
  var waxing_crescent_moon = "\ud83c\udf12";
  var first_quarter_moon = "\ud83c\udf13";
  var moon = "\ud83c\udf14";
  var waxing_gibbous_moon = "\ud83c\udf14";
  var full_moon = "\ud83c\udf15";
  var waning_gibbous_moon = "\ud83c\udf16";
  var last_quarter_moon = "\ud83c\udf17";
  var waning_crescent_moon = "\ud83c\udf18";
  var crescent_moon = "\ud83c\udf19";
  var new_moon_with_face = "\ud83c\udf1a";
  var first_quarter_moon_with_face = "\ud83c\udf1b";
  var last_quarter_moon_with_face = "\ud83c\udf1c";
  var thermometer = "\ud83c\udf21\ufe0f";
  var sunny = "\u2600\ufe0f";
  var full_moon_with_face = "\ud83c\udf1d";
  var sun_with_face = "\ud83c\udf1e";
  var ringed_planet = "\ud83e\ude90";
  var star$1 = "\u2b50";
  var star2 = "\ud83c\udf1f";
  var stars = "\ud83c\udf20";
  var milky_way = "\ud83c\udf0c";
  var cloud = "\u2601\ufe0f";
  var partly_sunny = "\u26c5";
  var cloud_with_lightning_and_rain = "\u26c8\ufe0f";
  var sun_behind_small_cloud = "\ud83c\udf24\ufe0f";
  var sun_behind_large_cloud = "\ud83c\udf25\ufe0f";
  var sun_behind_rain_cloud = "\ud83c\udf26\ufe0f";
  var cloud_with_rain = "\ud83c\udf27\ufe0f";
  var cloud_with_snow = "\ud83c\udf28\ufe0f";
  var cloud_with_lightning = "\ud83c\udf29\ufe0f";
  var tornado = "\ud83c\udf2a\ufe0f";
  var fog = "\ud83c\udf2b\ufe0f";
  var wind_face = "\ud83c\udf2c\ufe0f";
  var cyclone = "\ud83c\udf00";
  var rainbow = "\ud83c\udf08";
  var closed_umbrella = "\ud83c\udf02";
  var open_umbrella = "\u2602\ufe0f";
  var umbrella = "\u2614";
  var parasol_on_ground = "\u26f1\ufe0f";
  var zap = "\u26a1";
  var snowflake = "\u2744\ufe0f";
  var snowman_with_snow = "\u2603\ufe0f";
  var snowman = "\u26c4";
  var comet = "\u2604\ufe0f";
  var fire = "\ud83d\udd25";
  var droplet = "\ud83d\udca7";
  var ocean = "\ud83c\udf0a";
  var jack_o_lantern = "\ud83c\udf83";
  var christmas_tree = "\ud83c\udf84";
  var fireworks = "\ud83c\udf86";
  var sparkler = "\ud83c\udf87";
  var firecracker = "\ud83e\udde8";
  var sparkles = "\u2728";
  var balloon = "\ud83c\udf88";
  var tada = "\ud83c\udf89";
  var confetti_ball = "\ud83c\udf8a";
  var tanabata_tree = "\ud83c\udf8b";
  var bamboo = "\ud83c\udf8d";
  var dolls = "\ud83c\udf8e";
  var flags = "\ud83c\udf8f";
  var wind_chime = "\ud83c\udf90";
  var rice_scene = "\ud83c\udf91";
  var red_envelope = "\ud83e\udde7";
  var ribbon = "\ud83c\udf80";
  var gift = "\ud83c\udf81";
  var reminder_ribbon = "\ud83c\udf97\ufe0f";
  var tickets = "\ud83c\udf9f\ufe0f";
  var ticket = "\ud83c\udfab";
  var medal_military = "\ud83c\udf96\ufe0f";
  var trophy = "\ud83c\udfc6";
  var medal_sports = "\ud83c\udfc5";
  var soccer = "\u26bd";
  var baseball = "\u26be";
  var softball = "\ud83e\udd4e";
  var basketball = "\ud83c\udfc0";
  var volleyball = "\ud83c\udfd0";
  var football = "\ud83c\udfc8";
  var rugby_football = "\ud83c\udfc9";
  var tennis = "\ud83c\udfbe";
  var flying_disc = "\ud83e\udd4f";
  var bowling = "\ud83c\udfb3";
  var cricket_game = "\ud83c\udfcf";
  var field_hockey = "\ud83c\udfd1";
  var ice_hockey = "\ud83c\udfd2";
  var lacrosse = "\ud83e\udd4d";
  var ping_pong = "\ud83c\udfd3";
  var badminton = "\ud83c\udff8";
  var boxing_glove = "\ud83e\udd4a";
  var martial_arts_uniform = "\ud83e\udd4b";
  var goal_net = "\ud83e\udd45";
  var golf = "\u26f3";
  var ice_skate = "\u26f8\ufe0f";
  var fishing_pole_and_fish = "\ud83c\udfa3";
  var diving_mask = "\ud83e\udd3f";
  var running_shirt_with_sash = "\ud83c\udfbd";
  var ski = "\ud83c\udfbf";
  var sled = "\ud83d\udef7";
  var curling_stone = "\ud83e\udd4c";
  var dart = "\ud83c\udfaf";
  var yo_yo = "\ud83e\ude80";
  var kite = "\ud83e\ude81";
  var crystal_ball = "\ud83d\udd2e";
  var magic_wand = "\ud83e\ude84";
  var nazar_amulet = "\ud83e\uddff";
  var video_game = "\ud83c\udfae";
  var joystick = "\ud83d\udd79\ufe0f";
  var slot_machine = "\ud83c\udfb0";
  var game_die = "\ud83c\udfb2";
  var jigsaw = "\ud83e\udde9";
  var teddy_bear = "\ud83e\uddf8";
  var pinata = "\ud83e\ude85";
  var nesting_dolls = "\ud83e\ude86";
  var spades$1 = "\u2660\ufe0f";
  var hearts$1 = "\u2665\ufe0f";
  var diamonds = "\u2666\ufe0f";
  var clubs$1 = "\u2663\ufe0f";
  var chess_pawn = "\u265f\ufe0f";
  var black_joker = "\ud83c\udccf";
  var mahjong = "\ud83c\udc04";
  var flower_playing_cards = "\ud83c\udfb4";
  var performing_arts = "\ud83c\udfad";
  var framed_picture = "\ud83d\uddbc\ufe0f";
  var art = "\ud83c\udfa8";
  var thread = "\ud83e\uddf5";
  var sewing_needle = "\ud83e\udea1";
  var yarn = "\ud83e\uddf6";
  var knot = "\ud83e\udea2";
  var eyeglasses = "\ud83d\udc53";
  var dark_sunglasses = "\ud83d\udd76\ufe0f";
  var goggles = "\ud83e\udd7d";
  var lab_coat = "\ud83e\udd7c";
  var safety_vest = "\ud83e\uddba";
  var necktie = "\ud83d\udc54";
  var shirt = "\ud83d\udc55";
  var tshirt = "\ud83d\udc55";
  var jeans = "\ud83d\udc56";
  var scarf = "\ud83e\udde3";
  var gloves = "\ud83e\udde4";
  var coat = "\ud83e\udde5";
  var socks = "\ud83e\udde6";
  var dress = "\ud83d\udc57";
  var kimono = "\ud83d\udc58";
  var sari = "\ud83e\udd7b";
  var one_piece_swimsuit = "\ud83e\ude71";
  var swim_brief = "\ud83e\ude72";
  var shorts = "\ud83e\ude73";
  var bikini = "\ud83d\udc59";
  var womans_clothes = "\ud83d\udc5a";
  var purse = "\ud83d\udc5b";
  var handbag = "\ud83d\udc5c";
  var pouch = "\ud83d\udc5d";
  var shopping = "\ud83d\udecd\ufe0f";
  var school_satchel = "\ud83c\udf92";
  var thong_sandal = "\ud83e\ude74";
  var mans_shoe = "\ud83d\udc5e";
  var shoe = "\ud83d\udc5e";
  var athletic_shoe = "\ud83d\udc5f";
  var hiking_boot = "\ud83e\udd7e";
  var flat_shoe = "\ud83e\udd7f";
  var high_heel = "\ud83d\udc60";
  var sandal = "\ud83d\udc61";
  var ballet_shoes = "\ud83e\ude70";
  var boot = "\ud83d\udc62";
  var crown = "\ud83d\udc51";
  var womans_hat = "\ud83d\udc52";
  var tophat = "\ud83c\udfa9";
  var mortar_board = "\ud83c\udf93";
  var billed_cap = "\ud83e\udde2";
  var military_helmet = "\ud83e\ude96";
  var rescue_worker_helmet = "\u26d1\ufe0f";
  var prayer_beads = "\ud83d\udcff";
  var lipstick = "\ud83d\udc84";
  var ring$1 = "\ud83d\udc8d";
  var gem = "\ud83d\udc8e";
  var mute = "\ud83d\udd07";
  var speaker = "\ud83d\udd08";
  var sound = "\ud83d\udd09";
  var loud_sound = "\ud83d\udd0a";
  var loudspeaker = "\ud83d\udce2";
  var mega = "\ud83d\udce3";
  var postal_horn = "\ud83d\udcef";
  var bell = "\ud83d\udd14";
  var no_bell = "\ud83d\udd15";
  var musical_score = "\ud83c\udfbc";
  var musical_note = "\ud83c\udfb5";
  var notes = "\ud83c\udfb6";
  var studio_microphone = "\ud83c\udf99\ufe0f";
  var level_slider = "\ud83c\udf9a\ufe0f";
  var control_knobs = "\ud83c\udf9b\ufe0f";
  var microphone = "\ud83c\udfa4";
  var headphones = "\ud83c\udfa7";
  var radio = "\ud83d\udcfb";
  var saxophone = "\ud83c\udfb7";
  var accordion = "\ud83e\ude97";
  var guitar = "\ud83c\udfb8";
  var musical_keyboard = "\ud83c\udfb9";
  var trumpet = "\ud83c\udfba";
  var violin = "\ud83c\udfbb";
  var banjo = "\ud83e\ude95";
  var drum = "\ud83e\udd41";
  var long_drum = "\ud83e\ude98";
  var iphone = "\ud83d\udcf1";
  var calling = "\ud83d\udcf2";
  var phone$1 = "\u260e\ufe0f";
  var telephone = "\u260e\ufe0f";
  var telephone_receiver = "\ud83d\udcde";
  var pager = "\ud83d\udcdf";
  var fax = "\ud83d\udce0";
  var battery = "\ud83d\udd0b";
  var electric_plug = "\ud83d\udd0c";
  var computer = "\ud83d\udcbb";
  var desktop_computer = "\ud83d\udda5\ufe0f";
  var printer = "\ud83d\udda8\ufe0f";
  var keyboard = "\u2328\ufe0f";
  var computer_mouse = "\ud83d\uddb1\ufe0f";
  var trackball = "\ud83d\uddb2\ufe0f";
  var minidisc = "\ud83d\udcbd";
  var floppy_disk = "\ud83d\udcbe";
  var cd = "\ud83d\udcbf";
  var dvd = "\ud83d\udcc0";
  var abacus = "\ud83e\uddee";
  var movie_camera = "\ud83c\udfa5";
  var film_strip = "\ud83c\udf9e\ufe0f";
  var film_projector = "\ud83d\udcfd\ufe0f";
  var clapper = "\ud83c\udfac";
  var tv = "\ud83d\udcfa";
  var camera = "\ud83d\udcf7";
  var camera_flash = "\ud83d\udcf8";
  var video_camera = "\ud83d\udcf9";
  var vhs = "\ud83d\udcfc";
  var mag = "\ud83d\udd0d";
  var mag_right = "\ud83d\udd0e";
  var candle = "\ud83d\udd6f\ufe0f";
  var bulb = "\ud83d\udca1";
  var flashlight = "\ud83d\udd26";
  var izakaya_lantern = "\ud83c\udfee";
  var lantern = "\ud83c\udfee";
  var diya_lamp = "\ud83e\ude94";
  var notebook_with_decorative_cover = "\ud83d\udcd4";
  var closed_book = "\ud83d\udcd5";
  var book = "\ud83d\udcd6";
  var open_book = "\ud83d\udcd6";
  var green_book = "\ud83d\udcd7";
  var blue_book = "\ud83d\udcd8";
  var orange_book = "\ud83d\udcd9";
  var books = "\ud83d\udcda";
  var notebook = "\ud83d\udcd3";
  var ledger = "\ud83d\udcd2";
  var page_with_curl = "\ud83d\udcc3";
  var scroll = "\ud83d\udcdc";
  var page_facing_up = "\ud83d\udcc4";
  var newspaper = "\ud83d\udcf0";
  var newspaper_roll = "\ud83d\uddde\ufe0f";
  var bookmark_tabs = "\ud83d\udcd1";
  var bookmark = "\ud83d\udd16";
  var label = "\ud83c\udff7\ufe0f";
  var moneybag = "\ud83d\udcb0";
  var coin = "\ud83e\ude99";
  var yen$1 = "\ud83d\udcb4";
  var dollar$1 = "\ud83d\udcb5";
  var euro$1 = "\ud83d\udcb6";
  var pound$1 = "\ud83d\udcb7";
  var money_with_wings = "\ud83d\udcb8";
  var credit_card = "\ud83d\udcb3";
  var receipt = "\ud83e\uddfe";
  var chart = "\ud83d\udcb9";
  var envelope = "\u2709\ufe0f";
  var email = "\ud83d\udce7";
  var incoming_envelope = "\ud83d\udce8";
  var envelope_with_arrow = "\ud83d\udce9";
  var outbox_tray = "\ud83d\udce4";
  var inbox_tray = "\ud83d\udce5";
  var mailbox = "\ud83d\udceb";
  var mailbox_closed = "\ud83d\udcea";
  var mailbox_with_mail = "\ud83d\udcec";
  var mailbox_with_no_mail = "\ud83d\udced";
  var postbox = "\ud83d\udcee";
  var ballot_box = "\ud83d\uddf3\ufe0f";
  var pencil2 = "\u270f\ufe0f";
  var black_nib = "\u2712\ufe0f";
  var fountain_pen = "\ud83d\udd8b\ufe0f";
  var pen = "\ud83d\udd8a\ufe0f";
  var paintbrush = "\ud83d\udd8c\ufe0f";
  var crayon = "\ud83d\udd8d\ufe0f";
  var memo = "\ud83d\udcdd";
  var pencil = "\ud83d\udcdd";
  var briefcase = "\ud83d\udcbc";
  var file_folder = "\ud83d\udcc1";
  var open_file_folder = "\ud83d\udcc2";
  var card_index_dividers = "\ud83d\uddc2\ufe0f";
  var date = "\ud83d\udcc5";
  var calendar = "\ud83d\udcc6";
  var spiral_notepad = "\ud83d\uddd2\ufe0f";
  var spiral_calendar = "\ud83d\uddd3\ufe0f";
  var card_index = "\ud83d\udcc7";
  var chart_with_upwards_trend = "\ud83d\udcc8";
  var chart_with_downwards_trend = "\ud83d\udcc9";
  var bar_chart = "\ud83d\udcca";
  var clipboard = "\ud83d\udccb";
  var pushpin = "\ud83d\udccc";
  var round_pushpin = "\ud83d\udccd";
  var paperclip = "\ud83d\udcce";
  var paperclips = "\ud83d\udd87\ufe0f";
  var straight_ruler = "\ud83d\udccf";
  var triangular_ruler = "\ud83d\udcd0";
  var scissors = "\u2702\ufe0f";
  var card_file_box = "\ud83d\uddc3\ufe0f";
  var file_cabinet = "\ud83d\uddc4\ufe0f";
  var wastebasket = "\ud83d\uddd1\ufe0f";
  var lock = "\ud83d\udd12";
  var unlock = "\ud83d\udd13";
  var lock_with_ink_pen = "\ud83d\udd0f";
  var closed_lock_with_key = "\ud83d\udd10";
  var key = "\ud83d\udd11";
  var old_key = "\ud83d\udddd\ufe0f";
  var hammer = "\ud83d\udd28";
  var axe = "\ud83e\ude93";
  var pick = "\u26cf\ufe0f";
  var hammer_and_pick = "\u2692\ufe0f";
  var hammer_and_wrench = "\ud83d\udee0\ufe0f";
  var dagger$1 = "\ud83d\udde1\ufe0f";
  var crossed_swords = "\u2694\ufe0f";
  var gun = "\ud83d\udd2b";
  var boomerang = "\ud83e\ude83";
  var bow_and_arrow = "\ud83c\udff9";
  var shield = "\ud83d\udee1\ufe0f";
  var carpentry_saw = "\ud83e\ude9a";
  var wrench = "\ud83d\udd27";
  var screwdriver = "\ud83e\ude9b";
  var nut_and_bolt = "\ud83d\udd29";
  var gear = "\u2699\ufe0f";
  var clamp = "\ud83d\udddc\ufe0f";
  var balance_scale = "\u2696\ufe0f";
  var probing_cane = "\ud83e\uddaf";
  var link$1 = "\ud83d\udd17";
  var chains = "\u26d3\ufe0f";
  var hook = "\ud83e\ude9d";
  var toolbox = "\ud83e\uddf0";
  var magnet = "\ud83e\uddf2";
  var ladder = "\ud83e\ude9c";
  var alembic = "\u2697\ufe0f";
  var test_tube = "\ud83e\uddea";
  var petri_dish = "\ud83e\uddeb";
  var dna = "\ud83e\uddec";
  var microscope = "\ud83d\udd2c";
  var telescope = "\ud83d\udd2d";
  var satellite = "\ud83d\udce1";
  var syringe = "\ud83d\udc89";
  var drop_of_blood = "\ud83e\ude78";
  var pill = "\ud83d\udc8a";
  var adhesive_bandage = "\ud83e\ude79";
  var stethoscope = "\ud83e\ude7a";
  var door = "\ud83d\udeaa";
  var elevator = "\ud83d\uded7";
  var mirror = "\ud83e\ude9e";
  var window = "\ud83e\ude9f";
  var bed = "\ud83d\udecf\ufe0f";
  var couch_and_lamp = "\ud83d\udecb\ufe0f";
  var chair = "\ud83e\ude91";
  var toilet = "\ud83d\udebd";
  var plunger = "\ud83e\udea0";
  var shower = "\ud83d\udebf";
  var bathtub = "\ud83d\udec1";
  var mouse_trap = "\ud83e\udea4";
  var razor = "\ud83e\ude92";
  var lotion_bottle = "\ud83e\uddf4";
  var safety_pin = "\ud83e\uddf7";
  var broom = "\ud83e\uddf9";
  var basket = "\ud83e\uddfa";
  var roll_of_paper = "\ud83e\uddfb";
  var bucket = "\ud83e\udea3";
  var soap = "\ud83e\uddfc";
  var toothbrush = "\ud83e\udea5";
  var sponge = "\ud83e\uddfd";
  var fire_extinguisher = "\ud83e\uddef";
  var shopping_cart = "\ud83d\uded2";
  var smoking = "\ud83d\udeac";
  var coffin = "\u26b0\ufe0f";
  var headstone = "\ud83e\udea6";
  var funeral_urn = "\u26b1\ufe0f";
  var moyai = "\ud83d\uddff";
  var placard = "\ud83e\udea7";
  var atm = "\ud83c\udfe7";
  var put_litter_in_its_place = "\ud83d\udeae";
  var potable_water = "\ud83d\udeb0";
  var wheelchair = "\u267f";
  var mens = "\ud83d\udeb9";
  var womens = "\ud83d\udeba";
  var restroom = "\ud83d\udebb";
  var baby_symbol = "\ud83d\udebc";
  var wc = "\ud83d\udebe";
  var passport_control = "\ud83d\udec2";
  var customs = "\ud83d\udec3";
  var baggage_claim = "\ud83d\udec4";
  var left_luggage = "\ud83d\udec5";
  var warning = "\u26a0\ufe0f";
  var children_crossing = "\ud83d\udeb8";
  var no_entry = "\u26d4";
  var no_entry_sign = "\ud83d\udeab";
  var no_bicycles = "\ud83d\udeb3";
  var no_smoking = "\ud83d\udead";
  var do_not_litter = "\ud83d\udeaf";
  var no_pedestrians = "\ud83d\udeb7";
  var no_mobile_phones = "\ud83d\udcf5";
  var underage = "\ud83d\udd1e";
  var radioactive = "\u2622\ufe0f";
  var biohazard = "\u2623\ufe0f";
  var arrow_up = "\u2b06\ufe0f";
  var arrow_upper_right = "\u2197\ufe0f";
  var arrow_right = "\u27a1\ufe0f";
  var arrow_lower_right = "\u2198\ufe0f";
  var arrow_down = "\u2b07\ufe0f";
  var arrow_lower_left = "\u2199\ufe0f";
  var arrow_left = "\u2b05\ufe0f";
  var arrow_upper_left = "\u2196\ufe0f";
  var arrow_up_down = "\u2195\ufe0f";
  var left_right_arrow = "\u2194\ufe0f";
  var leftwards_arrow_with_hook = "\u21a9\ufe0f";
  var arrow_right_hook = "\u21aa\ufe0f";
  var arrow_heading_up = "\u2934\ufe0f";
  var arrow_heading_down = "\u2935\ufe0f";
  var arrows_clockwise = "\ud83d\udd03";
  var arrows_counterclockwise = "\ud83d\udd04";
  var back = "\ud83d\udd19";
  var end = "\ud83d\udd1a";
  var on = "\ud83d\udd1b";
  var soon = "\ud83d\udd1c";
  var top$1 = "\ud83d\udd1d";
  var place_of_worship = "\ud83d\uded0";
  var atom_symbol = "\u269b\ufe0f";
  var om = "\ud83d\udd49\ufe0f";
  var star_of_david = "\u2721\ufe0f";
  var wheel_of_dharma = "\u2638\ufe0f";
  var yin_yang = "\u262f\ufe0f";
  var latin_cross = "\u271d\ufe0f";
  var orthodox_cross = "\u2626\ufe0f";
  var star_and_crescent = "\u262a\ufe0f";
  var peace_symbol = "\u262e\ufe0f";
  var menorah = "\ud83d\udd4e";
  var six_pointed_star = "\ud83d\udd2f";
  var aries = "\u2648";
  var taurus = "\u2649";
  var gemini = "\u264a";
  var cancer = "\u264b";
  var leo = "\u264c";
  var virgo = "\u264d";
  var libra = "\u264e";
  var scorpius = "\u264f";
  var sagittarius = "\u2650";
  var capricorn = "\u2651";
  var aquarius = "\u2652";
  var pisces = "\u2653";
  var ophiuchus = "\u26ce";
  var twisted_rightwards_arrows = "\ud83d\udd00";
  var repeat = "\ud83d\udd01";
  var repeat_one = "\ud83d\udd02";
  var arrow_forward = "\u25b6\ufe0f";
  var fast_forward = "\u23e9";
  var next_track_button = "\u23ed\ufe0f";
  var play_or_pause_button = "\u23ef\ufe0f";
  var arrow_backward = "\u25c0\ufe0f";
  var rewind = "\u23ea";
  var previous_track_button = "\u23ee\ufe0f";
  var arrow_up_small = "\ud83d\udd3c";
  var arrow_double_up = "\u23eb";
  var arrow_down_small = "\ud83d\udd3d";
  var arrow_double_down = "\u23ec";
  var pause_button = "\u23f8\ufe0f";
  var stop_button = "\u23f9\ufe0f";
  var record_button = "\u23fa\ufe0f";
  var eject_button = "\u23cf\ufe0f";
  var cinema = "\ud83c\udfa6";
  var low_brightness = "\ud83d\udd05";
  var high_brightness = "\ud83d\udd06";
  var signal_strength = "\ud83d\udcf6";
  var vibration_mode = "\ud83d\udcf3";
  var mobile_phone_off = "\ud83d\udcf4";
  var female_sign = "\u2640\ufe0f";
  var male_sign = "\u2642\ufe0f";
  var transgender_symbol = "\u26a7\ufe0f";
  var heavy_multiplication_x = "\u2716\ufe0f";
  var heavy_plus_sign = "\u2795";
  var heavy_minus_sign = "\u2796";
  var heavy_division_sign = "\u2797";
  var infinity = "\u267e\ufe0f";
  var bangbang = "\u203c\ufe0f";
  var interrobang = "\u2049\ufe0f";
  var question = "\u2753";
  var grey_question = "\u2754";
  var grey_exclamation = "\u2755";
  var exclamation = "\u2757";
  var heavy_exclamation_mark = "\u2757";
  var wavy_dash = "\u3030\ufe0f";
  var currency_exchange = "\ud83d\udcb1";
  var heavy_dollar_sign = "\ud83d\udcb2";
  var medical_symbol = "\u2695\ufe0f";
  var recycle = "\u267b\ufe0f";
  var fleur_de_lis = "\u269c\ufe0f";
  var trident = "\ud83d\udd31";
  var name_badge = "\ud83d\udcdb";
  var beginner = "\ud83d\udd30";
  var o = "\u2b55";
  var white_check_mark = "\u2705";
  var ballot_box_with_check = "\u2611\ufe0f";
  var heavy_check_mark = "\u2714\ufe0f";
  var x = "\u274c";
  var negative_squared_cross_mark = "\u274e";
  var curly_loop = "\u27b0";
  var loop = "\u27bf";
  var part_alternation_mark = "\u303d\ufe0f";
  var eight_spoked_asterisk = "\u2733\ufe0f";
  var eight_pointed_black_star = "\u2734\ufe0f";
  var sparkle = "\u2747\ufe0f";
  var copyright = "\xa9\ufe0f";
  var registered = "\xae\ufe0f";
  var tm = "\u2122\ufe0f";
  var hash = "#\ufe0f\u20e3";
  var asterisk = "*\ufe0f\u20e3";
  var zero$1 = "0\ufe0f\u20e3";
  var one = "1\ufe0f\u20e3";
  var two = "2\ufe0f\u20e3";
  var three = "3\ufe0f\u20e3";
  var four = "4\ufe0f\u20e3";
  var five = "5\ufe0f\u20e3";
  var six = "6\ufe0f\u20e3";
  var seven = "7\ufe0f\u20e3";
  var eight = "8\ufe0f\u20e3";
  var nine = "9\ufe0f\u20e3";
  var keycap_ten = "\ud83d\udd1f";
  var capital_abcd = "\ud83d\udd20";
  var abcd = "\ud83d\udd21";
  var symbols = "\ud83d\udd23";
  var abc = "\ud83d\udd24";
  var a = "\ud83c\udd70\ufe0f";
  var ab = "\ud83c\udd8e";
  var b = "\ud83c\udd71\ufe0f";
  var cl = "\ud83c\udd91";
  var cool = "\ud83c\udd92";
  var free = "\ud83c\udd93";
  var information_source = "\u2139\ufe0f";
  var id = "\ud83c\udd94";
  var m = "\u24c2\ufe0f";
  var ng = "\ud83c\udd96";
  var o2 = "\ud83c\udd7e\ufe0f";
  var ok = "\ud83c\udd97";
  var parking = "\ud83c\udd7f\ufe0f";
  var sos = "\ud83c\udd98";
  var up = "\ud83c\udd99";
  var vs = "\ud83c\udd9a";
  var koko = "\ud83c\ude01";
  var sa = "\ud83c\ude02\ufe0f";
  var ideograph_advantage = "\ud83c\ude50";
  var accept = "\ud83c\ude51";
  var congratulations = "\u3297\ufe0f";
  var secret = "\u3299\ufe0f";
  var u6e80 = "\ud83c\ude35";
  var red_circle = "\ud83d\udd34";
  var orange_circle = "\ud83d\udfe0";
  var yellow_circle = "\ud83d\udfe1";
  var green_circle = "\ud83d\udfe2";
  var large_blue_circle = "\ud83d\udd35";
  var purple_circle = "\ud83d\udfe3";
  var brown_circle = "\ud83d\udfe4";
  var black_circle = "\u26ab";
  var white_circle = "\u26aa";
  var red_square = "\ud83d\udfe5";
  var orange_square = "\ud83d\udfe7";
  var yellow_square = "\ud83d\udfe8";
  var green_square = "\ud83d\udfe9";
  var blue_square = "\ud83d\udfe6";
  var purple_square = "\ud83d\udfea";
  var brown_square = "\ud83d\udfeb";
  var black_large_square = "\u2b1b";
  var white_large_square = "\u2b1c";
  var black_medium_square = "\u25fc\ufe0f";
  var white_medium_square = "\u25fb\ufe0f";
  var black_medium_small_square = "\u25fe";
  var white_medium_small_square = "\u25fd";
  var black_small_square = "\u25aa\ufe0f";
  var white_small_square = "\u25ab\ufe0f";
  var large_orange_diamond = "\ud83d\udd36";
  var large_blue_diamond = "\ud83d\udd37";
  var small_orange_diamond = "\ud83d\udd38";
  var small_blue_diamond = "\ud83d\udd39";
  var small_red_triangle = "\ud83d\udd3a";
  var small_red_triangle_down = "\ud83d\udd3b";
  var diamond_shape_with_a_dot_inside = "\ud83d\udca0";
  var radio_button = "\ud83d\udd18";
  var white_square_button = "\ud83d\udd33";
  var black_square_button = "\ud83d\udd32";
  var checkered_flag = "\ud83c\udfc1";
  var triangular_flag_on_post = "\ud83d\udea9";
  var crossed_flags = "\ud83c\udf8c";
  var black_flag = "\ud83c\udff4";
  var white_flag = "\ud83c\udff3\ufe0f";
  var rainbow_flag = "\ud83c\udff3\ufe0f\u200d\ud83c\udf08";
  var transgender_flag = "\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f";
  var pirate_flag = "\ud83c\udff4\u200d\u2620\ufe0f";
  var ascension_island = "\ud83c\udde6\ud83c\udde8";
  var andorra = "\ud83c\udde6\ud83c\udde9";
  var united_arab_emirates = "\ud83c\udde6\ud83c\uddea";
  var afghanistan = "\ud83c\udde6\ud83c\uddeb";
  var antigua_barbuda = "\ud83c\udde6\ud83c\uddec";
  var anguilla = "\ud83c\udde6\ud83c\uddee";
  var albania = "\ud83c\udde6\ud83c\uddf1";
  var armenia = "\ud83c\udde6\ud83c\uddf2";
  var angola = "\ud83c\udde6\ud83c\uddf4";
  var antarctica = "\ud83c\udde6\ud83c\uddf6";
  var argentina = "\ud83c\udde6\ud83c\uddf7";
  var american_samoa = "\ud83c\udde6\ud83c\uddf8";
  var austria = "\ud83c\udde6\ud83c\uddf9";
  var australia = "\ud83c\udde6\ud83c\uddfa";
  var aruba = "\ud83c\udde6\ud83c\uddfc";
  var aland_islands = "\ud83c\udde6\ud83c\uddfd";
  var azerbaijan = "\ud83c\udde6\ud83c\uddff";
  var bosnia_herzegovina = "\ud83c\udde7\ud83c\udde6";
  var barbados = "\ud83c\udde7\ud83c\udde7";
  var bangladesh = "\ud83c\udde7\ud83c\udde9";
  var belgium = "\ud83c\udde7\ud83c\uddea";
  var burkina_faso = "\ud83c\udde7\ud83c\uddeb";
  var bulgaria = "\ud83c\udde7\ud83c\uddec";
  var bahrain = "\ud83c\udde7\ud83c\udded";
  var burundi = "\ud83c\udde7\ud83c\uddee";
  var benin = "\ud83c\udde7\ud83c\uddef";
  var st_barthelemy = "\ud83c\udde7\ud83c\uddf1";
  var bermuda = "\ud83c\udde7\ud83c\uddf2";
  var brunei = "\ud83c\udde7\ud83c\uddf3";
  var bolivia = "\ud83c\udde7\ud83c\uddf4";
  var caribbean_netherlands = "\ud83c\udde7\ud83c\uddf6";
  var brazil = "\ud83c\udde7\ud83c\uddf7";
  var bahamas = "\ud83c\udde7\ud83c\uddf8";
  var bhutan = "\ud83c\udde7\ud83c\uddf9";
  var bouvet_island = "\ud83c\udde7\ud83c\uddfb";
  var botswana = "\ud83c\udde7\ud83c\uddfc";
  var belarus = "\ud83c\udde7\ud83c\uddfe";
  var belize = "\ud83c\udde7\ud83c\uddff";
  var canada = "\ud83c\udde8\ud83c\udde6";
  var cocos_islands = "\ud83c\udde8\ud83c\udde8";
  var congo_kinshasa = "\ud83c\udde8\ud83c\udde9";
  var central_african_republic = "\ud83c\udde8\ud83c\uddeb";
  var congo_brazzaville = "\ud83c\udde8\ud83c\uddec";
  var switzerland = "\ud83c\udde8\ud83c\udded";
  var cote_divoire = "\ud83c\udde8\ud83c\uddee";
  var cook_islands = "\ud83c\udde8\ud83c\uddf0";
  var chile = "\ud83c\udde8\ud83c\uddf1";
  var cameroon = "\ud83c\udde8\ud83c\uddf2";
  var cn = "\ud83c\udde8\ud83c\uddf3";
  var colombia = "\ud83c\udde8\ud83c\uddf4";
  var clipperton_island = "\ud83c\udde8\ud83c\uddf5";
  var costa_rica = "\ud83c\udde8\ud83c\uddf7";
  var cuba = "\ud83c\udde8\ud83c\uddfa";
  var cape_verde = "\ud83c\udde8\ud83c\uddfb";
  var curacao = "\ud83c\udde8\ud83c\uddfc";
  var christmas_island = "\ud83c\udde8\ud83c\uddfd";
  var cyprus = "\ud83c\udde8\ud83c\uddfe";
  var czech_republic = "\ud83c\udde8\ud83c\uddff";
  var de = "\ud83c\udde9\ud83c\uddea";
  var diego_garcia = "\ud83c\udde9\ud83c\uddec";
  var djibouti = "\ud83c\udde9\ud83c\uddef";
  var denmark = "\ud83c\udde9\ud83c\uddf0";
  var dominica = "\ud83c\udde9\ud83c\uddf2";
  var dominican_republic = "\ud83c\udde9\ud83c\uddf4";
  var algeria = "\ud83c\udde9\ud83c\uddff";
  var ceuta_melilla = "\ud83c\uddea\ud83c\udde6";
  var ecuador = "\ud83c\uddea\ud83c\udde8";
  var estonia = "\ud83c\uddea\ud83c\uddea";
  var egypt = "\ud83c\uddea\ud83c\uddec";
  var western_sahara = "\ud83c\uddea\ud83c\udded";
  var eritrea = "\ud83c\uddea\ud83c\uddf7";
  var es = "\ud83c\uddea\ud83c\uddf8";
  var ethiopia = "\ud83c\uddea\ud83c\uddf9";
  var eu = "\ud83c\uddea\ud83c\uddfa";
  var european_union = "\ud83c\uddea\ud83c\uddfa";
  var finland = "\ud83c\uddeb\ud83c\uddee";
  var fiji = "\ud83c\uddeb\ud83c\uddef";
  var falkland_islands = "\ud83c\uddeb\ud83c\uddf0";
  var micronesia = "\ud83c\uddeb\ud83c\uddf2";
  var faroe_islands = "\ud83c\uddeb\ud83c\uddf4";
  var fr = "\ud83c\uddeb\ud83c\uddf7";
  var gabon = "\ud83c\uddec\ud83c\udde6";
  var gb = "\ud83c\uddec\ud83c\udde7";
  var uk = "\ud83c\uddec\ud83c\udde7";
  var grenada = "\ud83c\uddec\ud83c\udde9";
  var georgia = "\ud83c\uddec\ud83c\uddea";
  var french_guiana = "\ud83c\uddec\ud83c\uddeb";
  var guernsey = "\ud83c\uddec\ud83c\uddec";
  var ghana = "\ud83c\uddec\ud83c\udded";
  var gibraltar = "\ud83c\uddec\ud83c\uddee";
  var greenland = "\ud83c\uddec\ud83c\uddf1";
  var gambia = "\ud83c\uddec\ud83c\uddf2";
  var guinea = "\ud83c\uddec\ud83c\uddf3";
  var guadeloupe = "\ud83c\uddec\ud83c\uddf5";
  var equatorial_guinea = "\ud83c\uddec\ud83c\uddf6";
  var greece = "\ud83c\uddec\ud83c\uddf7";
  var south_georgia_south_sandwich_islands = "\ud83c\uddec\ud83c\uddf8";
  var guatemala = "\ud83c\uddec\ud83c\uddf9";
  var guam = "\ud83c\uddec\ud83c\uddfa";
  var guinea_bissau = "\ud83c\uddec\ud83c\uddfc";
  var guyana = "\ud83c\uddec\ud83c\uddfe";
  var hong_kong = "\ud83c\udded\ud83c\uddf0";
  var heard_mcdonald_islands = "\ud83c\udded\ud83c\uddf2";
  var honduras = "\ud83c\udded\ud83c\uddf3";
  var croatia = "\ud83c\udded\ud83c\uddf7";
  var haiti = "\ud83c\udded\ud83c\uddf9";
  var hungary = "\ud83c\udded\ud83c\uddfa";
  var canary_islands = "\ud83c\uddee\ud83c\udde8";
  var indonesia = "\ud83c\uddee\ud83c\udde9";
  var ireland = "\ud83c\uddee\ud83c\uddea";
  var israel = "\ud83c\uddee\ud83c\uddf1";
  var isle_of_man = "\ud83c\uddee\ud83c\uddf2";
  var india = "\ud83c\uddee\ud83c\uddf3";
  var british_indian_ocean_territory = "\ud83c\uddee\ud83c\uddf4";
  var iraq = "\ud83c\uddee\ud83c\uddf6";
  var iran = "\ud83c\uddee\ud83c\uddf7";
  var iceland = "\ud83c\uddee\ud83c\uddf8";
  var it$1 = "\ud83c\uddee\ud83c\uddf9";
  var jersey = "\ud83c\uddef\ud83c\uddea";
  var jamaica = "\ud83c\uddef\ud83c\uddf2";
  var jordan = "\ud83c\uddef\ud83c\uddf4";
  var jp = "\ud83c\uddef\ud83c\uddf5";
  var kenya = "\ud83c\uddf0\ud83c\uddea";
  var kyrgyzstan = "\ud83c\uddf0\ud83c\uddec";
  var cambodia = "\ud83c\uddf0\ud83c\udded";
  var kiribati = "\ud83c\uddf0\ud83c\uddee";
  var comoros = "\ud83c\uddf0\ud83c\uddf2";
  var st_kitts_nevis = "\ud83c\uddf0\ud83c\uddf3";
  var north_korea = "\ud83c\uddf0\ud83c\uddf5";
  var kr = "\ud83c\uddf0\ud83c\uddf7";
  var kuwait = "\ud83c\uddf0\ud83c\uddfc";
  var cayman_islands = "\ud83c\uddf0\ud83c\uddfe";
  var kazakhstan = "\ud83c\uddf0\ud83c\uddff";
  var laos = "\ud83c\uddf1\ud83c\udde6";
  var lebanon = "\ud83c\uddf1\ud83c\udde7";
  var st_lucia = "\ud83c\uddf1\ud83c\udde8";
  var liechtenstein = "\ud83c\uddf1\ud83c\uddee";
  var sri_lanka = "\ud83c\uddf1\ud83c\uddf0";
  var liberia = "\ud83c\uddf1\ud83c\uddf7";
  var lesotho = "\ud83c\uddf1\ud83c\uddf8";
  var lithuania = "\ud83c\uddf1\ud83c\uddf9";
  var luxembourg = "\ud83c\uddf1\ud83c\uddfa";
  var latvia = "\ud83c\uddf1\ud83c\uddfb";
  var libya = "\ud83c\uddf1\ud83c\uddfe";
  var morocco = "\ud83c\uddf2\ud83c\udde6";
  var monaco = "\ud83c\uddf2\ud83c\udde8";
  var moldova = "\ud83c\uddf2\ud83c\udde9";
  var montenegro = "\ud83c\uddf2\ud83c\uddea";
  var st_martin = "\ud83c\uddf2\ud83c\uddeb";
  var madagascar = "\ud83c\uddf2\ud83c\uddec";
  var marshall_islands = "\ud83c\uddf2\ud83c\udded";
  var macedonia = "\ud83c\uddf2\ud83c\uddf0";
  var mali = "\ud83c\uddf2\ud83c\uddf1";
  var myanmar = "\ud83c\uddf2\ud83c\uddf2";
  var mongolia = "\ud83c\uddf2\ud83c\uddf3";
  var macau = "\ud83c\uddf2\ud83c\uddf4";
  var northern_mariana_islands = "\ud83c\uddf2\ud83c\uddf5";
  var martinique = "\ud83c\uddf2\ud83c\uddf6";
  var mauritania = "\ud83c\uddf2\ud83c\uddf7";
  var montserrat = "\ud83c\uddf2\ud83c\uddf8";
  var malta = "\ud83c\uddf2\ud83c\uddf9";
  var mauritius = "\ud83c\uddf2\ud83c\uddfa";
  var maldives = "\ud83c\uddf2\ud83c\uddfb";
  var malawi = "\ud83c\uddf2\ud83c\uddfc";
  var mexico = "\ud83c\uddf2\ud83c\uddfd";
  var malaysia = "\ud83c\uddf2\ud83c\uddfe";
  var mozambique = "\ud83c\uddf2\ud83c\uddff";
  var namibia = "\ud83c\uddf3\ud83c\udde6";
  var new_caledonia = "\ud83c\uddf3\ud83c\udde8";
  var niger = "\ud83c\uddf3\ud83c\uddea";
  var norfolk_island = "\ud83c\uddf3\ud83c\uddeb";
  var nigeria = "\ud83c\uddf3\ud83c\uddec";
  var nicaragua = "\ud83c\uddf3\ud83c\uddee";
  var netherlands = "\ud83c\uddf3\ud83c\uddf1";
  var norway = "\ud83c\uddf3\ud83c\uddf4";
  var nepal = "\ud83c\uddf3\ud83c\uddf5";
  var nauru = "\ud83c\uddf3\ud83c\uddf7";
  var niue = "\ud83c\uddf3\ud83c\uddfa";
  var new_zealand = "\ud83c\uddf3\ud83c\uddff";
  var oman = "\ud83c\uddf4\ud83c\uddf2";
  var panama = "\ud83c\uddf5\ud83c\udde6";
  var peru = "\ud83c\uddf5\ud83c\uddea";
  var french_polynesia = "\ud83c\uddf5\ud83c\uddeb";
  var papua_new_guinea = "\ud83c\uddf5\ud83c\uddec";
  var philippines = "\ud83c\uddf5\ud83c\udded";
  var pakistan = "\ud83c\uddf5\ud83c\uddf0";
  var poland = "\ud83c\uddf5\ud83c\uddf1";
  var st_pierre_miquelon = "\ud83c\uddf5\ud83c\uddf2";
  var pitcairn_islands = "\ud83c\uddf5\ud83c\uddf3";
  var puerto_rico = "\ud83c\uddf5\ud83c\uddf7";
  var palestinian_territories = "\ud83c\uddf5\ud83c\uddf8";
  var portugal = "\ud83c\uddf5\ud83c\uddf9";
  var palau = "\ud83c\uddf5\ud83c\uddfc";
  var paraguay = "\ud83c\uddf5\ud83c\uddfe";
  var qatar = "\ud83c\uddf6\ud83c\udde6";
  var reunion = "\ud83c\uddf7\ud83c\uddea";
  var romania = "\ud83c\uddf7\ud83c\uddf4";
  var serbia = "\ud83c\uddf7\ud83c\uddf8";
  var ru = "\ud83c\uddf7\ud83c\uddfa";
  var rwanda = "\ud83c\uddf7\ud83c\uddfc";
  var saudi_arabia = "\ud83c\uddf8\ud83c\udde6";
  var solomon_islands = "\ud83c\uddf8\ud83c\udde7";
  var seychelles = "\ud83c\uddf8\ud83c\udde8";
  var sudan = "\ud83c\uddf8\ud83c\udde9";
  var sweden = "\ud83c\uddf8\ud83c\uddea";
  var singapore = "\ud83c\uddf8\ud83c\uddec";
  var st_helena = "\ud83c\uddf8\ud83c\udded";
  var slovenia = "\ud83c\uddf8\ud83c\uddee";
  var svalbard_jan_mayen = "\ud83c\uddf8\ud83c\uddef";
  var slovakia = "\ud83c\uddf8\ud83c\uddf0";
  var sierra_leone = "\ud83c\uddf8\ud83c\uddf1";
  var san_marino = "\ud83c\uddf8\ud83c\uddf2";
  var senegal = "\ud83c\uddf8\ud83c\uddf3";
  var somalia = "\ud83c\uddf8\ud83c\uddf4";
  var suriname = "\ud83c\uddf8\ud83c\uddf7";
  var south_sudan = "\ud83c\uddf8\ud83c\uddf8";
  var sao_tome_principe = "\ud83c\uddf8\ud83c\uddf9";
  var el_salvador = "\ud83c\uddf8\ud83c\uddfb";
  var sint_maarten = "\ud83c\uddf8\ud83c\uddfd";
  var syria = "\ud83c\uddf8\ud83c\uddfe";
  var swaziland = "\ud83c\uddf8\ud83c\uddff";
  var tristan_da_cunha = "\ud83c\uddf9\ud83c\udde6";
  var turks_caicos_islands = "\ud83c\uddf9\ud83c\udde8";
  var chad = "\ud83c\uddf9\ud83c\udde9";
  var french_southern_territories = "\ud83c\uddf9\ud83c\uddeb";
  var togo = "\ud83c\uddf9\ud83c\uddec";
  var thailand = "\ud83c\uddf9\ud83c\udded";
  var tajikistan = "\ud83c\uddf9\ud83c\uddef";
  var tokelau = "\ud83c\uddf9\ud83c\uddf0";
  var timor_leste = "\ud83c\uddf9\ud83c\uddf1";
  var turkmenistan = "\ud83c\uddf9\ud83c\uddf2";
  var tunisia = "\ud83c\uddf9\ud83c\uddf3";
  var tonga = "\ud83c\uddf9\ud83c\uddf4";
  var tr = "\ud83c\uddf9\ud83c\uddf7";
  var trinidad_tobago = "\ud83c\uddf9\ud83c\uddf9";
  var tuvalu = "\ud83c\uddf9\ud83c\uddfb";
  var taiwan = "\ud83c\uddf9\ud83c\uddfc";
  var tanzania = "\ud83c\uddf9\ud83c\uddff";
  var ukraine = "\ud83c\uddfa\ud83c\udde6";
  var uganda = "\ud83c\uddfa\ud83c\uddec";
  var us_outlying_islands = "\ud83c\uddfa\ud83c\uddf2";
  var united_nations = "\ud83c\uddfa\ud83c\uddf3";
  var us = "\ud83c\uddfa\ud83c\uddf8";
  var uruguay = "\ud83c\uddfa\ud83c\uddfe";
  var uzbekistan = "\ud83c\uddfa\ud83c\uddff";
  var vatican_city = "\ud83c\uddfb\ud83c\udde6";
  var st_vincent_grenadines = "\ud83c\uddfb\ud83c\udde8";
  var venezuela = "\ud83c\uddfb\ud83c\uddea";
  var british_virgin_islands = "\ud83c\uddfb\ud83c\uddec";
  var us_virgin_islands = "\ud83c\uddfb\ud83c\uddee";
  var vietnam = "\ud83c\uddfb\ud83c\uddf3";
  var vanuatu = "\ud83c\uddfb\ud83c\uddfa";
  var wallis_futuna = "\ud83c\uddfc\ud83c\uddeb";
  var samoa = "\ud83c\uddfc\ud83c\uddf8";
  var kosovo = "\ud83c\uddfd\ud83c\uddf0";
  var yemen = "\ud83c\uddfe\ud83c\uddea";
  var mayotte = "\ud83c\uddfe\ud83c\uddf9";
  var south_africa = "\ud83c\uddff\ud83c\udde6";
  var zambia = "\ud83c\uddff\ud83c\uddf2";
  var zimbabwe = "\ud83c\uddff\ud83c\uddfc";
  var england = "\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f";
  var scotland = "\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc73\udb40\udc63\udb40\udc74\udb40\udc7f";
  var wales = "\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc77\udb40\udc6c\udb40\udc73\udb40\udc7f";
  var emojies_defs = {
    100: "\ud83d\udcaf",
    1234: "\ud83d\udd22",
    grinning: grinning,
    smiley: smiley,
    smile: smile$1,
    grin: grin,
    laughing: laughing,
    satisfied: satisfied,
    sweat_smile: sweat_smile,
    rofl: rofl,
    joy: joy,
    slightly_smiling_face: slightly_smiling_face,
    upside_down_face: upside_down_face,
    wink: wink,
    blush: blush,
    innocent: innocent,
    smiling_face_with_three_hearts: smiling_face_with_three_hearts,
    heart_eyes: heart_eyes,
    star_struck: star_struck,
    kissing_heart: kissing_heart,
    kissing: kissing,
    relaxed: relaxed,
    kissing_closed_eyes: kissing_closed_eyes,
    kissing_smiling_eyes: kissing_smiling_eyes,
    smiling_face_with_tear: smiling_face_with_tear,
    yum: yum,
    stuck_out_tongue: stuck_out_tongue,
    stuck_out_tongue_winking_eye: stuck_out_tongue_winking_eye,
    zany_face: zany_face,
    stuck_out_tongue_closed_eyes: stuck_out_tongue_closed_eyes,
    money_mouth_face: money_mouth_face,
    hugs: hugs,
    hand_over_mouth: hand_over_mouth,
    shushing_face: shushing_face,
    thinking: thinking,
    zipper_mouth_face: zipper_mouth_face,
    raised_eyebrow: raised_eyebrow,
    neutral_face: neutral_face,
    expressionless: expressionless,
    no_mouth: no_mouth,
    smirk: smirk,
    unamused: unamused,
    roll_eyes: roll_eyes,
    grimacing: grimacing,
    lying_face: lying_face,
    relieved: relieved,
    pensive: pensive,
    sleepy: sleepy,
    drooling_face: drooling_face,
    sleeping: sleeping,
    mask: mask,
    face_with_thermometer: face_with_thermometer,
    face_with_head_bandage: face_with_head_bandage,
    nauseated_face: nauseated_face,
    vomiting_face: vomiting_face,
    sneezing_face: sneezing_face,
    hot_face: hot_face,
    cold_face: cold_face,
    woozy_face: woozy_face,
    dizzy_face: dizzy_face,
    exploding_head: exploding_head,
    cowboy_hat_face: cowboy_hat_face,
    partying_face: partying_face,
    disguised_face: disguised_face,
    sunglasses: sunglasses,
    nerd_face: nerd_face,
    monocle_face: monocle_face,
    confused: confused,
    worried: worried,
    slightly_frowning_face: slightly_frowning_face,
    frowning_face: frowning_face,
    open_mouth: open_mouth,
    hushed: hushed,
    astonished: astonished,
    flushed: flushed,
    pleading_face: pleading_face,
    frowning: frowning,
    anguished: anguished,
    fearful: fearful,
    cold_sweat: cold_sweat,
    disappointed_relieved: disappointed_relieved,
    cry: cry,
    sob: sob,
    scream: scream,
    confounded: confounded,
    persevere: persevere,
    disappointed: disappointed,
    sweat: sweat,
    weary: weary,
    tired_face: tired_face,
    yawning_face: yawning_face,
    triumph: triumph,
    rage: rage,
    pout: pout,
    angry: angry,
    cursing_face: cursing_face,
    smiling_imp: smiling_imp,
    imp: imp,
    skull: skull,
    skull_and_crossbones: skull_and_crossbones,
    hankey: hankey,
    poop: poop,
    shit: shit,
    clown_face: clown_face,
    japanese_ogre: japanese_ogre,
    japanese_goblin: japanese_goblin,
    ghost: ghost,
    alien: alien,
    space_invader: space_invader,
    robot: robot,
    smiley_cat: smiley_cat,
    smile_cat: smile_cat,
    joy_cat: joy_cat,
    heart_eyes_cat: heart_eyes_cat,
    smirk_cat: smirk_cat,
    kissing_cat: kissing_cat,
    scream_cat: scream_cat,
    crying_cat_face: crying_cat_face,
    pouting_cat: pouting_cat,
    see_no_evil: see_no_evil,
    hear_no_evil: hear_no_evil,
    speak_no_evil: speak_no_evil,
    kiss: kiss,
    love_letter: love_letter,
    cupid: cupid,
    gift_heart: gift_heart,
    sparkling_heart: sparkling_heart,
    heartpulse: heartpulse,
    heartbeat: heartbeat,
    revolving_hearts: revolving_hearts,
    two_hearts: two_hearts,
    heart_decoration: heart_decoration,
    heavy_heart_exclamation: heavy_heart_exclamation,
    broken_heart: broken_heart,
    heart: heart,
    orange_heart: orange_heart,
    yellow_heart: yellow_heart,
    green_heart: green_heart,
    blue_heart: blue_heart,
    purple_heart: purple_heart,
    brown_heart: brown_heart,
    black_heart: black_heart,
    white_heart: white_heart,
    anger: anger,
    boom: boom,
    collision: collision,
    dizzy: dizzy,
    sweat_drops: sweat_drops,
    dash: dash$1,
    hole: hole,
    bomb: bomb,
    speech_balloon: speech_balloon,
    eye_speech_bubble: eye_speech_bubble,
    left_speech_bubble: left_speech_bubble,
    right_anger_bubble: right_anger_bubble,
    thought_balloon: thought_balloon,
    zzz: zzz,
    wave: wave,
    raised_back_of_hand: raised_back_of_hand,
    raised_hand_with_fingers_splayed: raised_hand_with_fingers_splayed,
    hand: hand,
    raised_hand: raised_hand,
    vulcan_salute: vulcan_salute,
    ok_hand: ok_hand,
    pinched_fingers: pinched_fingers,
    pinching_hand: pinching_hand,
    v: v,
    crossed_fingers: crossed_fingers,
    love_you_gesture: love_you_gesture,
    metal: metal,
    call_me_hand: call_me_hand,
    point_left: point_left,
    point_right: point_right,
    point_up_2: point_up_2,
    middle_finger: middle_finger,
    fu: fu,
    point_down: point_down,
    point_up: point_up,
    "+1": "\ud83d\udc4d",
    thumbsup: thumbsup,
    "-1": "\ud83d\udc4e",
    thumbsdown: thumbsdown,
    fist_raised: fist_raised,
    fist: fist,
    fist_oncoming: fist_oncoming,
    facepunch: facepunch,
    punch: punch,
    fist_left: fist_left,
    fist_right: fist_right,
    clap: clap,
    raised_hands: raised_hands,
    open_hands: open_hands,
    palms_up_together: palms_up_together,
    handshake: handshake,
    pray: pray,
    writing_hand: writing_hand,
    nail_care: nail_care,
    selfie: selfie,
    muscle: muscle,
    mechanical_arm: mechanical_arm,
    mechanical_leg: mechanical_leg,
    leg: leg$1,
    foot: foot,
    ear: ear,
    ear_with_hearing_aid: ear_with_hearing_aid,
    nose: nose,
    brain: brain,
    anatomical_heart: anatomical_heart,
    lungs: lungs,
    tooth: tooth,
    bone: bone,
    eyes: eyes,
    eye: eye,
    tongue: tongue,
    lips: lips,
    baby: baby,
    child: child,
    boy: boy,
    girl: girl,
    adult: adult,
    blond_haired_person: blond_haired_person,
    man: man,
    bearded_person: bearded_person,
    red_haired_man: red_haired_man,
    curly_haired_man: curly_haired_man,
    white_haired_man: white_haired_man,
    bald_man: bald_man,
    woman: woman,
    red_haired_woman: red_haired_woman,
    person_red_hair: person_red_hair,
    curly_haired_woman: curly_haired_woman,
    person_curly_hair: person_curly_hair,
    white_haired_woman: white_haired_woman,
    person_white_hair: person_white_hair,
    bald_woman: bald_woman,
    person_bald: person_bald,
    blond_haired_woman: blond_haired_woman,
    blonde_woman: blonde_woman,
    blond_haired_man: blond_haired_man,
    older_adult: older_adult,
    older_man: older_man,
    older_woman: older_woman,
    frowning_person: frowning_person,
    frowning_man: frowning_man,
    frowning_woman: frowning_woman,
    pouting_face: pouting_face,
    pouting_man: pouting_man,
    pouting_woman: pouting_woman,
    no_good: no_good,
    no_good_man: no_good_man,
    ng_man: ng_man,
    no_good_woman: no_good_woman,
    ng_woman: ng_woman,
    ok_person: ok_person,
    ok_man: ok_man,
    ok_woman: ok_woman,
    tipping_hand_person: tipping_hand_person,
    information_desk_person: information_desk_person,
    tipping_hand_man: tipping_hand_man,
    sassy_man: sassy_man,
    tipping_hand_woman: tipping_hand_woman,
    sassy_woman: sassy_woman,
    raising_hand: raising_hand,
    raising_hand_man: raising_hand_man,
    raising_hand_woman: raising_hand_woman,
    deaf_person: deaf_person,
    deaf_man: deaf_man,
    deaf_woman: deaf_woman,
    bow: bow,
    bowing_man: bowing_man,
    bowing_woman: bowing_woman,
    facepalm: facepalm,
    man_facepalming: man_facepalming,
    woman_facepalming: woman_facepalming,
    shrug: shrug,
    man_shrugging: man_shrugging,
    woman_shrugging: woman_shrugging,
    health_worker: health_worker,
    man_health_worker: man_health_worker,
    woman_health_worker: woman_health_worker,
    student: student,
    man_student: man_student,
    woman_student: woman_student,
    teacher: teacher,
    man_teacher: man_teacher,
    woman_teacher: woman_teacher,
    judge: judge,
    man_judge: man_judge,
    woman_judge: woman_judge,
    farmer: farmer,
    man_farmer: man_farmer,
    woman_farmer: woman_farmer,
    cook: cook,
    man_cook: man_cook,
    woman_cook: woman_cook,
    mechanic: mechanic,
    man_mechanic: man_mechanic,
    woman_mechanic: woman_mechanic,
    factory_worker: factory_worker,
    man_factory_worker: man_factory_worker,
    woman_factory_worker: woman_factory_worker,
    office_worker: office_worker,
    man_office_worker: man_office_worker,
    woman_office_worker: woman_office_worker,
    scientist: scientist,
    man_scientist: man_scientist,
    woman_scientist: woman_scientist,
    technologist: technologist,
    man_technologist: man_technologist,
    woman_technologist: woman_technologist,
    singer: singer,
    man_singer: man_singer,
    woman_singer: woman_singer,
    artist: artist,
    man_artist: man_artist,
    woman_artist: woman_artist,
    pilot: pilot,
    man_pilot: man_pilot,
    woman_pilot: woman_pilot,
    astronaut: astronaut,
    man_astronaut: man_astronaut,
    woman_astronaut: woman_astronaut,
    firefighter: firefighter,
    man_firefighter: man_firefighter,
    woman_firefighter: woman_firefighter,
    police_officer: police_officer,
    cop: cop,
    policeman: policeman,
    policewoman: policewoman,
    detective: detective,
    male_detective: male_detective,
    female_detective: female_detective,
    guard: guard,
    guardsman: guardsman,
    guardswoman: guardswoman,
    ninja: ninja,
    construction_worker: construction_worker,
    construction_worker_man: construction_worker_man,
    construction_worker_woman: construction_worker_woman,
    prince: prince,
    princess: princess,
    person_with_turban: person_with_turban,
    man_with_turban: man_with_turban,
    woman_with_turban: woman_with_turban,
    man_with_gua_pi_mao: man_with_gua_pi_mao,
    woman_with_headscarf: woman_with_headscarf,
    person_in_tuxedo: person_in_tuxedo,
    man_in_tuxedo: man_in_tuxedo,
    woman_in_tuxedo: woman_in_tuxedo,
    person_with_veil: person_with_veil,
    man_with_veil: man_with_veil,
    woman_with_veil: woman_with_veil,
    bride_with_veil: bride_with_veil,
    pregnant_woman: pregnant_woman,
    breast_feeding: breast_feeding,
    woman_feeding_baby: woman_feeding_baby,
    man_feeding_baby: man_feeding_baby,
    person_feeding_baby: person_feeding_baby,
    angel: angel,
    santa: santa,
    mrs_claus: mrs_claus,
    mx_claus: mx_claus,
    superhero: superhero,
    superhero_man: superhero_man,
    superhero_woman: superhero_woman,
    supervillain: supervillain,
    supervillain_man: supervillain_man,
    supervillain_woman: supervillain_woman,
    mage: mage,
    mage_man: mage_man,
    mage_woman: mage_woman,
    fairy: fairy,
    fairy_man: fairy_man,
    fairy_woman: fairy_woman,
    vampire: vampire,
    vampire_man: vampire_man,
    vampire_woman: vampire_woman,
    merperson: merperson,
    merman: merman,
    mermaid: mermaid,
    elf: elf,
    elf_man: elf_man,
    elf_woman: elf_woman,
    genie: genie,
    genie_man: genie_man,
    genie_woman: genie_woman,
    zombie: zombie,
    zombie_man: zombie_man,
    zombie_woman: zombie_woman,
    massage: massage,
    massage_man: massage_man,
    massage_woman: massage_woman,
    haircut: haircut,
    haircut_man: haircut_man,
    haircut_woman: haircut_woman,
    walking: walking,
    walking_man: walking_man,
    walking_woman: walking_woman,
    standing_person: standing_person,
    standing_man: standing_man,
    standing_woman: standing_woman,
    kneeling_person: kneeling_person,
    kneeling_man: kneeling_man,
    kneeling_woman: kneeling_woman,
    person_with_probing_cane: person_with_probing_cane,
    man_with_probing_cane: man_with_probing_cane,
    woman_with_probing_cane: woman_with_probing_cane,
    person_in_motorized_wheelchair: person_in_motorized_wheelchair,
    man_in_motorized_wheelchair: man_in_motorized_wheelchair,
    woman_in_motorized_wheelchair: woman_in_motorized_wheelchair,
    person_in_manual_wheelchair: person_in_manual_wheelchair,
    man_in_manual_wheelchair: man_in_manual_wheelchair,
    woman_in_manual_wheelchair: woman_in_manual_wheelchair,
    runner: runner,
    running: running,
    running_man: running_man,
    running_woman: running_woman,
    woman_dancing: woman_dancing,
    dancer: dancer,
    man_dancing: man_dancing,
    business_suit_levitating: business_suit_levitating,
    dancers: dancers,
    dancing_men: dancing_men,
    dancing_women: dancing_women,
    sauna_person: sauna_person,
    sauna_man: sauna_man,
    sauna_woman: sauna_woman,
    climbing: climbing,
    climbing_man: climbing_man,
    climbing_woman: climbing_woman,
    person_fencing: person_fencing,
    horse_racing: horse_racing,
    skier: skier,
    snowboarder: snowboarder,
    golfing: golfing,
    golfing_man: golfing_man,
    golfing_woman: golfing_woman,
    surfer: surfer,
    surfing_man: surfing_man,
    surfing_woman: surfing_woman,
    rowboat: rowboat,
    rowing_man: rowing_man,
    rowing_woman: rowing_woman,
    swimmer: swimmer,
    swimming_man: swimming_man,
    swimming_woman: swimming_woman,
    bouncing_ball_person: bouncing_ball_person,
    bouncing_ball_man: bouncing_ball_man,
    basketball_man: basketball_man,
    bouncing_ball_woman: bouncing_ball_woman,
    basketball_woman: basketball_woman,
    weight_lifting: weight_lifting,
    weight_lifting_man: weight_lifting_man,
    weight_lifting_woman: weight_lifting_woman,
    bicyclist: bicyclist,
    biking_man: biking_man,
    biking_woman: biking_woman,
    mountain_bicyclist: mountain_bicyclist,
    mountain_biking_man: mountain_biking_man,
    mountain_biking_woman: mountain_biking_woman,
    cartwheeling: cartwheeling,
    man_cartwheeling: man_cartwheeling,
    woman_cartwheeling: woman_cartwheeling,
    wrestling: wrestling,
    men_wrestling: men_wrestling,
    women_wrestling: women_wrestling,
    water_polo: water_polo,
    man_playing_water_polo: man_playing_water_polo,
    woman_playing_water_polo: woman_playing_water_polo,
    handball_person: handball_person,
    man_playing_handball: man_playing_handball,
    woman_playing_handball: woman_playing_handball,
    juggling_person: juggling_person,
    man_juggling: man_juggling,
    woman_juggling: woman_juggling,
    lotus_position: lotus_position,
    lotus_position_man: lotus_position_man,
    lotus_position_woman: lotus_position_woman,
    bath: bath,
    sleeping_bed: sleeping_bed,
    people_holding_hands: people_holding_hands,
    two_women_holding_hands: two_women_holding_hands,
    couple: couple,
    two_men_holding_hands: two_men_holding_hands,
    couplekiss: couplekiss,
    couplekiss_man_woman: couplekiss_man_woman,
    couplekiss_man_man: couplekiss_man_man,
    couplekiss_woman_woman: couplekiss_woman_woman,
    couple_with_heart: couple_with_heart,
    couple_with_heart_woman_man: couple_with_heart_woman_man,
    couple_with_heart_man_man: couple_with_heart_man_man,
    couple_with_heart_woman_woman: couple_with_heart_woman_woman,
    family: family,
    family_man_woman_boy: family_man_woman_boy,
    family_man_woman_girl: family_man_woman_girl,
    family_man_woman_girl_boy: family_man_woman_girl_boy,
    family_man_woman_boy_boy: family_man_woman_boy_boy,
    family_man_woman_girl_girl: family_man_woman_girl_girl,
    family_man_man_boy: family_man_man_boy,
    family_man_man_girl: family_man_man_girl,
    family_man_man_girl_boy: family_man_man_girl_boy,
    family_man_man_boy_boy: family_man_man_boy_boy,
    family_man_man_girl_girl: family_man_man_girl_girl,
    family_woman_woman_boy: family_woman_woman_boy,
    family_woman_woman_girl: family_woman_woman_girl,
    family_woman_woman_girl_boy: family_woman_woman_girl_boy,
    family_woman_woman_boy_boy: family_woman_woman_boy_boy,
    family_woman_woman_girl_girl: family_woman_woman_girl_girl,
    family_man_boy: family_man_boy,
    family_man_boy_boy: family_man_boy_boy,
    family_man_girl: family_man_girl,
    family_man_girl_boy: family_man_girl_boy,
    family_man_girl_girl: family_man_girl_girl,
    family_woman_boy: family_woman_boy,
    family_woman_boy_boy: family_woman_boy_boy,
    family_woman_girl: family_woman_girl,
    family_woman_girl_boy: family_woman_girl_boy,
    family_woman_girl_girl: family_woman_girl_girl,
    speaking_head: speaking_head,
    bust_in_silhouette: bust_in_silhouette,
    busts_in_silhouette: busts_in_silhouette,
    people_hugging: people_hugging,
    footprints: footprints,
    monkey_face: monkey_face,
    monkey: monkey,
    gorilla: gorilla,
    orangutan: orangutan,
    dog: dog,
    dog2: dog2,
    guide_dog: guide_dog,
    service_dog: service_dog,
    poodle: poodle,
    wolf: wolf,
    fox_face: fox_face,
    raccoon: raccoon,
    cat: cat,
    cat2: cat2,
    black_cat: black_cat,
    lion: lion,
    tiger: tiger,
    tiger2: tiger2,
    leopard: leopard,
    horse: horse,
    racehorse: racehorse,
    unicorn: unicorn,
    zebra: zebra,
    deer: deer,
    bison: bison,
    cow: cow,
    ox: ox,
    water_buffalo: water_buffalo,
    cow2: cow2,
    pig: pig,
    pig2: pig2,
    boar: boar,
    pig_nose: pig_nose,
    ram: ram,
    sheep: sheep,
    goat: goat,
    dromedary_camel: dromedary_camel,
    camel: camel,
    llama: llama,
    giraffe: giraffe,
    elephant: elephant,
    mammoth: mammoth,
    rhinoceros: rhinoceros,
    hippopotamus: hippopotamus,
    mouse: mouse,
    mouse2: mouse2,
    rat: rat,
    hamster: hamster,
    rabbit: rabbit,
    rabbit2: rabbit2,
    chipmunk: chipmunk,
    beaver: beaver,
    hedgehog: hedgehog,
    bat: bat,
    bear: bear,
    polar_bear: polar_bear,
    koala: koala,
    panda_face: panda_face,
    sloth: sloth,
    otter: otter,
    skunk: skunk,
    kangaroo: kangaroo,
    badger: badger,
    feet: feet,
    paw_prints: paw_prints,
    turkey: turkey,
    chicken: chicken,
    rooster: rooster,
    hatching_chick: hatching_chick,
    baby_chick: baby_chick,
    hatched_chick: hatched_chick,
    bird: bird,
    penguin: penguin,
    dove: dove,
    eagle: eagle,
    duck: duck,
    swan: swan,
    owl: owl,
    dodo: dodo,
    feather: feather,
    flamingo: flamingo,
    peacock: peacock,
    parrot: parrot,
    frog: frog,
    crocodile: crocodile,
    turtle: turtle,
    lizard: lizard,
    snake: snake,
    dragon_face: dragon_face,
    dragon: dragon,
    sauropod: sauropod,
    "t-rex": "\ud83e\udd96",
    whale: whale,
    whale2: whale2,
    dolphin: dolphin,
    flipper: flipper,
    seal: seal,
    fish: fish,
    tropical_fish: tropical_fish,
    blowfish: blowfish,
    shark: shark,
    octopus: octopus,
    shell: shell,
    snail: snail,
    butterfly: butterfly,
    bug: bug,
    ant: ant,
    bee: bee,
    honeybee: honeybee,
    beetle: beetle,
    lady_beetle: lady_beetle,
    cricket: cricket,
    cockroach: cockroach,
    spider: spider,
    spider_web: spider_web,
    scorpion: scorpion,
    mosquito: mosquito,
    fly: fly,
    worm: worm,
    microbe: microbe,
    bouquet: bouquet,
    cherry_blossom: cherry_blossom,
    white_flower: white_flower,
    rosette: rosette,
    rose: rose,
    wilted_flower: wilted_flower,
    hibiscus: hibiscus,
    sunflower: sunflower,
    blossom: blossom,
    tulip: tulip,
    seedling: seedling,
    potted_plant: potted_plant,
    evergreen_tree: evergreen_tree,
    deciduous_tree: deciduous_tree,
    palm_tree: palm_tree,
    cactus: cactus,
    ear_of_rice: ear_of_rice,
    herb: herb,
    shamrock: shamrock,
    four_leaf_clover: four_leaf_clover,
    maple_leaf: maple_leaf,
    fallen_leaf: fallen_leaf,
    leaves: leaves,
    grapes: grapes,
    melon: melon,
    watermelon: watermelon,
    tangerine: tangerine,
    orange: orange,
    mandarin: mandarin,
    lemon: lemon,
    banana: banana,
    pineapple: pineapple,
    mango: mango,
    apple: apple,
    green_apple: green_apple,
    pear: pear,
    peach: peach,
    cherries: cherries,
    strawberry: strawberry,
    blueberries: blueberries,
    kiwi_fruit: kiwi_fruit,
    tomato: tomato,
    olive: olive,
    coconut: coconut,
    avocado: avocado,
    eggplant: eggplant,
    potato: potato,
    carrot: carrot,
    corn: corn,
    hot_pepper: hot_pepper,
    bell_pepper: bell_pepper,
    cucumber: cucumber,
    leafy_green: leafy_green,
    broccoli: broccoli,
    garlic: garlic,
    onion: onion,
    mushroom: mushroom,
    peanuts: peanuts,
    chestnut: chestnut,
    bread: bread,
    croissant: croissant,
    baguette_bread: baguette_bread,
    flatbread: flatbread,
    pretzel: pretzel,
    bagel: bagel,
    pancakes: pancakes,
    waffle: waffle,
    cheese: cheese,
    meat_on_bone: meat_on_bone,
    poultry_leg: poultry_leg,
    cut_of_meat: cut_of_meat,
    bacon: bacon,
    hamburger: hamburger,
    fries: fries,
    pizza: pizza,
    hotdog: hotdog,
    sandwich: sandwich,
    taco: taco,
    burrito: burrito,
    tamale: tamale,
    stuffed_flatbread: stuffed_flatbread,
    falafel: falafel,
    egg: egg,
    fried_egg: fried_egg,
    shallow_pan_of_food: shallow_pan_of_food,
    stew: stew,
    fondue: fondue,
    bowl_with_spoon: bowl_with_spoon,
    green_salad: green_salad,
    popcorn: popcorn,
    butter: butter,
    salt: salt,
    canned_food: canned_food,
    bento: bento,
    rice_cracker: rice_cracker,
    rice_ball: rice_ball,
    rice: rice,
    curry: curry,
    ramen: ramen,
    spaghetti: spaghetti,
    sweet_potato: sweet_potato,
    oden: oden,
    sushi: sushi,
    fried_shrimp: fried_shrimp,
    fish_cake: fish_cake,
    moon_cake: moon_cake,
    dango: dango,
    dumpling: dumpling,
    fortune_cookie: fortune_cookie,
    takeout_box: takeout_box,
    crab: crab,
    lobster: lobster,
    shrimp: shrimp,
    squid: squid,
    oyster: oyster,
    icecream: icecream,
    shaved_ice: shaved_ice,
    ice_cream: ice_cream,
    doughnut: doughnut,
    cookie: cookie,
    birthday: birthday,
    cake: cake,
    cupcake: cupcake,
    pie: pie,
    chocolate_bar: chocolate_bar,
    candy: candy,
    lollipop: lollipop,
    custard: custard,
    honey_pot: honey_pot,
    baby_bottle: baby_bottle,
    milk_glass: milk_glass,
    coffee: coffee,
    teapot: teapot,
    tea: tea,
    sake: sake,
    champagne: champagne,
    wine_glass: wine_glass,
    cocktail: cocktail,
    tropical_drink: tropical_drink,
    beer: beer,
    beers: beers,
    clinking_glasses: clinking_glasses,
    tumbler_glass: tumbler_glass,
    cup_with_straw: cup_with_straw,
    bubble_tea: bubble_tea,
    beverage_box: beverage_box,
    mate: mate,
    ice_cube: ice_cube,
    chopsticks: chopsticks,
    plate_with_cutlery: plate_with_cutlery,
    fork_and_knife: fork_and_knife,
    spoon: spoon,
    hocho: hocho,
    knife: knife,
    amphora: amphora,
    earth_africa: earth_africa,
    earth_americas: earth_americas,
    earth_asia: earth_asia,
    globe_with_meridians: globe_with_meridians,
    world_map: world_map,
    japan: japan,
    compass: compass,
    mountain_snow: mountain_snow,
    mountain: mountain,
    volcano: volcano,
    mount_fuji: mount_fuji,
    camping: camping,
    beach_umbrella: beach_umbrella,
    desert: desert,
    desert_island: desert_island,
    national_park: national_park,
    stadium: stadium,
    classical_building: classical_building,
    building_construction: building_construction,
    bricks: bricks,
    rock: rock,
    wood: wood,
    hut: hut,
    houses: houses,
    derelict_house: derelict_house,
    house: house,
    house_with_garden: house_with_garden,
    office: office,
    post_office: post_office,
    european_post_office: european_post_office,
    hospital: hospital,
    bank: bank,
    hotel: hotel,
    love_hotel: love_hotel,
    convenience_store: convenience_store,
    school: school,
    department_store: department_store,
    factory: factory,
    japanese_castle: japanese_castle,
    european_castle: european_castle,
    wedding: wedding,
    tokyo_tower: tokyo_tower,
    statue_of_liberty: statue_of_liberty,
    church: church,
    mosque: mosque,
    hindu_temple: hindu_temple,
    synagogue: synagogue,
    shinto_shrine: shinto_shrine,
    kaaba: kaaba,
    fountain: fountain,
    tent: tent,
    foggy: foggy,
    night_with_stars: night_with_stars,
    cityscape: cityscape,
    sunrise_over_mountains: sunrise_over_mountains,
    sunrise: sunrise,
    city_sunset: city_sunset,
    city_sunrise: city_sunrise,
    bridge_at_night: bridge_at_night,
    hotsprings: hotsprings,
    carousel_horse: carousel_horse,
    ferris_wheel: ferris_wheel,
    roller_coaster: roller_coaster,
    barber: barber,
    circus_tent: circus_tent,
    steam_locomotive: steam_locomotive,
    railway_car: railway_car,
    bullettrain_side: bullettrain_side,
    bullettrain_front: bullettrain_front,
    train2: train2,
    metro: metro,
    light_rail: light_rail,
    station: station,
    tram: tram,
    monorail: monorail,
    mountain_railway: mountain_railway,
    train: train,
    bus: bus,
    oncoming_bus: oncoming_bus,
    trolleybus: trolleybus,
    minibus: minibus,
    ambulance: ambulance,
    fire_engine: fire_engine,
    police_car: police_car,
    oncoming_police_car: oncoming_police_car,
    taxi: taxi,
    oncoming_taxi: oncoming_taxi,
    car: car,
    red_car: red_car,
    oncoming_automobile: oncoming_automobile,
    blue_car: blue_car,
    pickup_truck: pickup_truck,
    truck: truck,
    articulated_lorry: articulated_lorry,
    tractor: tractor,
    racing_car: racing_car,
    motorcycle: motorcycle,
    motor_scooter: motor_scooter,
    manual_wheelchair: manual_wheelchair,
    motorized_wheelchair: motorized_wheelchair,
    auto_rickshaw: auto_rickshaw,
    bike: bike,
    kick_scooter: kick_scooter,
    skateboard: skateboard,
    roller_skate: roller_skate,
    busstop: busstop,
    motorway: motorway,
    railway_track: railway_track,
    oil_drum: oil_drum,
    fuelpump: fuelpump,
    rotating_light: rotating_light,
    traffic_light: traffic_light,
    vertical_traffic_light: vertical_traffic_light,
    stop_sign: stop_sign,
    construction: construction,
    anchor: anchor,
    boat: boat,
    sailboat: sailboat,
    canoe: canoe,
    speedboat: speedboat,
    passenger_ship: passenger_ship,
    ferry: ferry,
    motor_boat: motor_boat,
    ship: ship,
    airplane: airplane,
    small_airplane: small_airplane,
    flight_departure: flight_departure,
    flight_arrival: flight_arrival,
    parachute: parachute,
    seat: seat,
    helicopter: helicopter,
    suspension_railway: suspension_railway,
    mountain_cableway: mountain_cableway,
    aerial_tramway: aerial_tramway,
    artificial_satellite: artificial_satellite,
    rocket: rocket,
    flying_saucer: flying_saucer,
    bellhop_bell: bellhop_bell,
    luggage: luggage,
    hourglass: hourglass,
    hourglass_flowing_sand: hourglass_flowing_sand,
    watch: watch,
    alarm_clock: alarm_clock,
    stopwatch: stopwatch,
    timer_clock: timer_clock,
    mantelpiece_clock: mantelpiece_clock,
    clock12: clock12,
    clock1230: clock1230,
    clock1: clock1,
    clock130: clock130,
    clock2: clock2,
    clock230: clock230,
    clock3: clock3,
    clock330: clock330,
    clock4: clock4,
    clock430: clock430,
    clock5: clock5,
    clock530: clock530,
    clock6: clock6,
    clock630: clock630,
    clock7: clock7,
    clock730: clock730,
    clock8: clock8,
    clock830: clock830,
    clock9: clock9,
    clock930: clock930,
    clock10: clock10,
    clock1030: clock1030,
    clock11: clock11,
    clock1130: clock1130,
    new_moon: new_moon,
    waxing_crescent_moon: waxing_crescent_moon,
    first_quarter_moon: first_quarter_moon,
    moon: moon,
    waxing_gibbous_moon: waxing_gibbous_moon,
    full_moon: full_moon,
    waning_gibbous_moon: waning_gibbous_moon,
    last_quarter_moon: last_quarter_moon,
    waning_crescent_moon: waning_crescent_moon,
    crescent_moon: crescent_moon,
    new_moon_with_face: new_moon_with_face,
    first_quarter_moon_with_face: first_quarter_moon_with_face,
    last_quarter_moon_with_face: last_quarter_moon_with_face,
    thermometer: thermometer,
    sunny: sunny,
    full_moon_with_face: full_moon_with_face,
    sun_with_face: sun_with_face,
    ringed_planet: ringed_planet,
    star: star$1,
    star2: star2,
    stars: stars,
    milky_way: milky_way,
    cloud: cloud,
    partly_sunny: partly_sunny,
    cloud_with_lightning_and_rain: cloud_with_lightning_and_rain,
    sun_behind_small_cloud: sun_behind_small_cloud,
    sun_behind_large_cloud: sun_behind_large_cloud,
    sun_behind_rain_cloud: sun_behind_rain_cloud,
    cloud_with_rain: cloud_with_rain,
    cloud_with_snow: cloud_with_snow,
    cloud_with_lightning: cloud_with_lightning,
    tornado: tornado,
    fog: fog,
    wind_face: wind_face,
    cyclone: cyclone,
    rainbow: rainbow,
    closed_umbrella: closed_umbrella,
    open_umbrella: open_umbrella,
    umbrella: umbrella,
    parasol_on_ground: parasol_on_ground,
    zap: zap,
    snowflake: snowflake,
    snowman_with_snow: snowman_with_snow,
    snowman: snowman,
    comet: comet,
    fire: fire,
    droplet: droplet,
    ocean: ocean,
    jack_o_lantern: jack_o_lantern,
    christmas_tree: christmas_tree,
    fireworks: fireworks,
    sparkler: sparkler,
    firecracker: firecracker,
    sparkles: sparkles,
    balloon: balloon,
    tada: tada,
    confetti_ball: confetti_ball,
    tanabata_tree: tanabata_tree,
    bamboo: bamboo,
    dolls: dolls,
    flags: flags,
    wind_chime: wind_chime,
    rice_scene: rice_scene,
    red_envelope: red_envelope,
    ribbon: ribbon,
    gift: gift,
    reminder_ribbon: reminder_ribbon,
    tickets: tickets,
    ticket: ticket,
    medal_military: medal_military,
    trophy: trophy,
    medal_sports: medal_sports,
    "1st_place_medal": "\ud83e\udd47",
    "2nd_place_medal": "\ud83e\udd48",
    "3rd_place_medal": "\ud83e\udd49",
    soccer: soccer,
    baseball: baseball,
    softball: softball,
    basketball: basketball,
    volleyball: volleyball,
    football: football,
    rugby_football: rugby_football,
    tennis: tennis,
    flying_disc: flying_disc,
    bowling: bowling,
    cricket_game: cricket_game,
    field_hockey: field_hockey,
    ice_hockey: ice_hockey,
    lacrosse: lacrosse,
    ping_pong: ping_pong,
    badminton: badminton,
    boxing_glove: boxing_glove,
    martial_arts_uniform: martial_arts_uniform,
    goal_net: goal_net,
    golf: golf,
    ice_skate: ice_skate,
    fishing_pole_and_fish: fishing_pole_and_fish,
    diving_mask: diving_mask,
    running_shirt_with_sash: running_shirt_with_sash,
    ski: ski,
    sled: sled,
    curling_stone: curling_stone,
    dart: dart,
    yo_yo: yo_yo,
    kite: kite,
    "8ball": "\ud83c\udfb1",
    crystal_ball: crystal_ball,
    magic_wand: magic_wand,
    nazar_amulet: nazar_amulet,
    video_game: video_game,
    joystick: joystick,
    slot_machine: slot_machine,
    game_die: game_die,
    jigsaw: jigsaw,
    teddy_bear: teddy_bear,
    pinata: pinata,
    nesting_dolls: nesting_dolls,
    spades: spades$1,
    hearts: hearts$1,
    diamonds: diamonds,
    clubs: clubs$1,
    chess_pawn: chess_pawn,
    black_joker: black_joker,
    mahjong: mahjong,
    flower_playing_cards: flower_playing_cards,
    performing_arts: performing_arts,
    framed_picture: framed_picture,
    art: art,
    thread: thread,
    sewing_needle: sewing_needle,
    yarn: yarn,
    knot: knot,
    eyeglasses: eyeglasses,
    dark_sunglasses: dark_sunglasses,
    goggles: goggles,
    lab_coat: lab_coat,
    safety_vest: safety_vest,
    necktie: necktie,
    shirt: shirt,
    tshirt: tshirt,
    jeans: jeans,
    scarf: scarf,
    gloves: gloves,
    coat: coat,
    socks: socks,
    dress: dress,
    kimono: kimono,
    sari: sari,
    one_piece_swimsuit: one_piece_swimsuit,
    swim_brief: swim_brief,
    shorts: shorts,
    bikini: bikini,
    womans_clothes: womans_clothes,
    purse: purse,
    handbag: handbag,
    pouch: pouch,
    shopping: shopping,
    school_satchel: school_satchel,
    thong_sandal: thong_sandal,
    mans_shoe: mans_shoe,
    shoe: shoe,
    athletic_shoe: athletic_shoe,
    hiking_boot: hiking_boot,
    flat_shoe: flat_shoe,
    high_heel: high_heel,
    sandal: sandal,
    ballet_shoes: ballet_shoes,
    boot: boot,
    crown: crown,
    womans_hat: womans_hat,
    tophat: tophat,
    mortar_board: mortar_board,
    billed_cap: billed_cap,
    military_helmet: military_helmet,
    rescue_worker_helmet: rescue_worker_helmet,
    prayer_beads: prayer_beads,
    lipstick: lipstick,
    ring: ring$1,
    gem: gem,
    mute: mute,
    speaker: speaker,
    sound: sound,
    loud_sound: loud_sound,
    loudspeaker: loudspeaker,
    mega: mega,
    postal_horn: postal_horn,
    bell: bell,
    no_bell: no_bell,
    musical_score: musical_score,
    musical_note: musical_note,
    notes: notes,
    studio_microphone: studio_microphone,
    level_slider: level_slider,
    control_knobs: control_knobs,
    microphone: microphone,
    headphones: headphones,
    radio: radio,
    saxophone: saxophone,
    accordion: accordion,
    guitar: guitar,
    musical_keyboard: musical_keyboard,
    trumpet: trumpet,
    violin: violin,
    banjo: banjo,
    drum: drum,
    long_drum: long_drum,
    iphone: iphone,
    calling: calling,
    phone: phone$1,
    telephone: telephone,
    telephone_receiver: telephone_receiver,
    pager: pager,
    fax: fax,
    battery: battery,
    electric_plug: electric_plug,
    computer: computer,
    desktop_computer: desktop_computer,
    printer: printer,
    keyboard: keyboard,
    computer_mouse: computer_mouse,
    trackball: trackball,
    minidisc: minidisc,
    floppy_disk: floppy_disk,
    cd: cd,
    dvd: dvd,
    abacus: abacus,
    movie_camera: movie_camera,
    film_strip: film_strip,
    film_projector: film_projector,
    clapper: clapper,
    tv: tv,
    camera: camera,
    camera_flash: camera_flash,
    video_camera: video_camera,
    vhs: vhs,
    mag: mag,
    mag_right: mag_right,
    candle: candle,
    bulb: bulb,
    flashlight: flashlight,
    izakaya_lantern: izakaya_lantern,
    lantern: lantern,
    diya_lamp: diya_lamp,
    notebook_with_decorative_cover: notebook_with_decorative_cover,
    closed_book: closed_book,
    book: book,
    open_book: open_book,
    green_book: green_book,
    blue_book: blue_book,
    orange_book: orange_book,
    books: books,
    notebook: notebook,
    ledger: ledger,
    page_with_curl: page_with_curl,
    scroll: scroll,
    page_facing_up: page_facing_up,
    newspaper: newspaper,
    newspaper_roll: newspaper_roll,
    bookmark_tabs: bookmark_tabs,
    bookmark: bookmark,
    label: label,
    moneybag: moneybag,
    coin: coin,
    yen: yen$1,
    dollar: dollar$1,
    euro: euro$1,
    pound: pound$1,
    money_with_wings: money_with_wings,
    credit_card: credit_card,
    receipt: receipt,
    chart: chart,
    envelope: envelope,
    email: email,
    "e-mail": "\ud83d\udce7",
    incoming_envelope: incoming_envelope,
    envelope_with_arrow: envelope_with_arrow,
    outbox_tray: outbox_tray,
    inbox_tray: inbox_tray,
    package: "\ud83d\udce6",
    mailbox: mailbox,
    mailbox_closed: mailbox_closed,
    mailbox_with_mail: mailbox_with_mail,
    mailbox_with_no_mail: mailbox_with_no_mail,
    postbox: postbox,
    ballot_box: ballot_box,
    pencil2: pencil2,
    black_nib: black_nib,
    fountain_pen: fountain_pen,
    pen: pen,
    paintbrush: paintbrush,
    crayon: crayon,
    memo: memo,
    pencil: pencil,
    briefcase: briefcase,
    file_folder: file_folder,
    open_file_folder: open_file_folder,
    card_index_dividers: card_index_dividers,
    date: date,
    calendar: calendar,
    spiral_notepad: spiral_notepad,
    spiral_calendar: spiral_calendar,
    card_index: card_index,
    chart_with_upwards_trend: chart_with_upwards_trend,
    chart_with_downwards_trend: chart_with_downwards_trend,
    bar_chart: bar_chart,
    clipboard: clipboard,
    pushpin: pushpin,
    round_pushpin: round_pushpin,
    paperclip: paperclip,
    paperclips: paperclips,
    straight_ruler: straight_ruler,
    triangular_ruler: triangular_ruler,
    scissors: scissors,
    card_file_box: card_file_box,
    file_cabinet: file_cabinet,
    wastebasket: wastebasket,
    lock: lock,
    unlock: unlock,
    lock_with_ink_pen: lock_with_ink_pen,
    closed_lock_with_key: closed_lock_with_key,
    key: key,
    old_key: old_key,
    hammer: hammer,
    axe: axe,
    pick: pick,
    hammer_and_pick: hammer_and_pick,
    hammer_and_wrench: hammer_and_wrench,
    dagger: dagger$1,
    crossed_swords: crossed_swords,
    gun: gun,
    boomerang: boomerang,
    bow_and_arrow: bow_and_arrow,
    shield: shield,
    carpentry_saw: carpentry_saw,
    wrench: wrench,
    screwdriver: screwdriver,
    nut_and_bolt: nut_and_bolt,
    gear: gear,
    clamp: clamp,
    balance_scale: balance_scale,
    probing_cane: probing_cane,
    link: link$1,
    chains: chains,
    hook: hook,
    toolbox: toolbox,
    magnet: magnet,
    ladder: ladder,
    alembic: alembic,
    test_tube: test_tube,
    petri_dish: petri_dish,
    dna: dna,
    microscope: microscope,
    telescope: telescope,
    satellite: satellite,
    syringe: syringe,
    drop_of_blood: drop_of_blood,
    pill: pill,
    adhesive_bandage: adhesive_bandage,
    stethoscope: stethoscope,
    door: door,
    elevator: elevator,
    mirror: mirror,
    window: window,
    bed: bed,
    couch_and_lamp: couch_and_lamp,
    chair: chair,
    toilet: toilet,
    plunger: plunger,
    shower: shower,
    bathtub: bathtub,
    mouse_trap: mouse_trap,
    razor: razor,
    lotion_bottle: lotion_bottle,
    safety_pin: safety_pin,
    broom: broom,
    basket: basket,
    roll_of_paper: roll_of_paper,
    bucket: bucket,
    soap: soap,
    toothbrush: toothbrush,
    sponge: sponge,
    fire_extinguisher: fire_extinguisher,
    shopping_cart: shopping_cart,
    smoking: smoking,
    coffin: coffin,
    headstone: headstone,
    funeral_urn: funeral_urn,
    moyai: moyai,
    placard: placard,
    atm: atm,
    put_litter_in_its_place: put_litter_in_its_place,
    potable_water: potable_water,
    wheelchair: wheelchair,
    mens: mens,
    womens: womens,
    restroom: restroom,
    baby_symbol: baby_symbol,
    wc: wc,
    passport_control: passport_control,
    customs: customs,
    baggage_claim: baggage_claim,
    left_luggage: left_luggage,
    warning: warning,
    children_crossing: children_crossing,
    no_entry: no_entry,
    no_entry_sign: no_entry_sign,
    no_bicycles: no_bicycles,
    no_smoking: no_smoking,
    do_not_litter: do_not_litter,
    "non-potable_water": "\ud83d\udeb1",
    no_pedestrians: no_pedestrians,
    no_mobile_phones: no_mobile_phones,
    underage: underage,
    radioactive: radioactive,
    biohazard: biohazard,
    arrow_up: arrow_up,
    arrow_upper_right: arrow_upper_right,
    arrow_right: arrow_right,
    arrow_lower_right: arrow_lower_right,
    arrow_down: arrow_down,
    arrow_lower_left: arrow_lower_left,
    arrow_left: arrow_left,
    arrow_upper_left: arrow_upper_left,
    arrow_up_down: arrow_up_down,
    left_right_arrow: left_right_arrow,
    leftwards_arrow_with_hook: leftwards_arrow_with_hook,
    arrow_right_hook: arrow_right_hook,
    arrow_heading_up: arrow_heading_up,
    arrow_heading_down: arrow_heading_down,
    arrows_clockwise: arrows_clockwise,
    arrows_counterclockwise: arrows_counterclockwise,
    back: back,
    end: end,
    on: on,
    soon: soon,
    top: top$1,
    place_of_worship: place_of_worship,
    atom_symbol: atom_symbol,
    om: om,
    star_of_david: star_of_david,
    wheel_of_dharma: wheel_of_dharma,
    yin_yang: yin_yang,
    latin_cross: latin_cross,
    orthodox_cross: orthodox_cross,
    star_and_crescent: star_and_crescent,
    peace_symbol: peace_symbol,
    menorah: menorah,
    six_pointed_star: six_pointed_star,
    aries: aries,
    taurus: taurus,
    gemini: gemini,
    cancer: cancer,
    leo: leo,
    virgo: virgo,
    libra: libra,
    scorpius: scorpius,
    sagittarius: sagittarius,
    capricorn: capricorn,
    aquarius: aquarius,
    pisces: pisces,
    ophiuchus: ophiuchus,
    twisted_rightwards_arrows: twisted_rightwards_arrows,
    repeat: repeat,
    repeat_one: repeat_one,
    arrow_forward: arrow_forward,
    fast_forward: fast_forward,
    next_track_button: next_track_button,
    play_or_pause_button: play_or_pause_button,
    arrow_backward: arrow_backward,
    rewind: rewind,
    previous_track_button: previous_track_button,
    arrow_up_small: arrow_up_small,
    arrow_double_up: arrow_double_up,
    arrow_down_small: arrow_down_small,
    arrow_double_down: arrow_double_down,
    pause_button: pause_button,
    stop_button: stop_button,
    record_button: record_button,
    eject_button: eject_button,
    cinema: cinema,
    low_brightness: low_brightness,
    high_brightness: high_brightness,
    signal_strength: signal_strength,
    vibration_mode: vibration_mode,
    mobile_phone_off: mobile_phone_off,
    female_sign: female_sign,
    male_sign: male_sign,
    transgender_symbol: transgender_symbol,
    heavy_multiplication_x: heavy_multiplication_x,
    heavy_plus_sign: heavy_plus_sign,
    heavy_minus_sign: heavy_minus_sign,
    heavy_division_sign: heavy_division_sign,
    infinity: infinity,
    bangbang: bangbang,
    interrobang: interrobang,
    question: question,
    grey_question: grey_question,
    grey_exclamation: grey_exclamation,
    exclamation: exclamation,
    heavy_exclamation_mark: heavy_exclamation_mark,
    wavy_dash: wavy_dash,
    currency_exchange: currency_exchange,
    heavy_dollar_sign: heavy_dollar_sign,
    medical_symbol: medical_symbol,
    recycle: recycle,
    fleur_de_lis: fleur_de_lis,
    trident: trident,
    name_badge: name_badge,
    beginner: beginner,
    o: o,
    white_check_mark: white_check_mark,
    ballot_box_with_check: ballot_box_with_check,
    heavy_check_mark: heavy_check_mark,
    x: x,
    negative_squared_cross_mark: negative_squared_cross_mark,
    curly_loop: curly_loop,
    loop: loop,
    part_alternation_mark: part_alternation_mark,
    eight_spoked_asterisk: eight_spoked_asterisk,
    eight_pointed_black_star: eight_pointed_black_star,
    sparkle: sparkle,
    copyright: copyright,
    registered: registered,
    tm: tm,
    hash: hash,
    asterisk: asterisk,
    zero: zero$1,
    one: one,
    two: two,
    three: three,
    four: four,
    five: five,
    six: six,
    seven: seven,
    eight: eight,
    nine: nine,
    keycap_ten: keycap_ten,
    capital_abcd: capital_abcd,
    abcd: abcd,
    symbols: symbols,
    abc: abc,
    a: a,
    ab: ab,
    b: b,
    cl: cl,
    cool: cool,
    free: free,
    information_source: information_source,
    id: id,
    m: m,
    new: "\ud83c\udd95",
    ng: ng,
    o2: o2,
    ok: ok,
    parking: parking,
    sos: sos,
    up: up,
    vs: vs,
    koko: koko,
    sa: sa,
    ideograph_advantage: ideograph_advantage,
    accept: accept,
    congratulations: congratulations,
    secret: secret,
    u6e80: u6e80,
    red_circle: red_circle,
    orange_circle: orange_circle,
    yellow_circle: yellow_circle,
    green_circle: green_circle,
    large_blue_circle: large_blue_circle,
    purple_circle: purple_circle,
    brown_circle: brown_circle,
    black_circle: black_circle,
    white_circle: white_circle,
    red_square: red_square,
    orange_square: orange_square,
    yellow_square: yellow_square,
    green_square: green_square,
    blue_square: blue_square,
    purple_square: purple_square,
    brown_square: brown_square,
    black_large_square: black_large_square,
    white_large_square: white_large_square,
    black_medium_square: black_medium_square,
    white_medium_square: white_medium_square,
    black_medium_small_square: black_medium_small_square,
    white_medium_small_square: white_medium_small_square,
    black_small_square: black_small_square,
    white_small_square: white_small_square,
    large_orange_diamond: large_orange_diamond,
    large_blue_diamond: large_blue_diamond,
    small_orange_diamond: small_orange_diamond,
    small_blue_diamond: small_blue_diamond,
    small_red_triangle: small_red_triangle,
    small_red_triangle_down: small_red_triangle_down,
    diamond_shape_with_a_dot_inside: diamond_shape_with_a_dot_inside,
    radio_button: radio_button,
    white_square_button: white_square_button,
    black_square_button: black_square_button,
    checkered_flag: checkered_flag,
    triangular_flag_on_post: triangular_flag_on_post,
    crossed_flags: crossed_flags,
    black_flag: black_flag,
    white_flag: white_flag,
    rainbow_flag: rainbow_flag,
    transgender_flag: transgender_flag,
    pirate_flag: pirate_flag,
    ascension_island: ascension_island,
    andorra: andorra,
    united_arab_emirates: united_arab_emirates,
    afghanistan: afghanistan,
    antigua_barbuda: antigua_barbuda,
    anguilla: anguilla,
    albania: albania,
    armenia: armenia,
    angola: angola,
    antarctica: antarctica,
    argentina: argentina,
    american_samoa: american_samoa,
    austria: austria,
    australia: australia,
    aruba: aruba,
    aland_islands: aland_islands,
    azerbaijan: azerbaijan,
    bosnia_herzegovina: bosnia_herzegovina,
    barbados: barbados,
    bangladesh: bangladesh,
    belgium: belgium,
    burkina_faso: burkina_faso,
    bulgaria: bulgaria,
    bahrain: bahrain,
    burundi: burundi,
    benin: benin,
    st_barthelemy: st_barthelemy,
    bermuda: bermuda,
    brunei: brunei,
    bolivia: bolivia,
    caribbean_netherlands: caribbean_netherlands,
    brazil: brazil,
    bahamas: bahamas,
    bhutan: bhutan,
    bouvet_island: bouvet_island,
    botswana: botswana,
    belarus: belarus,
    belize: belize,
    canada: canada,
    cocos_islands: cocos_islands,
    congo_kinshasa: congo_kinshasa,
    central_african_republic: central_african_republic,
    congo_brazzaville: congo_brazzaville,
    switzerland: switzerland,
    cote_divoire: cote_divoire,
    cook_islands: cook_islands,
    chile: chile,
    cameroon: cameroon,
    cn: cn,
    colombia: colombia,
    clipperton_island: clipperton_island,
    costa_rica: costa_rica,
    cuba: cuba,
    cape_verde: cape_verde,
    curacao: curacao,
    christmas_island: christmas_island,
    cyprus: cyprus,
    czech_republic: czech_republic,
    de: de,
    diego_garcia: diego_garcia,
    djibouti: djibouti,
    denmark: denmark,
    dominica: dominica,
    dominican_republic: dominican_republic,
    algeria: algeria,
    ceuta_melilla: ceuta_melilla,
    ecuador: ecuador,
    estonia: estonia,
    egypt: egypt,
    western_sahara: western_sahara,
    eritrea: eritrea,
    es: es,
    ethiopia: ethiopia,
    eu: eu,
    european_union: european_union,
    finland: finland,
    fiji: fiji,
    falkland_islands: falkland_islands,
    micronesia: micronesia,
    faroe_islands: faroe_islands,
    fr: fr,
    gabon: gabon,
    gb: gb,
    uk: uk,
    grenada: grenada,
    georgia: georgia,
    french_guiana: french_guiana,
    guernsey: guernsey,
    ghana: ghana,
    gibraltar: gibraltar,
    greenland: greenland,
    gambia: gambia,
    guinea: guinea,
    guadeloupe: guadeloupe,
    equatorial_guinea: equatorial_guinea,
    greece: greece,
    south_georgia_south_sandwich_islands: south_georgia_south_sandwich_islands,
    guatemala: guatemala,
    guam: guam,
    guinea_bissau: guinea_bissau,
    guyana: guyana,
    hong_kong: hong_kong,
    heard_mcdonald_islands: heard_mcdonald_islands,
    honduras: honduras,
    croatia: croatia,
    haiti: haiti,
    hungary: hungary,
    canary_islands: canary_islands,
    indonesia: indonesia,
    ireland: ireland,
    israel: israel,
    isle_of_man: isle_of_man,
    india: india,
    british_indian_ocean_territory: british_indian_ocean_territory,
    iraq: iraq,
    iran: iran,
    iceland: iceland,
    it: it$1,
    jersey: jersey,
    jamaica: jamaica,
    jordan: jordan,
    jp: jp,
    kenya: kenya,
    kyrgyzstan: kyrgyzstan,
    cambodia: cambodia,
    kiribati: kiribati,
    comoros: comoros,
    st_kitts_nevis: st_kitts_nevis,
    north_korea: north_korea,
    kr: kr,
    kuwait: kuwait,
    cayman_islands: cayman_islands,
    kazakhstan: kazakhstan,
    laos: laos,
    lebanon: lebanon,
    st_lucia: st_lucia,
    liechtenstein: liechtenstein,
    sri_lanka: sri_lanka,
    liberia: liberia,
    lesotho: lesotho,
    lithuania: lithuania,
    luxembourg: luxembourg,
    latvia: latvia,
    libya: libya,
    morocco: morocco,
    monaco: monaco,
    moldova: moldova,
    montenegro: montenegro,
    st_martin: st_martin,
    madagascar: madagascar,
    marshall_islands: marshall_islands,
    macedonia: macedonia,
    mali: mali,
    myanmar: myanmar,
    mongolia: mongolia,
    macau: macau,
    northern_mariana_islands: northern_mariana_islands,
    martinique: martinique,
    mauritania: mauritania,
    montserrat: montserrat,
    malta: malta,
    mauritius: mauritius,
    maldives: maldives,
    malawi: malawi,
    mexico: mexico,
    malaysia: malaysia,
    mozambique: mozambique,
    namibia: namibia,
    new_caledonia: new_caledonia,
    niger: niger,
    norfolk_island: norfolk_island,
    nigeria: nigeria,
    nicaragua: nicaragua,
    netherlands: netherlands,
    norway: norway,
    nepal: nepal,
    nauru: nauru,
    niue: niue,
    new_zealand: new_zealand,
    oman: oman,
    panama: panama,
    peru: peru,
    french_polynesia: french_polynesia,
    papua_new_guinea: papua_new_guinea,
    philippines: philippines,
    pakistan: pakistan,
    poland: poland,
    st_pierre_miquelon: st_pierre_miquelon,
    pitcairn_islands: pitcairn_islands,
    puerto_rico: puerto_rico,
    palestinian_territories: palestinian_territories,
    portugal: portugal,
    palau: palau,
    paraguay: paraguay,
    qatar: qatar,
    reunion: reunion,
    romania: romania,
    serbia: serbia,
    ru: ru,
    rwanda: rwanda,
    saudi_arabia: saudi_arabia,
    solomon_islands: solomon_islands,
    seychelles: seychelles,
    sudan: sudan,
    sweden: sweden,
    singapore: singapore,
    st_helena: st_helena,
    slovenia: slovenia,
    svalbard_jan_mayen: svalbard_jan_mayen,
    slovakia: slovakia,
    sierra_leone: sierra_leone,
    san_marino: san_marino,
    senegal: senegal,
    somalia: somalia,
    suriname: suriname,
    south_sudan: south_sudan,
    sao_tome_principe: sao_tome_principe,
    el_salvador: el_salvador,
    sint_maarten: sint_maarten,
    syria: syria,
    swaziland: swaziland,
    tristan_da_cunha: tristan_da_cunha,
    turks_caicos_islands: turks_caicos_islands,
    chad: chad,
    french_southern_territories: french_southern_territories,
    togo: togo,
    thailand: thailand,
    tajikistan: tajikistan,
    tokelau: tokelau,
    timor_leste: timor_leste,
    turkmenistan: turkmenistan,
    tunisia: tunisia,
    tonga: tonga,
    tr: tr,
    trinidad_tobago: trinidad_tobago,
    tuvalu: tuvalu,
    taiwan: taiwan,
    tanzania: tanzania,
    ukraine: ukraine,
    uganda: uganda,
    us_outlying_islands: us_outlying_islands,
    united_nations: united_nations,
    us: us,
    uruguay: uruguay,
    uzbekistan: uzbekistan,
    vatican_city: vatican_city,
    st_vincent_grenadines: st_vincent_grenadines,
    venezuela: venezuela,
    british_virgin_islands: british_virgin_islands,
    us_virgin_islands: us_virgin_islands,
    vietnam: vietnam,
    vanuatu: vanuatu,
    wallis_futuna: wallis_futuna,
    samoa: samoa,
    kosovo: kosovo,
    yemen: yemen,
    mayotte: mayotte,
    south_africa: south_africa,
    zambia: zambia,
    zimbabwe: zimbabwe,
    england: england,
    scotland: scotland,
    wales: wales
  };
  // Emoticons -> Emoji mapping.
    var shortcuts = {
    angry: [ ">:(", ">:-(" ],
    blush: [ ':")', ':-")' ],
    broken_heart: [ "</3", "<\\3" ],
    // :\ and :-\ not used because of conflict with markdown escaping
    confused: [ ":/", ":-/" ],
    // twemoji shows question
    cry: [ ":'(", ":'-(", ":,(", ":,-(" ],
    frowning: [ ":(", ":-(" ],
    heart: [ "<3" ],
    imp: [ "]:(", "]:-(" ],
    innocent: [ "o:)", "O:)", "o:-)", "O:-)", "0:)", "0:-)" ],
    joy: [ ":')", ":'-)", ":,)", ":,-)", ":'D", ":'-D", ":,D", ":,-D" ],
    kissing: [ ":*", ":-*" ],
    laughing: [ "x-)", "X-)" ],
    neutral_face: [ ":|", ":-|" ],
    open_mouth: [ ":o", ":-o", ":O", ":-O" ],
    rage: [ ":@", ":-@" ],
    smile: [ ":D", ":-D" ],
    smiley: [ ":)", ":-)" ],
    smiling_imp: [ "]:)", "]:-)" ],
    sob: [ ":,'(", ":,'-(", ";(", ";-(" ],
    stuck_out_tongue: [ ":P", ":-P" ],
    sunglasses: [ "8-)", "B-)" ],
    sweat: [ ",:(", ",:-(" ],
    sweat_smile: [ ",:)", ",:-)" ],
    unamused: [ ":s", ":-S", ":z", ":-Z", ":$", ":-$" ],
    wink: [ ";)", ";-)" ]
  };
  var render = function emoji_html(tokens, idx /*, options, env */) {
    return tokens[idx].content;
  };
  // Emojies & shortcuts replacement logic.
    var replace = function create_rule(md, emojies, shortcuts, scanRE, replaceRE) {
    var arrayReplaceAt = md.utils.arrayReplaceAt, ucm = md.utils.lib.ucmicro, ZPCc = new RegExp([ ucm.Z.source, ucm.P.source, ucm.Cc.source ].join("|"));
    function splitTextToken(text, level, Token) {
      var token, last_pos = 0, nodes = [];
      text.replace(replaceRE, (function(match, offset, src) {
        var emoji_name;
        // Validate emoji name
                if (shortcuts.hasOwnProperty(match)) {
          // replace shortcut with full name
          emoji_name = shortcuts[match];
          // Don't allow letters before any shortcut (as in no ":/" in http://)
                    if (offset > 0 && !ZPCc.test(src[offset - 1])) {
            return;
          }
          // Don't allow letters after any shortcut
                    if (offset + match.length < src.length && !ZPCc.test(src[offset + match.length])) {
            return;
          }
        } else {
          emoji_name = match.slice(1, -1);
        }
        // Add new tokens to pending list
                if (offset > last_pos) {
          token = new Token("text", "", 0);
          token.content = text.slice(last_pos, offset);
          nodes.push(token);
        }
        token = new Token("emoji", "", 0);
        token.markup = emoji_name;
        token.content = emojies[emoji_name];
        nodes.push(token);
        last_pos = offset + match.length;
      }));
      if (last_pos < text.length) {
        token = new Token("text", "", 0);
        token.content = text.slice(last_pos);
        nodes.push(token);
      }
      return nodes;
    }
    return function emoji_replace(state) {
      var i, j, l, tokens, token, blockTokens = state.tokens, autolinkLevel = 0;
      for (j = 0, l = blockTokens.length; j < l; j++) {
        if (blockTokens[j].type !== "inline") {
          continue;
        }
        tokens = blockTokens[j].children;
        // We scan from the end, to keep position when new tags added.
        // Use reversed logic in links start/end match
                for (i = tokens.length - 1; i >= 0; i--) {
          token = tokens[i];
          if (token.type === "link_open" || token.type === "link_close") {
            if (token.info === "auto") {
              autolinkLevel -= token.nesting;
            }
          }
          if (token.type === "text" && autolinkLevel === 0 && scanRE.test(token.content)) {
            // replace current node
            blockTokens[j].children = tokens = arrayReplaceAt(tokens, i, splitTextToken(token.content, token.level, state.Token));
          }
        }
      }
    };
  };
  // Convert input options to more useable format
    function quoteRE(str) {
    return str.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
  }
  var normalize_opts = function normalize_opts(options) {
    var emojies = options.defs, shortcuts;
    // Filter emojies by whitelist, if needed
        if (options.enabled.length) {
      emojies = Object.keys(emojies).reduce((function(acc, key) {
        if (options.enabled.indexOf(key) >= 0) {
          acc[key] = emojies[key];
        }
        return acc;
      }), {});
    }
    // Flatten shortcuts to simple object: { alias: emoji_name }
        shortcuts = Object.keys(options.shortcuts).reduce((function(acc, key) {
      // Skip aliases for filtered emojies, to reduce regexp
      if (!emojies[key]) {
        return acc;
      }
      if (Array.isArray(options.shortcuts[key])) {
        options.shortcuts[key].forEach((function(alias) {
          acc[alias] = key;
        }));
        return acc;
      }
      acc[options.shortcuts[key]] = key;
      return acc;
    }), {});
    var keys = Object.keys(emojies), names;
    // If no definitions are given, return empty regex to avoid replacements with 'undefined'.
        if (keys.length === 0) {
      names = "^$";
    } else {
      // Compile regexp
      names = keys.map((function(name) {
        return ":" + name + ":";
      })).concat(Object.keys(shortcuts)).sort().reverse().map((function(name) {
        return quoteRE(name);
      })).join("|");
    }
    var scanRE = RegExp(names);
    var replaceRE = RegExp(names, "g");
    return {
      defs: emojies,
      shortcuts: shortcuts,
      scanRE: scanRE,
      replaceRE: replaceRE
    };
  };
  var bare = function emoji_plugin(md, options) {
    var defaults = {
      defs: {},
      shortcuts: {},
      enabled: []
    };
    var opts = normalize_opts(md.utils.assign({}, defaults, options || {}));
    md.renderer.rules.emoji = render;
    md.core.ruler.push("emoji", replace(md, opts.defs, opts.shortcuts, opts.scanRE, opts.replaceRE));
  };
  var markdownItEmoji = function emoji_plugin(md, options) {
    var defaults = {
      defs: emojies_defs,
      shortcuts: shortcuts,
      enabled: []
    };
    var opts = md.utils.assign({}, defaults, options || {});
    bare(md, opts);
  };
  // Process block-level custom containers
    var markdownItContainer = function container_plugin(md, name, options) {
    // Second param may be useful if you decide
    // to increase minimal allowed marker length
    function validateDefault(params /*, markup*/) {
      return params.trim().split(" ", 2)[0] === name;
    }
    function renderDefault(tokens, idx, _options, env, slf) {
      // add a class to the opening tag
      if (tokens[idx].nesting === 1) {
        tokens[idx].attrJoin("class", name);
      }
      return slf.renderToken(tokens, idx, _options, env, slf);
    }
    options = options || {};
    var min_markers = 3, marker_str = options.marker || ":", marker_char = marker_str.charCodeAt(0), marker_len = marker_str.length, validate = options.validate || validateDefault, render = options.render || renderDefault;
    function container(state, startLine, endLine, silent) {
      var pos, nextLine, marker_count, markup, params, token, old_parent, old_line_max, auto_closed = false, start = state.bMarks[startLine] + state.tShift[startLine], max = state.eMarks[startLine];
      // Check out the first character quickly,
      // this should filter out most of non-containers
      
            if (marker_char !== state.src.charCodeAt(start)) {
        return false;
      }
      // Check out the rest of the marker string
      
            for (pos = start + 1; pos <= max; pos++) {
        if (marker_str[(pos - start) % marker_len] !== state.src[pos]) {
          break;
        }
      }
      marker_count = Math.floor((pos - start) / marker_len);
      if (marker_count < min_markers) {
        return false;
      }
      pos -= (pos - start) % marker_len;
      markup = state.src.slice(start, pos);
      params = state.src.slice(pos, max);
      if (!validate(params, markup)) {
        return false;
      }
      // Since start is found, we can report success here in validation mode
      
            if (silent) {
        return true;
      }
      // Search for the end of the block
      
            nextLine = startLine;
      for (;;) {
        nextLine++;
        if (nextLine >= endLine) {
          // unclosed block should be autoclosed by end of document.
          // also block seems to be autoclosed by end of parent
          break;
        }
        start = state.bMarks[nextLine] + state.tShift[nextLine];
        max = state.eMarks[nextLine];
        if (start < max && state.sCount[nextLine] < state.blkIndent) {
          // non-empty line with negative indent should stop the list:
          // - ```
          //  test
          break;
        }
        if (marker_char !== state.src.charCodeAt(start)) {
          continue;
        }
        if (state.sCount[nextLine] - state.blkIndent >= 4) {
          // closing fence should be indented less than 4 spaces
          continue;
        }
        for (pos = start + 1; pos <= max; pos++) {
          if (marker_str[(pos - start) % marker_len] !== state.src[pos]) {
            break;
          }
        }
        // closing code fence must be at least as long as the opening one
                if (Math.floor((pos - start) / marker_len) < marker_count) {
          continue;
        }
        // make sure tail has spaces only
                pos -= (pos - start) % marker_len;
        pos = state.skipSpaces(pos);
        if (pos < max) {
          continue;
        }
        // found!
                auto_closed = true;
        break;
      }
      old_parent = state.parentType;
      old_line_max = state.lineMax;
      state.parentType = "container";
      // this will prevent lazy continuations from ever going past our end marker
            state.lineMax = nextLine;
      token = state.push("container_" + name + "_open", "div", 1);
      token.markup = markup;
      token.block = true;
      token.info = params;
      token.map = [ startLine, nextLine ];
      state.md.block.tokenize(state, startLine + 1, nextLine);
      token = state.push("container_" + name + "_close", "div", -1);
      token.markup = state.src.slice(start, pos);
      token.block = true;
      state.parentType = old_parent;
      state.lineMax = old_line_max;
      state.line = nextLine + (auto_closed ? 1 : 0);
      return true;
    }
    md.block.ruler.before("fence", "container_" + name, container, {
      alt: [ "paragraph", "reference", "blockquote", "list" ]
    });
    md.renderer.rules["container_" + name + "_open"] = render;
    md.renderer.rules["container_" + name + "_close"] = render;
  };
  var markdownItIns = function ins_plugin(md) {
    // Insert each marker as a separate text token, and add it to delimiter list
    function tokenize(state, silent) {
      var i, scanned, token, len, ch, start = state.pos, marker = state.src.charCodeAt(start);
      if (silent) {
        return false;
      }
      if (marker !== 43 /* + */) {
        return false;
      }
      scanned = state.scanDelims(state.pos, true);
      len = scanned.length;
      ch = String.fromCharCode(marker);
      if (len < 2) {
        return false;
      }
      if (len % 2) {
        token = state.push("text", "", 0);
        token.content = ch;
        len--;
      }
      for (i = 0; i < len; i += 2) {
        token = state.push("text", "", 0);
        token.content = ch + ch;
        if (!scanned.can_open && !scanned.can_close) {
          continue;
        }
        state.delimiters.push({
          marker: marker,
          length: 0,
          // disable "rule of 3" length checks meant for emphasis
          jump: i,
          token: state.tokens.length - 1,
          end: -1,
          open: scanned.can_open,
          close: scanned.can_close
        });
      }
      state.pos += scanned.length;
      return true;
    }
    // Walk through delimiter list and replace text tokens with tags
    
        function postProcess(state, delimiters) {
      var i, j, startDelim, endDelim, token, loneMarkers = [], max = delimiters.length;
      for (i = 0; i < max; i++) {
        startDelim = delimiters[i];
        if (startDelim.marker !== 43 /* + */) {
          continue;
        }
        if (startDelim.end === -1) {
          continue;
        }
        endDelim = delimiters[startDelim.end];
        token = state.tokens[startDelim.token];
        token.type = "ins_open";
        token.tag = "ins";
        token.nesting = 1;
        token.markup = "++";
        token.content = "";
        token = state.tokens[endDelim.token];
        token.type = "ins_close";
        token.tag = "ins";
        token.nesting = -1;
        token.markup = "++";
        token.content = "";
        if (state.tokens[endDelim.token - 1].type === "text" && state.tokens[endDelim.token - 1].content === "+") {
          loneMarkers.push(endDelim.token - 1);
        }
      }
      // If a marker sequence has an odd number of characters, it's splitted
      // like this: `~~~~~` -> `~` + `~~` + `~~`, leaving one marker at the
      // start of the sequence.
      
      // So, we have to move all those markers after subsequent s_close tags.
      
            while (loneMarkers.length) {
        i = loneMarkers.pop();
        j = i + 1;
        while (j < state.tokens.length && state.tokens[j].type === "ins_close") {
          j++;
        }
        j--;
        if (i !== j) {
          token = state.tokens[j];
          state.tokens[j] = state.tokens[i];
          state.tokens[i] = token;
        }
      }
    }
    md.inline.ruler.before("emphasis", "ins", tokenize);
    md.inline.ruler2.before("emphasis", "ins", (function(state) {
      var curr, tokens_meta = state.tokens_meta, max = (state.tokens_meta || []).length;
      postProcess(state, state.delimiters);
      for (curr = 0; curr < max; curr++) {
        if (tokens_meta[curr] && tokens_meta[curr].delimiters) {
          postProcess(state, tokens_meta[curr].delimiters);
        }
      }
    }));
  };
  var markdownItMark = function ins_plugin(md) {
    // Insert each marker as a separate text token, and add it to delimiter list
    function tokenize(state, silent) {
      var i, scanned, token, len, ch, start = state.pos, marker = state.src.charCodeAt(start);
      if (silent) {
        return false;
      }
      if (marker !== 61 /* = */) {
        return false;
      }
      scanned = state.scanDelims(state.pos, true);
      len = scanned.length;
      ch = String.fromCharCode(marker);
      if (len < 2) {
        return false;
      }
      if (len % 2) {
        token = state.push("text", "", 0);
        token.content = ch;
        len--;
      }
      for (i = 0; i < len; i += 2) {
        token = state.push("text", "", 0);
        token.content = ch + ch;
        if (!scanned.can_open && !scanned.can_close) {
          continue;
        }
        state.delimiters.push({
          marker: marker,
          length: 0,
          // disable "rule of 3" length checks meant for emphasis
          jump: i,
          token: state.tokens.length - 1,
          end: -1,
          open: scanned.can_open,
          close: scanned.can_close
        });
      }
      state.pos += scanned.length;
      return true;
    }
    // Walk through delimiter list and replace text tokens with tags
    
        function postProcess(state, delimiters) {
      var i, j, startDelim, endDelim, token, loneMarkers = [], max = delimiters.length;
      for (i = 0; i < max; i++) {
        startDelim = delimiters[i];
        if (startDelim.marker !== 61 /* = */) {
          continue;
        }
        if (startDelim.end === -1) {
          continue;
        }
        endDelim = delimiters[startDelim.end];
        token = state.tokens[startDelim.token];
        token.type = "mark_open";
        token.tag = "mark";
        token.nesting = 1;
        token.markup = "==";
        token.content = "";
        token = state.tokens[endDelim.token];
        token.type = "mark_close";
        token.tag = "mark";
        token.nesting = -1;
        token.markup = "==";
        token.content = "";
        if (state.tokens[endDelim.token - 1].type === "text" && state.tokens[endDelim.token - 1].content === "=") {
          loneMarkers.push(endDelim.token - 1);
        }
      }
      // If a marker sequence has an odd number of characters, it's splitted
      // like this: `~~~~~` -> `~` + `~~` + `~~`, leaving one marker at the
      // start of the sequence.
      
      // So, we have to move all those markers after subsequent s_close tags.
      
            while (loneMarkers.length) {
        i = loneMarkers.pop();
        j = i + 1;
        while (j < state.tokens.length && state.tokens[j].type === "mark_close") {
          j++;
        }
        j--;
        if (i !== j) {
          token = state.tokens[j];
          state.tokens[j] = state.tokens[i];
          state.tokens[i] = token;
        }
      }
    }
    md.inline.ruler.before("emphasis", "mark", tokenize);
    md.inline.ruler2.before("emphasis", "mark", (function(state) {
      var curr, tokens_meta = state.tokens_meta, max = (state.tokens_meta || []).length;
      postProcess(state, state.delimiters);
      for (curr = 0; curr < max; curr++) {
        if (tokens_meta[curr] && tokens_meta[curr].delimiters) {
          postProcess(state, tokens_meta[curr].delimiters);
        }
      }
    }));
  };
  var version$1 = "1.0.1";
  function Instance() {
    const self = function() {
      const instance = markdownIt();
      instance.use(markdownItSub);
      instance.use(markdownItSup);
      instance.use(markdownItFootnote);
      instance.use(markdownItDeflist);
      instance.use(markdownItAbbr);
      instance.use(markdownItEmoji);
      instance.use(markdownItContainer);
      instance.use(markdownItIns);
      instance.use(markdownItMark);
      return instance;
    }();
    return Elementary.Base.Merge(this, self);
  }
  const metadata = {
    version: version$1
  };
  exports.Instance = Instance;
  exports.metadata = metadata;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  return exports;
}({}, Elementary);
//# sourceMappingURL=markdown-notepad-pack.js.map
