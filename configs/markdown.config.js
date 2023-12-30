// Add some more features to Markdown parsing

const slugify = require('slugify');

const markdownIt = require("markdown-it");
const markdownitAbbr = require('markdown-it-abbr');
const markdownItAnchor = require('markdown-it-anchor');
const markdownItEmoji = require('markdown-it-emoji').full;
const markdownItFootnote = require('markdown-it-footnote');
const markdownitMark = require('markdown-it-mark');
const markdownItPrism = require('markdown-it-prism');

module.exports = markdownIt({
	html: true,
	breaks: true,
	linkify: true,
	typographer: true
})
.disable('code')
.use(markdownitAbbr)
.use(markdownItAnchor, {
	slugify: str => slugify(str, {
		lower: true,
		strict: true
	}),
	tabIndex: false,
	permalink: markdownItAnchor.permalink.headerLink()
})
.use(markdownItEmoji)
.use(markdownItFootnote)
.use(markdownitMark)
.use(markdownItPrism, {
	defaultLanguage: 'plaintext'
});
