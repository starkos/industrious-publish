const { EleventyRenderPlugin } = require("@11ty/eleventy");
const pluginBundle = require("@11ty/eleventy-plugin-bundle");

const {
	formatDate
} = require('./filters.config.js');

module.exports = eleventyConfig => {
	// Enable rendering of markup from templates
	eleventyConfig.addPlugin(EleventyRenderPlugin);

	// Enable bundling of CSS and JS
	eleventyConfig.addPlugin(pluginBundle);

	// Pay it forward; prettify the output of "View Source" in the browser
	eleventyConfig.addPlugin(require('./clean-output.config.js'));

	// Add more features to the Markdown processor
	eleventyConfig.setLibrary('md', require('./markdown.config.js'));

	// Register filters
	eleventyConfig.addFilter('formatDate', formatDate);

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
