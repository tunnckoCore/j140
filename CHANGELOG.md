

## 2.0.0 - 2015-09-23
- Release v2.0.0 / npm@v2.0.0
- bundles and CDNs
  + browserify, minified, and standalone builds
  + 830 bytes minified and browserified
  + 446 bytes minified and browserified, and gzipped
- allow passing custom context
- drop the need of `this.` in template
  + so you can just `#{foo}`, not `#{this.foo}`
- drop callback api, use something like `jstransformer`
- add `.render` and `.compile` methods
- update boilerplate

## 1.0.2 - 2014-12-30
- Release v1.0.2 / npm@v1.0.2
- add `dist/` directory for browser and cdn usage. There will live and minified version.
- add browser "installation" (with script tag, lol)

## 1.0.1 - 2014-12-30
- Release v1.0.1 / npm@v1.0.1
- add more examples for browser and for node
- add advanced browser example to readme

## 1.0.0 - 2014-12-30
- Release v1.0.0 / npm@v1.0.0
- add better module pattern
- apply code style - jshint/jscs
- coverage, good pkg.json, readme, etc

## 0.0.0 - 2014-06-09
- Initial commit