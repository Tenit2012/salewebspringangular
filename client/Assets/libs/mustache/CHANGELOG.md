# Change Log

All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## [2.1.1] / 11 June 2015

### Added

 * State that we use semver on the change log, by @dasilvacontin.
 * Added version links to change log, by @dasilvacontin.

### Fixed

 * Bugfix for using values from view's context prototype, by @phillipj.
 * Improve test with undefined/null lookup hit using dot notation, by @dasilvacontin.
 * Bugfix for null/undefined lookup hit when using dot notation, by @phillipj.
 * Remove moot `version` property from bower.json, by @kkirsche.
 * bower.json doesn't require a version bump via hook, by @dasilvacontin.


## [2.1.0] / 5 June 2015

 * Added license attribute to package.json, by @pgilad.
 * Minor changes to make mustache.js compatible with both WSH and ASP, by @nagaozen.
 * Improve CLI view parsing error, by @phillipj.
 * Bugfix for view context cache, by @phillipj.

## [2.0.0] / 27 Mar 2015

 * Fixed lookup not stopping upon finding `undefined` or `null` values, by @dasilvacontin.
 * Refactored pre-commit hook, by @dasilvacontin.

## [1.2.0] / 24 Mar 2015

 * Added -v option to CLI, by @phillipj.
 * Bugfix for rendering Number when it serves as the Context, by @phillipj.
 * Specified files in package.json for a cleaner install, by @phillipj.

## [1.1.0] / 18 Feb 2015

 * Refactor Writer.renderTokens() for better readability, by @phillipj.
 * Cleanup tests section in readme, by @phillipj.
 * Added JSHint to tests/CI, by @phillipj.
 * Added node v0.12 on travis, by @phillipj.
 * Created command line tool, by @phillipj.
 * Added *falsy* to Inverted Sections description in README, by @kristijanmatic.

## [1.0.0] / 20 Dec 2014

  * Inline tag compilation, by @mjackson.
  * Fixed AMD registration, volo package.json entry, by @jrburke.
  * Added spm support, by @afc163.
  * Only access properties of objects on Context.lookup, by @cmbuckley.

## [0.8.2] / 17 Mar 2014

  * Supporting Bower through a bower.json file.

## [0.8.1] / 3 Jan 2014

  * Fix usage of partial templates.

## [0.8.0] / 2 Dec 2013

  * Remove compile* writer functions, use mustache.parse instead. Smaller API.
  * Throw an error when rendering a template that contains higher-order sections and
    the original template is not provided.
  * Remove low-level Context.make function.
  * Better code readability and inline documentation.
  * Stop caching templates by name.

## [0.7.3] / 5 Nov 2013

  * Don't require the original template to be passed to the rendering function
    when using compiled templates. This is still required when using higher-order
    functions in order to be able to extract the portion of the template
    that was contained by that section. Fixes #262.
  * Performance improvements.

## [0.7.2] / 27 Dec 2012

  * Fixed a rendering bug (#274) when using nested higher-order sections.
  * Better error reporting on failed parse.
  * Converted tests to use mocha instead of vows.

## [0.7.1] / 6 Dec 2012

  * Handle empty templates gracefully. Fixes #265, #267, and #270.
  * Cache partials by template, not by name. Fixes #257.
  * Added Mustache.compileTokens to compile the output of Mustache.parse. Fixes
    #258.

## [0.7.0] / 10 Sep 2012

  * Rename Renderer => Writer.
  * Allow partials to be loaded dynamically using a callback (thanks
    @TiddoLangerak for the suggestion).
  * Fixed a bug with higher-order sections that prevented them from being
    passed the raw text of the section from the original template.
  * More concise token format. Tokens also include start/end indices in the
    original template.
  * High-level API is consistent with the Writer API.
  * Allow partials to be passed to the pre-compiled function (thanks
    @fallenice).
  * Don't use eval (thanks @cweider).

## [0.6.0] / 31 Aug 2012

  * Use JavaScript's definition of falsy when determining whether to render an
    inverted section or not. Issue #186.
  * Use Mustache.escape to escape values inside {{}}. This function may be
    reassigned to alter the default escaping behavior. Issue #244.
  * Fixed a bug that clashed with QUnit (thanks @kannix).
  * Added volo support (thanks @guybedford).

[2.1.1]: https://github.com/janl/mustache.js/compare/v2.1.0...v2.1.1
[2.1.0]: https://github.com/janl/mustache.js/compare/v2.0.0...v2.1.0
[2.0.0]: https://github.com/janl/mustache.js/compare/v1.2.0...v2.0.0
[1.2.0]: https://github.com/janl/mustache.js/compare/v1.1.0...v1.2.0
[1.1.0]: https://github.com/janl/mustache.js/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/janl/mustache.js/compare/0.8.2...v1.0.0
[0.8.2]: https://github.com/janl/mustache.js/compare/0.8.1...0.8.2
[0.8.1]: https://github.com/janl/mustache.js/compare/0.8.0...0.8.1
[0.8.0]: https://github.com/janl/mustache.js/compare/0.7.3...0.8.0
[0.7.3]: https://github.com/janl/mustache.js/compare/0.7.2...0.7.3
[0.7.2]: https://github.com/janl/mustache.js/compare/0.7.1...0.7.2
[0.7.1]: https://github.com/janl/mustache.js/compare/0.7.0...0.7.1
[0.7.0]: https://github.com/janl/mustache.js/compare/0.6.0...0.7.0
[0.6.0]: https://github.com/janl/mustache.js/compare/0.5.2...0.6.0
