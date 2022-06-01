const baseConfig = require('./src/_includes/base/eleventy-base');

module.exports = function(eleventyConfig) {
	baseConfig(eleventyConfig)
	eleventyConfig.addPassthroughCopy('src/img');

	return {
		dir: {
			input: 'src',
			output: '_site'
		}
	}
};
