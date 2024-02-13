// Pay it forward; format the generated HTML to make "View Source" readable

const htmlPrettify = require('html-prettify');

module.exports = (eleventyConfig) => {
	eleventyConfig.addTransform('html-prettify', async function(content, outputPath) {
		if (outputPath && outputPath.endsWith('.html')) {
			content = htmlPrettify(content)
				.replace("<title>\n    ", "<title>");
		}
		return content;
	});
};
