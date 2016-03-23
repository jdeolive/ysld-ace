/**
 * Structure of the Ysld language that feeds the completer.
 */
var define = window.define || ace.define;
define('ysld/language', ['require','exports','module'], function(require, exports, module) {
  var colors = {
    aliceblue: "rgb(240,248,255)",
    yellowgreen: "rgb(154,205,50)",
    antiquewhite: "rgb(250,235,215)",
    aqua: "rgb(0,255,255)",
    aquamarine: "rgb(127,255,212)",
    azure: "rgb(240,255,255)",
    beige: "rgb(245,245,220)",
    bisque: "rgb(255,228,196)",
    black: "rgb(0,0,0)",
    blanchedalmond: "rgb(255,235,205)",
    blue: "rgb(0,0,255)",
    blueviolet: "rgb(138,43,226)",
    brown: "rgb(165,42,42)",
    burlywood: "rgb(222,184,135)",
    cadetblue: "rgb(95,158,160)",
    chartreuse: "rgb(127,255,0)",
    chocolate: "rgb(210,105,30)",
    coral: "rgb(255,127,80)",
    cornflowerblue: "rgb(100,149,237)",
    cornsilk: "rgb(255,248,220)",
    crimson: "rgb(220,20,60)",
    cyan: "rgb(0,255,255)",
    darkblue: "rgb(0,0,139)",
    darkcyan: "rgb(0,139,139)",
    darkgoldenrod: "rgb(184,134,11)",
    darkgray: "rgb(169,169,169)",
    darkgreen: "rgb(0,100,0)",
    darkkhaki: "rgb(189,183,107)",
    darkmagenta: "rgb(139,0,139)",
    darkolivegreen: "rgb(85,107,47)",
    darkorange: "rgb(255,140,0)",
    darkorchid: "rgb(153,50,204)",
    darkred: "rgb(139,0,0)",
    darksalmon: "rgb(233,150,122)",
    darkseagreen: "rgb(143,188,143)",
    darkslateblue: "rgb(72,61,139)",
    darkslategray: "rgb(47,79,79)",
    darkturquoise: "rgb(0,206,209)",
    darkviolet: "rgb(148,0,211)",
    deeppink: "rgb(255,20,147)",
    deepskyblue: "rgb(0,191,255)",
    dimgray: "rgb(105,105,105)",
    dodgerblue: "rgb(30,144,255)",
    firebrick: "rgb(178,34,34)",
    floralwhite: "rgb(255,250,240)",
    forestgreen: "rgb(34,139,34)",
    fuchsia: "rgb(255,0,255)",
    gainsboro: "rgb(220,220,220)",
    ghostwhite: "rgb(248,248,255)",
    gold: "rgb(255,215,0)",
    goldenrod: "rgb(218,165,32)",
    gray: "rgb(128,128,128)",
    green: "rgb(0,128,0)",
    greenyellow: "rgb(173,255,47)",
    honeydew: "rgb(240,255,240)",
    hotpink: "rgb(255,105,180)",
    indianred: "rgb(205,92,92)",
    indigo: "rgb(75,0,130)",
    ivory: "rgb(255,255,240)",
    khaki: "rgb(240,230,140)",
    lavender: "rgb(230,230,250)",
    lavenderblush: "rgb(255,240,245)",
    lawngreen: "rgb(124,252,0)",
    lemonchiffon: "rgb(255,250,205)",
    lightblue: "rgb(173,216,230)",
    lightcoral: "rgb(240,128,128)",
    lightcyan: "rgb(224,255,255)",
    lightgoldenrodyellow: "rgb(250,250,210)",
    lightgreen: "rgb(144,238,144)",
    lightgrey: "rgb(211,211,211)",
    lightpink: "rgb(255,182,193)",
    lightsalmon: "rgb(255,160,122)",
    lightseagreen: "rgb(32,178,170)",
    lightskyblue: "rgb(135,206,250)",
    lightslategray: "rgb(119,136,153)",
    lightsteelblue: "rgb(176,196,222)",
    lightyellow: "rgb(255,255,224)",
    lime: "rgb(0,255,0)",
    limegreen: "rgb(50,205,50)",
    linen: "rgb(250,240,230)",
    magenta: "rgb(255,0,255)",
    maroon: "rgb(128,0,0)",
    mediumaquamarine: "rgb(102,205,170)",
    mediumblue: "rgb(0,0,205)",
    mediumorchid: "rgb(186,85,211)",
    mediumpurple: "rgb(147,112,219)",
    mediumseagreen: "rgb(60,179,113)",
    mediumslateblue: "rgb(123,104,238)",
    mediumspringgreen: "rgb(0,250,154)",
    mediumturquoise: "rgb(72,209,204)",
    mediumvioletred: "rgb(199,21,133)",
    midnightblue: "rgb(25,25,112)",
    mintcream: "rgb(245,255,250)",
    mistyrose: "rgb(255,228,225)",
    moccasin: "rgb(255,228,181)",
    navajowhite: "rgb(255,222,173)",
    navy: "rgb(0,0,128)",
    oldlace: "rgb(253,245,230)",
    olive: "rgb(128,128,0)",
    olivedrab: "rgb(107,142,35)",
    orange: "rgb(255,165,0)",
    orangered: "rgb(255,69,0)",
    orchid: "rgb(218,112,214)",
    palegoldenrod: "rgb(238,232,170)",
    palegreen: "rgb(152,251,152)",
    paleturquoise: "rgb(175,238,238)",
    palevioletred: "rgb(219,112,147)",
    papayawhip: "rgb(255,239,213)",
    peachpuff: "rgb(255,218,185)",
    peru: "rgb(205,133,63)",
    pink: "rgb(255,192,203)",
    plum: "rgb(221,160,221)",
    powderblue: "rgb(176,224,230)",
    purple: "rgb(128,0,128)",
    red: "rgb(255,0,0)",
    rosybrown: "rgb(188,143,143)",
    royalblue: "rgb(65,105,225)",
    saddlebrown: "rgb(139,69,19)",
    salmon: "rgb(250,128,114)",
    sandybrown: "rgb(244,164,96)",
    seagreen: "rgb(46,139,87)",
    seashell: "rgb(255,245,238)",
    sienna: "rgb(160,82,45)",
    silver: "rgb(192,192,192)",
    skyblue: "rgb(135,206,235)",
    slateblue: "rgb(106,90,205)",
    slategray: "rgb(112,128,144)",
    snow: "rgb(255,250,250)",
    springgreen: "rgb(0,255,127)",
    steelblue: "rgb(70,130,180)",
    tan: "rgb(210,180,140)",
    teal: "rgb(0,128,128)",
    thistle: "rgb(216,191,216)",
    tomato: "rgb(255,99,71)",
    turquoise: "rgb(64,224,208)",
    violet: "rgb(238,130,238)",
    wheat: "rgb(245,222,179)",
    white: "rgb(255,255,255)",
    whitesmoke: "rgb(245,245,245)",
    yellow: "rgb(255,255,0)"
  };
  var colorNames = Object.keys(colors);

  var elements = {
    '': {
      type: 'map',
      children: [
        'point',
        'line',
        'polygon',
        'raster',
        'symbolizers',
        'rules',
        'define',
        'grid',
        'name',
        'title',
        'abstract',
        'feature-styles'
      ]
    },
    'feature-styles': {
      type: 'seq',
      snippet:
'feature-styles:\n\
- rules:\n\
  - symbolizers:\n\
    - ',
      children: [
        'name',
        'title',
        'abstract',
        'transform',
        'rules',
        'x-FirstMatch',
        'x-composite',
        'x-composite-base'
      ]
    },
    'rules': {
      type: 'seq',
      children: [
        'name',
        'title',
        'scale',
        'zoom',
        'filter',
        'else',
        'symbolizers'
      ]
    },
    'symbolizers': {
      type: 'seq',
      children: [
        'point',
        'line',
        'polygon',
        'text',
        'raster'
      ]
    },
    'point': {
      type: 'map',
      snippet:
'point:\n\
  symbols:\n\
  - mark:\n\
      shape: ${1:circle}\n\
      fill-color: ${2:red}\n\
      ',
      children: [
        'symbols',
        'anchor',
        'displacement',
        'opacity',
        'rotation',
        'size',
        'gap',
        'initial-gap',
        'options',
        'geometry',
        'uom',
        'x-composite',
        'x-composite-base',
        'x-labelObstacle'
      ]
    },
    'line': {
      type: 'map',
      snippet:
'line:\n\
  stroke-color: ${1:blue}\n\
  stroke-width: ${2:2}\n\
  ',
      children: [
        'stroke-color',
        'stroke-width',
        'stroke-opacity',
        'stroke-linejoin',
        'stroke-linecap',
        'stroke-dasharray',
        'stroke-dashoffset',
        'stroke-graphic-fill',
        'stroke-graphic',
        'offset',
        'geometry',
        'uom',
        'x-composite',
        'x-composite-base',
        'x-labelObstacle'
      ]
    },
    'polygon': {
      type: 'map',
      snippet:
'polygon:\n\
  fill-color: ${1:gray}\n\
  fill-opacity: ${2:0.75}\n\
  stroke-color: ${3:black}\n\
  stroke-width: ${4:1}\n\
  ',
      children: [
        'fill-color',
        'fill-opacity',
        'fill-graphic',
        'stroke-color',
        'stroke-width',
        'stroke-opacity',
        'stroke-linejoin',
        'stroke-linecap',
        'stroke-dasharray',
        'stroke-dashoffset',
        'stroke-graphic-fill',
        'stroke-graphic',
        'offset',
        'displacement',
        'geometry',
        'uom',
        'x-composite',
        'x-composite-base',
        'x-graphic-margin',
        'x-labelObstacle',
        'x-random',
        'x-random-tile-size',
        'x-random-rotation',
        'x-random-symbol-count',
        'x-random-seed'
      ]
    },
    'text': {
      type: 'map',
      snippet:
'text:\n\
  label: \${"${1:NAME}"}\n\
  fill-color: ${2:black}\n\
  halo:\n\
    fill-color: ${3:white}\n\
    radius: ${4:2}\n\
  ',
      children: [
        'label',
        'font-family',
        'font-size',
        'font-style',
        'font-weight',
        'fill-color',
        'fill-opacity',
        'fill-graphic',
        'stroke-graphic-fill',
        'stroke-graphic',
        'halo',
        'priority',
        'placement',
        'offset',
        'anchor',
        'displacement',
        'rotation',
        'graphic',
        'geometry',
        'uom',
        'x-allowOverruns',
        'x-autoWrap',
        'x-composite',
        'x-composite-base',
        'x-conflictResolution',
        'x-followLine',
        'x-forceLeftToRight',
        'x-goodnessOfFit',
        'x-graphic-margin',
        'x-graphic-resize',
        'x-group',
        'x-labelAllGroup',
        'x-labelPriority',
        'x-repeat',
        'x-maxAngleDelta',
        'x-maxDisplacement',
        'x-minGroupDistance',
        'x-partials',
        'x-polygonAlign',
        'x-spaceAround'
      ]
    },
    'raster': {
      type: 'map',
      children: [
        'color-map',
        'channels',
        'opacity',
        'contrast-enhancement',
        'options'
      ]
    },
    'color-map': {
      type: 'map',
      children: [
        'type',
        'entries'
      ]
    },
    'channels': {
      type: 'seq',
      children: [
        'gray',
        'red',
        'green',
        'blue',
      ]
    },
    'gray': {
      type: 'map',
      children: [
        'name',
        'contrast-enhancement'
      ]
    },
    'red': {
      type: 'map',
      children: [
        'name',
        'contrast-enhancement'
      ]
    },
    'green': {
      type: 'map',
      children: [
        'name',
        'contrast-enhancement'
      ]
    },
    'blue': {
      type: 'map',
      children: [
        'name',
        'contrast-enhancement'
      ]
    },
    'entries': {
      type: 'seq',
      children: []
    },
    'stroke-graphic-fill': {
      type: 'map',
      children: [
        'symbols',
        'anchor',
        'displacement',
        'opacity',
        'rotation',
        'size',
        'gap',
        'initial-gap',
        'options'
      ]
    },
    'contrast-enhancement': {
      type: 'map',
      children: [
        'mode',
        'gamma'
      ]
    },
    'graphic': {
      type: 'map',
      children: [
        'symbols',
        'size',
        'opacity',
        'rotation'
      ]
    },
    'stroke-graphic': {
      type: 'map',
      children: [
        'symbols',
        'anchor',
        'displacement',
        'opacity',
        'rotation',
        'size',
        'gap',
        'initial-gap',
        'options'
      ]
    },
    'fill-graphic': {
      type: 'map',
      children: [
        'symbols',
        'anchor',
        'displacement',
        'opacity',
        'rotation',
        'size',
        'gap',
        'initial-gap',
        'options'
      ]
    },
    'symbols': {
      type: 'seq',
      children: [
        'mark',
        'external'
      ]
    },
    'mark': {
      type: 'map',
      children: [
        'shape',
        'fill-color',
        'fill-opacity',
        'fill-graphic',
        'stroke-color',
        'stroke-width',
        'stroke-opacity',
        'stroke-linejoin',
        'stroke-linecap',
        'stroke-dasharray',
        'stroke-dashoffset',
        'stroke-graphic-fill',
        'stroke-graphic'
      ]
    },
    'external': {
      type: 'map',
      children: [
        'url',
        'format'
      ]
    },
    'halo': {
      type: 'map',
      children: [
        'fill-color',
        'fill-opacity',
        'fill-graphic',
        'radius'
      ]
    },
    'grid': {
      type: 'map',
      children: [
        'name'
      ]
    },
    'transform': {
      type: 'map',
      children: [
        'name',
        'input',
        'params'
      ]
    },
    'data': {
      type: 'map',
      children: [
        'name',
        'input',
        'params'
      ]
    },
    'params': {
      type: 'map',
      children: [
        'outputBBOX',
        'outputWidth',
        'outputHeight'
      ]
    },

    'define': {
      type: ' vardef',
    },
    '<<': {
      type: ' varval',
    },
    'grid': {
      type: ' mapping',
    },
    'name': {
      type: ' scalar',
    },
    'title': {
      type: ' scalar',
    },
    'abstract': {
      type: ' scalar',
    },
    'transform': {
      type: ' mapping',
    },
    'input': {
      type: ' scalar',
    },
    'scale': {
      type: ' tuple',
      snippet: 'scale: [${1:min},${2:max}]\n'
    },
    'zoom': {
      type: ' tuple',
    },
    'filter': {
      type: ' scalar',
    },
    'else': {
      type: ' bool',
    },
    'geometry': {
      type: ' scalar',
    },
    'uom': {
      type: ' scalar',
    },
    'anchor': {
      type: ' tuple',
    },
    'displacement': {
      type: ' tuple',
    },
    'opacity': {
      type: ' scalar',
    },
    'rotation': {
      type: ' scalar',
    },
    'size': {
      type: ' scalar',
    },
    'gap': {
      type: ' scalar',
    },
    'initial-gap': {
      type: ' scalar',
    },
    'options': {
      type: ' mapping',
    },
    'offset': {
      type: ' scalar',
    },
    'stroke-color': {
      type: ' scalar',
      values: colorNames
    },
    'stroke-width': {
      type: ' scalar',
    },
    'stroke-opacity': {
      type: ' scalar',
    },
    'stroke-linejoin': {
      type: ' scalar',
    },
    'stroke-linecap': {
      type: ' scalar',
    },
    'stroke-dasharray': {
      type: ' scalar',
    },
    'stroke-dashoffset': {
      type: ' scalar',
    },
    'fill-color': {
      type: ' scalar',
      values: colorNames
    },
    'fill-opacity': {
      type: ' scalar',
    },
    'label': {
      type: ' scalar',
    },
    'font-family': {
      type: ' scalar',
    },
    'font-size': {
      type: ' scalar',
    },
    'font-style': {
      type: ' scalar',
    },
    'font-weight': {
      type: ' scalar',
    },
    'priority': {
      type: ' scalar',
    },
    'placement': {
      type: ' scalar',
    },
    'color-map': {
      type: ' mapping',
    },
    'channels': {
      type: ' mapping',
    },
    'gray': {
      type: ' scalar',
    },
    'red': {
      type: ' scalar',
    },
    'green': {
      type: ' scalar',
    },
    'blue': {
      type: ' scalar',
    },
    'mode': {
      type: ' scalar',
    },
    'gamma': {
      type: ' scalar',
    },
    'shape': {
      type: ' scalar',
      values: [
        'square',
        'circle',
        'triangle',
        'cross',
        'x',
        'star'
      ]
    },
    'url': {
      type: ' scalar',
    },
    'format': {
      type: ' scalar',
    },
    'type': {
      type: ' scalar',
    },
    'radius': {
      type: ' scalar',
    },
    'data': {
      type: 'scalar',
    },
    'radiusPixels': {
      type: 'scalar',
    },
    'weightAttr': {
      type: 'scalar',
    },
    'cellSize': {
      type: 'scalar',
    },
    'valueAttr': {
      type: 'scalar',
    },
    'dataLimit': {
      type: 'scalar',
    },
    'convergence': {
      type: 'scalar',
    },
    'passes': {
      type: 'scalar',
    },
    'minObservations': {
      type: 'scalar',
    },
    'maxObservationDistance': {
      type: 'scalar',
    },
    'noDataValue': {
      type: 'scalar',
    },
    'pixelsPerCell': {
      type: 'scalar',
    },
    'queryBuffer': {
      type: 'scalar',
    },
    'outputBBOX': {
      type: 'scalar',
    },
    'outputWidth': {
      type: 'scalar',
    },
    'outputHeight': {
      type: 'scalar',
    },
    'x-FirstMatch': {
      type: ' bool',
    },
    'x-composite': {
      type: ' scalar',
    },
    'x-composite-base': {
      type: 'bool',
    },
    'x-labelObstacle': {
      type: 'bool',
    },
    'x-labelAllGroup': {
      type: 'bool',
    },
    'x-labelPriority': {
      type: ' scalar',
    },
    'x-allowOverruns': {
      type: 'bool',
    },
    'x-autoWrap': {
      type: ' scalar',
    },
    'x-conflictResolution': {
      type: 'bool',
    },
    'x-followLine': {
      type: 'bool',
    },
    'x-forceLeftToRight': {
      type: 'bool',
    },
    'x-goodnessOfFit': {
      type: 'scalar',
    },
    'x-graphic-margin': {
      type: 'scalar',
    },
    'x-graphic-resize': {
      type: 'scalar',
    },
    'x-group': {
      type: 'bool',
    },
    'x-repeat': {
      type: 'scalar',
    },
    'x-maxAngleDelta': {
      type: 'scalar',
    },
    'x-maxDisplacement': {
      type: 'scalar',
    },
    'x-minGroupDistance': {
      type: 'scalar',
    },
    'x-partials': {
      type: 'bool',
    },
    'x-polygonAlign': {
      type: 'bool',
    },
    'x-spaceAround': {
      type: 'scalar',
    },
    'x-random': {
      type: 'scalar',
    },
    'x-random-tile-size': {
      type: 'scalar',
    },
    'x-random-rotation': {
      type: 'scalar',
    },
    'x-random-symbol-count': {
      type: 'scalar',
    },
    'x-random-seed': {
      type: 'scalar'
    }
  };

  exports.colors = colors;
  exports.elements = elements;

  exports.snippet = function(el) {
    if (el in elements) {
      return elements[el].snippet;
    }
    return null;
  }
});