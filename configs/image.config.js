const path = require ('path');
const Image = require ('@11ty/eleventy-img');

const {INIT_CWD} = process.env;

module.exports = (eleventyConfig) => {
	eleventyConfig.addShortcode('image', async function (src, alt, caption, sizes) {
		if (alt === undefined) {
			throw new Error(`Missing \`alt\` on ${src}`);
		}

		let urlPath = 'img';

		let metadata = await Image(src, {
			widths: [320, 920, 1920],
			formats: ['auto'],
			urlPath: `/${urlPath}/`,
			outputDir: path.join(eleventyConfig.dir.output, urlPath)
		});

		let data = metadata.jpeg[metadata.jpeg.length - 1];

		return `<figure>
			<picture>
				${Object
					.values(metadata)
					.map(imageFormat => {
						return `<source
							type="${imageFormat[0].sourceType}"
							srcset="${imageFormat.map(entry => entry.srcset).join(', ')}"
							sizes="${sizes}">`;
				})
				.join('\n')}
				<img
					src="/assets/img/placeholder.png"
					data-src="${data.url}"
					width="${data.width}"
					height="${data.height}"
					alt="${alt}"
					loading="lazy"
					decoding="async">
			</picture>
			${caption ? `<figcaption>${caption}</figcaption>` : ``}
		</figure>`;
	});
};
