module.exports = function(grunt) {


    // Project configuration.
    grunt.initConfig({
        server: {
            port: '8989',
            base: "."
        },
        watch: {
            files: [ "openseadragon/openseadragon.js" ],
            tasks: "default"
        }
    });


    // Default task.
    grunt.registerTask("default", "server watch");


};
