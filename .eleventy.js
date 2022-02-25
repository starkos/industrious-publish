module.exports = (config) => {
	config.addPassthroughCopy({ 'public': './' })
	return {
		dir: {
			input: 'src',
			output: '_site'
		}
	}
};
