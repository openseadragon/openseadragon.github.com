module.exports = function(grunt) {

    grunt.loadNpmTasks("grunt-contrib-connect");
    grunt.loadNpmTasks("grunt-contrib-watch");

    // Project configuration.
    grunt.initConfig({
        connect: {
            server: {
                options: {
                    port: 9000,
                    base: '.'
                }
            }
        },
        watch: {
        }
    });

    // Default task.
    grunt.registerTask("default", ["connect", "watch"]);

};
