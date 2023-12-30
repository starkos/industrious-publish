// Add WebC support

const path = require('path');
const webc = require('@11ty/eleventy-plugin-webc');

module.exports = (eleventyConfig, paths) => {
	eleventyConfig.addPlugin(webc, {
		components: [
			path.join(paths.input, paths.includes, 'components/**/*.webc'),
			path.join(paths.input, paths.includes, 'base/components/**/*.webc')
		]
	});
};
