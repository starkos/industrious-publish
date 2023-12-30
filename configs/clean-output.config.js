// Pay it forward; format the generated HTML to make "View Source" readable

const htmlPrettify = require('html-prettify');

module.exports = (eleventyConfig, paths) => {
	eleventyConfig.addTransform('html-prettify', async function(content, outputPath) {
		if (outputPath.endsWith('.html')) {
			return htmlPrettify(content)
				.replace("<body>", "<body>\n    ");
		}
	});
};
