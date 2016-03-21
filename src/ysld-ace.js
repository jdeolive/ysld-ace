/**
 * The top level module that pulls in the others.
 */
var define = window.define || ace.define;
define('ysld', ['require', 'exports', 'module', 'ace/ext/language_tools', 'ace/snippets', 'ysld/completer'], function(require, exports, module) {
  var Completer = require('ysld/completer').Completer;
  var lang = require('ace/ext/language_tools');
  lang.setCompleters([new Completer(), lang.snippetCompleter]);

  exports.init = function(editor) {
    editor.getSession().setMode("ace/mode/yaml");
    editor.setOptions({
       enableBasicAutocompletion: true,
       enableSnippets: true,
       tabSize: 2
    });
  }
});
