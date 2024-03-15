const path = require('path');

const { EleventyRenderPlugin } = require ('@11ty/eleventy');

const pluginBundle = require ('@11ty/eleventy-plugin-bundle');
const pluginImage = require('.//image.config.js');
const pluginPretty = require ('./pretty-output.config.js');

const markdowExtras = require ('./markdown.config.js');

const {
	formatDate, sortByTitle
} = require ('./filters.config.js');

module.exports = (eleventyConfig) => {
	eleventyConfig.addPassthroughCopy({
		'src/_includes/base/assets/': 'assets/'
	});

	// Enable inline rendering of markup from templates
	eleventyConfig.addPlugin (EleventyRenderPlugin);

	// Enable bundling of CSS and JS
	eleventyConfig.addPlugin (pluginBundle);

	// Add image processing shortcode
	eleventyConfig.addPlugin (pluginImage);

	// Pay it forward; prettify the output of "View Source" in the browser
	eleventyConfig.addPlugin (pluginPretty);

	// Add more features to the Markdown processor
	eleventyConfig.setLibrary ('md', markdowExtras);

	// Register filters
	eleventyConfig.addFilter ('formatDate', formatDate);
	eleventyConfig.addFilter ('sortByTitle', sortByTitle);

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
