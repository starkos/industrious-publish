const pluginBundle = require("@11ty/eleventy-plugin-bundle");

module.exports = eleventyConfig => {
	// Enable bundling of CSS and JS
	eleventyConfig.addPlugin(pluginBundle);

	// Add more features to the Markdown processor
	eleventyConfig.setLibrary('md', require('./markdown.config.js'));

	// Pay it forward; prettify the output of "View Source" in the browser
	eleventyConfig.addPlugin(require('./clean-output.config.js'));

	return {
		dir: {
			input: 'src',
			output: 'dist',
			includes: '_includes'
		},
		markdownTemplateEngine: 'njk',
		htmlTemplateEngine: 'njk',
		dataTemplateEngine: 'njk'
	}
};
