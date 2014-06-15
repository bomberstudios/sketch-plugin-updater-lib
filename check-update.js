// Library to check new plugin update
// Copyright 2014 Florian Peninon. All rights reserved.
String.prototype.hashCode = function() {
  return this.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);
}


// Paste your master github raw version url here
// Example : https://raw.githubusercontent.com/florianpnn/sketch-data-parser/master/sketch-data-parser.sketchplugin
var pluginUrl = '';

// Grab the master version of the plugin from the URL and store the hash for the file
var tmpPluginMaster = get(pluginUrl);
var pluginMaster = NSString.alloc().initWithData_encoding(tmpPluginMaster, NSUTF8StringEncoding);
var pluginMasterHash = pluginMaster.hashCode();

// Grab the local version and store the hash
var scriptPath = sketch.scriptPath;
var currentPlugin = [NSString stringWithContentsOfFile:scriptPath encoding:NSUTF8StringEncoding error:nil];
var currentPluginHash = currentPlugin.hashCode();

// Show an alert if hashes are different
if (pluginMasterHash != currentPluginHash) {
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
