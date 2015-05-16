module.exports = function(grunt) {
    grunt.initConfig({
        concat_in_order: {
            'angular-app': {
                files: {
                    'public_html/js/app.js': ['src/app/**/*.js']
                }
            }
        },
	watch: {
	    'scripts': {
		files: ['src/app/**/*.js'],
		tasks: ['concat_in_order']
	    }
	}
    });

    grunt.loadNpmTasks('grunt-concat-in-order');
    grunt.loadNpmTasks('grunt-contrib-watch');    
};
