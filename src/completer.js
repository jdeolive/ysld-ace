/**
 * The completer that plugs into the ace auto-complete infrastructure.   
 */
var define = window.define || ace.define;
define('ysld/completer', ["require", "exports", "module"], function(require, exports, module) {

  var lang = require('ysld/language');

  function Line(text) {
    this.text = text;
    this.indent = -1;
    this.list = false;
    this.kvp = false;
    this.key = "";
    this.value = "";
  }

  Line.prototype = {
    parse: function() {
      var re = /( *)(-? *)([\w-]*)(\:?) *(.*)/;
      var match = re.exec(this.text);

      if (match != null) {
        this.indent = match[1].length + match[2].length;
        this.list = match[2].length > 0;
        this.key = match[3];
        this.kvp = match[4].length > 0
        this.value = match[5];
      }

      return this;
    }

  };

  function Completer() {}

  Completer.prototype = {

    getCompletions: function(editor, session, pos, prefix, callback) {
      var pos = editor.getCursorPosition();
      var row = pos.row;
      var col = pos.column;

      var line = new Line(session.getLine(row)).parse();

      if (row == 0 && col == 0) {
        // empty case
        callback(null, [{
          name: 'feature-styles',
          type: 'snippet',
          snippet: lang.snippet('feature-styles')
        }, {
          name: 'point',
          type: 'snippet',
          snippet: lang.snippet('point')
        }, {
          name: 'line',
          type: 'snippet',
          snippet: lang.snippet('line')
        }, {
          name: 'polygon',
          type: 'snippet',
          snippet: lang.snippet('polygon')
        }, {
          name: 'text',
          type: 'snippet',
          snippet: lang.snippet('text')
        }]);
      }
      else if (line.kvp) {
        // if this line has a key complete from this line
        var el = lang.elements[line.key];
        if (el) {
          var values = el.values;
          if (!values && el.type == 'bool') {
            values = ['true', 'false'];
          }
          if (values) {
            callback(null, values.map(function(v) {
              // caption: caption,
              //   snippet: s.content,
              //   meta: s.tabTrigger && !s.name ? s.tabTrigger + "\u21E5 " : "snippet",
              //   type: "snippet"
              return {
                caption: v,
                snippet: v + '\n',
                type: 'snippet'
              }
            }));
          }
        }
      }
      else {
        // complete based on parent
        var parent = null;

        // walk up to find the parent element, that the element with a smaller indent
        while (row > 0) {
          row--;

          parent = new Line(session.getLine(row)).parse();
          if (parent.value == "" && parent.indent < line.indent) {
            break;
          }
        }

        if (parent != null) {
          var parentEl = lang.elements[parent.key];
          if (parentEl != null && parentEl.children) {
            callback(null, parentEl.children.map(function(name, i, arr) {
              var childEl = lang.elements[name];
              var value = name;
              if (childEl != null) {
                if (childEl.snippet) {
                  value = childEl.snippet;
                  if (line.list) {
                    // add two more spaces to each line
                    value = value.split("\n").map(function(l, i) {
                      return i > 0 ? "  " + l : l;
                    }).join("\n");
                  }
                }
                else {
                  switch(childEl.type) {
                    case 'map':
                      value += ':\n  ';

                      // if this line is currently a list item, add two more spaces
                      if (line.list) value += '  ';
                      break;
                    case 'seq':
                      value += ':\n';
                      if (line.list) {
                        value += '  ';
                      }
                      value += '- ';
                      break;
                    default:
                      value += ': ';
                  }
                }
              }
              return {
                caption: name,
                snippet: value,
                type: 'snippet',
                score: arr.length-i
              }
            }));
          }
        }
      }
    }
  };

  exports.Completer = Completer;
});
