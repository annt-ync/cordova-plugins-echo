A simple Echo plugin
====================
Follow Cordova Plugin Development Guide
http://cordova.apache.org/docs/en/4.0.0/guide_hybrid_plugins_index.md.html

## Overview
1. [Supported Platforms](#supported-platforms)
2. [Installation](#installation)
3. [Using the plugin](#using-the-plugin)
4. [Examples](#examples)

## Supported Platforms
- __iOS__ *(including iOS8)*
- __Android__ *(SDK >=11)*<br>

## Installation
cordova plugin add https://github.com/annt-ync/cordova-plugins-echo.git

## Using the plugin
The plugin creates the object `window.plugins.Echo` with the following methods:

```javascript
Echo.echo: function (message, successCb, errorCb)
```

##  Examples
```javascript
var successCb = function() {
    alert('Echo.echo successCb ' + JSON.stringify(arguments));
};
var errorCb = function() {
    alert('Echo.echo errorCb' + JSON.stringify(arguments));
};
window.plugins.Echo.echo(message, successCb, errorCb);
```