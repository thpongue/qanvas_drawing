module.exports = function(config) {
	config.set({
		basePath: '',
		frameworks: [
			'browserify',
			'jasmine'
		],
		files: [
			'js/**/*.js',
			'tests/**/*.js',
			'tests/**/*.spec.js'
		],
		exclude: [
		],
		preprocessors: {
			'js/**/*.js': ['browserify'],
			'tests/**/*.js': ['browserify'],
			'tests/**/*.spec.js': ['browserify']
		},
		browserify: {
			debug: true
		},
		reporters: [
			'progress'
		],
		port: 9876,
		colors: true,
		logLevel: config.LOG_INFO,
		autoWatch: true,
		browsers: [
			'PhantomJS'
		],
		singleRun: false,
		concurrency: Infinity
	})
}
