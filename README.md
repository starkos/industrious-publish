# Industrious.Publish

A shared base implementation for the websites I build at [Industrious One](https://industriousone.com/). Built on [Eleventy](https://www.11ty.dev) and drawing heavily from [Eleventy Excellent](https://eleventy-excellent.netlify.app) and [Eleventy Base Blog](https://github.com/11ty/eleventy-base-blog).

## Approach

Rather than a starter site that you clone and edit, this code sits inside your Eleventy project's `_includes` folder at `_includes/base`. It doesn't provide any of the top-level files or content, so there's nothing to "undo" when you start a new site, and you can update to the latest version easily without worrying about merge conflicts. Pick and choose which pieces to use and ignore the rest.

## Features

I'm adding things as I need them. This is all for my own use so it's all going to be very opinionated, and they are all going to be my opinions.

- **Starter layouts** at [`./layouts`](./layouts)
- **WebC support**. [WebC](https://github.com/11ty/webc) is enabled and used for the content layouts.
- **Extended Markdown syntax**. Abbreviations, anchors, emoji, footnotes, smart typography for starters; see [`./configs/markdown.config.js`](./configs/markdown.config.js).
- **Clean, human readable generated markup**. I grew up on the early internet learning how it all worked by viewing the source of other people's sites. This is a little effort to pay it forward.

## Usage

Starting with an empty project folder add a `package.json`. Note the reference to the shared code package in `devDependencies`; we'll satisfy that in a moment.

```json
{
	"name": "my-website",
	"version": "1.0.0",
	"private": true,
	"scripts": {
		"build": "eleventy",
		"watch": "eleventy --watch",
		"serve": "eleventy --serve",
		"start": "eleventy --serve",
		"debug": "DEBUG=* eleventy"
	},
	"devDependencies": {
		"base": "file:./src/_includes/base"
	}
}
```

While you're there, add an `eleventy.config.js` as well, and use it to pull in the shared configuration.

```js
const base = require('./src/_includes/base/configs/base.config.js')

module.exports = eleventyConfig => {
	return base(eleventyConfig);
};
```

Create a skeleton site.

```sh
$ mkdir src src/_data src/_includes
$ echo '# Page header' > src/index.md
```

When I'm building my own sites I pull in this base code as a Git submodule located at `src/_includes/base`. That allows me to easily add fixes and features to the base  while building out the downstream sites, and not bother with hosting NPM modules. You could also submodule your own fork of it, or just copy the code to that same location.

```sh
$ git submodule add \
  https://github.com/starkos/industrious-publish \
  src/_includes/base
```

Finally, copy `base/samples/meta-sample.js` to `src/_data/meta.js` and edit to suit. Then `npm install && npm start` and [`http://localhost:8080/`](http://localhost:8080/) and you're off to the races.

## Examples

Here are some sites I'm in the process of building on this code. If you use it for a project of your own, and would like a link here, just submit a PR with the change.

- [My personal landing page](https://github.com/starkos/landing-page)
- [One, Between](https://github.com/starkos/one-between)
- [Industrious One](https://github.com/starkos/industrious-website)

## References

- [Eleventy Excellent](https://eleventy-excellent.netlify.app)
- [Eleventy Base Blog](https://github.com/11ty/eleventy-base-blog)
