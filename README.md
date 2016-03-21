# Ace YSLD Plugin

This repository contains a plugin for the [ace](https://ace.c9.io) text editor that
provides auto-completion support for the [YSLD](http://suite.opengeo.org/docs/latest/cartography/ysld/reference/index.html)
styling language.

## Using the Plugin

To use the plugin include a reference to the [ysld-ace.js](dist/ysld-ace.js) script in your
markup. This must be included after the core ace scripts. Both ace core and the language
tools extension are required.

    <script src="//ajaxorg.github.io/ace-builds/src-min/ace.js"></script>
    <script src="//ajaxorg.github.io/ace-builds/src-min/ext-language_tools.js"></script>
    <script src="dist/ysld-ace.js"></script>

Finally when initializing the editor load the plugin and initialize the editor.

    var editor = ace.edit("editor");
    ace.require('ysld').init(editor);

## Installing

The plugin can be installed via npm.

    npm install ysld-ace