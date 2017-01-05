# Styleguide Starter Kit

A simple styleguide starter kit built with [Hologram](http://trulia.github.io/hologram/).

## Getting Started

### Dependencies
* [Node](https://nodejs.org/)*
* [Ruby](https://www.ruby-lang.org/en/documentation/installation/)
* [Bower](http://bower.io/)
* [Gulp](http://gulpjs.com/)

*I recommend installing node via [nvm](https://github.com/creationix/nvm). Node 6.3.0 is used for the development of this project.

### Setup
1. `git clone https://github.com/bellizio/styleguide-starter-kit.git`
1. `cd styleguide-starter-kit`
1. `npm install`

## Overview

The styleguide can be used as a standalone application or incorporated into your application itself. The primary goal of this styleguide is to source your application's css directly, so incorporating it into your front-end app is ideal.

### Sass
All css is written using sass, with the [Bourbon](http://bourbon.io/) library being the only external dependency. [normalize.css](http://necolas.github.io/normalize.css/) has been parted out into separate files in the `css/base` folder. App css is included in `app.scss`. Styleguide-specific css that you do not want included with your app css should go in `styleguide.scss` - consider it a theme file for the styleguide. I think the rest should be pretty straightforward and self-explanatory.

### Gulp
There are several gulp tasks defined that generate the styleguide. The build process is minimal and css-specific, but it is flexible so that other assets (js, fonts, images) can be included in the pipeline as well. Check out the [Gulp Starter Kit](https://github.com/bellizio/gulp-starter-kit) for a complete example.

### Hologram
All files necessary for Hologram to do its thing are in the `styleguide` folder. For more details about configuration, check out [Hologram's readme](https://github.com/trulia/hologram/blob/master/README.md).

### Development
Run `gulp serve` to view and work with the app locally.

## Contributing

See an issue or an opportunity to help make the app better?

After cloning the repo, feel free to reach out by creating a new [issue](https://github.com/bellizio/styleguide-starter-kit/issues) or opening a [pull request](https://github.com/bellizio/styleguide-starter-kit/pulls).
