const path = require('path');

const { EleventyRenderPlugin } = require ('@11ty/eleventy');

const bundlePlugin = require ('@11ty/eleventy-plugin-bundle');
const imagePlugin = require('.//image.config.js');
const prettyPlugin = require ('./pretty-output.config.js');

const markdownLibrary = require ('./markdown.config.js');

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
	eleventyConfig.addPlugin (bundlePlugin);

	// Add image processing shortcode
	eleventyConfig.addPlugin (imagePlugin);

	// Pay it forward; prettify the output of "View Source" in the browser
	eleventyConfig.addPlugin (prettyPlugin);

	// Add more features to the Markdown processor
	eleventyConfig.setLibrary ('md', markdownLibrary);

	// Add an 'md' shortcut to support Markdown formatting of properties
	eleventyConfig.addShortcode ('md', (content) => markdownLibrary.renderInline(content));

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
