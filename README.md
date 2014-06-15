Sketch Plugin Updater Lib by Florian Peninon
=========================

A library to check if a Sketch plugin is up to date compare to its master version

### Installation and usage

Download check-update.js and copy/paste it into your plugin folder.
The only step needed to make it work with your plugin is importing the file in your plugin like this :

```
// Beginning of your plugin..

#import 'check-update.js'

// Rest of your plugin
```

### How it works?

The library calculates a string hash of the plugin's code, in both the remote and the local versions of the plugin.
If the hashes are different, a modal shows up to inform you that a new version is available and give you the url where you can download it.

### Credits

String hash function taken from [this StackOverflow thread](http://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript-jquery).
