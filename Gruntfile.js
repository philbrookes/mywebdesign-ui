module.exports = function(grunt) {
    grunt.initConfig({
        concat_in_order: {
            'angular-app': {
                files: {
                    'public_html/js/app.js': ['src/app/**/*.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-concat-in-order');
	
};
