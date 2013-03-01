module.exports = function(grunt) {

    grunt.loadNpmTasks("grunt-contrib-connect");
    grunt.loadNpmTasks("grunt-contrib-watch");

    // Project configuration.
    grunt.initConfig({
        connect: {
            server: {
                base: "."
            }
        },
        watch: {
            files: [ "openseadragon/openseadragon.js" ],
            tasks: "default"
        }
    });


    // Default task.
    grunt.registerTask("default", ["connect", "watch"]);


};
