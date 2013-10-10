
module.exports = function(grunt) {
  "use strict";
  
  grunt.registerMultiTask("forge", "Compile and run the app using forge.", function() {
    var options = this.options({
      command: "forge"
    });
    var args = [
      "--username", options.username,
      "--password", options.password
    ].concat(this.data.args);

    var done = this.async();

    var child = grunt.util.spawn({
      cmd: options.command,
      args: args,
      opts: { stdio: 'inherit' }
    }, function (err, result, code) {
      var success = code === 0;
      
      if (code === 127) {
        return grunt.warn(
          'Please add the forge tool to your system PATH (not bash PATH).'
        );
      }

      done(success);
    });
  });

};
