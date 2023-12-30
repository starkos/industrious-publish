module.exports = eleventyConfig => {
	// Declare the important paths up front so I can pass them to the plugins
	const paths = {
		input: 'src',
		output: 'dist',
		includes: '_includes'
	};

	// Enable WebC
	eleventyConfig.addPlugin(require('./webc.config.js'), paths);

	// Use NJK for preprocessing of static file formats
	const templateEngines = {
		markdownTemplateEngine: 'njk',
		htmlTemplateEngine: 'njk',
		dataTemplateEngine: 'njk'
	};

	// Add more features to the Markdown processor
	eleventyConfig.setLibrary('md', require('./markdown.config.js'));

	// Pay it forward; pretty the output of "View Source" in the browser
	eleventyConfig.addPlugin(require('./clean-output.config.js'));

	return {
		dir: paths,
		...templateEngines
	};
};
