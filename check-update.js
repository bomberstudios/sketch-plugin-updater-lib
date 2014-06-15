// Library to check new plugin update
// Copyright 2014 Florian Peninon. All rights reserved.
// This library use the number of character contained in each files to know if the local version of the plugin is the last one

// Paste your master github raw version url here
// Example : https://raw.githubusercontent.com/florianpnn/sketch-data-parser/master/sketch-data-parser.sketchplugin
var pluginUrl = '';

// Grab the master version of the plugin from the URL and store the exact length of the file
var tmpPluginMaster = get(pluginUrl);
var pluginMaster = NSString.alloc().initWithData_encoding(tmpPluginMaster, NSUTF8StringEncoding);
var pluginMasterLength = pluginMaster.length();

// Grab the local version and store the length
var scriptPath = sketch.scriptPath;
var currentPlugin = [NSString stringWithContentsOfFile:scriptPath encoding:NSUTF8StringEncoding error:nil];
var currentPluginLength = currentPlugin.length();

// Show an alert if length are different
if (pluginMasterLength != currentPluginLength) {
  alert('A new version of this plugin is available! Download it here : ' + pluginUrl,'New version available');
}

// Common function
function get(url) {
  var request = NSURLRequest.requestWithURL(NSURL.URLWithString(url));
  var response = NSURLConnection.sendSynchronousRequest_returningResponse_error(request, null, null);
  return response;
}

function alert(msg, title) {
  title = title || "Whoops";
  var app = [NSApplication sharedApplication];
  [app displayDialog:msg withTitle:title];
}