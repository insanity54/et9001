/*
 * build the site into static html stuff
 */
var path = require('path');
var Metalsmith = require('metalsmith');
var markdown = require('metalsmith-markdown');
var drafts = require('metalsmith-drafts');
var layouts = require('metalsmith-layouts');
//var flatten = require('metalsmith-flatten');
var assets = require('metalsmith-assets');
var nav = require('metalsmith-navigation');


var metalsmith = Metalsmith(__dirname)
  .use(drafts())
  .use(markdown({
    gfm: true,
    smartypants: true
  }))
  .use(nav({
      header: {
        pathProperty: 'navPath',
        filterProperty: 'navGroup',
        includeDirs: true
      },
      learningtools: {
        pathProperty: 'navPath',
        filterProperty: 'navGroup',
        includeDirs: true
      },
    }, {}))
  .use(layouts({
    engine: 'handlebars',
    default: 'learningtool.hbs'
  }))
  .use(assets({
    source: path.join(__dirname, 'assets'),
    destination: path.join(__dirname, 'build')
  }))
  .build(function(err) {
    if (err) throw err;
});


// metalsmith.use(assets({
//   source: './assets', // relative to the working directory
//   destination: './assets' // relative to the build directory
// }));
