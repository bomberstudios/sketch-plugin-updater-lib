// Library to check new plugin update
var pluginUrl = 'https://dl.dropboxusercontent.com/u/4822469/data-parser.sketchplugin';
var tmpPluginMaster = get(pluginUrl);
var pluginMaster = NSString.alloc().initWithData_encoding(tmpPluginMaster, NSUTF8StringEncoding);
var pluginMasterLength = pluginMaster.length();

var scriptPath = sketch.scriptPath;

var currentPlugin = [NSString stringWithContentsOfFile:scriptPath encoding:NSUTF8StringEncoding error:nil];
var currentPluginLength = currentPlugin.length();

log(pluginMasterLength);
log(currentPluginLength);

if (pluginMasterLength != currentPluginLength) {
  alert('A new version of this plugin is available! Download it here : ' + pluginUrl,'New version available');
}

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